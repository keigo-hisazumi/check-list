<script setup lang="ts">
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
  (e: 'delete-checklist', id: string): void
}

const props = withDefaults(defineProps<Props>(), {
  isEditMode: false
})

const emit = defineEmits<Emits>()

// ナビゲーション項目クリックハンドラー
const handleNavClick = (id: string) => {
  emit('nav-change', id)
}

// チェックリスト追加ハンドラー
const handleAddChecklist = () => {
  emit('add-checklist')
}

// チェックリスト削除ハンドラー
const handleDeleteChecklist = (id: string) => {
  emit('delete-checklist', id)
}
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-scroll-container">
      <button
        v-for="item in navItems"
        :key="item.id"
        :class="['nav-item', { active: props.activeItem === item.id }]"
        @click="handleNavClick(item.id)"
      >
        <span class="nav-label">{{ item.label }}</span>
        <button
          v-if="navItems.length > 1 && props.isEditMode"
          class="delete-button"
          @click.stop="handleDeleteChecklist(item.id)"
          title="このチェックリストを削除"
        >
          ✕
        </button>
      </button>
      <button
        class="add-button"
        @click="handleAddChecklist"
        title="新しいチェックリストを追加"
      >
        ＋
      </button>
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
  --nav-bar-height: calc(8px + env(safe-area-inset-top) + 12px + 14px + 12px + 8px);
}

.nav-scroll-container {
  display: flex;
  align-items: center;
  padding: calc(8px + env(safe-area-inset-top)) 8px 8px;
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
  padding: 12px 16px;
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
  margin-bottom: 4px;
}

.delete-button {
  position: absolute;
  top: 2px;
  right: 2px;
  background: rgba(220, 53, 69, 0.1);
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: #dc3545;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.2s ease;
  padding: 0;
  line-height: 1;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.delete-button:hover {
  opacity: 1;
  background: rgba(220, 53, 69, 0.2);
  transform: scale(1.1);
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
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

@media (max-width: 600px) {
  .navigation-bar {
    /* スマートフォン用のナビゲーションバーの高さ */
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 13px + 10px + 6px);
  }

  .nav-scroll-container {
    padding: calc(6px + env(safe-area-inset-top)) 6px 6px;
    gap: 6px;
  }

  .nav-item {
    padding: 10px 12px;
    min-width: 90px;
  }

  .nav-label {
    font-size: 13px;
  }
  
  .add-button {
    padding: 10px 12px;
    min-width: 50px;
  }
}
</style>
