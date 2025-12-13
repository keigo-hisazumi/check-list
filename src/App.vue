<script setup lang="ts">
import { ref, computed } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import MorningChecklist from './components/MorningChecklist.vue'
import BagChecklist from './components/BagChecklist.vue'

// アクティブなビューの管理
const activeView = ref<string>('morning')

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
const touchCurrentX = ref<number>(0)
const translateX = ref<number>(0)
const isTransitioning = ref<boolean>(false)
const isSwiping = ref<boolean>(false)
const swipeThreshold = 100 // 画面遷移を確定するしきい値（ピクセル）
const edgeResistance = 0.3 // 端での抵抗感の係数
const transitionDuration = 300 // トランジション時間（ミリ秒）

// タッチ開始イベント
const handleTouchStart = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    touchStartX.value = e.touches[0].clientX
    touchCurrentX.value = e.touches[0].clientX
    isSwiping.value = true
    isTransitioning.value = false
  }
}

// タッチ移動イベント - リアルタイムでスライド
const handleTouchMove = (e: TouchEvent) => {
  if (!isSwiping.value || e.touches.length === 0) return
  
  touchCurrentX.value = e.touches[0].clientX
  const diff = touchCurrentX.value - touchStartX.value
  const currentIndex = views.indexOf(activeView.value)
  
  // 端の画面では逆方向のスワイプを制限
  if ((currentIndex === 0 && diff > 0) || 
      (currentIndex === views.length - 1 && diff < 0)) {
    // 端での抵抗感を表現（スワイプ量を減衰）
    translateX.value = diff * edgeResistance
  } else {
    translateX.value = diff
  }
}

// タッチ終了イベント
const handleTouchEnd = () => {
  if (!isSwiping.value) return
  
  isSwiping.value = false
  const swipeDistance = touchCurrentX.value - touchStartX.value
  const currentIndex = views.indexOf(activeView.value)
  
  isTransitioning.value = true
  
  // 右スワイプ（前の画面へ）
  if (swipeDistance > swipeThreshold && currentIndex > 0) {
    activeView.value = views[currentIndex - 1]
  }
  // 左スワイプ（次の画面へ）
  else if (swipeDistance < -swipeThreshold && currentIndex < views.length - 1) {
    activeView.value = views[currentIndex + 1]
  }
  
  // スライドオフセットをリセット
  translateX.value = 0
  
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
      @nav-change="handleNavChange" 
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
          <MorningChecklist key="morning" />
        </div>
        <div class="view-wrapper">
          <BagChecklist key="bag" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  touch-action: pan-y; /* 垂直スクロールのみを許可 */
}

.view-container {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
  overflow: hidden;
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
}

@media (max-width: 600px) {
  .view-wrapper {
    padding: 0;
  }
}
</style>
