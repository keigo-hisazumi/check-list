<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

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
const editingItemId = ref<string | null>(null)
const editingText = ref<string>('')
const customLabels = ref<Record<string, string>>({})

// ドラッグ&ドロップの状態管理
const draggingItemId = ref<string | null>(null)
const dragStartY = ref<number>(0)
const dragCurrentY = ref<number>(0)
const longPressTimer = ref<number | null>(null)
const isDragging = ref<boolean>(false)
const dragItemIndex = ref<number>(-1)
const LONG_PRESS_DURATION = 500 // 長押し判定時間（ミリ秒）

// ローカルストレージから並び順を読み込む
const loadItemOrder = () => {
  const savedOrder = localStorage.getItem('morning-checklist-order')
  if (savedOrder) {
    try {
      const orderIds: string[] = JSON.parse(savedOrder)
      // 保存された順序に従ってアイテムを並べ替え
      const orderedItems: ChecklistItem[] = []
      orderIds.forEach(id => {
        const item = initialChecklistItems.find(item => item.id === id)
        if (item) {
          orderedItems.push(item)
        }
      })
      // 新しく追加されたアイテムがある場合は末尾に追加
      initialChecklistItems.forEach(item => {
        if (!orderIds.includes(item.id)) {
          orderedItems.push(item)
        }
      })
      checklistItems.value = orderedItems
    } catch (e) {
      console.error('Failed to load item order:', e)
      checklistItems.value = [...initialChecklistItems]
    }
  } else {
    // 保存された順序がない場合は初期順序を使用
    checklistItems.value = [...initialChecklistItems]
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
const startEdit = (id: string) => {
  editingItemId.value = id
  editingText.value = customLabels.value[id] || checklistItems.value.find(item => item.id === id)?.label || ''
}

// 編集をキャンセル
const cancelEdit = () => {
  editingItemId.value = null
  editingText.value = ''
}

// 編集を保存
const saveEdit = (id: string) => {
  const trimmedText = editingText.value.trim()
  if (trimmedText) {
    customLabels.value = {
      ...customLabels.value,
      [id]: trimmedText
    }
    localStorage.setItem(`${id}-label`, trimmedText)
  }
  editingItemId.value = null
  editingText.value = ''
}

// 表示用のラベルを取得
const getDisplayLabel = (item: ChecklistItem): string => {
  return customLabels.value[item.id] || item.label
}

// 長押し開始
const handleTouchStart = (e: TouchEvent, itemId: string, index: number) => {
  // 編集モード中は長押しを無効化
  if (editingItemId.value !== null) return
  
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
  
  // ドラッグ中の要素の位置を更新
  const dragDistance = dragCurrentY.value - dragStartY.value
  const currentIndex = checklistItems.value.findIndex(item => item.id === draggingItemId.value)
  
  if (currentIndex === -1) return
  
  // アイテムの高さを推定（実際の要素から取得するのが理想）
  const itemHeight = 50 // おおよそのアイテムの高さ（padding含む）
  const indexChange = Math.round(dragDistance / itemHeight)
  const newIndex = Math.max(0, Math.min(checklistItems.value.length - 1, dragItemIndex.value + indexChange))
  
  // インデックスが変わった場合、アイテムを入れ替え
  if (newIndex !== currentIndex) {
    const items = [...checklistItems.value]
    const [draggedItem] = items.splice(currentIndex, 1)
    items.splice(newIndex, 0, draggedItem)
    checklistItems.value = items
    dragStartY.value = dragCurrentY.value
    dragItemIndex.value = newIndex
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
}

// タッチキャンセル
const handleTouchCancel = () => {
  handleTouchEnd()
}

// リセットボタンのハンドラー
// チェック状態のみをリセットし、カスタムラベルは保持する
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

// リセット機能を外部に公開
defineExpose({
  handleReset
})
</script>

<template>
  <div class="container">
    <ul class="checklist">
      <li
        v-for="(item, index) in checklistItems"
        :key="item.id"
        :class="['checklist-item', { 
          checked: checkedItems[item.id], 
          editing: editingItemId === item.id,
          dragging: draggingItemId === item.id
        }]"
        @touchstart="(e) => handleTouchStart(e, item.id, index)"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchCancel"
      >
        <button
          v-if="editingItemId !== item.id"
          class="edit-button"
          @click.stop="startEdit(item.id)"
          title="編集"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
          </svg>
        </button>
        <label 
          v-if="editingItemId !== item.id"
          :for="item.id" 
          @click.prevent="handleCheckChange(item.id)"
        >
          {{ getDisplayLabel(item) }}
        </label>
        <button
          v-if="editingItemId !== item.id"
          class="checkbox-button"
          @click.stop="handleCheckChange(item.id)"
          :aria-label="checkedItems[item.id] ? 'チェック済み' : '未チェック'"
        >
          <svg v-if="checkedItems[item.id]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </button>
        
        <div v-if="editingItemId === item.id" class="edit-mode">
          <input
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
}

.checklist-item.dragging {
  opacity: 0.7;
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: none; /* ドラッグ中はトランジションを無効化 */
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

.edit-mode {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.edit-input {
  flex: 1;
  padding: 8px;
  border: 2px solid #667eea;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
}

.save-button,
.cancel-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4em;
  padding: 5px;
  transition: transform 0.2s ease;
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
