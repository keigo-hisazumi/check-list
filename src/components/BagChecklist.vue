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

// カバンの中の項目の定義
const checklistItems: ChecklistItem[] = [
  { id: 'bag-mask', label: 'マスク、手帳、教材' },
  { id: 'bag-keys', label: 'カギ、イヤホン、社員証' },
  { id: 'bag-card-case', label: '名刺入れ、クシ、ハンカチ' },
  { id: 'bag-pen-case', label: '筆箱、充電器、財布、(日傘)' },
  { id: 'bag-pouch', label: 'ポーチ類、(化粧ポーチ)' },
  { id: 'bag-lunch', label: '弁当、カトラリー' },
  { id: 'bag-toothbrush', label: '(歯ブラシ)' },
  { id: 'bag-bottle', label: '水筒' },
]

// チェック状態の管理
const checkedItems = ref<Record<string, boolean>>({})

// 編集状態の管理
const editingItemId = ref<string | null>(null)
const editingText = ref<string>('')
const customLabels = ref<Record<string, string>>({})

// ローカルストレージからチェック状態を読み込む
const loadCheckedState = () => {
  const saved: Record<string, boolean> = {}
  checklistItems.forEach(item => {
    const value = localStorage.getItem(item.id)
    saved[item.id] = value === 'true'
  })
  checkedItems.value = saved
}

// ローカルストレージからカスタムラベルを読み込む
const loadCustomLabels = () => {
  const saved: Record<string, string> = {}
  checklistItems.forEach(item => {
    const value = localStorage.getItem(`${item.id}-label`)
    if (value) {
      saved[item.id] = value
    }
  })
  customLabels.value = saved
}

// コンポーネントマウント時に状態を読み込む
onMounted(() => {
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
  editingText.value = customLabels.value[id] || checklistItems.find(item => item.id === id)?.label || ''
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

// リセットボタンのハンドラー
const handleReset = () => {
  const resetState: Record<string, boolean> = {}
  checklistItems.forEach(item => {
    resetState[item.id] = false
    localStorage.removeItem(item.id)
    localStorage.removeItem(`${item.id}-label`)
  })
  checkedItems.value = resetState
  customLabels.value = {}
}

// 完了数を計算
const completedCount = computed(() => 
  Object.values(checkedItems.value).filter(Boolean).length
)
const totalCount = checklistItems.length

// isActiveのcomputed版を作成
const isActiveComputed = computed(() => props.isActive)

// 統計情報が変更されたときに親コンポーネントに通知
watch([completedCount, isActiveComputed], () => {
  if (props.isActive) {
    emit('update:stats', { completedCount: completedCount.value, totalCount })
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
        v-for="item in checklistItems"
        :key="item.id"
        :class="['checklist-item', { checked: checkedItems[item.id], editing: editingItemId === item.id }]"
      >
        <button
          v-if="editingItemId !== item.id"
          class="edit-button"
          @click.stop="startEdit(item.id)"
          title="編集"
        >
          ✏️
        </button>
        <label 
          v-if="editingItemId !== item.id"
          :for="item.id" 
          @click.prevent="handleCheckChange(item.id)"
        >
          {{ getDisplayLabel(item) }}
        </label>
        <input
          v-if="editingItemId !== item.id"
          type="checkbox"
          :id="item.id"
          :checked="checkedItems[item.id]"
          @click.stop="handleCheckChange(item.id)"
        />
        
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
  padding: 15px;
  margin-bottom: 10px;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.checklist-item:hover {
  background: #e9ecef;
}

.checklist-item.checked {
  background: #d4edda;
  opacity: 0.7;
}

.checklist-item.checked label {
  text-decoration: line-through;
  color: #6c757d;
}

.checklist-item input[type="checkbox"] {
  width: 24px;
  height: 24px;
  margin-left: 15px;
  cursor: pointer;
  accent-color: #667eea;
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
  font-size: 1.2em;
  padding: 5px;
  margin-right: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.edit-button:hover {
  opacity: 1;
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
    padding: 12px;
    margin-bottom: 8px;
  }

  .checklist-item label {
    font-size: 1em;
  }
}
</style>
