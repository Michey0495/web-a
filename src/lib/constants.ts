import { DocumentType, Industry, CollectedData } from "./types";

export const DOCUMENT_TYPES: Record<
  DocumentType,
  { label: string; description: string; slug: string }
> = {
  "privacy-policy": {
    label: "プライバシーポリシー",
    description:
      "個人情報の取り扱いについて定めた文書。全てのWebサイトに必須。",
    slug: "privacy-policy",
  },
  terms: {
    label: "利用規約",
    description:
      "サービスの利用条件を定めた文書。ユーザーとの契約関係を明確化。",
    slug: "terms",
  },
  tokushoho: {
    label: "特定商取引法に基づく表記",
    description:
      "ECサイト・有料サービスに必須の法定表示。販売者情報・返品条件等。",
    slug: "tokushoho",
  },
  "ai-policy": {
    label: "AI利用ポリシー",
    description:
      "AIの利用方針・生成AIガイドライン。2024年以降、全企業に策定が求められている。",
    slug: "ai-policy",
  },
  disclaimer: {
    label: "免責事項",
    description:
      "情報の正確性や損害に関する責任の範囲を定めた文書。",
    slug: "disclaimer",
  },
  "cookie-policy": {
    label: "Cookieポリシー",
    description:
      "Cookieの使用目的・種類・管理方法を説明する文書。",
    slug: "cookie-policy",
  },
  "refund-policy": {
    label: "返品・返金ポリシー",
    description:
      "商品の返品・返金条件を定めた文書。ECサイトに必須。",
    slug: "refund-policy",
  },
};

export const INDUSTRIES: Record<
  Industry,
  { label: string; description: string }
> = {
  ec: {
    label: "ECショップ",
    description: "Shopify / BASE / STORES などのネットショップ",
  },
  saas: {
    label: "SaaS / Webサービス",
    description: "月額課金型のWebアプリケーション",
  },
  blog: {
    label: "ブログ / メディア",
    description: "情報発信サイト・オウンドメディア",
  },
  app: {
    label: "モバイルアプリ",
    description: "iOS / Android アプリケーション",
  },
  freelance: {
    label: "フリーランス",
    description: "個人事業主・フリーランサーのサービスサイト",
  },
  other: {
    label: "その他",
    description: "上記に当てはまらないサービス",
  },
};

export const COLLECTED_DATA_OPTIONS: Record<CollectedData, string> = {
  name: "氏名",
  email: "メールアドレス",
  address: "住所",
  phone: "電話番号",
  payment: "クレジットカード・決済情報",
  cookie: "Cookie",
  access_log: "アクセスログ（IP・ブラウザ情報）",
};

export const SITE_NAME = "Policy AI";
export const SITE_DESCRIPTION =
  "法務文書、AIにおまかせ。あなたのサービスに合った規約を、30秒で。";
export const SITE_URL = "https://policy.ezoai.jp";
