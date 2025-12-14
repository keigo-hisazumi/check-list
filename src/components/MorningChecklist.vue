<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

// Props定義
interface Props {
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

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
    <div class="bottom-bar" v-show="props.isActive">
      <div class="progress">
        {{ completedCount }} / {{ totalCount }} 完了
      </div>
      <button class="reset-button" @click="handleReset">
        すべてリセット
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  padding-bottom: 140px; /* 下部バーの高さ分の余白 */
  max-width: 600px;
  width: 100%;
  margin-top: calc(80px + env(safe-area-inset-top)); /* ナビゲーションバーとの重なりを防ぐ */
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

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  padding: 15px 20px calc(15px + env(safe-area-inset-bottom));
  z-index: 999;
}

.progress {
  text-align: center;
  font-size: 1.2em;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 10px;
}

.reset-button {
  width: 100%;
  padding: 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reset-button:hover {
  background: #5568d3;
}

@media (max-width: 600px) {
  .container {
    border-radius: 0;
    box-shadow: none;
    padding: 16px;
    padding-bottom: 140px;
    min-height: 100vh;
    margin-top: calc(60px + env(safe-area-inset-top)); /* ナビゲーションバーの高さに合わせて調整 */
  }

  .checklist-item {
    padding: 12px;
    margin-bottom: 8px;
  }

  .checklist-item label {
    font-size: 1em;
  }

  .bottom-bar {
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  }

  .reset-button {
    padding: 12px;
  }

  .progress {
    font-size: 1.1em;
    margin-bottom: 8px;
  }
}
</style>
