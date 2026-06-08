import React, { useRef, useState, useCallback, useEffect } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  useWindowDimensions,
} from 'react-native'
import type { User } from 'firebase/auth'
import { useChecklistConfigSync } from '../hooks/useChecklistConfigSync'
import { NavigationBar } from './NavigationBar'
import { Checklist, type ChecklistHandle } from './Checklist'
import { saveChecklistLabel, deleteChecklistData, type ChecklistConfig } from '../firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  user: User
  onSignOut: () => void
}

export function MainScreen({ user, onSignOut }: Props) {
  const { width: screenWidth } = useWindowDimensions()
  const { checklists, setChecklists, activeChecklistId, setActiveChecklistId } =
    useChecklistConfigSync(user)

  const [isEditMode, setIsEditMode] = useState(false)
  const [stats, setStats] = useState({ completedCount: 0, totalCount: 0 })

  const flatListRef = useRef<FlatList>(null)
  const checklistRefs = useRef<Record<string, ChecklistHandle | null>>({})

  const activeIndex = checklists.findIndex((c) => c.id === activeChecklistId)

  // Scroll to active checklist when id changes
  useEffect(() => {
    if (activeIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: activeIndex, animated: true })
    }
  }, [activeChecklistId, checklists.length])

  const handleNavChange = useCallback(
    (id: string) => {
      if (isEditMode) {
        setIsEditMode(false)
      }
      setActiveChecklistId(id)
    },
    [isEditMode, setActiveChecklistId],
  )

  const handleScrollEnd = useCallback(
    (e: { nativeEvent: { contentOffset: { x: number } } }) => {
      if (isEditMode) return
      const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth)
      if (index >= 0 && index < checklists.length) {
        setActiveChecklistId(checklists[index].id)
      }
    },
    [checklists, isEditMode, setActiveChecklistId],
  )

  const handleEdit = useCallback(() => {
    setIsEditMode((prev) => !prev)
  }, [])

  const handleReset = useCallback(() => {
    checklistRefs.current[activeChecklistId]?.handleReset()
  }, [activeChecklistId])

  const handleResetOrDelete = useCallback(() => {
    if (isEditMode) {
      // Delete current checklist
      if (checklists.length <= 1) {
        Alert.alert('削除できません', '最後のチェックリストは削除できません')
        return
      }
      const checklist = checklists.find((c) => c.id === activeChecklistId)
      if (!checklist) return
      Alert.alert(
        'チェックリストを削除',
        `「${checklist.label}」を削除しますか？\n\n注意: チェックリスト内のすべてのデータが削除されます。`,
        [
          { text: 'キャンセル', style: 'cancel' },
          {
            text: '削除',
            style: 'destructive',
            onPress: async () => {
              checklistRefs.current[activeChecklistId]?.stopFirestoreSync()
              const index = checklists.findIndex((c) => c.id === activeChecklistId)
              const newChecklists = checklists.filter((c) => c.id !== activeChecklistId)
              setChecklists(newChecklists)

              // Clean up local storage
              const prefix = `${user.uid}-${activeChecklistId}`
              const keys = await AsyncStorage.getAllKeys()
              const toDelete = keys.filter((k) => k.startsWith(prefix))
              if (toDelete.length > 0) await AsyncStorage.removeMany(toDelete)

              await deleteChecklistData(user.uid, activeChecklistId).catch(console.error)
              const nextId = newChecklists[Math.max(0, index - 1)]?.id ?? newChecklists[0]?.id
              setActiveChecklistId(nextId ?? '')
              setIsEditMode(false)
            },
          },
        ],
      )
    } else {
      handleReset()
    }
  }, [isEditMode, checklists, activeChecklistId, user.uid, setChecklists, setActiveChecklistId, handleReset])

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

  const renderChecklist = useCallback(
    ({ item }: { item: ChecklistConfig }) => (
      <View style={{ width: screenWidth }}>
        <Checklist
          ref={(el) => { checklistRefs.current[item.id] = el }}
          checklist={item}
          user={user}
          isActive={item.id === activeChecklistId}
          isEditMode={isEditMode && item.id === activeChecklistId}
          onStatsChange={item.id === activeChecklistId ? setStats : () => {}}
        />
      </View>
    ),
    [user, activeChecklistId, isEditMode],
  )

  if (checklists.length === 0) return null

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
      <FlatList
        ref={flatListRef}
        data={checklists}
        keyExtractor={(item) => item.id}
        renderItem={renderChecklist}
        horizontal
        pagingEnabled
        scrollEnabled={!isEditMode}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        getItemLayout={(_, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
        style={styles.pager}
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
