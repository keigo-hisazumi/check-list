<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import MorningChecklist from './components/MorningChecklist.vue'
import BagChecklist from './components/BagChecklist.vue'

// アクティブなビューの管理
const activeView = ref<string>('morning')

// ナビゲーション変更ハンドラー
const handleNavChange = (viewId: string) => {
  activeView.value = viewId
}
</script>

<template>
  <div class="app">
    <MorningChecklist v-if="activeView === 'morning'" />
    <BagChecklist v-if="activeView === 'bag'" />
    <NavigationBar 
      :active-item="activeView" 
      @nav-change="handleNavChange" 
    />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

@media (max-width: 600px) {
  .app {
    padding: 0;
    align-items: flex-start;
  }
}
</style>
