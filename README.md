# Policy AI

法務文書、AIにおまかせ。あなたのサービスに合った規約を、30秒で。

## 概要

Webサイト・アプリに必要な法務文書をAIで自動生成する日本語特化ツール。
業種とサービス内容を入力するだけで、プライバシーポリシー・利用規約・特商法表記等の法務文書をAIがカスタマイズ生成。

**URL**: https://policy.ezoai.jp

## 対応文書

| 文書タイプ | 説明 |
|---|---|
| プライバシーポリシー | 個人情報の取り扱い方針 |
| 利用規約 | サービスの利用条件 |
| 特定商取引法表記 | EC・有料サービスの法定表示 |
| AI利用ポリシー | AI技術の利用方針・ガイドライン |
| 免責事項 | 責任範囲の定義 |
| Cookieポリシー | Cookieの使用方針 |
| 返品・返金ポリシー | 返品・返金条件 |

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API (Haiku)
- **Hosting**: Vercel
- **Domain**: policy.ezoai.jp

## セットアップ

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.local に ANTHROPIC_API_KEY を設定

# 開発サーバー起動
npm run dev
```

## ディレクトリ構造

```
src/
├── app/
│   ├── layout.tsx           - ルートレイアウト
│   ├── page.tsx             - トップページ（LP）
│   ├── generate/page.tsx    - 文書生成ページ
│   ├── docs/[type]/page.tsx - 文書タイプ別SEOページ
│   ├── for/[industry]/page.tsx - 業種別SEOページ
│   └── api/generate/route.ts  - 文書生成API
├── components/
│   ├── header.tsx           - ヘッダー
│   ├── footer.tsx           - フッター
│   ├── generate-form.tsx    - 文書生成フォーム
│   ├── document-preview.tsx - 生成結果プレビュー
│   └── copy-button.tsx      - コピーボタン
└── lib/
    ├── constants.ts         - 定数定義
    ├── types.ts             - TypeScript型
    ├── prompts.ts           - AIプロンプト
    └── seo-content.ts       - SEOコンテンツ
```

## AI公開チャネル

- `/llms.txt` - AI向けサイト説明
- `/.well-known/agent.json` - A2A Agent Card
- `/robots.txt` - AIクローラー許可設定

## 開発状況

### Phase 1 (MVP) - 完了
- [x] プロジェクト初期化
- [x] アーキテクチャ設計
- [x] トップページ（ランディングページ）
- [x] 文書生成フォーム・プレビューUI
- [x] AI文書生成API（Claude API連携）
- [x] 文書タイプ別SEOランディングページ
- [x] 業種別SEOランディングページ
- [x] AI公開チャネル（llms.txt, agent.json, robots.txt）

### Phase 2 (予定)
- [ ] ユーザー登録・ログイン
- [ ] 生成履歴の保存
- [ ] PDF出力
- [ ] MCPサーバーエンドポイント
- [ ] Stripe決済連携
