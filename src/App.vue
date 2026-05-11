<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import NavigationBar, { type NavItem } from './components/NavigationBar.vue'
import GenericChecklist from './components/GenericChecklist.vue'

// チェックリスト設定の型定義
interface ChecklistConfig {
  id: string
  label: string
  initialItems: ChecklistItem[]
}

// チェックリスト項目の型定義
interface ChecklistItem {
  id: string
  label: string
}

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

// チェックリストの設定を管理
const checklists = ref<ChecklistConfig[]>([])

// アクティブなビューの管理
const activeView = ref<string>('')

// コンポーネントのrefを管理（動的に生成）
const checklistRefs = ref<Record<string, InstanceType<typeof GenericChecklist> | null>>({})

// view-wrapperのrefを管理（スクロール位置リセット用）
const viewWrapperRefs = ref<Record<string, HTMLElement | null>>({})

// 統計情報の管理
const stats = ref<{ completedCount: number; totalCount: number }>({
  completedCount: 0,
  totalCount: 0
})

// 編集モードの管理
const isEditMode = ref<boolean>(false)

// ローカルストレージからチェックリスト設定を読み込む
const loadChecklists = () => {
  const saved = localStorage.getItem('checklists-config')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      checklists.value = parsed
      // アクティブビューを最初のチェックリストに設定
      if (checklists.value.length > 0) {
        activeView.value = checklists.value[0].id
      }
    } catch (e) {
      console.error('Failed to load checklists config:', e)
      checklists.value = [...defaultChecklists]
      activeView.value = checklists.value[0].id
    }
  } else {
    // 初回起動時はデフォルトを使用
    checklists.value = [...defaultChecklists]
    activeView.value = checklists.value[0].id
    saveChecklists()
  }
}

// チェックリスト設定をローカルストレージに保存
const saveChecklists = () => {
  localStorage.setItem('checklists-config', JSON.stringify(checklists.value))
}

// チェックリスト設定が変更されたら保存
watch(checklists, () => {
  saveChecklists()
}, { deep: true })

// フッター要素の ref と ResizeObserver
const bottomBarEl = ref<HTMLElement | null>(null)
let bottomBarObserver: ResizeObserver | null = null

// コンポーネントマウント時にチェックリストを読み込む
onMounted(() => {
  loadChecklists()

  // フッターの実際の高さを CSS 変数に反映し、view-container の bottom を動的に設定する
  if (bottomBarEl.value) {
    const applyHeight = () => {
      if (bottomBarEl.value) {
        document.documentElement.style.setProperty(
          '--bottom-bar-height',
          `${bottomBarEl.value.offsetHeight}px`
        )
      }
    }
    applyHeight()
    bottomBarObserver = new ResizeObserver(applyHeight)
    bottomBarObserver.observe(bottomBarEl.value)
  }
})

onBeforeUnmount(() => {
  bottomBarObserver?.disconnect()
})

// ナビゲーション項目を計算
const navItems = computed<NavItem[]>(() => 
  checklists.value.map(c => ({ id: c.id, label: c.label }))
)

// 統計情報の更新ハンドラー
const handleStatsUpdate = (newStats: { completedCount: number; totalCount: number }) => {
  stats.value = newStats
}

// リセットボタンのハンドラー
const handleReset = () => {
  const ref = checklistRefs.value[activeView.value]
  if (ref) {
    ref.handleReset()
  }
}

// 編集ボタンのハンドラー
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

// ビュー切り替え時に編集モードをリセット
const handleNavChangeWithEditReset = (viewId: string) => {
  // 編集モードをオフにする
  if (isEditMode.value) {
    const currentRef = checklistRefs.value[activeView.value]
    if (currentRef) {
      currentRef.disableEditMode()
    }
    isEditMode.value = false
  }
  
  // 元のナビゲーション処理を実行
  handleNavChange(viewId)
}

// 現在のインデックスを計算
const currentIndex = computed(() => 
  checklists.value.findIndex(c => c.id === activeView.value)
)

// ナビゲーション変更ハンドラー
const handleNavChange = (viewId: string) => {
  activeView.value = viewId
  translateX.value = 0
  isTransitioning.value = false
  // 切り替え先のビューのスクロール位置をトップにリセット
  const wrapper = viewWrapperRefs.value[viewId]
  if (wrapper) {
    wrapper.scrollTop = 0
  }
}

