# チェックリスト

持ち物を確認するためのVue.js + TypeScriptベースのチェックリストアプリケーションです。

🌐 **ライブデモ**: [https://keigo-hisazumi.github.io/check-list/](https://keigo-hisazumi.github.io/check-list/)

## 機能

- ✅ チェックボックスで項目を確認
- 💾 Firebaseによるチェック状態のクラウド同期・永続化
- 👤 メールアドレス/パスワードによるユーザー認証
- 📋 複数チェックリストの作成・管理・削除
- ✏️ チェックリスト名・項目名のインライン編集
- ➕ カスタム項目の追加・削除
- 👆 スワイプでチェックリストを切り替え
- 📱 レスポンシブデザイン対応
- 🔄 チェック状態をリセットする機能
- 📊 進捗状況の表示

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションビルドのプレビュー
npm run preview
```

## 技術スタック

- Vue 3 (Composition API)
- TypeScript
- Vite 7
- Firebase (Authentication / Firestore)

## デプロイ

このアプリケーションはGitHub Pagesに自動デプロイされます。

- mainブランチへのプッシュで自動的にデプロイが実行されます
- Pull Request作成時に `gh-pages` ブランチ配下へ**PRプレビュー**が自動デプロイされます
- プレビューURL（`/check-list/pr-<PR番号>/`）はPRコメントに自動投稿/更新されます
- GitHub Actionsワークフローが自動的にビルドとデプロイを行います
- デプロイされたアプリケーションは [https://keigo-hisazumi.github.io/check-list/](https://keigo-hisazumi.github.io/check-list/) でアクセス可能です

## ライセンス

MIT

