<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import NavigationBar, { type NavItem } from './components/NavigationBar.vue'
import GenericChecklist from './components/GenericChecklist.vue'
import LoginView from './components/LoginView.vue'
import { useAuth } from './composables/useAuth'
import {
  subscribeChecklistsConfig,
  saveChecklistsConfig,
  deleteChecklistData,
  type ChecklistConfig
} from './firebase/firestore'
import type { Unsubscribe } from 'firebase/firestore'

const { user, authLoading, signOut } = useAuth()

const navBarEl = ref<InstanceType<typeof NavigationBar> | null>(null)
let navBarObserver: ResizeObserver | null = null

// デフォルトのチェックリスト設定
const defaultChecklists: ChecklistConfig[] = [
  {
    id: 'morning',
    label: '朝やること',
    initialItems: [
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
  },
  {
    id: 'bag',
    label: 'カバンの中',
    initialItems: [
      { id: 'bag-mask', label: 'マスク、手帳、教材' },
      { id: 'bag-keys', label: 'カギ、イヤホン、社員証' },
      { id: 'bag-card-case', label: '名刺入れ、クシ、ハンカチ' },
      { id: 'bag-pen-case', label: '筆箱、充電器、財布、(日傘)' },
      { id: 'bag-pouch', label: 'ポーチ類、(化粧ポーチ)' },
      { id: 'bag-lunch', label: '弁当、カトラリー' },
      { id: 'bag-toothbrush', label: '(歯ブラシ)' },
      { id: 'bag-bottle', label: '水筒' },
    ]
  }
]

const checklists = ref<ChecklistConfig[]>([])
const activeView = ref<string>('')
const checklistRefs = ref<Record<string, InstanceType<typeof GenericChecklist> | null>>({})
const stats = ref<{ completedCount: number; totalCount: number }>({
  completedCount: 0,
  totalCount: 0
})
const isEditMode = ref<boolean>(false)

// Firestoreリスナーのアンサブスクライブ関数
let configUnsubscribe: Unsubscribe | null = null
// Firestore書き込み中フラグ（無限ループ防止）
let isSavingToFirestore = false
// Firestoreから受信した最新データのJSON（重複書き込み防止）
let lastFirestoreJson = ''

// ローカルストレージからチェックリスト設定を読み込む
const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('checklists-config')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      checklists.value = parsed
      if (checklists.value.length > 0) {
        activeView.value = checklists.value[0].id
      }
    } catch {
      checklists.value = [...defaultChecklists]
      activeView.value = checklists.value[0].id
    }
  } else {
    checklists.value = [...defaultChecklists]
    activeView.value = checklists.value[0].id
    localStorage.setItem('checklists-config', JSON.stringify(checklists.value))
  }
}

const saveToLocalStorage = () => {
  localStorage.setItem('checklists-config', JSON.stringify(checklists.value))
}

// Firestoreにチェックリスト設定を保存
const saveToFirestore = async (uid: string) => {
  const json = JSON.stringify(checklists.value)
  if (json === lastFirestoreJson) return
  isSavingToFirestore = true
  try {
    await saveChecklistsConfig(uid, checklists.value)
    lastFirestoreJson = json
  } finally {
    isSavingToFirestore = false
  }
}

// Firestoreのリアルタイム購読を開始
const startFirestoreSync = (uid: string) => {
  stopFirestoreSync()
  configUnsubscribe = subscribeChecklistsConfig(uid, (remoteChecklists) => {
    if (isSavingToFirestore) return

    if (remoteChecklists) {
      const json = JSON.stringify(remoteChecklists)
      if (json === lastFirestoreJson) return
      lastFirestoreJson = json
      checklists.value = remoteChecklists
      // activeView が存在しなければ先頭に設定
      if (!checklists.value.find(c => c.id === activeView.value) && checklists.value.length > 0) {
        activeView.value = checklists.value[0].id
      }
    } else {
      // Firestoreにデータがない場合、ローカルストレージのデータをアップロード
      saveToFirestore(uid)
    }
  })
}

const stopFirestoreSync = () => {
  if (configUnsubscribe) {
    configUnsubscribe()
    configUnsubscribe = null
  }
}

// 認証状態が変わったときの処理
watch(user, (newUser, oldUser) => {
  if (newUser) {
    // ログイン時：Firestoreの購読を開始
    startFirestoreSync(newUser.uid)
  } else if (oldUser && !newUser) {
    // ログアウト時：Firestoreの購読を停止してローカルストレージから読み込み
    stopFirestoreSync()
    lastFirestoreJson = ''
    loadFromLocalStorage()
  }
})

// チェックリスト設定が変わったらどちらにも保存
watch(checklists, () => {
  saveToLocalStorage()
  if (user.value && !isSavingToFirestore) {
    saveToFirestore(user.value.uid)
  }
}, { deep: true })

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

onMounted(() => {
  loadFromLocalStorage()
})

onBeforeUnmount(() => {
  navBarObserver?.disconnect()
  stopFirestoreSync()
})

const navItems = computed<NavItem[]>(() =>
  checklists.value.map(c => ({ id: c.id, label: c.label }))
)

const handleStatsUpdate = (newStats: { completedCount: number; totalCount: number }) => {
  stats.value = newStats
}

const handleReset = () => {
  const ref = checklistRefs.value[activeView.value]
  if (ref) ref.handleReset()
}