// リセットまたはリスト削除ボタンのハンドラー
const handleResetOrDelete = () => {
  if (isEditMode.value) {
    // 編集モード時はリストを削除
    handleDeleteChecklist(activeView.value)
  } else {
    // 通常モード時はリセット
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
  // 新しいチェックリストに切り替え
  activeView.value = newId
}

// チェックリストを削除
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
  
  // チェックリストを削除
  const index = checklists.value.findIndex(c => c.id === id)
  checklists.value.splice(index, 1)
  
  // ローカルストレージからチェックリストデータを削除
  // カスタムアイテム
  localStorage.removeItem(`${id}-custom-items`)
  // 並び順
  localStorage.removeItem(`${id}-order`)
  
  // アクティブビューが削除されたチェックリストだった場合、最初のチェックリストに切り替え
  if (activeView.value === id) {
    activeView.value = checklists.value[0].id
  }
}

// チェックリスト名を更新
const handleUpdateChecklistName = (id: string, newName: string) => {
  const checklist = checklists.value.find(c => c.id === id)
  if (checklist) {
    checklist.label = newName
    // チェックリスト設定の変更がwatchで自動的に保存される
  }
}

// スワイプ機能の実装
const touchStartX = ref<number>(0)
const touchStartY = ref<number>(0)
const touchCurrentX = ref<number>(0)
const touchCurrentY = ref<number>(0)
const translateX = ref<number>(0)
const isTransitioning = ref<boolean>(false)
const isSwiping = ref<boolean>(false)
const swipeDirection = ref<'horizontal' | 'vertical' | null>(null)
const swipeThreshold = 100 // 画面遷移を確定するしきい値（ピクセル）
const directionThreshold = 10 // スワイプ方向を判定するしきい値（ピクセル）
const edgeResistance = 0.3 // 端での抵抗感の係数
const transitionDuration = 300 // トランジション時間（ミリ秒）

