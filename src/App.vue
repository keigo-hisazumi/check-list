<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import MorningChecklist from './components/MorningChecklist.vue'
import BagChecklist from './components/BagChecklist.vue'

// アクティブなビューの管理
const activeView = ref<string>('morning')

// ビューのリスト
const views = ['morning', 'bag']

// ナビゲーション変更ハンドラー
const handleNavChange = (viewId: string) => {
  activeView.value = viewId
}

// スワイプ機能の実装
const touchStartX = ref<number>(0)
const touchEndX = ref<number>(0)
const minSwipeDistance = 50 // 最小スワイプ距離（ピクセル）

// タッチ開始イベント
const handleTouchStart = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    touchStartX.value = e.touches[0].clientX
  }
}

// タッチ終了イベント
const handleTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches.length > 0) {
    touchEndX.value = e.changedTouches[0].clientX
    handleSwipe()
  }
}

// スワイプ判定と画面遷移
const handleSwipe = () => {
  const swipeDistance = touchEndX.value - touchStartX.value
  const currentIndex = views.indexOf(activeView.value)
  
  // 右スワイプ（前の画面へ）
  if (swipeDistance > minSwipeDistance && currentIndex > 0) {
    activeView.value = views[currentIndex - 1]
  }
  
  // 左スワイプ（次の画面へ）
  if (swipeDistance < -minSwipeDistance && currentIndex < views.length - 1) {
    activeView.value = views[currentIndex + 1]
  }
}
</script>

<template>
  <div 
    class="app"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <NavigationBar 
      :active-item="activeView" 
      @nav-change="handleNavChange" 
    />
    <div class="view-container">
      <Transition name="slide">
        <MorningChecklist v-if="activeView === 'morning'" key="morning" />
        <BagChecklist v-else-if="activeView === 'bag'" key="bag" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.view-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  position: relative;
}

/* スライドトランジション */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 600px) {
  .view-container {
    padding: 0;
  }
}
</style>
