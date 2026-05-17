<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import {
  subscribeChecklistData,
  saveChecklistData,
  type ChecklistItem,
  type ChecklistData
} from '../firebase/firestore'
import type { Unsubscribe } from 'firebase/firestore'

// Props定義
interface Props {
  checklistId: string
  initialItems: ChecklistItem[]
  isActive?: boolean
  uid?: string
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  uid: ''
})

// Emits定義
interface Emits {
  (e: 'update:stats', stats: { completedCount: number; totalCount: number }): void
}

const emit = defineEmits<Emits>()

// 並べ替え可能な項目リスト
const checklistItems = ref<ChecklistItem[]>([...props.initialItems])

// チェック状態の管理
const checkedItems = ref<Record<string, boolean>>({})

// 編集状態の管理
const isEditMode = ref<boolean>(false)
const editingItemId = ref<string | null>(null)
const editingText = ref<string>('')
let editInputElement: HTMLInputElement | null = null
const setEditInputRef = (el: Element | object | null) => {
  if (el instanceof HTMLInputElement) {
    editInputElement = el
  } else {
    editInputElement = null
  }
}

// ドラッグ&ドロップの状態管理
const draggingItemId = ref<string | null>(null)
const dragStartY = ref<number>(0)
const dragCurrentY = ref<number>(0)
const dragOffsetY = ref<number>(0)
const longPressTimer = ref<number | null>(null)
const isDragging = ref<boolean>(false)
const dragItemIndex = ref<number>(-1)
const DRAG_START_DELAY = 0
const itemRefs = ref<(HTMLElement | null)[]>([])

// Firestore 同期関連
let firestoreUnsubscribe: Unsubscribe | null = null
let isSavingToFirestore = false
let lastFirestoreJson = ''

// ---- LocalStorage ヘルパー ----
const lsPrefix = () => `${props.uid || 'guest'}-${props.checklistId}`

const loadCustomItemsFromLS = (): ChecklistItem[] => {
  const saved = localStorage.getItem(`${lsPrefix()}-custom-items`)
  if (saved) {
    try { return JSON.parse(saved) } catch { return [] }
  }
  return []
}

const saveCustomItemsToLS = (items: ChecklistItem[]) => {
  localStorage.setItem(`${lsPrefix()}-custom-items`, JSON.stringify(items))
}

const getAllItems = (): ChecklistItem[] => {
  return loadCustomItemsFromLS()
}

const loadItemOrderFromLS = () => {
  const allItems = getAllItems()
  const savedOrder = localStorage.getItem(`${lsPrefix()}-order`)
  if (savedOrder) {
    try {
      const orderIds: string[] = JSON.parse(savedOrder)
      const orderedItems: ChecklistItem[] = []
      orderIds.forEach(id => {
        const item = allItems.find(i => i.id === id)
        if (item) orderedItems.push(item)
      })
      allItems.forEach(item => {
        if (!orderIds.includes(item.id)) orderedItems.push(item)
      })
      checklistItems.value = orderedItems
    } catch {
      checklistItems.value = allItems
    }
  } else {
    checklistItems.value = allItems
  }
}

const saveItemOrderToLS = () => {
  const orderIds = checklistItems.value.map(i => i.id)
  localStorage.setItem(`${lsPrefix()}-order`, JSON.stringify(orderIds))
}

const loadCheckedStateFromLS = () => {
  const saved: Record<string, boolean> = {}
  checklistItems.value.forEach(item => {
    const val = localStorage.getItem(`${lsPrefix()}-${item.id}`)
    saved[item.id] = val === 'true'
  })
  checkedItems.value = saved
}

// ---- Firestore ヘルパー ----

// 現在の状態を ChecklistData にまとめる
const buildChecklistData = (): ChecklistData => {
  return {
    customItems: [...checklistItems.value],
    order: checklistItems.value.map(i => i.id),
    checkedItems: { ...checkedItems.value },
  }
}

