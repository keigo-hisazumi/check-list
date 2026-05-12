<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import type { User } from 'firebase/auth'

export interface NavItem {
  id: string
  label: string
}

interface Props {
  activeItem: string
  navItems: NavItem[]
  isEditMode?: boolean
  user?: User | null
}

interface Emits {
  (e: 'nav-change', id: string): void
  (e: 'add-checklist'): void
  (e: 'update-checklist-name', id: string, newName: string): void
  (e: 'sign-out'): void
}

const props = withDefaults(defineProps<Props>(), {
  isEditMode: false,
  user: null
})

const emit = defineEmits<Emits>()

const editingText = ref<string>('')
const inputRef = ref<HTMLInputElement | null>(null)
const isMenuOpen = ref(false)

const handleNavClick = (id: string) => {
  emit('nav-change', id)
}

const handleAddChecklist = () => {
  emit('add-checklist')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleSignOut = () => {
  isMenuOpen.value = false
  emit('sign-out')
}

watch(() => props.isEditMode, async (newValue) => {
  if (newValue) {
    const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
    if (activeNavItem) {
      editingText.value = activeNavItem.label
      await nextTick()
      inputRef.value?.focus()
    }
  } else {
    const trimmedText = editingText.value.trim()
    if (trimmedText) {
      const activeNavItem = props.navItems.find(item => item.id === props.activeItem)
      if (activeNavItem && trimmedText !== activeNavItem.label) {
        emit('update-checklist-name', props.activeItem, trimmedText)
      }
    }
    editingText.value = ''
  }
})

watch(() => props.activeItem, async () => {
  if (props.isEditMode) {
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
        <!-- スクロール可能なナビ部分 -->
        <div class="nav-items-scroll">
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
        </div>

        <!-- 右端に固定表示するユーザーアイコン -->
        <div v-if="props.user" class="user-area">
          <button
            class="user-button"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen"
            aria-label="ユーザーメニュー"
          >
            <img
              v-if="props.user.photoURL"
              :src="props.user.photoURL"
              :alt="props.user.displayName ?? 'user'"
              class="user-avatar"
            />
            <span v-else class="user-avatar-fallback">
              {{ (props.user.displayName ?? props.user.email ?? '?')[0].toUpperCase() }}
            </span>
          </button>

          <!-- サブメニュー -->
          <Transition name="menu">
            <div v-if="isMenuOpen" class="user-menu">
              <div class="user-menu-id">{{ props.user.email ?? props.user.displayName }}</div>
              <div class="user-menu-divider"></div>
              <button class="user-menu-signout" @click="handleSignOut">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                </svg>
                ログアウト
              </button>
            </div>
          </Transition>

          <!-- メニュー外クリックで閉じる -->
          <div v-if="isMenuOpen" class="menu-backdrop" @click="closeMenu"></div>
        </div>
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
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 14px + 10px + 6px);
}

.nav-scroll-container {
  display: flex;
  align-items: center;
  padding: calc(6px + env(safe-area-inset-top)) 8px 6px;
  gap: 0;
}

/* スクロール可能なナビ部分 */
.nav-items-scroll {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  min-width: 0;
}

.nav-items-scroll::-webkit-scrollbar {
  display: none;
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.add-button:hover {
  background: #f0f3ff;
  transform: scale(1.05);
}

/* ユーザーエリア（右端固定） */
.user-area {
  position: relative;
  flex-shrink: 0;
  margin-left: 8px;
}

.user-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.2s ease;
}

.user-button:hover {
  opacity: 0.8;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #667eea;
}

.user-avatar-fallback {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #667eea;
}

/* サブメニュー */
.user-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  overflow: hidden;
  z-index: 2000;
}

.user-menu-id {
  padding: 14px 16px 10px;
  font-size: 0.82em;
  color: #888;
  word-break: break-all;
  line-height: 1.4;
}

.user-menu-divider {
  height: 1px;
  background: #f0f0f0;
  margin: 0;
}

.user-menu-signout {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  font-size: 0.95em;
  color: #dc3545;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.user-menu-signout:hover {
  background: #fff5f5;
}

/* メニュー外クリック検知用オーバーレイ */
.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1999;
}

/* メニューのアニメーション */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.edit-name-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
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
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 8px + 13px + 8px + 6px);
  }

  .nav-scroll-container {
    padding: calc(6px + env(safe-area-inset-top)) 6px 6px;
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
