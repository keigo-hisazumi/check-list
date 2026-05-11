import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

// iOS standalone mode では env(safe-area-inset-bottom) の初期値が
// 不正確になる場合がある。probe 要素で実測し CSS 変数に反映する。
const updateSafeAreaBottom = () => {
  const probe = document.createElement('div')
  probe.style.cssText =
    'position:fixed;bottom:0;width:0;height:env(safe-area-inset-bottom);pointer-events:none;visibility:hidden;z-index:-1'
  document.body.appendChild(probe)
  // iOS PWA 起動直後に Dynamic Island デバイスで env(safe-area-inset-bottom) が
  // 誤って大きい値（safe-area-inset-top の値など）を返すバグへの対処。
  // ホームインジケーターの高さは全 iPhone で 34px のため上限を設ける。
  const inset = Math.min(probe.offsetHeight, 34)
  document.documentElement.style.setProperty('--safe-area-inset-bottom', `${inset}px`)
  document.body.removeChild(probe)
}

updateSafeAreaBottom()
// 初期レイアウト後に再計算（iOS が 2 フレーム以内に値を確定させるケースに対応）
requestAnimationFrame(() => requestAnimationFrame(updateSafeAreaBottom))
// visualViewport のリサイズ時（スクロールや画面回転など）にも再計算
window.visualViewport?.addEventListener('resize', updateSafeAreaBottom)

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
