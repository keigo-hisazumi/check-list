# チェックリスト

持ち物を確認するためのVue.js + TypeScriptベースのチェックリストアプリケーションです。

🌐 **ライブデモ**: [https://keigo-hisazumi.github.io/check-list/](https://keigo-hisazumi.github.io/check-list/)

## 機能

- ✅ チェックボックスで項目を確認
- 💾 ブラウザのローカルストレージでチェック状態を自動保存
- 📱 レスポンシブデザイン対応
- 🔄 すべてのチェックをリセットする機能
- 📊 進捗状況の表示

## チェックリスト項目

- マスク、手帳、教材
- カギ、イヤホン、社員証
- 名刺入れ、クシ、ハンカチ
- 筆箱、充電器、財布、(日傘)
- ポーチ類、(化粧ポーチ)
- 弁当、カトラリー
- (歯ブラシ)
- 水筒

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
- Local Storage API

## デプロイ

このアプリケーションはGitHub Pagesに自動デプロイされます。

- mainブランチへのプッシュで自動的にデプロイが実行されます
- GitHub Actionsワークフローが自動的にビルドとデプロイを行います
- デプロイされたアプリケーションは [https://keigo-hisazumi.github.io/check-list/](https://keigo-hisazumi.github.io/check-list/) でアクセス可能です

## ライセンス

MIT

