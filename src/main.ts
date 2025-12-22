import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

createApp(App).mount('#app')

// 画面を縦向きに固定
// Screen Orientation APIを使用してデバイスの向きをポートレートに固定
if ('orientation' in screen && 'lock' in screen.orientation) {
  // @ts-expect-error - Screen Orientation API lock() method
  screen.orientation.lock('portrait').catch(() => {
    // フルスクリーンモードでない場合は失敗するため、エラーは無視
    console.log('Screen orientation lock requires fullscreen mode')
  })
}
