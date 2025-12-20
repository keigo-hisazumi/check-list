<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'

// Props定義
interface Props {
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

// Emits定義
interface Emits {
  (e: 'update:stats', stats: { completedCount: number; totalCount: number }): void
}

const emit = defineEmits<Emits>()

// チェックリスト項目の型定義
interface ChecklistItem {
  id: string
  label: string
}

// 朝やることの項目の初期定義
const initialChecklistItems: ChecklistItem[] = [
  { id: 'morning-tea-coffee', label: '紅茶、コーヒー' },
  { id: 'morning-lunch', label: '弁当' },
  { id: 'morning-breakfast', label: '朝食' },
  { id: 'morning-medicine', label: 'クスリ' },
  { id: 'morning-prewash', label: '予洗い' },
  { id: 'morning-bag', label: 'カバンの中' },
  { id: 'morning-garbage', label: 'ゴミまとめ' },
  { id: 'morning-preparation', label: '出発準備' },
  { id: 'morning-change', label: '着替え' },
  { id: 'morning-brush', label: '歯みがき' },
]

// 並べ替え可能な項目リスト
const checklistItems = ref<ChecklistItem[]>([...initialChecklistItems])

// チェック状態の管理
const checkedItems = ref<Record<string, boolean>>({})

// 編集状態の管理
const isEditMode = ref<boolean>(false) // 編集モードのフラグ
const editingItemId = ref<string | null>(null)
const editingText = ref<string>('')
const customLabels = ref<Record<string, string>>({})
// 編集中の入力フィールドへの参照（一度に1つの項目のみ編集可能）
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
const dragOffsetY = ref<number>(0) // ドラッグ中の要素の視覚的な移動量
const longPressTimer = ref<number | null>(null)
const isDragging = ref<boolean>(false)
const dragItemIndex = ref<number>(-1)
const LONG_PRESS_DURATION = 0 // 長押し判定時間（ミリ秒）- タッチの瞬間から並べ替え可能
const itemRefs = ref<(HTMLElement | null)[]>([]) // 各アイテムのDOM要素参照

// ユーザーが追加したカスタムアイテムをローカルストレージから読み込む
const loadCustomItems = (): ChecklistItem[] => {
  const savedCustomItems = localStorage.getItem('morning-checklist-custom-items')
  if (savedCustomItems) {
    try {
      return JSON.parse(savedCustomItems)
    } catch (e) {
      console.error('Failed to load custom items:', e)
      return []
    }
  }
  return []
}

// カスタムアイテムをローカルストレージに保存
const saveCustomItems = (customItems: ChecklistItem[]) => {
  localStorage.setItem('morning-checklist-custom-items', JSON.stringify(customItems))
}

// すべてのアイテム（初期アイテム + カスタムアイテム）を取得
const getAllItems = (): ChecklistItem[] => {
  const customItems = loadCustomItems()
  return [...initialChecklistItems, ...customItems]
}

// ローカルストレージから並び順を読み込む
const loadItemOrder = () => {
  const allItems = getAllItems()
  const savedOrder = localStorage.getItem('morning-checklist-order')
  if (savedOrder) {
    try {
      const orderIds: string[] = JSON.parse(savedOrder)
      // 保存された順序に従ってアイテムを並べ替え
      const orderedItems: ChecklistItem[] = []
      orderIds.forEach(id => {
        const item = allItems.find(item => item.id === id)
        if (item) {
          orderedItems.push(item)
        }
      })
      // 新しく追加されたアイテムがある場合は末尾に追加
      allItems.forEach(item => {
        if (!orderIds.includes(item.id)) {
          orderedItems.push(item)
        }
      })
      checklistItems.value = orderedItems
    } catch (e) {
      console.error('Failed to load item order:', e)
      checklistItems.value = allItems
    }
  } else {
    // 保存された順序がない場合は全アイテムを使用
    checklistItems.value = allItems
  }
}

// 並び順をローカルストレージに保存
const saveItemOrder = () => {
  const orderIds = checklistItems.value.map(item => item.id)
  localStorage.setItem('morning-checklist-order', JSON.stringify(orderIds))
}

// ローカルストレージからチェック状態を読み込む
const loadCheckedState = () => {
  const saved: Record<string, boolean> = {}
  checklistItems.value.forEach(item => {
    const value = localStorage.getItem(item.id)
    saved[item.id] = value === 'true'
  })
  checkedItems.value = saved
}

// ローカルストレージからカスタムラベルを読み込む
const loadCustomLabels = () => {
  const saved: Record<string, string> = {}
  checklistItems.value.forEach(item => {
    const value = localStorage.getItem(`${item.id}-label`)
    if (value) {
      saved[item.id] = value
    }
  })
  customLabels.value = saved
}

// コンポーネントマウント時に状態を読み込む
onMounted(() => {
  loadItemOrder()
  loadCheckedState()
  loadCustomLabels()
})

// チェック状態が変わったらローカルストレージに保存
watch(
  checkedItems,
  (newValue) => {
    Object.entries(newValue).forEach(([id, checked]) => {
      localStorage.setItem(id, String(checked))
    })
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
  editingText.value = customLabels.value[id] || checklistItems.value.find(item => item.id === id)?.label || ''
  
  // 次のティックで入力フィールドを表示してスクロール
  await nextTick()
  // 初回のnextTick後、さらに確実にrefが利用可能になるまで待つ
  await nextTick()
  if (editInputElement) {
    editInputElement.focus()
    // 入力フィールドが画面内に表示されるようスクロール
    editInputElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// 編集をキャンセル
const cancelEdit = () => {
  const currentId = editingItemId.value
  editingItemId.value = null
  editingText.value = ''
  
  // 編集中のアイテムが空のラベルを持つ新規アイテムの場合は削除
  if (currentId) {
    const item = checklistItems.value.find(item => item.id === currentId)
    if (item && item.label === '' && !customLabels.value[currentId]) {
      // 新規追加途中でキャンセルされたアイテムを削除
      checklistItems.value = checklistItems.value.filter(item => item.id !== currentId)
    }
  }
}

// 編集を保存
const saveEdit = (id: string) => {
  const trimmedText = editingText.value.trim()
  if (trimmedText) {
    // テキストがある場合は保存
    customLabels.value = {
      ...customLabels.value,
      [id]: trimmedText
    }
    localStorage.setItem(`${id}-label`, trimmedText)
    
    // 新規アイテムの場合はカスタムアイテムとして永続化
    const item = checklistItems.value.find(item => item.id === id)
    if (item && item.label === '') {
      // 新規アイテムをカスタムアイテムとして保存
      const customItems = loadCustomItems()
      const newItem: ChecklistItem = {
        id: id,
        label: trimmedText
      }
      customItems.push(newItem)
      saveCustomItems(customItems)
      
      // アイテムのラベルを更新
      item.label = trimmedText
      
      // 並び順を保存
      saveItemOrder()
    }
  } else {
    // テキストが空の場合
    const item = checklistItems.value.find(item => item.id === id)
    if (item && item.label === '') {
      // 新規追加途中で空のまま保存しようとした場合は削除
      checklistItems.value = checklistItems.value.filter(item => item.id !== id)
    }
  }
  editingItemId.value = null
  editingText.value = ''
}

// 新しいアイテムを追加
const addNewItem = async () => {
  // 新しいアイテムのIDを生成（タイムスタンプベース）
  const newId = `morning-custom-${Date.now()}`
  const newItem: ChecklistItem = {
    id: newId,
    label: ''
  }
  
  // アイテムリストに追加（一時的）
  checklistItems.value.push(newItem)
  
  // 自動的に編集モードに入る
  await nextTick()
  await startEdit(newId)
}

// アイテムを削除
const deleteItem = (id: string) => {
  // 初期アイテムかどうかをチェック
  const isInitialItem = initialChecklistItems.some(item => item.id === id)
  
  if (isInitialItem) {
    // 初期アイテムの場合は確認ダイアログを表示
    if (!confirm('初期項目を削除しますか？\n（削除しても初期項目は再読み込み時に復元できます）')) {
      return
    }
  } else {
    // カスタムアイテムの場合も確認
    if (!confirm('この項目を削除しますか？')) {
      return
    }
  }
  
  // アイテムリストから削除
  checklistItems.value = checklistItems.value.filter(item => item.id !== id)
  
  // カスタムアイテムの場合はローカルストレージからも削除
  if (!isInitialItem) {
    const customItems = loadCustomItems()
    const updatedCustomItems = customItems.filter(item => item.id !== id)
    saveCustomItems(updatedCustomItems)
  }
  
  // チェック状態を削除
  if (checkedItems.value[id]) {
    const newCheckedItems = { ...checkedItems.value }
    delete newCheckedItems[id]
    checkedItems.value = newCheckedItems
    localStorage.removeItem(id)
  }
  
  // カスタムラベルを削除
  if (customLabels.value[id]) {
    const newCustomLabels = { ...customLabels.value }
    delete newCustomLabels[id]
    customLabels.value = newCustomLabels
    localStorage.removeItem(`${id}-label`)
  }
  
  // 並び順を保存
  saveItemOrder()
}

// 表示用のラベルを取得
const getDisplayLabel = (item: ChecklistItem): string => {
  return customLabels.value[item.id] || item.label
}

// 要素の実際の高さ（マージンを含む）を取得
const getElementTotalHeight = (element: HTMLElement): number => {
  const height = element.offsetHeight
  const style = window.getComputedStyle(element)
  const marginTop = parseFloat(style.marginTop)
  const marginBottom = parseFloat(style.marginBottom)
  return height + marginTop + marginBottom
}

// 長押し開始
const handleTouchStart = (e: TouchEvent, itemId: string, index: number) => {
  // 編集中の項目がある場合は長押しを無効化
  if (editingItemId.value !== null) return
  
  // 編集モードでない場合は長押しを無効化
  if (!isEditMode.value) return
  
  if (!e.touches.length) return
  
  dragStartY.value = e.touches[0].clientY
  dragCurrentY.value = e.touches[0].clientY
  dragItemIndex.value = index
  
  // 長押し判定タイマーを開始
  longPressTimer.value = window.setTimeout(() => {
    draggingItemId.value = itemId
    isDragging.value = true
  }, LONG_PRESS_DURATION)
}

// タッチ移動
const handleTouchMove = (e: TouchEvent) => {
  if (!e.touches.length) return
  
  if (!isDragging.value) {
    // 長押し前に移動した場合は長押しをキャンセル
    const moveDistance = Math.abs(e.touches[0].clientY - dragStartY.value)
    if (moveDistance > 10 && longPressTimer.value !== null) {
      window.clearTimeout(longPressTimer.value)
      longPressTimer.value = null
    }
    return
  }
  
  e.preventDefault()
  dragCurrentY.value = e.touches[0].clientY
  
  // ドラッグ中の要素の視覚的な移動量を更新（指に追従させる）
  dragOffsetY.value = dragCurrentY.value - dragStartY.value
  
  // ドラッグ中の要素の位置を更新
  const currentIndex = checklistItems.value.findIndex(item => item.id === draggingItemId.value)
  
  if (currentIndex === -1) return
  
  // 累積ドラッグ距離を計算
  const totalDragDistance = dragCurrentY.value - dragStartY.value
  
  // 実際のアイテムの高さを取得して、移動先のインデックスを計算
  let accumulatedHeight = 0
  let newIndex = dragItemIndex.value
  
  if (totalDragDistance > 0) {
    // 下方向へのドラッグ
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
    // 上方向へのドラッグ
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
  
  // インデックスが変わった場合、アイテムを入れ替え
  if (newIndex !== currentIndex) {
    // 並べ替え前に高さの差分を計算（マージンを含む）
    let heightDiff = 0
    if (newIndex > currentIndex) {
      // 下方向への移動：currentIndex と newIndex の間の要素の高さの合計
      for (let i = currentIndex + 1; i <= newIndex; i++) {
        const itemElement = itemRefs.value[i]
        if (itemElement) {
          heightDiff += getElementTotalHeight(itemElement)
        }
      }
    } else {
      // 上方向への移動：newIndex と currentIndex の間の要素の高さの合計（負の値）
      for (let i = newIndex; i < currentIndex; i++) {
        const itemElement = itemRefs.value[i]
        if (itemElement) {
          heightDiff -= getElementTotalHeight(itemElement)
        }
      }
    }
    
    const items = [...checklistItems.value]
    const [draggedItem] = items.splice(currentIndex, 1)
    items.splice(newIndex, 0, draggedItem)
    checklistItems.value = items
    
    // 新しい位置を基準に更新
    dragStartY.value = dragStartY.value + heightDiff
    dragItemIndex.value = newIndex
    dragOffsetY.value = dragCurrentY.value - dragStartY.value
  }
}

// タッチ終了
const handleTouchEnd = () => {
  // 長押しタイマーをクリア
  if (longPressTimer.value !== null) {
    window.clearTimeout(longPressTimer.value)
    longPressTimer.value = null
  }
  
  // ドラッグ中だった場合、並び順を保存
  if (isDragging.value) {
    saveItemOrder()
  }
  
  // 状態をリセット
  draggingItemId.value = null
  isDragging.value = false
  dragItemIndex.value = -1
  dragStartY.value = 0
  dragCurrentY.value = 0
  dragOffsetY.value = 0
}

// タッチキャンセル
const handleTouchCancel = () => {
  handleTouchEnd()
}

// リセットボタンのハンドラー
const handleReset = () => {
  const resetState: Record<string, boolean> = {}
  checklistItems.value.forEach(item => {
    resetState[item.id] = false
    localStorage.removeItem(item.id)
  })
  checkedItems.value = resetState
}

// 完了数を計算
const completedCount = computed(() => 
  Object.values(checkedItems.value).filter(Boolean).length
)
const totalCount = computed(() => checklistItems.value.length)

// isActiveのcomputed版を作成
const isActiveComputed = computed(() => props.isActive)

// 統計情報が変更されたときに親コンポーネントに通知
watch([completedCount, totalCount, isActiveComputed], () => {
  if (props.isActive) {
    emit('update:stats', { completedCount: completedCount.value, totalCount: totalCount.value })
  }
}, { immediate: true })

// 編集モードを有効化
const enableEditMode = () => {
  isEditMode.value = true
}

// 編集モードを無効化
const disableEditMode = () => {
  isEditMode.value = false
  // 編集中の項目があればキャンセル
  if (editingItemId.value !== null) {
    cancelEdit()
  }
}

// リセット機能と編集モード制御を外部に公開
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
          @click.prevent="handleCheckChange(item.id)"
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
  touch-action: none; /* ブラウザのデフォルトタッチ動作を無効化 */
  user-select: none; /* 長押し時のテキスト選択を防止 */
  -webkit-user-select: none; /* Safari用 */
  -moz-user-select: none; /* Firefox用 */
  -webkit-touch-callout: none; /* iOS用：長押しメニューを無効化 */
  -webkit-tap-highlight-color: transparent; /* タップ時のハイライトを無効化 */
  min-height: 46px;
  box-sizing: border-box;
}

.checklist-item.dragging {
  opacity: 0.9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: none; /* ドラッグ中はトランジションを無効化 */
  /* transformはインラインスタイルで動的に適用されます */
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
  -webkit-touch-callout: none; /* iOS用：長押しメニューを無効化 */
  -webkit-tap-highlight-color: transparent; /* タップ時のハイライトを無効化 */
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
  user-select: text; /* 編集時はテキスト選択を許可 */
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