// Firestoreに保存（重複保存を避けるためdebounce的に制御）
let saveTimer: ReturnType<typeof setTimeout> | null = null
const scheduleSaveToFirestore = () => {
  if (!props.uid) return
  if (saveTimer) clearTimeout(saveTimer)
  saveTimer = setTimeout(async () => {
    if (!props.uid) return
    const data = buildChecklistData()
    const json = JSON.stringify(data)
    if (json === lastFirestoreJson) return
    isSavingToFirestore = true
    try {
      await saveChecklistData(props.uid, props.checklistId, data)
      lastFirestoreJson = json
    } catch (e) {
      console.error('Firestore save failed:', e)
    } finally {
      isSavingToFirestore = false
    }
  }, 500)
}

// Firestoreのデータを状態に適用
const applyFirestoreData = (data: ChecklistData) => {
  // 旧フォーマットからの移行: 削除済み初期アイテムと customLabels を考慮して統合
  const legacyDeletedIds = new Set(data.deletedInitialIds ?? [])
  const legacyCustomLabels = data.customLabels ?? {}
  const customItemIds = new Set(data.customItems.map(i => i.id))

  const allCustomItems = data.customItems.map(item => ({
    ...item,
    label: legacyCustomLabels[item.id] ?? item.label
  }))

  for (const initial of props.initialItems) {
    if (!legacyDeletedIds.has(initial.id) && !customItemIds.has(initial.id)) {
      allCustomItems.push({ id: initial.id, label: legacyCustomLabels[initial.id] ?? initial.label })
    }
  }

  const customItemMap = new Map(allCustomItems.map(i => [i.id, i]))
  const allItems: ChecklistItem[] = []
  data.order.forEach(id => {
    if (customItemMap.has(id)) allItems.push(customItemMap.get(id)!)
  })
  allCustomItems.forEach(i => {
    if (!data.order.includes(i.id)) allItems.push(i)
  })

  checklistItems.value = allItems
  checkedItems.value = { ...data.checkedItems }

  // ローカルストレージにもキャッシュ
  saveItemOrderToLS()
  saveCustomItemsToLS(allItems)
  Object.entries(data.checkedItems).forEach(([id, checked]) => {
    localStorage.setItem(`${lsPrefix()}-${id}`, String(checked))
  })
}

// Firestoreの購読を開始
const startFirestoreSync = () => {
  if (!props.uid) return
  stopFirestoreSync()
  firestoreUnsubscribe = subscribeChecklistData(props.uid, props.checklistId, (data) => {
    if (isSavingToFirestore) return
    if (data) {
      const json = JSON.stringify(data)
      if (json === lastFirestoreJson) return
      lastFirestoreJson = json
      applyFirestoreData(data)
    } else {
      // Firestoreにデータがなければローカルのデータをアップロード
      scheduleSaveToFirestore()
    }
  })
}

const stopFirestoreSync = () => {
  if (firestoreUnsubscribe) {
    firestoreUnsubscribe()
    firestoreUnsubscribe = null
  }
}

// uid が変わったら購読を再設定
watch(() => props.uid, (newUid) => {
  if (newUid) {
    startFirestoreSync()
  } else {
    stopFirestoreSync()
  }
})

// コンポーネントマウント時に状態を読み込む
onMounted(() => {
  // 初期アイテムを custom-items ストアへ統合（旧フォーマット移行含む）
  const existingCustomItems = loadCustomItemsFromLS()
  const customItemIds = new Set(existingCustomItems.map(i => i.id))
  const legacyDeletedStr = localStorage.getItem(`${lsPrefix()}-deleted-initial-ids`)
  const legacyDeletedIds = legacyDeletedStr
    ? new Set(JSON.parse(legacyDeletedStr) as string[])
    : new Set<string>()
  const legacyCustomLabels: Record<string, string> = {}
  props.initialItems.forEach(item => {
    const val = localStorage.getItem(`${lsPrefix()}-${item.id}-label`)
    if (val) legacyCustomLabels[item.id] = val
  })
  const missing = props.initialItems
    .filter(i => !customItemIds.has(i.id) && !legacyDeletedIds.has(i.id))
    .map(i => ({ id: i.id, label: legacyCustomLabels[i.id] ?? i.label }))
  if (missing.length > 0) {
    saveCustomItemsToLS([...existingCustomItems, ...missing])
  }

  loadItemOrderFromLS()
  loadCheckedStateFromLS()
  if (props.uid) {
    startFirestoreSync()
  }
})

onUnmounted(() => {
  stopFirestoreSync()
  if (saveTimer) clearTimeout(saveTimer)
})

