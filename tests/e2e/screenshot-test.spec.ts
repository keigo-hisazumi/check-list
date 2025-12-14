import { test, expect } from '@playwright/test';

test('ナビゲーションバーとスクロールのテスト', async ({ page }) => {
  // モバイルサイズに設定
  await page.setViewportSize({ width: 375, height: 667 });
  
  // ページにアクセス
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  // 初期状態のスクリーンショット
  await page.screenshot({ path: '/tmp/screenshot-initial.png', fullPage: false });
  console.log('初期状態のスクリーンショット保存: /tmp/screenshot-initial.png');

  // ナビゲーションバーが表示されていることを確認
  const navBar = page.locator('.navigation-bar');
  await expect(navBar).toBeVisible();

  // view-containerのスクロール位置を確認
  const scrollTopBefore = await page.evaluate(() => {
    const container = document.querySelector('.view-container');
    return container ? container.scrollTop : 0;
  });
  console.log('スクロール前のscrollTop:', scrollTopBefore);

  // スクロール実行
  await page.evaluate(() => {
    const container = document.querySelector('.view-container');
    if (container) {
      container.scrollTop = 300;
    }
  });
  await page.waitForTimeout(500);

  // スクロール後の位置を確認
  const scrollTopAfter = await page.evaluate(() => {
    const container = document.querySelector('.view-container');
    return container ? container.scrollTop : 0;
  });
  console.log('スクロール後のscrollTop:', scrollTopAfter);

  // スクロール後のスクリーンショット
  await page.screenshot({ path: '/tmp/screenshot-scrolled.png', fullPage: false });
  console.log('スクロール後のスクリーンショット保存: /tmp/screenshot-scrolled.png');

  // ナビゲーションバーが依然として表示されていることを確認
  await expect(navBar).toBeVisible();
});
