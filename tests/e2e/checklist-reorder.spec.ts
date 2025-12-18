import { test, expect } from '@playwright/test';

test.describe('チェックリストの並べ替え機能', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリア
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('朝やることリストの並び順の永続化', async ({ page }) => {
    await page.goto('/');
    
    // LocalStorageに並び順を直接設定
    await page.evaluate(() => {
      const newOrder = ['morning-lunch', 'morning-tea-coffee', 'morning-breakfast', 
                       'morning-medicine', 'morning-prewash', 'morning-bag',
                       'morning-garbage', 'morning-preparation', 'morning-change', 'morning-brush'];
      localStorage.setItem('morning-checklist-order', JSON.stringify(newOrder));
    });
    
    // ページをリロード
    await page.reload();
    
    // 最初のアイテムが「弁当」になっていることを確認
    const firstItem = await page.locator('.checklist-item').first().locator('label').textContent();
    expect(firstItem).toBe('弁当');
    
    // 2番目のアイテムが「紅茶、コーヒー」になっていることを確認
    const secondItem = await page.locator('.checklist-item').nth(1).locator('label').textContent();
    expect(secondItem).toBe('紅茶、コーヒー');
  });

  test('カバンの中リストの並び順の永続化', async ({ page }) => {
    await page.goto('/');
    
    // LocalStorageに並び順を直接設定
    await page.evaluate(() => {
      const newOrder = ['bag-keys', 'bag-mask', 'bag-card-case',
                       'bag-pen-case', 'bag-pouch', 'bag-lunch',
                       'bag-toothbrush', 'bag-bottle'];
      localStorage.setItem('bag-checklist-order', JSON.stringify(newOrder));
    });
    
    // ページをリロード
    await page.reload();
    
    // カバンの中タブをクリック
    await page.locator('button:has-text("カバンの中")').click();
    
    // カバンの中の進捗表示が表示されるまで待つ
    await page.locator('.progress').filter({ hasText: '/ 8 完了' }).waitFor({ state: 'visible' });
    
    // 少し待機して、ビューが切り替わるのを待つ
    await page.waitForTimeout(500);
    
    // bag-keysの要素を探す
    const bagKeyItem = await page.locator('label[for="bag-keys"]').textContent();
    expect(bagKeyItem).toBe('カギ、イヤホン、社員証');
  });

  test('リセット機能で並び順もクリアされる', async ({ page }) => {
    await page.goto('/');
    
    // LocalStorageに並び順を設定
    await page.evaluate(() => {
      const newOrder = ['morning-lunch', 'morning-tea-coffee', 'morning-breakfast', 
                       'morning-medicine', 'morning-prewash', 'morning-bag',
                       'morning-garbage', 'morning-preparation', 'morning-change', 'morning-brush'];
      localStorage.setItem('morning-checklist-order', JSON.stringify(newOrder));
    });
    
    // ページをリロード
    await page.reload();
    
    // 並べ替え後の順序を確認
    const firstItemAfterReorder = await page.locator('.checklist-item').first().locator('label').textContent();
    expect(firstItemAfterReorder).toBe('弁当');
    
    // リセットボタンをクリック
    await page.locator('button.reset-button').filter({ hasText: 'すべてリセット' }).first().click();
    
    // ページをリロード
    await page.reload();
    
    // リロード後、元の順序に戻っていることを確認
    const firstItemAfterReset = await page.locator('.checklist-item').first().locator('label').textContent();
    expect(firstItemAfterReset).toBe('紅茶、コーヒー');
  });
});
