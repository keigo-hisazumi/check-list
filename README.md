# チェックリスト

持ち物を確認するためのチェックリストアプリです。Expo（React Native）で作られており、ログインするとチェックリストとチェック状態が Firebase でクラウド同期されます。

公開 URL: <https://keigo-hisazumi.github.io/check-list/>

## 主な機能

- タップで項目をチェック / チェック解除
- メールアドレス / パスワードによるユーザー登録とログイン
- Firebase（Firestore）によるチェックリストとチェック状態のクラウド同期・永続化
- 複数チェックリストの作成・名前の変更・削除
- 項目の追加・名前の変更・削除・ドラッグでの並び替え
- タブまたは左右スワイプでチェックリストを切り替え
- チェック状態をまとめて外す「すべてリセット」
- 進捗（完了数 / 項目数）の表示
- 初回はチュートリアル用のチェックリストを表示

## 使い方

1. メールアドレスとパスワードで新規登録またはログインする
2. 項目をタップしてチェックを入れる（「すべてリセット」でまとめて外せる）
3. 「項目を編集」で編集モードに切り替え、項目の追加・名前の変更・削除・ドラッグでの並び替えを行う（編集モードではチェックリスト名の変更と「リストを削除」もできる）
4. 上部の「＋」ボタンで新しいチェックリストを作成し、タブまたは左右スワイプで切り替える
5. 右上のアバターからログアウトする

## データの保存と同期

- チェックリストの一覧・項目・チェック状態は端末（AsyncStorage）に保存し、ログイン中は Firestore の `users/<uid>/` 配下と同期します
- Firebase の接続設定は `src/firebase/index.ts` にあります

## 技術スタック

- TypeScript
- React / React Native
- Expo（Expo Router、Web 版は react-native-web）
- Firebase（Authentication / Firestore）
- react-native-draggable-flatlist（項目の並び替え）
- ESLint
- GitHub Pages（Web 版のホスティング）

## 開発

### 必要な環境

- Node.js 22（CI・デプロイのワークフローと同じバージョン）
- npm

### コマンド

```bash
npm ci                # 依存関係のインストール
npm run start         # Expo の開発サーバーを起動
npm run web           # Web 版で起動
npm run android       # Android で起動
npm run ios           # iOS で起動
npm run lint          # ESLint
npm run type-check    # TypeScript の型チェック
npm run build         # Web 版を dist/ に書き出し（expo export --platform web）
```

## ディレクトリ構成

```text
app/
  _layout.tsx       ルートレイアウト（Expo Router）
  index.tsx         ログイン状態に応じてログイン画面 / メイン画面を表示
  +html.tsx         Web 版の HTML テンプレート
src/
  components/       画面と UI コンポーネント（ログイン・メイン画面・ナビゲーション・モーダルなど）
  hooks/            認証・チェックリスト・設定同期のフック
  firebase/         Firebase の初期化と Firestore の読み書き
public/             Web App Manifest・アイコン・favicon
app.json            Expo の設定（Web 版のベースパス `/check-list` を含む）
```

## デプロイ

- `main` への PR マージ時に `.github/workflows/deploy.yml` が Web 版をビルドして GitHub Pages へデプロイします（Actions の画面から手動実行も可能）
- PR ごとに `.github/workflows/pr-preview.yml` がプレビューを `gh-pages` ブランチの `pr-<番号>/` に公開し、URL と QR コードを PR にコメントします（PR クローズ時に削除）

## 開発ルール

開発ルールは [AGENTS.md](./AGENTS.md) を参照してください。

## ライセンス

MIT
