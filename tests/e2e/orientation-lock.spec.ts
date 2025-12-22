import { test, expect } from '@playwright/test';

test.describe('画面方向の制御', () => {
  test('縦画面（ポートレート）モードで正常に表示される', async ({ page }) => {
    // 縦画面サイズに設定（スマートフォン相当）
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // アプリケーションが正常に表示されることを確認
    await expect(page.locator('text=朝やること')).toBeVisible();
    await expect(page.locator('.progress')).toBeVisible();
    await expect(page.locator('button.reset-button')).toBeVisible();
  });

  test('横画面（ランドスケープ）モードで警告メッセージが表示される', async ({ page }) => {
    // 横画面サイズに設定（高さ600px以下のランドスケープ）
    await page.setViewportSize({ width: 800, height: 400 });
    await page.goto('/');
    
    // 警告メッセージが表示されることを確認
    const warningMessage = await page.locator('body').evaluate((body) => {
      const beforeContent = window.getComputedStyle(body, '::before').content;
      return beforeContent.replace(/['"]/g, ''); // クォートを削除
    });
    
    expect(warningMessage).toBe('縦画面でご利用ください');
    
    // アプリケーションの主要コンテンツが非表示になっていることを確認
    const appDisplay = await page.locator('#app').evaluate((el) => {
      return window.getComputedStyle(el).display;
    });
    
    expect(appDisplay).toBe('none');
  });

  test('タブレットサイズの横画面では警告が表示されない', async ({ page }) => {
    // タブレットサイズの横画面（高さ600pxより大きい）
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    
    // アプリケーションが正常に表示されることを確認（警告なし）
    await expect(page.locator('text=朝やること')).toBeVisible();
    await expect(page.locator('.progress')).toBeVisible();
  });

  test('manifest.webmanifestにorientation設定が含まれている', async ({ page }) => {
    await page.goto('/');
    
    // manifest.webmanifestファイルの内容を取得
    const manifestContent = await page.evaluate(async () => {
      const response = await fetch('/check-list/manifest.webmanifest');
      return await response.text();
    });
    
    const manifest = JSON.parse(manifestContent);
    
    // orientation設定がportraitであることを確認
    expect(manifest.orientation).toBe('portrait');
  });
});
