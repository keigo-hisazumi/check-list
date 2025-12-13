<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import NavigationBar from './components/NavigationBar.vue'

// チェックリスト項目の型定義
interface ChecklistItem {
  id: string
  label: string
}

// チェックリスト項目の定義
const checklistItems: ChecklistItem[] = [
  { id: 'mask', label: 'マスク、手帳、教材' },
  { id: 'keys', label: 'カギ、イヤホン、社員証' },
  { id: 'card-case', label: '名刺入れ、クシ、ハンカチ' },
  { id: 'pen-case', label: '筆箱、充電器、財布、(日傘)' },
  { id: 'pouch', label: 'ポーチ類、(化粧ポーチ)' },
  { id: 'lunch', label: '弁当、カトラリー' },
  { id: 'toothbrush', label: '(歯ブラシ)' },
  { id: 'bottle', label: '水筒' },
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
  <div class="app">
    <div class="container">
      <h1>📋 チェックリスト</h1>
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
      <div class="progress">
        {{ completedCount }} / {{ totalCount }} 完了
      </div>
      <button class="reset-button" @click="handleReset">
        すべてリセット
      </button>
    </div>
    <NavigationBar />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  margin-bottom: calc(100px + env(safe-area-inset-bottom)); /* ナビゲーションバーとの重なりを防ぐ（セーフエリア考慮） */
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  margin-top: 0;
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

.reset-button {
  margin-top: 30px;
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

.progress {
  margin-top: 20px;
  text-align: center;
  font-size: 1.2em;
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 600px) {
  .app {
    padding: 0;
    align-items: flex-start;
  }

  .container {
    border-radius: 0;
    box-shadow: none;
    padding: 16px;
    min-height: 100vh;
    margin-bottom: calc(80px + env(safe-area-inset-bottom)); /* ナビゲーションバーの高さに合わせて調整（セーフエリア考慮） */
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .checklist-item {
    padding: 12px;
    margin-bottom: 8px;
  }

  .checklist-item label {
    font-size: 1em;
  }

  .reset-button {
    margin-top: 20px;
    padding: 12px;
  }

  .progress {
    margin-top: 16px;
    font-size: 1.1em;
  }
}
</style>