const handleEdit = () => {
  isEditMode.value = !isEditMode.value
  const ref = checklistRefs.value[activeView.value]
  if (ref) {
    if (isEditMode.value) {
      ref.enableEditMode()
    } else {
      ref.disableEditMode()
    }
  }
}

const handleNavChangeWithEditReset = (viewId: string) => {
  if (isEditMode.value) {
    const currentRef = checklistRefs.value[activeView.value]
    if (currentRef) currentRef.disableEditMode()
    isEditMode.value = false
  }
  handleNavChange(viewId)
}

const currentIndex = computed(() =>
  checklists.value.findIndex(c => c.id === activeView.value)
)

const handleNavChange = (viewId: string) => {
  activeView.value = viewId
  translateX.value = 0
  isTransitioning.value = false
}

const handleResetOrDelete = () => {
  if (isEditMode.value) {
    handleDeleteChecklist(activeView.value)
  } else {
    handleReset()
  }
}

const handleAddChecklist = () => {
  const name = prompt('新しいチェックリストの名前を入力してください：')
  if (!name || !name.trim()) return

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

  if (!confirm(`「${checklist.label}」を削除しますか？\n\n注意: チェックリスト内のすべてのデータが削除されます。`)) {
    return
  }

  const index = checklists.value.findIndex(c => c.id === id)
  checklists.value.splice(index, 1)

  // ローカルストレージから削除
  localStorage.removeItem(`${id}-custom-items`)
  localStorage.removeItem(`${id}-order`)

  // Firestoreからも削除
  if (user.value) {
    deleteChecklistData(user.value.uid, id).catch(console.error)
  }

  if (activeView.value === id) {
    activeView.value = checklists.value[0].id
  }
}

const handleUpdateChecklistName = (id: string, newName: string) => {
  const checklist = checklists.value.find(c => c.id === id)
  if (checklist) {
    checklist.label = newName
  }
}

// スワイプ機能
const touchStartX = ref<number>(0)
const touchStartY = ref<number>(0)
const touchCurrentX = ref<number>(0)
const touchCurrentY = ref<number>(0)
const translateX = ref<number>(0)
const isTransitioning = ref<boolean>(false)
const isSwiping = ref<boolean>(false)
const swipeDirection = ref<'horizontal' | 'vertical' | null>(null)
const swipeThreshold = 100
const directionThreshold = 10
const edgeResistance = 0.3
const transitionDuration = 300

const handleTouchStart = (e: TouchEvent) => {
  if (isEditMode.value) return
  if (e.touches.length > 0) {
    touchStartX.value = e.touches[0].clientX
    touchStartY.value = e.touches[0].clientY
    touchCurrentX.value = e.touches[0].clientX
    touchCurrentY.value = e.touches[0].clientY
    isSwiping.value = true
    swipeDirection.value = null
    isTransitioning.value = false
  }
}

const determineSwipeDirection = (diffX: number, diffY: number, threshold: number): 'horizontal' | 'vertical' | null => {
  const absDiffX = Math.abs(diffX)
  const absDiffY = Math.abs(diffY)
  const totalMovement = Math.hypot(absDiffX, absDiffY)
  if (totalMovement > threshold) {
    return absDiffX > absDiffY ? 'horizontal' : 'vertical'
  }
  return null
}

const handleTouchMove = (e: TouchEvent) => {
  if (isEditMode.value) return
  if (!isSwiping.value || e.touches.length === 0) return

  touchCurrentX.value = e.touches[0].clientX
  touchCurrentY.value = e.touches[0].clientY

  const diffX = touchCurrentX.value - touchStartX.value
  const diffY = touchCurrentY.value - touchStartY.value

  if (swipeDirection.value === null) {
    swipeDirection.value = determineSwipeDirection(diffX, diffY, directionThreshold)
  }

  if (swipeDirection.value === 'vertical') return

  if (swipeDirection.value === 'horizontal') {
    e.preventDefault()
    const currentIdx = currentIndex.value
    if ((currentIdx === 0 && diffX > 0) ||
        (currentIdx === checklists.value.length - 1 && diffX < 0)) {
      translateX.value = diffX * edgeResistance
    } else {
      translateX.value = diffX
    }
  }
}

const resetSwipeState = () => {
  isSwiping.value = false
  swipeDirection.value = null
  translateX.value = 0
}

const handleTouchEnd = () => {
  if (isEditMode.value) {
    isSwiping.value = false
    return
  }
  if (!isSwiping.value) return

  if (swipeDirection.value === 'vertical') {
    resetSwipeState()
    return
  }

  const swipeDistance = touchCurrentX.value - touchStartX.value
  const currentIdx = currentIndex.value

  isTransitioning.value = true

  if (swipeDirection.value === 'horizontal') {
    if (swipeDistance > swipeThreshold && currentIdx > 0) {
      activeView.value = checklists.value[currentIdx - 1].id
    } else if (swipeDistance < -swipeThreshold && currentIdx < checklists.value.length - 1) {
      activeView.value = checklists.value[currentIdx + 1].id
    }
  }

  resetSwipeState()

  setTimeout(() => {
    isTransitioning.value = false
  }, transitionDuration)
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
      @nav-change="handleNavChangeWithEditReset"
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
          transition: isTransitioning ? `transform ${transitionDuration}ms ease-out` : 'none'
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
