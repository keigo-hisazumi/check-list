import { test } from '@playwright/test';

test('非常に小さい画面でのスクロールテスト', async ({ page }) => {
  // 非常に小さい画面（古いスマートフォン）
  await page.setViewportSize({ width: 320, height: 480 });
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  // 要素情報を取得
  const info = await page.evaluate(() => {
    const app = document.querySelector('.app') as HTMLElement;
    const viewContainer = document.querySelector('.view-container') as HTMLElement;
    const bottomBar = document.querySelector('.bottom-bar') as HTMLElement;
    const navBar = document.querySelector('.navigation-bar') as HTMLElement;
    
    return {
      viewport: {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      },
      app: app ? {
        offsetHeight: app.offsetHeight,
        scrollHeight: app.scrollHeight,
      } : null,
      viewContainer: viewContainer ? {
        offsetHeight: viewContainer.offsetHeight,
        scrollHeight: viewContainer.scrollHeight,
        clientHeight: viewContainer.clientHeight,
        scrollTop: viewContainer.scrollTop,
        canScroll: viewContainer.scrollHeight > viewContainer.clientHeight,
        overflowY: window.getComputedStyle(viewContainer).overflowY,
      } : null,
      bottomBar: bottomBar ? {
        offsetHeight: bottomBar.offsetHeight,
        position: window.getComputedStyle(bottomBar).position,
      } : null,
      navBar: navBar ? {
        offsetHeight: navBar.offsetHeight,
        position: window.getComputedStyle(navBar).position,
      } : null,
    };
  });
  console.log('非常に小さい画面での情報:', JSON.stringify(info, null, 2));

  // 初期スクリーンショット
  await page.screenshot({ path: '/tmp/screenshot-tiny-initial.png', fullPage: false });
  
  // 最後のチェックリスト項目が見えるか確認
  const lastItemVisible = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.checklist-item'));
    const lastItem = items[items.length - 1] as HTMLElement;
    if (!lastItem) return { exists: false };
    
    const rect = lastItem.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    return {
      exists: true,
      itemTop: rect.top,
      itemBottom: rect.bottom,
      viewportHeight: viewportHeight,
      isVisible: rect.bottom <= viewportHeight && rect.top >= 0,
      isPartiallyVisible: rect.top < viewportHeight && rect.bottom > 0,
    };
  });
  console.log('最後の項目の表示状態:', JSON.stringify(lastItemVisible, null, 2));

  // スクロールを試みる
  const scrollResult = await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    if (container) {
      container.scrollTop = 300;
      return {
        attempted: true,
        scrollTop: container.scrollTop,
      };
    }
    return { attempted: false };
  });
  console.log('スクロール試行結果:', JSON.stringify(scrollResult, null, 2));

  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-tiny-scrolled.png', fullPage: false });
});
