import { useState, useEffect, useRef, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  subscribeChecklistData,
  saveChecklistData,
  saveChecklistLabel,
  type ChecklistItem,
  type ChecklistData,
} from '../firebase/firestore'
import type { Unsubscribe } from 'firebase/firestore'

interface Options {
  checklistId: string
  label: string
  initialItems: ChecklistItem[]
  uid: string | undefined
  isActive: boolean
  onStatsChange?: (stats: { completedCount: number; totalCount: number }) => void
}

export function useChecklist({
  checklistId,
  label,
  initialItems,
  uid,
  isActive,
  onStatsChange,
}: Options) {
  const [items, setItems] = useState<ChecklistItem[]>([])
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({})

  const isSavingRef = useRef(false)
  const hasSyncedRef = useRef(false)
  const lastFirestoreJsonRef = useRef('')
  const isBeingDeletedRef = useRef(false)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const firestoreUnsubRef = useRef<Unsubscribe | null>(null)
  const itemsRef = useRef(items)
  const checkedStateRef = useRef(checkedState)
  itemsRef.current = items
  checkedStateRef.current = checkedState

  const lsPrefix = useCallback(
    () => `${uid ?? 'guest'}-${checklistId}`,
    [uid, checklistId],
  )

  const serializeForCompare = useCallback((data: ChecklistData): string => {
    const normalized = (data.customItems ?? []).map((i) => ({ id: i.id, label: i.label }))
    return JSON.stringify({ customItems: normalized, checkedItems: data.checkedItems ?? {} })
  }, [])

  const buildChecklistData = useCallback(async (): Promise<ChecklistData> => {
    const deletedStr = await AsyncStorage.getItem(`${lsPrefix()}-deleted-initial-ids`)
    const deletedInitialIds: string[] = deletedStr ? JSON.parse(deletedStr) : []
    return {
      customItems: [...itemsRef.current],
      checkedItems: { ...checkedStateRef.current },
      ...(deletedInitialIds.length > 0 ? { deletedInitialIds } : {}),
    }
  }, [lsPrefix])

  const scheduleSaveToFirestore = useCallback(() => {
    if (!uid) return
    if (!hasSyncedRef.current) return
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(async () => {
      saveTimerRef.current = null
      if (!uid) return
      const data = await buildChecklistData()
      const json = serializeForCompare(data)
      if (json === lastFirestoreJsonRef.current) return
      isSavingRef.current = true
      try {
        await saveChecklistData(uid, checklistId, data)
        lastFirestoreJsonRef.current = json
      } catch (e) {
        console.error('Firestore save failed:', e)
      } finally {
        isSavingRef.current = false
      }
    }, 500)
  }, [uid, checklistId, buildChecklistData, serializeForCompare])

  const saveItemsToStorage = useCallback(
    async (newItems: ChecklistItem[]) => {
      await AsyncStorage.setItem(`${lsPrefix()}-custom-items`, JSON.stringify(newItems))
      await AsyncStorage.setItem(
        `${lsPrefix()}-order`,
        JSON.stringify(newItems.map((i) => i.id)),
      )
    },
    [lsPrefix],
  )

  const saveCheckedToStorage = useCallback(
    async (state: Record<string, boolean>) => {
      for (const [id, checked] of Object.entries(state)) {
        await AsyncStorage.setItem(`${lsPrefix()}-${id}`, String(checked))
      }
    },
    [lsPrefix],
  )

  const applyFirestoreData = useCallback(
    async (data: ChecklistData) => {
      type Legacy = { order?: string[]; customLabels?: Record<string, string>; deletedInitialIds?: string[] }
      const legacy = data as ChecklistData & Legacy
      const legacyDeletedIds = new Set(legacy.deletedInitialIds ?? [])
      const legacyCustomLabels = legacy.customLabels ?? {}
      const customItemIds = new Set(data.customItems.map((i) => i.id))

      const allCustomItems = data.customItems.map((item) => ({
        ...item,
        label: legacyCustomLabels[item.id] ?? item.label,
      }))

      for (const initial of initialItems) {
        if (!legacyDeletedIds.has(initial.id) && !customItemIds.has(initial.id)) {
          allCustomItems.push({ id: initial.id, label: legacyCustomLabels[initial.id] ?? initial.label })
        }
      }

      let orderedItems: ChecklistItem[]
      if (legacy.order && legacy.order.length > 0) {
        const itemMap = new Map(allCustomItems.map((i) => [i.id, i]))
        orderedItems = []
        legacy.order.forEach((id) => {
          if (itemMap.has(id)) orderedItems.push(itemMap.get(id)!)
        })
        allCustomItems.forEach((i) => {
          if (!legacy.order!.includes(i.id)) orderedItems.push(i)
        })
      } else {
        orderedItems = allCustomItems
      }

      setItems(orderedItems)
      setCheckedState({ ...data.checkedItems })

      await saveItemsToStorage(orderedItems)
      await saveCheckedToStorage(data.checkedItems)
      if (legacy.deletedInitialIds && legacy.deletedInitialIds.length > 0) {
        await AsyncStorage.setItem(
          `${lsPrefix()}-deleted-initial-ids`,
          JSON.stringify(legacy.deletedInitialIds),
        )
      }
    },
    [initialItems, lsPrefix, saveItemsToStorage, saveCheckedToStorage],
  )

  const stopFirestoreSync = useCallback(() => {
    isBeingDeletedRef.current = true
    if (firestoreUnsubRef.current) {
      firestoreUnsubRef.current()
      firestoreUnsubRef.current = null
    }
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current)
      saveTimerRef.current = null
    }
  }, [])

  const startFirestoreSync = useCallback(() => {
    if (!uid) return
    stopFirestoreSync()
    isBeingDeletedRef.current = false
    firestoreUnsubRef.current = subscribeChecklistData(uid, checklistId, (data) => {
      if (isSavingRef.current) return
      hasSyncedRef.current = true
      if (data) {
        const json = serializeForCompare(data)
        if (json === lastFirestoreJsonRef.current) return
        if (saveTimerRef.current !== null) return
        lastFirestoreJsonRef.current = json
        applyFirestoreData(data)
        if (!(data as ChecklistData & { label?: string }).label && label && uid) {
          saveChecklistLabel(uid, checklistId, label).catch(console.error)
        }
      } else if (!isBeingDeletedRef.current) {
        scheduleSaveToFirestore()
        if (uid && label) {
          saveChecklistLabel(uid, checklistId, label).catch(console.error)
        }
      }
    })
  }, [uid, checklistId, label, stopFirestoreSync, serializeForCompare, applyFirestoreData, scheduleSaveToFirestore])

  // Mount: load from storage and start Firestore sync
  useEffect(() => {
    let cancelled = false

    const init = async () => {
      const customItemsStr = await AsyncStorage.getItem(`${lsPrefix()}-custom-items`)
      const existingCustomItems: ChecklistItem[] = customItemsStr ? JSON.parse(customItemsStr) : []
      const customItemIds = new Set(existingCustomItems.map((i) => i.id))

      const legacyDeletedStr = await AsyncStorage.getItem(`${lsPrefix()}-deleted-initial-ids`)
      const legacyDeletedIds = legacyDeletedStr
        ? new Set(JSON.parse(legacyDeletedStr) as string[])
        : new Set<string>()

      const missing = initialItems
        .filter((i) => !customItemIds.has(i.id) && !legacyDeletedIds.has(i.id))
        .map((i) => ({ id: i.id, label: i.label }))

      let allItems = existingCustomItems
      if (missing.length > 0) {
        allItems = [...existingCustomItems, ...missing]
        await AsyncStorage.setItem(`${lsPrefix()}-custom-items`, JSON.stringify(allItems))
      }

      const orderStr = await AsyncStorage.getItem(`${lsPrefix()}-order`)
      let orderedItems = allItems
      if (orderStr) {
        const orderIds: string[] = JSON.parse(orderStr)
        const itemMap = new Map(allItems.map((i) => [i.id, i]))
        const ordered: ChecklistItem[] = []
        orderIds.forEach((id) => { if (itemMap.has(id)) ordered.push(itemMap.get(id)!) })
        allItems.forEach((i) => { if (!orderIds.includes(i.id)) ordered.push(i) })
        orderedItems = ordered
      }

      const checkedResult: Record<string, boolean> = {}
      for (const item of orderedItems) {
        const val = await AsyncStorage.getItem(`${lsPrefix()}-${item.id}`)
        checkedResult[item.id] = val === 'true'
      }

      if (!cancelled) {
        setItems(orderedItems)
        setCheckedState(checkedResult)
      }
    }

    init().then(() => {
      if (!cancelled && uid) startFirestoreSync()
    })

    return () => {
      cancelled = true
      stopFirestoreSync()
    }
  }, [uid, checklistId])

  // Notify stats change when active
  useEffect(() => {
    if (!isActive) return
    const completedCount = Object.values(checkedState).filter(Boolean).length
    onStatsChange?.({ completedCount, totalCount: items.length })
  }, [items.length, checkedState, isActive, onStatsChange])

  const handleCheck = useCallback((id: string) => {
    setCheckedState((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      AsyncStorage.setItem(`${lsPrefix()}-${id}`, String(next[id])).catch(console.error)
      scheduleSaveToFirestore()
      return next
    })
  }, [lsPrefix, scheduleSaveToFirestore])

  const handleReset = useCallback(() => {
    setCheckedState((prev) => {
      const next: Record<string, boolean> = {}
      for (const id of Object.keys(prev)) {
        next[id] = false
        AsyncStorage.removeItem(`${lsPrefix()}-${id}`).catch(console.error)
      }
      scheduleSaveToFirestore()
      return next
    })
  }, [lsPrefix, scheduleSaveToFirestore])

  const updateItems = useCallback(
    (newItems: ChecklistItem[]) => {
      setItems(newItems)
      saveItemsToStorage(newItems).catch(console.error)
      scheduleSaveToFirestore()
    },
    [saveItemsToStorage, scheduleSaveToFirestore],
  )

  const addItem = useCallback(
    (label: string) => {
      const newId = `${checklistId}-custom-${Date.now()}`
      const newItem: ChecklistItem = { id: newId, label }
      setItems((prev) => {
        const next = [...prev, newItem]
        saveItemsToStorage(next).catch(console.error)
        scheduleSaveToFirestore()
        return next
      })
      setCheckedState((prev) => ({ ...prev, [newId]: false }))
    },
    [checklistId, saveItemsToStorage, scheduleSaveToFirestore],
  )

  const updateItemLabel = useCallback(
    (id: string, newLabel: string) => {
      setItems((prev) => {
        const next = prev.map((i) => (i.id === id ? { ...i, label: newLabel } : i))
        saveItemsToStorage(next).catch(console.error)
        scheduleSaveToFirestore()
        return next
      })
    },
    [saveItemsToStorage, scheduleSaveToFirestore],
  )

  const deleteItem = useCallback(
    async (id: string) => {
      const isInitial = initialItems.some((i) => i.id === id)
      if (isInitial) {
        const deletedStr = await AsyncStorage.getItem(`${lsPrefix()}-deleted-initial-ids`)
        const deletedIds: string[] = deletedStr ? JSON.parse(deletedStr) : []
        if (!deletedIds.includes(id)) {
          deletedIds.push(id)
          await AsyncStorage.setItem(
            `${lsPrefix()}-deleted-initial-ids`,
            JSON.stringify(deletedIds),
          )
        }
      }
      setItems((prev) => {
        const next = prev.filter((i) => i.id !== id)
        saveItemsToStorage(next).catch(console.error)
        scheduleSaveToFirestore()
        return next
      })
      setCheckedState((prev) => {
        const next = { ...prev }
        delete next[id]
        AsyncStorage.removeItem(`${lsPrefix()}-${id}`).catch(console.error)
        return next
      })
    },
    [initialItems, lsPrefix, saveItemsToStorage, scheduleSaveToFirestore],
  )

  const completedCount = Object.values(checkedState).filter(Boolean).length

  return {
    items,
    checkedState,
    completedCount,
    totalCount: items.length,
    handleCheck,
    handleReset,
    updateItems,
    addItem,
    updateItemLabel,
    deleteItem,
    stopFirestoreSync,
  }
}
