<script setup lang="ts">
import { ref } from 'vue'

// ナビゲーション項目の型定義
interface NavItem {
  id: string
  label: string
  icon: string
}

// ナビゲーション項目の定義（スタブ）
const navItems: NavItem[] = [
  { id: 'home', label: 'ホーム', icon: '🏠' },
  { id: 'settings', label: '設定', icon: '⚙️' },
  { id: 'about', label: 'その他', icon: '📌' },
]

// アクティブな項目の管理
const activeItem = ref<string>('home')

// ナビゲーション項目クリックハンドラー（スタブ）
const handleNavClick = (id: string) => {
  activeItem.value = id
  // 今後、画面遷移ロジックをここに追加
}
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-container">
      <button
        v-for="item in navItems"
        :key="item.id"
        :class="['nav-item', { active: activeItem === item.id }]"
        @click="handleNavClick(item.id)"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6c757d;
  border-radius: 10px;
  flex: 1;
  max-width: 120px;
}

.nav-item:hover {
  background: #f8f9fa;
}

.nav-item.active {
  color: #667eea;
  background: #f0f3ff;
}

.nav-icon {
  font-size: 24px;
  line-height: 1;
}

.nav-label {
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

@media (max-width: 600px) {
  .nav-container {
    padding: 6px 0;
  }

  .nav-item {
    padding: 6px 12px;
  }

  .nav-icon {
    font-size: 22px;
  }

  .nav-label {
    font-size: 11px;
  }
}
</style>
