# Policy AI - アーキテクチャ設計書

## 概要
Webサイト・アプリに必要な法務文書をAIで自動生成する日本語特化ツール。
業種とサービス内容を入力するだけで、プライバシーポリシー・利用規約・特商法表記等をAIがカスタマイズ生成。

**URL**: https://policy.ezoai.jp

## ページ構成・ルーティング

```
/                           - トップページ（LP）
/generate                   - 文書生成ページ（フォーム + 結果表示）
/docs/[type]                - 文書タイプ別SEOランディングページ
  /docs/privacy-policy      - プライバシーポリシー
  /docs/terms               - 利用規約
  /docs/tokushoho           - 特定商取引法表記
  /docs/ai-policy           - AI利用ポリシー
  /docs/disclaimer          - 免責事項
  /docs/cookie-policy       - Cookieポリシー
  /docs/refund-policy       - 返品・返金ポリシー
/for/[industry]             - 業種別SEOランディングページ
  /for/ec                   - ECショップ向け
  /for/saas                 - SaaS向け
  /for/blog                 - ブログ向け
  /for/app                  - アプリ向け
  /for/freelance            - フリーランス向け
/api/generate               - 文書生成API
```

## コンポーネント設計

```
src/
├── app/
│   ├── layout.tsx              - ルートレイアウト（黒背景、メタデータ）
│   ├── page.tsx                - トップページLP
│   ├── generate/
│   │   └── page.tsx            - 文書生成ページ（"use client"）
│   ├── docs/
│   │   └── [type]/
│   │       └── page.tsx        - 文書タイプ別LP（SSG）
│   ├── for/
│   │   └── [industry]/
│   │       └── page.tsx        - 業種別LP（SSG）
│   └── api/
│       └── generate/
│           └── route.ts        - 文書生成APIエンドポイント
├── components/
│   ├── header.tsx              - ヘッダー
│   ├── footer.tsx              - フッター
│   ├── generate-form.tsx       - 文書生成フォーム
│   ├── document-preview.tsx    - 生成結果プレビュー
│   └── copy-button.tsx         - コピーボタン
└── lib/
    ├── constants.ts            - 文書タイプ・業種の定義
    ├── prompts.ts              - AI生成用プロンプトテンプレート
    └── types.ts                - TypeScript型定義
```

## データフロー

```
[ユーザー入力]
  ↓ サービス名、概要、業種、文書タイプ、収集情報
[generate-form.tsx] (Client Component)
  ↓ POST /api/generate
[route.ts] (API Route)
  ↓ Claude API (Haiku) でストリーミング生成
[document-preview.tsx] (Client Component)
  ↓ リアルタイム表示
[コピー / フォーマット切替]
```

## API設計

### POST /api/generate
法務文書をAI生成するエンドポイント。

**Request:**
```json
{
  "documentType": "privacy-policy" | "terms" | "tokushoho" | "ai-policy" | "disclaimer" | "cookie-policy" | "refund-policy",
  "industry": "ec" | "saas" | "blog" | "app" | "freelance" | "other",
  "serviceName": "string",
  "serviceDescription": "string",
  "companyName": "string (optional)",
  "collectedData": ["name", "email", "address", "payment", "cookie", "access_log"],
  "format": "text" | "html" | "markdown"
}
```

**Response:** Server-Sent Events (streaming)
```
data: {"chunk": "生成されたテキストの一部"}
data: {"chunk": "続き..."}
data: {"done": true}
```

## MCP Server 設計 (v2)

### ツール定義
```json
{
  "name": "generate_legal_document",
  "description": "Webサービス向けの法務文書（プライバシーポリシー、利用規約等）をAI生成する",
  "inputSchema": {
    "type": "object",
    "properties": {
      "documentType": { "type": "string", "enum": ["privacy-policy", "terms", "tokushoho", "ai-policy", "disclaimer", "cookie-policy", "refund-policy"] },
      "industry": { "type": "string" },
      "serviceName": { "type": "string" },
      "serviceDescription": { "type": "string" },
      "format": { "type": "string", "enum": ["text", "html", "markdown"] }
    },
    "required": ["documentType", "serviceName", "serviceDescription"]
  }
}
```

## デザインシステム

- 背景: `#000000`
- アクセント: `#3b82f6` (blue-500) - 信頼性・プロフェッショナリズム
- カード: `bg-white/5 border border-white/10`
- テキスト: `text-white`, `text-white/70`
- フォント: 16px以上, line-height 1.5-1.75
- ホバー: `cursor-pointer transition-all duration-200`
