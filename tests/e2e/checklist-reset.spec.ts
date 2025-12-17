import { test, expect } from '@playwright/test';

test.describe('チェックリストのリセット機能', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリア
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('朝やることリストのリセットが正しく動作する', async ({ page }) => {
    await page.goto('/');
    
    // 朝やることタブが表示されていることを確認
    await expect(page.locator('text=朝やること')).toBeVisible();
    
    // 初期状態で完了数が 0 / 10 であることを確認（visible な要素のみを確認）
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toBeVisible();
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('0 / 10 完了');
    
    // 3つの項目をチェック
    const firstCheckbox = page.locator('.checkbox-button').first();
    const secondCheckbox = page.locator('.checkbox-button').nth(1);
    const thirdCheckbox = page.locator('.checkbox-button').nth(2);
    
    await firstCheckbox.click();
    await secondCheckbox.click();
    await thirdCheckbox.click();
    
    // 完了数が 3 / 10 になることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('3 / 10 完了');
    
    // リセットボタンをクリック（visible なボタンをクリック）
    await page.locator('button.reset-button').filter({ hasText: 'すべてリセット' }).first().click();
    
    // 完了数が 0 / 10 に戻ることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('0 / 10 完了');
    
    // すべてのチェックボックスがオフになっていることを確認（未チェック状態のアイコンが表示される）
    const checkboxes = page.locator('.checkbox-button');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).toHaveAttribute('aria-label', '未チェック');
    }
  });

  test('カバンの中リストのリセットが正しく動作する', async ({ page }) => {
    await page.goto('/');
    
    // カバンの中タブをクリック（ナビゲーションバーのボタンをクリック）
    await page.locator('button:has-text("カバンの中")').click();
    
    // カバンの中の進捗表示が表示されるまで待つ
    await page.locator('.progress').filter({ hasText: '/ 8 完了' }).waitFor({ state: 'visible' });
    
    // 初期状態で完了数が 0 / 8 であることを確認（visible な要素のみを確認）
    await expect(page.locator('.progress').filter({ hasText: '/ 8 完了' })).toBeVisible();
    await expect(page.locator('.progress').filter({ hasText: '/ 8 完了' })).toContainText('0 / 8 完了');
    
    // 2つの項目をチェック（labelのfor属性を使ってリスト項目を特定）
    await page.locator('label[for="bag-mask"]').locator('..').locator('.checkbox-button').click();
    await page.locator('label[for="bag-keys"]').locator('..').locator('.checkbox-button').click();
    
    // 完了数が 2 / 8 になることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 8 完了' })).toContainText('2 / 8 完了');
    
    // リセットボタンをクリック
    // 注: position:fixedで重なっているため、JavaScriptで実際に表示されているボタンをクリック
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button.reset-button'));
      const visibleButton = buttons.find(btn => {
        const parent = btn.closest('.bottom-bar');
        return parent && getComputedStyle(parent).display !== 'none';
      });
      if (visibleButton) {
        (visibleButton as HTMLElement).click();
      }
    });
    
    // 完了数が 0 / 8 に戻ることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 8 完了' })).toContainText('0 / 8 完了');
    
    // カバンの中のチェックボックスがすべてオフになっていることを確認
    await expect(page.locator('label[for="bag-mask"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-keys"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-card-case"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-pen-case"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-pouch"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-lunch"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-toothbrush"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
    await expect(page.locator('label[for="bag-bottle"]').locator('..').locator('.checkbox-button')).toHaveAttribute('aria-label', '未チェック');
  });

  test('ページリロード後もリセット状態が保持される', async ({ page }) => {
    await page.goto('/');
    
    // 項目をチェック
    const firstCheckbox = page.locator('.checkbox-button').first();
    await firstCheckbox.click();
    
    // 完了数が 1 / 10 になることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('1 / 10 完了');
    
    // リセットボタンをクリック
    await page.locator('button.reset-button').filter({ hasText: 'すべてリセット' }).first().click();
    
    // 完了数が 0 / 10 に戻ることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('0 / 10 完了');
    
    // ページをリロード
    await page.reload();
    
    // リロード後も完了数が 0 / 10 であることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toBeVisible();
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('0 / 10 完了');
    
    // すべてのチェックボックスがオフになっていることを確認（未チェック状態のアイコンが表示される）
    const checkboxes = page.locator('.checkbox-button');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).toHaveAttribute('aria-label', '未チェック');
    }
  });
});
