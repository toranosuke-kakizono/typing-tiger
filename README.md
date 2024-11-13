# Tiger Typing🐯

## 概要

シンプルなタイピングゲームです。
世界的指標になっているWPM（Words Per Minute ）や Accuracy をサーバーに自動で保存し、日々の記録を一覧で確認することができます。

### 技術スタック

#### **バックエンド**
<p>
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" width="40" height="40" />
  <img src="https://knexjs.org/knex-logo.png" alt="Knex.js" width="40" height="40" />
</p>

#### **フロントエンド**
<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="40" height="40" />
  <img src="https://vitejs.dev/logo.svg" alt="Vite" width="40" height="40" />
</p>

#### **スタイリング**
<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" width="40" height="40" />
</p>

#### **その他**
<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="ESLint" width="40" height="40" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="GitHub" width="40" height="40" />
</p>

## セットアップ

### 環境構築

#### 必要な環境

- Node.js (推奨バージョン: 14.x以上)
- npm または yarn
- データベース (例: PostgreSQL)

### バックエンドのセットアップ

1. 必要な依存関係をインストールします。
    ```bash
    cd backend
    npm run setup
    ```
2. `.env`ファイルに必要な環境変数を設定します。
3. データベースのマイグレーションを実行します。
    ```bash
    npm run migrate
    ```
4. シードデータを挿入します。
    ```bash
    npm run seed
    ```
5. サーバーを起動します。
    ```bash
    npm start
    ```

### フロントエンドのセットアップ

1. 必要な依存関係をインストールします。
    ```bash
    cd frontend
    npm install
    ```
2. 開発サーバーを起動します。
    ```bash
    npm run dev
    ```

## ディレクトリ構成

<pre>
├── backend
│   ├── controllers        # コントローラファイル
│   ├── db                 # データベース関連
│   │   ├── migrations     # マイグレーションファイル
│   │   └── seeds          # シードデータ
│   ├── routes             # ルーティング
│   ├── utils              # ユーティリティ関数
│   ├── .env               # 環境変数
│   ├── knexfile.js        # Knex設定ファイル
│   ├── server.js          # サーバーエントリーポイント
│   └── package.json       # バックエンド依存関係
├── frontend 
│   ├── src 
│   │   ├── atoms          # jotaiを使ったグローバルステート管理
│   │   ├── features       # 機能ごとのコンポーネント
│   │   │   ├── Home       # ホーム画面
│   │   │   ├── records    # レコード画面
│   │   │   └── typingGame # タイピングゲーム画面
│   │   ├── App.jsx        # ReactのメインAppコンポーネント
│   │   └── main.jsx       # エントリーポイント
│   ├── vite.config.js     # Vite設定ファイル
│   ├── index.html         # HTMLテンプレート
│   └── package.json       # フロントエンド依存関係
├── .gitignore             # Git無視設定
└── README.md              # このファイル
</pre>

## 使用方法

[プロジェクトの使い方やデモについて記載]

## スクリプト

以下は、バックエンドおよびフロントエンドプロジェクトで使用できるスクリプトの一覧と説明です。


### バックエンド

| スクリプト                      | 説明                                            |
|----------------------------|-----------------------------------------------|
| `npm run setup`            | `.env.example` を `.env` にコピーし、依存関係をインストールします。 |
| `npm start`                | サーバーを起動します（`nodemon`を使用）。                     |
| `npm run migrate`          | データベースの最新マイグレーションを適用します。                      |
| `npm run migrate-rollback` | 最新のマイグレーションをロールバックします。                        |
| `npm run migrate-make`     | 新しいマイグレーションファイルを作成します。                        |
| `npm run seed`             | シードデータをデータベースに挿入します。                          |
| `npm run seed-make`        | 新しいシードファイルを作成します。                             |
| `npm test`                 | 現在は指定されていませんが、テスト実行用のスクリプトです。                 |


### フロントエンド

| スクリプト           | 説明                         |
|-----------------|----------------------------|
| `npm run dev`   | 開発サーバーを起動します（ホットリロード有効）。   |
| `npm run build` | 本番ビルドを作成します。               |
| `npm run lint`  | ESLintを使用してコードの静的解析を実行します。 |

---
## 今後追加したい機能

このプロジェクトでは、以下の機能を今後追加する予定です。

### バックエンド
- **認証機能**  
  ユーザー登録、ログイン、JWTを使用した認証システムの実装。

- **データベースのパフォーマンス最適化**  
  クエリの最適化、インデックスの追加など。

- **APIの追加**  
  新しいエンドポイントの作成（例：ユーザーの苦手なKeyを取得）

### フロントエンド
- **コード全体のリファクタリング**  
  必要最小限のステートを実装。

- **Reactコンポーネントの機能分割**  
  機能ごとに分割する。また不要な再レンダリングを防止する。

- **レスポンシブデザイン**  
  様々な比率に対応しているデザインの実装。

- **テーマ切り替え**  
  ユーザーが選択可能な配色テーマの追加。

- **リアルタイム機能**  
  ColyseusおよびWebSocketを使用したリアルタイムなタイピングバトルの実装。

### 共通
- **CI/CDパイプラインの構築**  
  自動テスト、デプロイメントのパイプラインを構築。

- **ユニットテストと統合テストの追加**  
  JestやReact Testing Libraryを使用したテストを実装。

---

このセクションはプロジェクトの進捗に応じて更新されます。

## 作者

- 名前: Tora
- GitHub: toranosuke-kakizono