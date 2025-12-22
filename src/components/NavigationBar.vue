<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

// ナビゲーション項目の型定義
export interface NavItem {
  id: string
  label: string
}

// Props定義
interface Props {
  activeItem: string  // 必須プロパティ：現在アクティブなチェックリストのID
  navItems: NavItem[]
  isEditMode?: boolean  // 編集モードかどうか
}

// Emits定義
interface Emits {
  (e: 'nav-change', id: string): void
  (e: 'add-checklist'): void
  (e: 'update-checklist-name', id: string, newName: string): void
}

const props = withDefaults(defineProps<Props>(), {
  isEditMode: false
})

const emit = defineEmits<Emits>()

// 編集中のテキスト
const editingText = ref<string>('')
// 編集中かどうか
const isEditing = ref<boolean>(false)
// 入力フィールドへの参照
const inputRef = ref<HTMLInputElement | null>(null)

// ナビゲーション項目クリックハンドラー
const handleNavClick = (id: string) => {
  emit('nav-change', id)
}

// チェックリスト追加ハンドラー
const handleAddChecklist = () => {
  emit('add-checklist')
}

// 編集モード開始
const startEditingName = async () => {
  const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
  if (activeNavItem) {
    editingText.value = activeNavItem.label
    isEditing.value = true
    await nextTick()
    inputRef.value?.focus()
  }
}

// 編集を保存
const saveEdit = () => {
  const trimmedText = editingText.value.trim()
  if (trimmedText) {
    emit('update-checklist-name', props.activeItem, trimmedText)
    isEditing.value = false
    editingText.value = ''
  } else {
    // 空の場合は編集をキャンセル
    cancelEdit()
  }
}

// 編集をキャンセル
const cancelEdit = () => {
  isEditing.value = false
  editingText.value = ''
}

// 編集モードが変更されたら編集状態をリセット
watch(() => props.isEditMode, (newValue) => {
  if (!newValue) {
    isEditing.value = false
    editingText.value = ''
  }
})

// アクティブアイテムが変更されたら編集状態をリセット
watch(() => props.activeItem, () => {
  isEditing.value = false
  editingText.value = ''
})
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-scroll-container">
      <!-- 編集モードでアクティブな項目の場合は編集UI表示 -->
      <div v-if="props.isEditMode && isEditing" class="edit-name-container">
        <input
          ref="inputRef"
          v-model="editingText"
          type="text"
          class="edit-name-input"
          aria-label="チェックリスト名を編集"
          @keyup.enter="saveEdit"
          @keyup.esc="cancelEdit"
          @click.stop
        />
        <button
          class="save-name-button"
          aria-label="変更を保存"
          @click="saveEdit"
          title="保存"
        >
          ✓
        </button>
        <button
          class="cancel-name-button"
          aria-label="編集をキャンセル"
          @click="cancelEdit"
          title="キャンセル"
        >
          ✕
        </button>
      </div>
      <!-- 通常のナビゲーションUI -->
      <template v-else>
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="['nav-item', { active: props.activeItem === item.id }]"
          @click="handleNavClick(item.id)"
        >
          <span class="nav-label">{{ item.label }}</span>
        </button>
        <!-- 編集モードでアクティブな項目の場合は編集ボタンを表示 -->
        <button
          v-if="props.isEditMode"
          class="edit-name-trigger-button"
          @click="startEditingName"
          title="チェックリスト名を編集"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
          </svg>
        </button>
        <button
          class="add-button"
          @click="handleAddChecklist"
          title="新しいチェックリストを追加"
        >
          ＋
        </button>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  /* 視覚的な分離を強化するためのぼかし効果 */
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* ナビゲーションバーの高さをCSS変数として定義 */
  /* 計算: top padding (6px) + safe area + content top padding (10px) + font height (14px) + content bottom padding (10px) + bottom padding (6px) = 45px */
  --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 14px + 10px + 6px);
}

.nav-scroll-container {
  display: flex;
  align-items: center;
  padding: calc(6px + env(safe-area-inset-top)) 8px 6px;
  overflow-x: auto;
  gap: 8px;
  /* スクロールバーを非表示にする */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.nav-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6c757d;
  border-radius: 10px;
  flex-shrink: 0;
  min-width: 100px;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.nav-item.active {
  color: #667eea;
  background: #f0f3ff;
}

.nav-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: none;
  border: none;
  border-radius: 10px;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  min-width: 60px;
  font-size: 20px;
  font-weight: bold;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.add-button:hover {
  background: #f0f3ff;
  transform: scale(1.05);
}

.edit-name-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  max-width: 600px;
}

.edit-name-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #667eea;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  background: white;
  color: #333;
  min-width: 150px;
}

.save-name-button,
.cancel-name-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 4px 8px;
  transition: transform 0.2s ease;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  border-radius: 8px;
}

.save-name-button {
  color: #28a745;
}

.save-name-button:hover {
  transform: scale(1.2);
  background: #e8f5e9;
}

.cancel-name-button {
  color: #dc3545;
}

.cancel-name-button:hover {
  transform: scale(1.2);
  background: #ffebee;
}

.edit-name-trigger-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: none;
  border: none;
  border-radius: 10px;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.edit-name-trigger-button:hover {
  background: #f0f3ff;
  transform: scale(1.05);
}

.edit-name-trigger-button svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 600px) {
  .navigation-bar {
    /* スマートフォン用のナビゲーションバーの高さ */
    /* 計算: top padding (6px) + safe area + content top padding (8px) + font height (13px) + content bottom padding (8px) + bottom padding (6px) = 41px */
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 8px + 13px + 8px + 6px);
  }

  .nav-scroll-container {
    padding: calc(6px + env(safe-area-inset-top)) 6px 6px;
    gap: 6px;
  }

  .nav-item {
    padding: 8px 12px;
    min-width: 90px;
  }

  .nav-label {
    font-size: 13px;
  }
  
  .add-button {
    padding: 2px 12px;
    min-width: 50px;
  }

  .edit-name-input {
    font-size: 13px;
    padding: 6px 10px;
    min-width: 120px;
  }

  .save-name-button,
  .cancel-name-button {
    font-size: 18px;
    padding: 2px 6px;
    min-width: 28px;
  }
}
</style>
