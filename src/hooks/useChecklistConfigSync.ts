import { useState, useEffect, useRef, useCallback } from 'react'
import type { User } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  subscribeChecklistsConfig,
  subscribeChecklistIds,
  saveChecklistsConfig,
  type ChecklistConfig,
} from '../firebase/firestore'

const defaultChecklists: ChecklistConfig[] = [
  {
    id: 'tutorial',
    label: 'チュートリアル',
    initialItems: [
      { id: 'tutorial-check', label: 'タスクをタップしてチェックを入れてみよう' },
      { id: 'tutorial-reset', label: '「すべてリセット」でチェックをまとめて外してみよう' },
      { id: 'tutorial-edit-mode', label: '「項目を編集」ボタンで編集モードに切り替えてみよう' },
      { id: 'tutorial-edit', label: '編集モードで鉛筆アイコンをタップしてタスク名を変えてみよう' },
      { id: 'tutorial-reorder', label: '編集モードでドラッグしてタスクを並び替えてみよう' },
      { id: 'tutorial-delete', label: '編集モードでゴミ箱アイコンをタップしてタスクを削除してみよう' },
      { id: 'tutorial-add', label: '編集モードで「新しい項目を追加」からタスクを追加してみよう' },
      { id: 'tutorial-new-list', label: 'ナビの「＋」ボタンで新しいチェックリストを作ってみよう' },
    ],
  },
]

export function useChecklistConfigSync(user: User | null) {
  const [checklists, setChecklists] = useState<ChecklistConfig[]>([])
  const [activeChecklistId, setActiveChecklistId] = useState<string>('')

  const hasSyncedRef = useRef(false)
  const lastSavedIdsRef = useRef('')
  const isSavingRef = useRef(false)
  const labelDocsRef = useRef<Array<{ id: string; label?: string }>>([])
  const checklistsRef = useRef(checklists)
  checklistsRef.current = checklists

  const lsKey = useCallback(
    () => `checklists-config-${user?.uid ?? 'guest'}`,
    [user?.uid],
  )

  const loadFromStorage = useCallback(async () => {
    try {
      const saved = await AsyncStorage.getItem(lsKey())
      if (saved) {
        const parsed = JSON.parse(saved) as ChecklistConfig[]
        setChecklists(parsed)
        if (parsed.length > 0) setActiveChecklistId(parsed[0].id)
      } else {
        setChecklists([...defaultChecklists])
        setActiveChecklistId(defaultChecklists[0].id)
        await AsyncStorage.setItem(lsKey(), JSON.stringify(defaultChecklists))
      }
    } catch {
      setChecklists([...defaultChecklists])
      setActiveChecklistId(defaultChecklists[0].id)
    }
  }, [lsKey])

  const saveToFirestore = useCallback(
    async (uid: string, lists: ChecklistConfig[]) => {
      if (!hasSyncedRef.current) return
      const ids = lists.map((c) => c.id)
      const idsJson = JSON.stringify(ids)
      if (idsJson === lastSavedIdsRef.current) return
      if (isSavingRef.current) return

      isSavingRef.current = true
      try {
        await saveChecklistsConfig(uid, ids)
        lastSavedIdsRef.current = idsJson
      } catch (e) {
        console.error('Failed to save config to Firestore:', e)
      } finally {
        isSavingRef.current = false
        const currentIds = JSON.stringify(checklistsRef.current.map((c) => c.id))
        if (currentIds !== lastSavedIdsRef.current) {
          saveToFirestore(uid, checklistsRef.current)
        }
      }
    },
    [],
  )

  // Load from storage when user changes
  useEffect(() => {
    hasSyncedRef.current = false
    lastSavedIdsRef.current = ''
    labelDocsRef.current = []
    loadFromStorage()
  }, [user?.uid, loadFromStorage])

  // Firestore sync when logged in
  useEffect(() => {
    if (!user) return

    const unsubs: (() => void)[] = []

    const configUnsub = subscribeChecklistsConfig(user.uid, (ids) => {
      if (isSavingRef.current) return
      hasSyncedRef.current = true

      if (ids !== null) {
        const idsJson = JSON.stringify(ids)
        if (idsJson === lastSavedIdsRef.current) return
        lastSavedIdsRef.current = idsJson

        const labelsMap = new Map(labelDocsRef.current.map((d) => [d.id, d.label]))
        const existingMap = new Map(checklistsRef.current.map((c) => [c.id, c]))

        const newLists = ids.map((id) => ({
          id,
          label: labelsMap.get(id) ?? existingMap.get(id)?.label ?? id,
          initialItems: existingMap.get(id)?.initialItems ?? [],
        }))

        setChecklists(newLists)
        setActiveChecklistId((prev) => {
          if (!newLists.find((c) => c.id === prev) && newLists.length > 0) {
            return newLists[0].id
          }
          return prev
        })
      } else {
        saveToFirestore(user.uid, checklistsRef.current)
      }
    })
    unsubs.push(configUnsub)

    const labelsUnsub = subscribeChecklistIds(user.uid, (docs) => {
      labelDocsRef.current = docs
      const labelsMap = new Map(docs.map((d) => [d.id, d.label]))

      setChecklists((prev) => {
        let changed = false
        const updated = prev.map((c) => {
          const remoteLabel = labelsMap.get(c.id)
          if (remoteLabel !== undefined && remoteLabel !== c.label) {
            changed = true
            return { ...c, label: remoteLabel }
          }
          return c
        })
        return changed ? updated : prev
      })
    })
    unsubs.push(labelsUnsub)

    return () => unsubs.forEach((u) => u())
  }, [user?.uid, saveToFirestore])

  // Persist to storage + Firestore on change
  useEffect(() => {
    if (checklists.length === 0) return
    AsyncStorage.setItem(lsKey(), JSON.stringify(checklists)).catch(console.error)
    if (user) saveToFirestore(user.uid, checklists)
  }, [checklists, user?.uid, lsKey, saveToFirestore])

  return {
    checklists,
    setChecklists,
    activeChecklistId,
    setActiveChecklistId,
  }
}