// タッチ開始イベント
const handleTouchStart = (e: TouchEvent) => {
  // 編集モード中は横スワイプを無効化
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

// スワイプ方向を判定する関数
const determineSwipeDirection = (diffX: number, diffY: number, threshold: number): 'horizontal' | 'vertical' | null => {
  const absDiffX = Math.abs(diffX)
  const absDiffY = Math.abs(diffY)

  // 十分な移動量がある場合にのみ方向を判定
  const totalMovement = Math.hypot(absDiffX, absDiffY)
  if (totalMovement > threshold) {
    // 横方向の移動が縦方向より大きい場合は横スワイプ
    return absDiffX > absDiffY ? 'horizontal' : 'vertical'
  }

  return null
}

// タッチ移動イベント - リアルタイムでスライド
const handleTouchMove = (e: TouchEvent) => {
  // 編集モード中は横スワイプを無効化
  if (isEditMode.value) return
  
  if (!isSwiping.value || e.touches.length === 0) return

  touchCurrentX.value = e.touches[0].clientX
  touchCurrentY.value = e.touches[0].clientY

  const diffX = touchCurrentX.value - touchStartX.value
  const diffY = touchCurrentY.value - touchStartY.value

  // スワイプ方向がまだ判定されていない場合、判定する
  if (swipeDirection.value === null) {
    swipeDirection.value = determineSwipeDirection(diffX, diffY, directionThreshold)
  }

  // 縦スクロールの場合は、スワイプ処理をスキップ
  if (swipeDirection.value === 'vertical') {
    return
  }

  // 横スワイプの場合のみ、スライド処理を実行
  if (swipeDirection.value === 'horizontal') {
    // 横スワイプの場合は縦スクロールを防止
    e.preventDefault()

    const currentIdx = currentIndex.value

    // 端の画面では逆方向のスワイプを制限
    if ((currentIdx === 0 && diffX > 0) ||
        (currentIdx === checklists.value.length - 1 && diffX < 0)) {
      // 端での抵抗感を表現（スワイプ量を減衰）
      translateX.value = diffX * edgeResistance
    } else {
      translateX.value = diffX
    }
  }
}

// スワイプ状態をリセットするヘルパー関数
const resetSwipeState = () => {
  isSwiping.value = false
  swipeDirection.value = null
  translateX.value = 0
}

// タッチ終了イベント
const handleTouchEnd = () => {
  // 編集モード中は横スワイプを無効化
  if (isEditMode.value) {
    isSwiping.value = false
    return
  }
  
  if (!isSwiping.value) return

  // 縦スクロールの場合は、スワイプ処理をスキップ
  if (swipeDirection.value === 'vertical') {
    resetSwipeState()
    return
  }

  const swipeDistance = touchCurrentX.value - touchStartX.value
  const currentIdx = currentIndex.value

  isTransitioning.value = true

  // 横スワイプの場合のみ、画面遷移を実行
  if (swipeDirection.value === 'horizontal') {
    let nextViewId: string | null = null
    // 右スワイプ（前の画面へ）
    if (swipeDistance > swipeThreshold && currentIdx > 0) {
      nextViewId = checklists.value[currentIdx - 1].id
    }
    // 左スワイプ（次の画面へ）
    else if (swipeDistance < -swipeThreshold && currentIdx < checklists.value.length - 1) {
      nextViewId = checklists.value[currentIdx + 1].id
    }
    if (nextViewId) {
      activeView.value = nextViewId
      // 切り替え先のスクロール位置をトップにリセット
      const wrapper = viewWrapperRefs.value[nextViewId]
      if (wrapper) {
        wrapper.scrollTop = 0
      }
    }
  }

  // スワイプ状態をリセット
  resetSwipeState()

  // トランジション完了後にフラグをリセット
  setTimeout(() => {
    isTransitioning.value = false
  }, transitionDuration)
}
</script>

<template>
  <div
    class="app"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <NavigationBar
      :active-item="activeView"
      :nav-items="navItems"
      :is-edit-mode="isEditMode"
      @nav-change="handleNavChangeWithEditReset"
      @add-checklist="handleAddChecklist"
      @update-checklist-name="handleUpdateChecklistName"
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
          :ref="el => { viewWrapperRefs[checklist.id] = el as HTMLElement | null }"
        >
          <GenericChecklist
            :ref="el => { checklistRefs[checklist.id] = el as InstanceType<typeof GenericChecklist> | null }"
            :checklist-id="checklist.id"
            :initial-items="checklist.initialItems"
            :is-active="activeView === checklist.id"
            @update:stats="handleStatsUpdate"
          />
        </div>
      </div>
    </div>
    <div class="bottom-bar" ref="bottomBarEl">
      <div class="progress">
        {{ stats.completedCount }} / {{ stats.totalCount }} 完了
      </div>
      <div class="button-group">
        <button 
          class="edit-button"
          :class="{ active: isEditMode }"
          @click="handleEdit"
        >
          {{ isEditMode ? '編集完了' : '項目を編集' }}
        </button>
        <button 
          :class="isEditMode ? 'delete-list-button' : 'reset-button'" 
          @click="handleResetOrDelete"
        >
          {{ isEditMode ? 'リストを削除' : 'すべてリセット' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  touch-action: pan-y; /* 垂直スクロールのみを許可 */
  position: relative;
  /* ナビゲーションバーの高さを定義 */
  --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 14px + 10px + 6px);
}

.view-container {
  position: absolute;
  top: var(--nav-bar-height);
  bottom: var(--bottom-bar-height, calc(120px + env(safe-area-inset-bottom, 0px)));
  left: 0;
  right: 0;
  display: flex;
  overflow: hidden; /* スクロールは各ビュー内で独立して行う */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.view-slider {
  display: flex;
  width: 100%;
  height: 100%; /* コンテナの高さを継承 */
  will-change: transform;
}

.view-wrapper {
  flex: 0 0 100%;
  width: 100%;
  height: 100%; /* 親の高さを継承 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; /* 各ビューが独立してスクロール */
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch; /* iOSのモメンタムスクロール */
}

@media (max-width: 600px) {
  .app {
    /* スマートフォン用のナビゲーションバーの高さ */
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 8px + 13px + 8px + 6px);
  }

  .view-wrapper {
    padding: 0;
    align-items: stretch; /* モバイルでコンテナを縦に引き伸ばす */
  }
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  padding: 15px 20px calc(15px + env(safe-area-inset-bottom, 0px));
  z-index: 1001; /* ナビゲーションバーよりも上に配置 */
}

.progress {
  text-align: center;
  font-size: 1.2em;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.edit-button,
.reset-button {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.edit-button {
  background: #f0f0f0;
  color: #667eea;
  border: 2px solid #667eea;
}

.edit-button:hover {
  background: #e0e0f0;
}

.edit-button.active {
  background: #667eea;
  color: white;
}

.reset-button {
  background: #667eea;
  color: white;
}

.delete-list-button {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #dc3545;
  color: white;
  /* 文字選択を無効化 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  /* 押下時のハイライトを無効化 */
  -webkit-tap-highlight-color: transparent;
}

.delete-list-button:hover {
  background: #c82333;
}

@media (max-width: 600px) {
  .bottom-bar {
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  }

  .edit-button,
  .reset-button,
  .delete-list-button {
    padding: 12px;
  }

  .progress {
    font-size: 1.1em;
    margin-bottom: 8px;
  }

  .button-group {
    gap: 8px;
  }
}
</style>