// チェック状態が変わったらローカルストレージ & Firestore に保存
watch(
  checkedItems,
  (newValue) => {
    Object.entries(newValue).forEach(([id, checked]) => {
      localStorage.setItem(`${lsPrefix()}-${id}`, String(checked))
    })
    scheduleSaveToFirestore()
  },
  { deep: true }
)

// チェックボックスの変更ハンドラー
const handleCheckChange = (id: string) => {
  checkedItems.value = {
    ...checkedItems.value,
    [id]: !checkedItems.value[id]
  }
}

// 編集モードを開始
const startEdit = async (id: string) => {
  editingItemId.value = id
  editingText.value = checklistItems.value.find(item => item.id === id)?.label || ''
  await nextTick()
  await nextTick()
  if (editInputElement) {
    editInputElement.focus()
    editInputElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// 編集をキャンセル
const cancelEdit = () => {
  const currentId = editingItemId.value
  editingItemId.value = null
  editingText.value = ''
  if (currentId) {
    const item = checklistItems.value.find(item => item.id === currentId)
    if (item && item.label === '') {
      checklistItems.value = checklistItems.value.filter(item => item.id !== currentId)
    }
  }
}

// 編集を保存
const saveEdit = (id: string) => {
  const trimmedText = editingText.value.trim()
  if (trimmedText) {
    const item = checklistItems.value.find(item => item.id === id)
    if (item) {
      item.label = trimmedText
      const customItems = loadCustomItemsFromLS()
      const customItem = customItems.find(i => i.id === id)
      if (customItem) {
        customItem.label = trimmedText
      } else {
        customItems.push({ id, label: trimmedText })
      }
      saveCustomItemsToLS(customItems)
      saveItemOrderToLS()
    }
    scheduleSaveToFirestore()
  } else {
    const item = checklistItems.value.find(item => item.id === id)
    if (item && item.label === '') {
      checklistItems.value = checklistItems.value.filter(item => item.id !== id)
    }
  }
  editingItemId.value = null
  editingText.value = ''
}

// 新しいアイテムを追加
const addNewItem = async () => {
  const newId = `${props.checklistId}-custom-${Date.now()}`
  checklistItems.value.push({ id: newId, label: '' })
  await nextTick()
  await startEdit(newId)
}

// アイテムを削除
const deleteItem = (id: string) => {
  if (!confirm('この項目を削除しますか？')) return

  checklistItems.value = checklistItems.value.filter(item => item.id !== id)
  const customItems = loadCustomItemsFromLS()
  saveCustomItemsToLS(customItems.filter(item => item.id !== id))

  if (checkedItems.value[id]) {
    const newCheckedItems = { ...checkedItems.value }
    delete newCheckedItems[id]
    checkedItems.value = newCheckedItems
    localStorage.removeItem(`${lsPrefix()}-${id}`)
  }

  saveItemOrderToLS()
  scheduleSaveToFirestore()
}

// 表示用のラベルを取得
const getDisplayLabel = (item: ChecklistItem): string => {
  return item.label
}

const getElementTotalHeight = (element: HTMLElement): number => {
  const height = element.offsetHeight
  const style = window.getComputedStyle(element)
  return height + parseFloat(style.marginTop) + parseFloat(style.marginBottom)
}

// 長押し開始
const handleTouchStart = (e: TouchEvent, itemId: string, index: number) => {
  if (editingItemId.value !== null) return
  if (!isEditMode.value) return
  if (!e.touches.length) return

  dragStartY.value = e.touches[0].clientY
  dragCurrentY.value = e.touches[0].clientY
  dragItemIndex.value = index

  longPressTimer.value = window.setTimeout(() => {
    draggingItemId.value = itemId
    isDragging.value = true
  }, DRAG_START_DELAY)
}

const handleTouchMove = (e: TouchEvent) => {
  if (!e.touches.length) return

  if (!isDragging.value) {
    const moveDistance = Math.abs(e.touches[0].clientY - dragStartY.value)
    if (moveDistance > 10 && longPressTimer.value !== null) {
      window.clearTimeout(longPressTimer.value)
      longPressTimer.value = null
    }
    return
  }

  e.preventDefault()
  dragCurrentY.value = e.touches[0].clientY
  dragOffsetY.value = dragCurrentY.value - dragStartY.value

  const currentIndex = checklistItems.value.findIndex(item => item.id === draggingItemId.value)
  if (currentIndex === -1) return

  const totalDragDistance = dragCurrentY.value - dragStartY.value
  let accumulatedHeight = 0
  let newIndex = dragItemIndex.value

  if (totalDragDistance > 0) {
    for (let i = dragItemIndex.value + 1; i < checklistItems.value.length; i++) {
      const itemElement = itemRefs.value[i]
      if (itemElement) {
        const itemHeight = getElementTotalHeight(itemElement)
        accumulatedHeight += itemHeight
        if (totalDragDistance > accumulatedHeight - itemHeight / 2) {
          newIndex = i
        } else {
          break
        }
      }
    }
  } else if (totalDragDistance < 0) {
    for (let i = dragItemIndex.value - 1; i >= 0; i--) {
      const itemElement = itemRefs.value[i]
      if (itemElement) {
        const itemHeight = getElementTotalHeight(itemElement)
        accumulatedHeight -= itemHeight
        if (totalDragDistance < accumulatedHeight + itemHeight / 2) {
          newIndex = i
        } else {
          break
        }
      }
    }
  }

  if (newIndex !== currentIndex) {
    let heightDiff = 0
    if (newIndex > currentIndex) {
      for (let i = currentIndex + 1; i <= newIndex; i++) {
        const itemElement = itemRefs.value[i]
        if (itemElement) heightDiff += getElementTotalHeight(itemElement)
      }
    } else {
      for (let i = newIndex; i < currentIndex; i++) {
        const itemElement = itemRefs.value[i]
        if (itemElement) heightDiff -= getElementTotalHeight(itemElement)
      }
    }

    const items = [...checklistItems.value]
    const [draggedItem] = items.splice(currentIndex, 1)
    items.splice(newIndex, 0, draggedItem)
    checklistItems.value = items

    dragStartY.value = dragStartY.value + heightDiff
    dragItemIndex.value = newIndex
    dragOffsetY.value = dragCurrentY.value - dragStartY.value
  }
}

const handleTouchEnd = () => {
  if (longPressTimer.value !== null) {
    window.clearTimeout(longPressTimer.value)
    longPressTimer.value = null
  }

  if (isDragging.value) {
    saveItemOrderToLS()
    scheduleSaveToFirestore()
  }

  draggingItemId.value = null
  isDragging.value = false
  dragItemIndex.value = -1
  dragStartY.value = 0
  dragCurrentY.value = 0
  dragOffsetY.value = 0
}

const handleTouchCancel = () => {
  handleTouchEnd()
}

// リセットボタンのハンドラー
const handleReset = () => {
  const resetState: Record<string, boolean> = {}
  checklistItems.value.forEach(item => {
    resetState[item.id] = false
    localStorage.removeItem(`${lsPrefix()}-${item.id}`)
  })
  checkedItems.value = resetState
  scheduleSaveToFirestore()
}

const completedCount = computed(() =>
  Object.values(checkedItems.value).filter(Boolean).length
)
const totalCount = computed(() => checklistItems.value.length)

watch([completedCount, totalCount, () => props.isActive], () => {
  if (props.isActive) {
    emit('update:stats', { completedCount: completedCount.value, totalCount: totalCount.value })
  }
}, { immediate: true })

const enableEditMode = () => {
  isEditMode.value = true
}

const disableEditMode = () => {
  isEditMode.value = false
  if (editingItemId.value !== null) cancelEdit()
}

defineExpose({
  handleReset,
  enableEditMode,
  disableEditMode
})
</script>

<template>
  <div class="container">
    <ul class="checklist">
      <li
        v-for="(item, index) in checklistItems"
        :key="item.id"
        :ref="el => { itemRefs[index] = el ? (el as HTMLElement) : null }"
        :class="['checklist-item', {
          checked: checkedItems[item.id],
          editing: editingItemId === item.id,
          dragging: draggingItemId === item.id
        }]"
        :style="draggingItemId === item.id ? { transform: `translateY(${dragOffsetY}px)` } : {}"
        @touchstart="(e) => handleTouchStart(e, item.id, index)"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchCancel"
      >
        <label
          v-if="editingItemId !== item.id"
          :for="item.id"
          @click.prevent="!isEditMode && handleCheckChange(item.id)"
        >
          {{ getDisplayLabel(item) }}
        </label>
        <button
          v-if="editingItemId !== item.id && !isEditMode"
          class="checkbox-button"
          @click.stop="handleCheckChange(item.id)"
          :aria-label="checkedItems[item.id] ? 'チェック済み' : '未チェック'"
        >
          <svg v-if="checkedItems[item.id]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </button>
        <div v-if="editingItemId !== item.id && isEditMode" class="edit-actions">
          <button
            class="edit-icon-button"
            @click.stop="startEdit(item.id)"
            title="この項目を編集"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
            </svg>
          </button>
          <button
            class="delete-icon-button"
            @click.stop="deleteItem(item.id)"
            title="この項目を削除"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
          </button>
        </div>

        <div v-if="editingItemId === item.id" class="edit-mode">
          <input
            :ref="setEditInputRef"
            type="text"
            v-model="editingText"
            class="edit-input"
            @click.stop
            @keyup.enter="saveEdit(item.id)"
            @keyup.esc="cancelEdit"
          />
          <button
            class="save-button"
            @click.stop="saveEdit(item.id)"
            title="保存"
          >
            ✓
          </button>
          <button
            class="cancel-button"
            @click.stop="cancelEdit"
            title="キャンセル"
          >
            ✕
          </button>
        </div>
      </li>
    </ul>
    <button
      v-if="isEditMode"
      class="add-item-button"
      @click="addNewItem"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
      </svg>
      <span>新しい項目を追加</span>
    </button>
  </div>
