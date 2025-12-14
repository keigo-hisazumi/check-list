import { test } from '@playwright/test';

test('フルページスクリーンショット', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 500 });
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  // fullPage: trueで全体を撮影
  await page.screenshot({ path: '/tmp/screenshot-fullpage.png', fullPage: true });
  console.log('フルページスクリーンショット: /tmp/screenshot-fullpage.png');

  // どれだけスクロールできるか確認
  const maxScroll = await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    if (!container) return 0;
    const maxScrollTop = container.scrollHeight - container.clientHeight;
    console.log('scrollHeight:', container.scrollHeight);
    console.log('clientHeight:', container.clientHeight);
    console.log('maxScrollTop:', maxScrollTop);
    return maxScrollTop;
  });
  console.log('最大スクロール量:', maxScroll);

  // 手動でスクロールバーを確認
  const hasScrollbar = await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    return container ? container.scrollHeight > container.clientHeight : false;
  });
  console.log('スクロールバーあり:', hasScrollbar);
});
