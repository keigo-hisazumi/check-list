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

  test('横画面（ランドスケープ）モードで縦画面レイアウトが維持される', async ({ page }) => {
    // 横画面サイズに設定（高さ600px以下）
    await page.setViewportSize({ width: 800, height: 400 });
    await page.goto('/');
    
    // htmlに回転transformが適用されていることを確認
    const htmlTransform = await page.locator('html').evaluate((html) => {
      return window.getComputedStyle(html).transform;
    });
    
    // transformが適用されていることを確認（rotate(-90deg)の場合、行列変換されている）
    expect(htmlTransform).not.toBe('none');
    
    // アプリケーションの主要コンテンツが表示されていることを確認
    await expect(page.locator('text=朝やること')).toBeVisible();
    await expect(page.locator('.progress')).toBeVisible();
  });

  test('タブレットサイズの横画面では回転が適用されない', async ({ page }) => {
    // タブレットサイズの横画面（高さ600pxより大きい）
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    
    // アプリケーションが正常に表示されることを確認
    await expect(page.locator('text=朝やること')).toBeVisible();
    await expect(page.locator('.progress')).toBeVisible();
    
    // htmlにtransformが適用されていないことを確認
    const htmlTransform = await page.locator('html').evaluate((html) => {
      return window.getComputedStyle(html).transform;
    });
    
    expect(htmlTransform).toBe('none');
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
