import { test } from '@playwright/test';

test('スクロール可能性のデバッグ', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:5173/check-list/');
  await page.waitForTimeout(1000);

  // 各要素の高さとスクロール情報を取得
  const info = await page.evaluate(() => {
    const viewContainer = document.querySelector('.view-container') as HTMLElement;
    const viewSlider = document.querySelector('.view-slider') as HTMLElement;
    const viewWrapper = document.querySelector('.view-wrapper') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;
    const checklist = document.querySelector('.checklist') as HTMLElement;

    return {
      viewContainer: viewContainer ? {
        offsetHeight: viewContainer.offsetHeight,
        scrollHeight: viewContainer.scrollHeight,
        clientHeight: viewContainer.clientHeight,
        overflowY: window.getComputedStyle(viewContainer).overflowY,
        overflowX: window.getComputedStyle(viewContainer).overflowX,
      } : null,
      viewSlider: viewSlider ? {
        offsetHeight: viewSlider.offsetHeight,
        scrollHeight: viewSlider.scrollHeight,
        display: window.getComputedStyle(viewSlider).display,
      } : null,
      viewWrapper: viewWrapper ? {
        offsetHeight: viewWrapper.offsetHeight,
        scrollHeight: viewWrapper.scrollHeight,
        display: window.getComputedStyle(viewWrapper).display,
        flex: window.getComputedStyle(viewWrapper).flex,
      } : null,
      container: container ? {
        offsetHeight: container.offsetHeight,
        scrollHeight: container.scrollHeight,
      } : null,
      checklist: checklist ? {
        offsetHeight: checklist.offsetHeight,
        scrollHeight: checklist.scrollHeight,
      } : null,
    };
  });

  console.log('要素の情報:', JSON.stringify(info, null, 2));
});
