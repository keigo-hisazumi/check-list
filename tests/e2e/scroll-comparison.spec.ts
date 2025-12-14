import { test, expect } from '@playwright/test';

test('スクロール機能の動作確認', async ({ page }) => {
  // モバイルサイズに設定
  await page.setViewportSize({ width: 375, height: 600 });
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  console.log('=== 初期状態 ===');
  
  // 初期状態でのスクロール情報
  const initialInfo = await page.evaluate(() => {
    const viewContainer = document.querySelector('.view-container') as HTMLElement;
    return {
      scrollTop: viewContainer?.scrollTop || 0,
      scrollHeight: viewContainer?.scrollHeight || 0,
      clientHeight: viewContainer?.clientHeight || 0,
      canScroll: viewContainer ? viewContainer.scrollHeight > viewContainer.clientHeight : false,
    };
  });
  console.log('初期スクロール情報:', JSON.stringify(initialInfo, null, 2));

  // 初期状態のスクリーンショット
  await page.screenshot({ path: '/tmp/before-scroll.png', fullPage: false });
  console.log('スクリーンショット保存: /tmp/before-scroll.png');

  // 最初の項目と最後の項目のテキストを取得
  const initialItems = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.checklist-item label'));
    return {
      first: items[0]?.textContent?.trim(),
      last: items[items.length - 1]?.textContent?.trim(),
    };
  });
  console.log('表示されている項目 (最初と最後):', initialItems);

  console.log('\n=== スクロール実行 ===');

  // スクロールを実行
  await page.evaluate(() => {
    const container = document.querySelector('.view-container') as HTMLElement;
    if (container) {
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  });
  await page.waitForTimeout(500);

  // スクロール後の情報
  const scrolledInfo = await page.evaluate(() => {
    const viewContainer = document.querySelector('.view-container') as HTMLElement;
    return {
      scrollTop: viewContainer?.scrollTop || 0,
      scrollHeight: viewContainer?.scrollHeight || 0,
      clientHeight: viewContainer?.clientHeight || 0,
    };
  });
  console.log('スクロール後の情報:', JSON.stringify(scrolledInfo, null, 2));

  // スクロール後のスクリーンショット
  await page.screenshot({ path: '/tmp/after-scroll.png', fullPage: false });
  console.log('スクリーンショット保存: /tmp/after-scroll.png');

  // スクロールが実際に発生したことを確認
  expect(scrolledInfo.scrollTop).toBeGreaterThan(0);
  console.log('✓ スクロールが正常に機能しています');

  // ナビゲーションバーが固定されていることを確認
  const navBarPosition = await page.evaluate(() => {
    const navBar = document.querySelector('.navigation-bar') as HTMLElement;
    return navBar ? window.getComputedStyle(navBar).position : null;
  });
  expect(navBarPosition).toBe('fixed');
  console.log('✓ ナビゲーションバーが固定されています');
});
