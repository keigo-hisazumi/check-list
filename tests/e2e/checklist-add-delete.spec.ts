import { test, expect } from '@playwright/test';

test.describe('チェックリストのアイテム追加・削除機能', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリア
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('朝やることリストに新しいアイテムを追加できる', async ({ page }) => {
    await page.goto('/');
    
    // 初期状態でアイテム数を確認
    await expect(page.locator('.progress')).toContainText('0 / 10 完了');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // 「新しい項目を追加」ボタンをクリック
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    // アイテムが追加され、項目数が増えることを確認
    await expect(page.locator('.progress')).toContainText('0 / 11 完了');
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    await expect(editInput).toHaveValue('新しい項目');
    
    // テキストを編集
    await editInput.fill('テスト項目');
    
    // 保存ボタンをクリック
    await page.locator('button.save-button').click();
    
    // 追加されたアイテムが表示されることを確認
    await expect(page.locator('text=テスト項目')).toBeVisible();
  });

  test('追加したアイテムはページリロード後も保持される', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('永続化テスト項目');
    await page.locator('button.save-button').click();
    
    // ページをリロード
    await page.reload();
    
    // リロード後もアイテムが表示されることを確認
    await expect(page.locator('text=永続化テスト項目')).toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 11 完了');
  });

  test('カスタムアイテムを削除できる', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('削除テスト項目');
    await page.locator('button.save-button').click();
    
    // 追加されたアイテムが表示されることを確認
    await expect(page.locator('text=削除テスト項目')).toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 11 完了');
    
    // 確認ダイアログを自動的に受け入れる
    page.on('dialog', dialog => dialog.accept());
    
    // 最後の項目（追加した項目）の削除ボタンをクリック
    await page.locator('button.delete-icon-button').last().click();
    
    // アイテムが削除されることを確認
    await expect(page.locator('text=削除テスト項目')).not.toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 10 完了');
  });

  test('削除したカスタムアイテムはページリロード後も消えている', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('削除永続化テスト');
    await page.locator('button.save-button').click();
    
    // 確認ダイアログを自動的に受け入れる
    page.on('dialog', dialog => dialog.accept());
    
    // 削除ボタンをクリック
    await page.locator('button.delete-icon-button').last().click();
    
    // ページをリロード
    await page.reload();
    
    // リロード後もアイテムが消えていることを確認
    await expect(page.locator('text=削除永続化テスト')).not.toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 10 完了');
  });

  test('初期アイテムを削除できる', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // 初期アイテム数を確認
    await expect(page.locator('.progress')).toContainText('0 / 10 完了');
    
    // 確認ダイアログを自動的に受け入れる
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain('初期項目を削除しますか？');
      dialog.accept();
    });
    
    // 最初の初期アイテムの削除ボタンをクリック
    await page.locator('button.delete-icon-button').first().click();
    
    // アイテムが削除されることを確認
    await expect(page.locator('.progress')).toContainText('0 / 9 完了');
  });

  test('削除確認ダイアログでキャンセルできる', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('キャンセルテスト');
    await page.locator('button.save-button').click();
    
    // 確認ダイアログをキャンセル
    page.on('dialog', dialog => dialog.dismiss());
    
    // 削除ボタンをクリック
    await page.locator('button.delete-icon-button').last().click();
    
    // アイテムが残っていることを確認
    await expect(page.locator('text=キャンセルテスト')).toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 11 完了');
  });

  test('カバンの中リストにアイテムを追加できる', async ({ page }) => {
    await page.goto('/');
    
    // カバンの中タブをクリック
    await page.locator('button:has-text("カバンの中")').click();
    
    // カバンの中の進捗表示が表示されるまで待つ
    await page.locator('.progress').filter({ hasText: '/ 8 完了' }).waitFor({ state: 'visible' });
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // 「新しい項目を追加」ボタンをクリック
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    // アイテムが追加され、項目数が増えることを確認
    await expect(page.locator('.progress')).toContainText('0 / 9 完了');
    
    // 編集入力フィールドが表示されることを確認
    const editInput = page.locator('input.edit-input');
    await expect(editInput).toBeVisible();
    
    // テキストを編集
    await editInput.fill('カバン用テスト項目');
    await page.locator('button.save-button').click();
    
    // 追加されたアイテムが表示されることを確認
    await expect(page.locator('text=カバン用テスト項目')).toBeVisible();
  });

  test('カバンの中リストでアイテムを削除できる', async ({ page }) => {
    await page.goto('/');
    
    // カバンの中タブをクリック
    await page.locator('button:has-text("カバンの中")').click();
    
    // カバンの中の進捗表示が表示されるまで待つ
    await page.locator('.progress').filter({ hasText: '/ 8 完了' }).waitFor({ state: 'visible' });
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    
    const editInput = page.locator('input.edit-input');
    await editInput.fill('カバン削除テスト');
    await page.locator('button.save-button').click();
    
    // 確認ダイアログを自動的に受け入れる
    page.on('dialog', dialog => dialog.accept());
    
    // 削除ボタンをクリック
    await page.locator('button.delete-icon-button').last().click();
    
    // アイテムが削除されることを確認
    await expect(page.locator('text=カバン削除テスト')).not.toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 8 完了');
  });

  test('複数のアイテムを追加できる', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // 1つ目のアイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    let editInput = page.locator('input.edit-input');
    await editInput.fill('項目1');
    await page.locator('button.save-button').click();
    
    // 2つ目のアイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    editInput = page.locator('input.edit-input');
    await editInput.fill('項目2');
    await page.locator('button.save-button').click();
    
    // 3つ目のアイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    editInput = page.locator('input.edit-input');
    await editInput.fill('項目3');
    await page.locator('button.save-button').click();
    
    // すべてのアイテムが表示されることを確認
    await expect(page.locator('text=項目1')).toBeVisible();
    await expect(page.locator('text=項目2')).toBeVisible();
    await expect(page.locator('text=項目3')).toBeVisible();
    await expect(page.locator('.progress')).toContainText('0 / 13 完了');
  });

  test('追加したアイテムをチェックできる', async ({ page }) => {
    await page.goto('/');
    
    // 編集モードに入る
    await page.getByRole('button', { name: '項目を編集' }).click();
    
    // アイテムを追加
    await page.getByRole('button', { name: '新しい項目を追加' }).click();
    const editInput = page.locator('input.edit-input');
    await editInput.fill('チェックテスト');
    await page.locator('button.save-button').click();
    
    // 編集モードを終了
    await page.getByRole('button', { name: '編集完了' }).click();
    
    // 追加したアイテムのラベルを探してその親要素からチェックボックスを見つける
    const newItemRow = page.locator('li:has-text("チェックテスト")');
    const checkboxButton = newItemRow.locator('.checkbox-button');
    
    // チェックボックスをクリック
    await checkboxButton.click();
    
    // チェックされたことを確認（進捗表示が更新されるまで待機）
    await expect(page.locator('.progress')).toContainText('1 / 11 完了', { timeout: 2000 });
  });
});
