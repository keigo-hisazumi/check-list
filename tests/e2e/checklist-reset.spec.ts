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
    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
    const thirdCheckbox = page.locator('input[type="checkbox"]').nth(2);
    
    await firstCheckbox.check();
    await secondCheckbox.check();
    await thirdCheckbox.check();
    
    // 完了数が 3 / 10 になることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('3 / 10 完了');
    
    // リセットボタンをクリック（visible なボタンをクリック）
    await page.locator('button.reset-button').filter({ hasText: 'すべてリセット' }).first().click();
    
    // 完了数が 0 / 10 に戻ることを確認
    await expect(page.locator('.progress').filter({ hasText: '/ 10 完了' })).toContainText('0 / 10 完了');
    
    // すべてのチェックボックスがオフになっていることを確認
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).not.toBeChecked();
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
    
    // 2つの項目をチェック（bag- プレフィックスを持つIDのチェックボックスを選択）
    await page.locator('#bag-mask').check();
    await page.locator('#bag-keys').check();
    
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
    await expect(page.locator('#bag-mask')).not.toBeChecked();
    await expect(page.locator('#bag-keys')).not.toBeChecked();
    await expect(page.locator('#bag-card-case')).not.toBeChecked();
    await expect(page.locator('#bag-pen-case')).not.toBeChecked();
    await expect(page.locator('#bag-pouch')).not.toBeChecked();
    await expect(page.locator('#bag-lunch')).not.toBeChecked();
    await expect(page.locator('#bag-toothbrush')).not.toBeChecked();
    await expect(page.locator('#bag-bottle')).not.toBeChecked();
  });

  test('ページリロード後もリセット状態が保持される', async ({ page }) => {
    await page.goto('/');
    
    // 項目をチェック
    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    await firstCheckbox.check();
    
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
    
    // すべてのチェックボックスがオフになっていることを確認
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).not.toBeChecked();
    }
  });
});
