<script setup lang="ts">
import { ref, computed } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import MorningChecklist from './components/MorningChecklist.vue'
import BagChecklist from './components/BagChecklist.vue'

// アクティブなビューの管理
const activeView = ref<string>('morning')

// コンポーネントのrefを管理
const morningChecklistRef = ref<InstanceType<typeof MorningChecklist> | null>(null)
const bagChecklistRef = ref<InstanceType<typeof BagChecklist> | null>(null)

// 統計情報の管理
const stats = ref<{ completedCount: number; totalCount: number }>({
  completedCount: 0,
  totalCount: 0
})

// 編集モードの管理
const isEditMode = ref<boolean>(false)

// 統計情報の更新ハンドラー
const handleStatsUpdate = (newStats: { completedCount: number; totalCount: number }) => {
  stats.value = newStats
}

// リセットボタンのハンドラー
const handleReset = () => {
  if (activeView.value === 'morning' && morningChecklistRef.value) {
    morningChecklistRef.value.handleReset()
  } else if (activeView.value === 'bag' && bagChecklistRef.value) {
    bagChecklistRef.value.handleReset()
  }
}

// 編集ボタンのハンドラー
const handleEdit = () => {
  isEditMode.value = !isEditMode.value
  
  if (isEditMode.value) {
    // 編集モードを有効化
    if (activeView.value === 'morning' && morningChecklistRef.value) {
      morningChecklistRef.value.enableEditMode()
    } else if (activeView.value === 'bag' && bagChecklistRef.value) {
      bagChecklistRef.value.enableEditMode()
    }
  } else {
    // 編集モードを無効化
    if (activeView.value === 'morning' && morningChecklistRef.value) {
      morningChecklistRef.value.disableEditMode()
    } else if (activeView.value === 'bag' && bagChecklistRef.value) {
      bagChecklistRef.value.disableEditMode()
    }
  }
}

// ビュー切り替え時に編集モードをリセット
const handleNavChangeWithEditReset = (viewId: string) => {
  // 編集モードをオフにする
  if (isEditMode.value) {
    // 現在のビューの編集モードを無効化
    if (activeView.value === 'morning' && morningChecklistRef.value) {
      morningChecklistRef.value.disableEditMode()
    } else if (activeView.value === 'bag' && bagChecklistRef.value) {
      bagChecklistRef.value.disableEditMode()
    }
    isEditMode.value = false
  }
  
  // 元のナビゲーション処理を実行
  handleNavChange(viewId)
}

// ビューのリスト
const views = ['morning', 'bag']

// 現在のインデックスを計算
const currentIndex = computed(() => views.indexOf(activeView.value))

// ナビゲーション変更ハンドラー
const handleNavChange = (viewId: string) => {
  activeView.value = viewId
  // ナビゲーション変更時はスライドオフセットをリセット
  translateX.value = 0
  isTransitioning.value = false
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

    const currentIndex = views.indexOf(activeView.value)

    // 端の画面では逆方向のスワイプを制限
    if ((currentIndex === 0 && diffX > 0) ||
        (currentIndex === views.length - 1 && diffX < 0)) {
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
  const currentIndex = views.indexOf(activeView.value)

  isTransitioning.value = true

  // 横スワイプの場合のみ、画面遷移を実行
  if (swipeDirection.value === 'horizontal') {
    // 右スワイプ（前の画面へ）
    if (swipeDistance > swipeThreshold && currentIndex > 0) {
      activeView.value = views[currentIndex - 1]
    }
    // 左スワイプ（次の画面へ）
    else if (swipeDistance < -swipeThreshold && currentIndex < views.length - 1) {
      activeView.value = views[currentIndex + 1]
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
      @nav-change="handleNavChangeWithEditReset"
    />
    <div class="view-container">
      <div
        class="view-slider"
        :style="{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          transition: isTransitioning ? `transform ${transitionDuration}ms ease-out` : 'none'
        }"
      >
        <div class="view-wrapper">
          <MorningChecklist
            ref="morningChecklistRef"
            key="morning"
            :is-active="activeView === 'morning'"
            @update:stats="handleStatsUpdate"
          />
        </div>
        <div class="view-wrapper">
          <BagChecklist
            ref="bagChecklistRef"
            key="bag"
            :is-active="activeView === 'bag'"
            @update:stats="handleStatsUpdate"
          />
        </div>
      </div>
    </div>
    <div class="bottom-bar">
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
        <button class="reset-button" @click="handleReset">
          すべてリセット
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
  --nav-bar-height: calc(8px + env(safe-area-inset-top) + 12px + 14px + 12px + 8px);
}

.view-container {
  position: absolute;
  top: var(--nav-bar-height); /* ナビゲーションバーの直下から開始 */
  bottom: 100px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  overflow-x: hidden; /* 横スクロールは無効 */
  overflow-y: auto; /* 縦スクロールを有効化 */
  user-select: none; /* スワイプ時のテキスト選択を防止 */
  -webkit-user-select: none; /* Safari用 */
  -moz-user-select: none; /* Firefox用 */
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
  min-height: 100%; /* 最小高さを100%に設定 */
}

@media (max-width: 600px) {
  .app {
    /* スマートフォン用のナビゲーションバーの高さ */
    --nav-bar-height: calc(6px + env(safe-area-inset-top) + 10px + 13px + 10px + 6px);
  }

  .view-wrapper {
    padding: 0;
  }
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  padding: 15px 20px calc(15px + env(safe-area-inset-bottom));
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

@media (max-width: 600px) {
  .bottom-bar {
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  }

  .edit-button,
  .reset-button {
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
