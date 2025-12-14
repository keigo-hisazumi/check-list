import { test } from '@playwright/test';

test('小さい画面でのスクロールテスト', async ({ page }) => {
  // より小さいモバイル画面に設定
  await page.setViewportSize({ width: 375, height: 500 });
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  // 要素情報を取得
  const info = await page.evaluate(() => {
    const viewContainer = document.querySelector('.view-container') as HTMLElement;
    return {
      offsetHeight: viewContainer?.offsetHeight,
      scrollHeight: viewContainer?.scrollHeight,
      clientHeight: viewContainer?.clientHeight,
      overflowY: window.getComputedStyle(viewContainer).overflowY,
      canScroll: viewContainer ? viewContainer.scrollHeight > viewContainer.clientHeight : false,
    };
  });
  console.log('小さい画面での情報:', JSON.stringify(info, null, 2));

  // 初期スクリーンショット
  await page.screenshot({ path: '/tmp/screenshot-small-initial.png', fullPage: false });
  console.log('初期スクリーンショット: /tmp/screenshot-small-initial.png');

  // スクロールを試みる
  await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    if (container) {
      container.scrollTop = 200;
    }
  });
  await page.waitForTimeout(500);

  const scrollTop = await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    return container ? container.scrollTop : 0;
  });
  console.log('スクロール後のscrollTop:', scrollTop);

  // スクロール後のスクリーンショット
  await page.screenshot({ path: '/tmp/screenshot-small-scrolled.png', fullPage: false });
  console.log('スクロール後スクリーンショット: /tmp/screenshot-small-scrolled.png');
});
