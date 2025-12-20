<script setup lang="ts">
// ナビゲーション項目の型定義
interface NavItem {
  id: string
  label: string
}

// ナビゲーション項目の定義
const navItems: NavItem[] = [
  { id: 'morning', label: '朝やること' },
  { id: 'bag', label: 'カバンの中' },
]

// Props定義
interface Props {
  activeItem?: string
}

// Emits定義
interface Emits {
  (e: 'nav-change', id: string): void
}

const props = withDefaults(defineProps<Props>(), {
  activeItem: 'morning'
})

const emit = defineEmits<Emits>()

// ナビゲーション項目クリックハンドラー
const handleNavClick = (id: string) => {
  emit('nav-change', id)
}
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-container">
      <button
        v-for="item in navItems"
        :key="item.id"
        :class="['nav-item', { active: props.activeItem === item.id }]"
        @click="handleNavClick(item.id)"
      >
        <span class="nav-label">{{ item.label }}</span>
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

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: calc(8px + env(safe-area-inset-top)) 0 8px;
}

.nav-item {
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
  flex: 1;
  max-width: 120px;
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
}

@media (max-width: 600px) {
  .navigation-bar {
    /* スマートフォン用のナビゲーションバーの高さ */
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 13px + 10px + 6px);
  }

  .nav-container {
    padding: calc(6px + env(safe-area-inset-top)) 0 6px;
  }

  .nav-item {
    padding: 10px 12px;
  }

  .nav-label {
    font-size: 13px;
  }
}
</style>
