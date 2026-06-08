import React, { useRef, useState, useCallback, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import type { User } from 'firebase/auth'
import { useChecklistConfigSync } from '../hooks/useChecklistConfigSync'
import { NavigationBar } from './NavigationBar'
import { Checklist, type ChecklistHandle } from './Checklist'
import { ConfirmModal } from './ConfirmModal'
import { saveChecklistLabel, deleteChecklistData, type ChecklistConfig } from '../firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  user: User
  onSignOut: () => void
}

export function MainScreen({ user, onSignOut }: Props) {
  const { checklists, setChecklists, activeChecklistId, setActiveChecklistId } =
    useChecklistConfigSync(user)

  const [isEditMode, setIsEditMode] = useState(false)
  const [stats, setStats] = useState({ completedCount: 0, totalCount: 0 })
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [showDeleteListConfirm, setShowDeleteListConfirm] = useState(false)

  const scrollRef = useRef<ScrollView>(null)
  const checklistRefs = useRef<Record<string, ChecklistHandle | null>>({})
  // True while a programmatic scrollTo is in flight — suppresses user-swipe tab updates.
  const isProgrammaticScroll = useRef(false)
  // Target X for the in-flight programmatic scroll; cleared when onScroll reaches it.
  const targetScrollX = useRef<number | null>(null)
  // Safety-net timer: clears the flag if no scroll events arrive (e.g. same-page tap on web).
  const programmaticScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeIndex = checklists.findIndex((c) => c.id === activeChecklistId)

  // Correct scroll position when layout changes (resize / initial render).
  // Does NOT run when only activeChecklistId changes — that's handled by handleNavChange.
  useEffect(() => {
    if (activeIndex >= 0 && containerWidth > 0 && scrollRef.current) {
      scrollRef.current.scrollTo({ x: activeIndex * containerWidth, animated: false })
    }
  }, [containerWidth, checklists.length])

  const clearProgrammaticFlag = useCallback(() => {
    isProgrammaticScroll.current = false
    targetScrollX.current = null
    if (programmaticScrollTimer.current) {
      clearTimeout(programmaticScrollTimer.current)
      programmaticScrollTimer.current = null
    }
  }, [])

  const handleNavChange = useCallback(
    (id: string) => {
      if (isEditMode) setIsEditMode(false)
      setActiveChecklistId(id)
      const index = checklists.findIndex((c) => c.id === id)
      if (index >= 0 && containerWidth > 0 && scrollRef.current) {
        if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current)
        isProgrammaticScroll.current = true
        targetScrollX.current = index * containerWidth
        scrollRef.current.scrollTo({ x: index * containerWidth, animated: true })
        // Safety net: on web, scroll end events may not fire for programmatic scrolls.
        programmaticScrollTimer.current = setTimeout(clearProgrammaticFlag, 600)
      }
    },
    [isEditMode, checklists, containerWidth, setActiveChecklistId, clearProgrammaticFlag],
  )

  // Fired on every scroll tick. Handles two jobs:
  // 1. Clears the programmatic flag once the animated scroll reaches its target.
  // 2. Updates the active tab in real-time during user-initiated swipes.
  const handleScroll = useCallback(
    (e: { nativeEvent: { contentOffset: { x: number } } }) => {
      const x = e.nativeEvent.contentOffset.x
      if (isProgrammaticScroll.current) {
        if (targetScrollX.current !== null && Math.abs(x - targetScrollX.current) < 2) {
          clearProgrammaticFlag()
        }
        return
      }
      if (isEditMode || containerWidth === 0) return
      const index = Math.round(x / containerWidth)
      if (index >= 0 && index < checklists.length) {
        setActiveChecklistId(checklists[index].id)
      }
    },
    [checklists, isEditMode, containerWidth, setActiveChecklistId, clearProgrammaticFlag],
  )

  // Fallback for native: onMomentumScrollEnd / onScrollEndDrag fire reliably on iOS/Android.
  const handleScrollEnd = useCallback(
    (e: { nativeEvent: { contentOffset: { x: number } } }) => {
      if (isProgrammaticScroll.current) {
        clearProgrammaticFlag()
        return
      }
      if (isEditMode || containerWidth === 0) return
      const index = Math.round(e.nativeEvent.contentOffset.x / containerWidth)
      if (index >= 0 && index < checklists.length) {
        setActiveChecklistId(checklists[index].id)
      }
    },
    [checklists, isEditMode, containerWidth, setActiveChecklistId, clearProgrammaticFlag],
  )

  const handleEdit = useCallback(() => {
    setIsEditMode((prev) => !prev)
  }, [])

  const handleReset = useCallback(() => {
    checklistRefs.current[activeChecklistId]?.handleReset()
  }, [activeChecklistId])

  const handleResetOrDelete = useCallback(() => {
    if (isEditMode) {
      setShowDeleteListConfirm(true)
    } else {
      handleReset()
    }
  }, [isEditMode, handleReset])

  const confirmDeleteList = useCallback(async () => {
    setShowDeleteListConfirm(false)
    checklistRefs.current[activeChecklistId]?.stopFirestoreSync()
    const index = checklists.findIndex((c) => c.id === activeChecklistId)
    const newChecklists = checklists.filter((c) => c.id !== activeChecklistId)
    setChecklists(newChecklists)

    const prefix = `${user.uid}-${activeChecklistId}`
    const keys = await AsyncStorage.getAllKeys()
    const toDelete = keys.filter((k) => k.startsWith(prefix))
    if (toDelete.length > 0) await AsyncStorage.removeMany(toDelete)

    await deleteChecklistData(user.uid, activeChecklistId).catch(console.error)
    const nextId = newChecklists[Math.max(0, index - 1)]?.id ?? newChecklists[0]?.id
    setActiveChecklistId(nextId ?? '')
    setIsEditMode(false)
  }, [activeChecklistId, checklists, user.uid, setChecklists, setActiveChecklistId])

  const handleAddChecklist = useCallback(
    (name: string) => {
      const newId = `checklist-${Date.now()}`
      const newChecklist: ChecklistConfig = { id: newId, label: name, initialItems: [] }
      setChecklists((prev) => [...prev, newChecklist])
      setActiveChecklistId(newId)
      setIsEditMode(true)
    },
    [setChecklists, setActiveChecklistId],
  )

  const handleUpdateChecklistName = useCallback(
    (id: string, newName: string) => {
      setChecklists((prev) =>
        prev.map((c) => (c.id === id ? { ...c, label: newName } : c)),
      )
      saveChecklistLabel(user.uid, id, newName).catch(console.error)
    },
    [user.uid, setChecklists],
  )

  if (checklists.length === 0) return null

  const activeChecklist = checklists.find((c) => c.id === activeChecklistId)

  return (
    <View style={styles.container}>
      <NavigationBar
        checklists={checklists}
        activeChecklistId={activeChecklistId}
        isEditMode={isEditMode}
        user={user}
        stats={stats}
        onNavChange={handleNavChange}
        onAddChecklist={handleAddChecklist}
        onUpdateChecklistName={handleUpdateChecklistName}
        onSignOut={onSignOut}
        onEdit={handleEdit}
        onResetOrDelete={handleResetOrDelete}
      />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled={!isEditMode}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        onLayout={(e) => {
          setContainerWidth(e.nativeEvent.layout.width)
          setContainerHeight(e.nativeEvent.layout.height)
        }}
        style={styles.pager}
      >
        {checklists.map((item) => (
          <View key={item.id} style={{ width: containerWidth, height: containerHeight }}>
            <Checklist
              ref={(el) => { checklistRefs.current[item.id] = el }}
              checklist={item}
              user={user}
              isActive={item.id === activeChecklistId}
              isEditMode={isEditMode && item.id === activeChecklistId}
              onStatsChange={item.id === activeChecklistId ? setStats : () => {}}
            />
          </View>
        ))}
      </ScrollView>
      <ConfirmModal
        visible={showDeleteListConfirm}
        title="チェックリストを削除"
        message={`「${activeChecklist?.label}」を削除しますか？\n\n注意: チェックリスト内のすべてのデータが削除されます。`}
        onConfirm={confirmDeleteList}
        onCancel={() => setShowDeleteListConfirm(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3ff',
  },
  pager: {
    flex: 1,
  },
})
