import { test, expect } from '@playwright/test';

test.describe('チェックリストの編集機能', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリア
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('朝やることリストの項目を編集できる', async ({ page }) => {
    await page.goto('/');
    
    // 朝やることタブが表示されていることを確認
    await expect(page.locator('text=朝やること')).toBeVisible();
    
    // 最初の項目の編集ボタンをクリック
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // 元のテキストが入力フィールドに表示されることを確認
    await expect(editInput).toHaveValue('紅茶、コーヒー');
    
    // テキストを編集
    await editInput.fill('コーヒー、お茶');
    
    // 保存ボタンをクリック
    await page.locator('button.save-button').click();
    
    // 編集されたテキストが表示されることを確認
    await expect(page.locator('text=コーヒー、お茶')).toBeVisible();
    await expect(page.locator('text=紅茶、コーヒー')).not.toBeVisible();
  });

  test('編集をキャンセルできる', async ({ page }) => {
    await page.goto('/');
    
    // 最初の項目の編集ボタンをクリック
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // テキストを変更
    await editInput.fill('変更されたテキスト');
    
    // キャンセルボタンをクリック
    await page.locator('button.cancel-button').click();
    
    // 元のテキストが残っていることを確認
    await expect(page.locator('text=紅茶、コーヒー')).toBeVisible();
    await expect(page.locator('text=変更されたテキスト')).not.toBeVisible();
  });

  test('編集した内容がページリロード後も保持される', async ({ page }) => {
    await page.goto('/');
    
    // 最初の項目を編集
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('永続化テスト');
    
    await page.locator('button.save-button').click();
    
    // 編集されたテキストが表示されることを確認
    await expect(page.locator('text=永続化テスト')).toBeVisible();
    
    // ページをリロード
    await page.reload();
    
    // リロード後も編集されたテキストが表示されることを確認
    await expect(page.locator('text=永続化テスト')).toBeVisible();
  });

  test('カバンの中リストの項目を編集できる', async ({ page }) => {
    await page.goto('/');
    
    // カバンの中タブをクリック
    await page.locator('button:has-text("カバンの中")').click();
    
    // カバンの中の進捗表示が表示されるまで待つ
    await page.locator('.progress').filter({ hasText: '/ 8 完了' }).waitFor({ state: 'visible' });
    
    // bag-maskの編集ボタンをクリック
    await page.locator('#bag-mask').locator('..').locator('button.edit-button').click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // テキストを編集
    await editInput.fill('マスク、手帳');
    
    // 保存ボタンをクリック
    await page.locator('button.save-button').click();
    
    // 編集されたテキストが表示されることを確認
    await expect(page.locator('text=マスク、手帳')).toBeVisible();
  });

  test('Enterキーで保存できる', async ({ page }) => {
    await page.goto('/');
    
    // 最初の項目の編集ボタンをクリック
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // テキストを編集してEnterキーを押す
    await editInput.fill('Enterキーテスト');
    await editInput.press('Enter');
    
    // 編集されたテキストが表示されることを確認
    await expect(page.locator('text=Enterキーテスト')).toBeVisible();
  });

  test('Escapeキーでキャンセルできる', async ({ page }) => {
    await page.goto('/');
    
    // 最初の項目の編集ボタンをクリック
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // テキストを変更してEscapeキーを押す
    await editInput.fill('キャンセルされるテキスト');
    await editInput.press('Escape');
    
    // 元のテキストが残っていることを確認
    await expect(page.locator('text=紅茶、コーヒー')).toBeVisible();
    await expect(page.locator('text=キャンセルされるテキスト')).not.toBeVisible();
  });

  test('空白のみのテキストは保存されない', async ({ page }) => {
    await page.goto('/');
    
    // 最初の項目の編集ボタンをクリック
    const firstEditButton = page.locator('button.edit-button').first();
    await firstEditButton.click();
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // 空白のみを入力
    await editInput.fill('   ');
    
    // 保存ボタンをクリック
    await page.locator('button.save-button').click();
    
    // 元のテキストが残っていることを確認（空白は保存されない）
    await expect(page.locator('text=紅茶、コーヒー')).toBeVisible();
  });
});
