<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import NavigationBar, { type NavItem } from './components/NavigationBar.vue'
import GenericChecklist from './components/GenericChecklist.vue'
import LoginView from './components/LoginView.vue'
import { useAuth } from './composables/useAuth'
import { useSwipe, TRANSITION_DURATION } from './composables/useSwipe'
import { useChecklistConfigSync } from './composables/useChecklistConfigSync'
import { deleteChecklistData, type ChecklistConfig } from './firebase/firestore'

const { user, authLoading, signOut } = useAuth()
const { checklists, activeView } = useChecklistConfigSync(user)

const navBarEl = ref<InstanceType<typeof NavigationBar> | null>(null)
let navBarObserver: ResizeObserver | null = null

const checklistRefs = ref<Record<string, InstanceType<typeof GenericChecklist> | null>>({})
const stats = ref<{ completedCount: number; totalCount: number }>({
  completedCount: 0,
  totalCount: 0
})
const isEditMode = ref<boolean>(false)

watch(navBarEl, (el) => {
  navBarObserver?.disconnect()
  navBarObserver = null
  if (el?.$el) {
    const applyNavHeight = () => {
      document.documentElement.style.setProperty(
        '--nav-bar-height',
        `${(el.$el as HTMLElement).offsetHeight}px`
      )
    }
    applyNavHeight()
    navBarObserver = new ResizeObserver(applyNavHeight)
    navBarObserver.observe(el.$el as HTMLElement)
  }
})

onBeforeUnmount(() => {
  navBarObserver?.disconnect()
})

const navItems = computed<NavItem[]>(() =>
  checklists.value.map(c => ({ id: c.id, label: c.label }))
)

const currentIndex = computed(() =>
  checklists.value.findIndex(c => c.id === activeView.value)
)

const navigateTo = (index: number) => {
  if (isEditMode.value) {
    checklistRefs.value[activeView.value]?.disableEditMode()
    isEditMode.value = false
  }
  activeView.value = checklists.value[index].id
  translateX.value = 0
  isTransitioning.value = false
}

const { translateX, isTransitioning, handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(
  currentIndex,
  computed(() => checklists.value.length),
  isEditMode,
  navigateTo
)

const handleStatsUpdate = (newStats: { completedCount: number; totalCount: number }) => {
  stats.value = newStats
}

const handleReset = () => {
  checklistRefs.value[activeView.value]?.handleReset()
}

const handleEdit = () => {
  isEditMode.value = !isEditMode.value
  const ref = checklistRefs.value[activeView.value]
  if (ref) {
    if (isEditMode.value) ref.enableEditMode()
    else ref.disableEditMode()
  }
}

const handleNavChange = (viewId: string) => {
  const index = checklists.value.findIndex(c => c.id === viewId)
  if (index !== -1) navigateTo(index)
}

const handleResetOrDelete = () => {
  if (isEditMode.value) handleDeleteChecklist(activeView.value)
  else handleReset()
}

const handleAddChecklist = () => {
  const name = prompt('新しいチェックリストの名前を入力してください：')
  if (!name?.trim()) return
  const newId = `checklist-${Date.now()}`
  const newChecklist: ChecklistConfig = {
    id: newId,
    label: name.trim(),
    initialItems: []
  }
  checklists.value.push(newChecklist)
  activeView.value = newId
}

const handleDeleteChecklist = (id: string) => {
  if (checklists.value.length <= 1) {
    alert('最後のチェックリストは削除できません')
    return
  }
  const checklist = checklists.value.find(c => c.id === id)
  if (!checklist) return
  if (!confirm(`「${checklist.label}」を削除しますか？\n\n注意: チェックリスト内のすべてのデータが削除されます。`)) return

  const index = checklists.value.findIndex(c => c.id === id)
  checklists.value.splice(index, 1)
  localStorage.removeItem(`${id}-custom-items`)
  localStorage.removeItem(`${id}-order`)
  if (user.value) deleteChecklistData(user.value.uid, id).catch(console.error)
  if (activeView.value === id) activeView.value = checklists.value[0].id
}

const handleUpdateChecklistName = (id: string, newName: string) => {
  const checklist = checklists.value.find(c => c.id === id)
  if (checklist) checklist.label = newName
}
</script>

<template>
  <!-- ローディング中 -->
  <div v-if="authLoading" class="loading-screen">
    <div class="loading-spinner"></div>
  </div>

  <!-- 未ログイン -->
  <LoginView v-else-if="!user" />

  <!-- ログイン済み -->
  <div
    v-else
    class="app"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <NavigationBar
      ref="navBarEl"
      :active-item="activeView"
      :nav-items="navItems"
      :is-edit-mode="isEditMode"
      :user="user"
      :stats="stats"
      @nav-change="handleNavChange"
      @add-checklist="handleAddChecklist"
      @update-checklist-name="handleUpdateChecklistName"
      @sign-out="signOut"
      @edit="handleEdit"
      @reset-or-delete="handleResetOrDelete"
    />
    <div class="view-container">
      <div
        class="view-slider"
        :style="{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms ease-out` : 'none'
        }"
      >
        <div
          v-for="checklist in checklists"
          :key="checklist.id"
          class="view-wrapper"
        >
          <GenericChecklist
            :ref="el => { checklistRefs[checklist.id] = el as InstanceType<typeof GenericChecklist> | null }"
            :checklist-id="checklist.id"
            :initial-items="checklist.initialItems"
            :is-active="activeView === checklist.id"
            :uid="user.uid"
            @update:stats="handleStatsUpdate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ローディング画面 */
.loading-screen {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  touch-action: pan-y;
  position: relative;
}

.view-container {
  position: absolute;
  top: var(--nav-bar-height);
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.view-slider {
  display: flex;
  width: 100%;
  will-change: transform;
}

.view-wrapper {
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100%;
}

@media (max-width: 600px) {
  .view-wrapper {
    padding: 0;
  }
}
</style>