</template>

<style scoped>
.container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 6px;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  min-height: 46px;
  box-sizing: border-box;
}

.checklist-item.dragging {
  opacity: 0.9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: none;
}

.checklist-item.checked {
  background: #d4edda;
  opacity: 0.7;
}

.checklist-item.checked label {
  text-decoration: line-through;
  color: #6c757d;
}

.checkbox-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: transform 0.2s ease;
  min-width: 24px;
  min-height: 24px;
}

.checkbox-button:hover {
  transform: scale(1.1);
}

.checkbox-button svg {
  width: 24px;
  height: 24px;
}

.checklist-item label {
  cursor: pointer;
  flex: 1;
  font-size: 1.1em;
  color: #333;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.checklist-item.editing {
  background: #fff3cd;
  cursor: default;
}

.edit-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-right: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.edit-button:hover {
  opacity: 1;
}

.edit-button svg {
  width: 20px;
  height: 20px;
}

.edit-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: transform 0.2s ease;
  min-width: 24px;
  min-height: 24px;
}

.edit-icon-button:hover {
  transform: scale(1.1);
}

.edit-icon-button svg {
  width: 24px;
  height: 24px;
}

.edit-actions {
  display: flex;
  gap: 8px;
  margin-left: 15px;
}

.delete-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc3545;
  transition: transform 0.2s ease;
  min-width: 24px;
  min-height: 24px;
}

.delete-icon-button:hover {
  transform: scale(1.1);
}

.delete-icon-button svg {
  width: 24px;
  height: 24px;
}

.add-item-button {
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 6px;
  border: 2px dashed #667eea;
  background: #f8f9fa;
  border-radius: 10px;
  font-size: 1.1em;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 43px;
  box-sizing: border-box;
}

.add-item-button:hover {
  background: #e7f0ff;
  border-color: #5568d3;
}

.add-item-button svg {
  width: 24px;
  height: 24px;
}

.edit-mode {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.edit-input {
  flex: 1;
  padding: 6px 8px;
  border: 2px solid #667eea;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  box-sizing: border-box;
  height: 26px;
}

.save-button,
.cancel-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0 8px;
  transition: transform 0.2s ease;
  line-height: 1;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
}

.save-button {
  color: #28a745;
}

.save-button:hover {
  transform: scale(1.2);
}

.cancel-button {
  color: #dc3545;
}

.cancel-button:hover {
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .container {
    border-radius: 0;
    box-shadow: none;
    padding: 16px;
    min-height: 100%;
  }

  .checklist-item {
    padding: 8px;
    margin-bottom: 6px;
  }

  .checklist-item label {
    font-size: 1em;
  }
}
</style>
