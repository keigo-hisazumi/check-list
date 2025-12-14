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

// 朝やることの項目の定義
const checklistItems: ChecklistItem[] = [
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

// チェック状態の管理
const checkedItems = ref<Record<string, boolean>>({})

// ローカルストレージからチェック状態を読み込む
const loadCheckedState = () => {
  const saved: Record<string, boolean> = {}
  checklistItems.forEach(item => {
    const value = localStorage.getItem(item.id)
    saved[item.id] = value === 'true'
  })
  checkedItems.value = saved
}

// コンポーネントマウント時に状態を読み込む
onMounted(() => {
  loadCheckedState()
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

// リセットボタンのハンドラー
const handleReset = () => {
  const resetState: Record<string, boolean> = {}
  checklistItems.forEach(item => {
    resetState[item.id] = false
    localStorage.removeItem(item.id)
  })
  checkedItems.value = resetState
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
        :class="['checklist-item', { checked: checkedItems[item.id] }]"
        @click="handleCheckChange(item.id)"
      >
        <input
          type="checkbox"
          :id="item.id"
          :checked="checkedItems[item.id]"
          @click.stop="handleCheckChange(item.id)"
        />
        <label :for="item.id" @click.prevent>
          {{ item.label }}
        </label>
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
  margin-right: 15px;
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
