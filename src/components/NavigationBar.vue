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

// 編集モードが変更されたときの処理
watch(() => props.isEditMode, async (newValue) => {
  if (newValue) {
    // 編集モードに入ったら自動的に編集開始
    const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
    if (activeNavItem) {
      editingText.value = activeNavItem.label
      await nextTick()
      inputRef.value?.focus()
    }
  } else {
    // 編集モードを終了するときに変更を保存
    const trimmedText = editingText.value.trim()
    if (trimmedText) {
      const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
      // 元の名前と異なる場合のみ更新
      if (activeNavItem && trimmedText !== activeNavItem.label) {
        emit('update-checklist-name', props.activeItem, trimmedText)
      }
    }
    editingText.value = ''
  }
})

// アクティブアイテムが変更されたときの処理
watch(() => props.activeItem, async () => {
  if (props.isEditMode) {
    // 編集モード中にアクティブアイテムが変更された場合、新しいアイテムの名前を設定
    const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
    if (activeNavItem) {
      editingText.value = activeNavItem.label
      await nextTick()
      inputRef.value?.focus()
    }
  }
})
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-scroll-container">
      <!-- 編集モードの場合は入力フィールドを表示 -->
      <div v-if="props.isEditMode" class="edit-name-container">
        <input
          ref="inputRef"
          v-model="editingText"
          type="text"
          class="edit-name-input"
          aria-label="チェックリスト名を編集"
          @click.stop
        />
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
}
</style>
