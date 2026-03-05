import type { DocumentType, Industry } from "./types";

export const DOC_TYPE_SEO: Record<
  DocumentType,
  {
    title: string;
    h1: string;
    description: string;
    keywords: string[];
    sections: { heading: string; body: string }[];
  }
> = {
  "privacy-policy": {
    title: "プライバシーポリシー テンプレート - AI自動生成",
    h1: "プライバシーポリシーをAIで自動生成",
    description:
      "プライバシーポリシーのテンプレートをAIが30秒で自動生成。個人情報保護法に準拠した、あなたのサービスに最適化されたプライバシーポリシーを無料で作成できます。",
    keywords: [
      "プライバシーポリシー テンプレート",
      "プライバシーポリシー 作り方",
      "個人情報保護方針 ひな形",
    ],
    sections: [
      {
        heading: "プライバシーポリシーとは",
        body: "プライバシーポリシー（個人情報保護方針）とは、Webサイトやアプリが収集する個人情報の取り扱いについて定めた文書です。個人情報保護法により、個人情報を取り扱う全ての事業者に策定が求められています。",
      },
      {
        heading: "必要な記載事項",
        body: "利用目的の特定と通知、第三者提供の条件、安全管理措置、開示・訂正・削除請求の手続き、Cookie等のトラッキング技術の使用、問い合わせ窓口の明示が必要です。",
      },
      {
        heading: "AIで作成するメリット",
        body: "業種やサービス内容に応じて、必要な条項を自動で組み合わせ。個人情報保護法の最新要件に対応したテンプレートをベースに、あなたのサービスに最適化された文書を生成します。",
      },
    ],
  },
  terms: {
    title: "利用規約 テンプレート - AI自動生成",
    h1: "利用規約をAIで自動生成",
    description:
      "利用規約のテンプレートをAIが30秒で自動生成。Webサービス・アプリに必要な利用規約を、あなたのサービスに合わせて無料で作成。",
    keywords: [
      "利用規約 テンプレート",
      "利用規約 作成",
      "サービス利用規約 ひな形",
    ],
    sections: [
      {
        heading: "利用規約とは",
        body: "利用規約とは、サービスの利用条件を定めた文書です。ユーザーとサービス提供者の間の契約関係を明確にし、トラブルを未然に防ぐ役割があります。",
      },
      {
        heading: "主要な記載事項",
        body: "サービスの定義と範囲、利用者の義務と禁止事項、知的財産権の帰属、免責事項と責任制限、サービスの変更・終了条件、準拠法と管轄裁判所を記載します。",
      },
      {
        heading: "業種別のポイント",
        body: "ECサイトでは返品・決済に関する条項、SaaSではデータの取り扱いやSLAが重要です。AIが業種に応じた条項を自動で追加します。",
      },
    ],
  },
  tokushoho: {
    title: "特定商取引法に基づく表記 テンプレート - AI自動生成",
    h1: "特定商取引法に基づく表記をAIで自動生成",
    description:
      "特定商取引法に基づく表記（特商法表記）のテンプレートをAIが自動生成。ECサイト・有料サービスに必須の法定表示を30秒で作成。",
    keywords: [
      "特定商取引法 表記 テンプレート",
      "特商法 ひな形",
      "ネットショップ 特商法",
    ],
    sections: [
      {
        heading: "特定商取引法に基づく表記とは",
        body: "EC（通信販売）を行う事業者に法律で義務付けられている表示事項です。特定商取引法第11条により、事業者情報・価格・支払方法・返品条件などの明示が求められます。",
      },
      {
        heading: "必須記載事項",
        body: "販売業者の名称・所在地・連絡先、販売価格・送料・手数料、代金の支払方法と支払時期、商品の引渡し時期、返品・交換条件を記載する必要があります。",
      },
      {
        heading: "未記載のリスク",
        body: "特商法に基づく表記が不十分な場合、行政処分（指示・業務停止命令）の対象となります。また、消費者からの信頼を失い、売上に直接影響します。",
      },
    ],
  },
  "ai-policy": {
    title: "AI利用ポリシー テンプレート - AI自動生成",
    h1: "AI利用ポリシーをAIで自動生成",
    description:
      "AI利用ポリシー・生成AIガイドラインのテンプレートをAIが自動生成。総務省・経産省ガイドラインに準拠。あなたの企業に合ったAI利用方針を30秒で作成。",
    keywords: [
      "AI利用ポリシー テンプレート",
      "生成AI ガイドライン 作り方",
      "AI利用方針 ひな形",
    ],
    sections: [
      {
        heading: "AI利用ポリシーとは",
        body: "AI利用ポリシーとは、企業やサービスにおけるAI技術の利用方針を定めた文書です。2024年に総務省・経産省が「AI事業者ガイドライン」を策定し、全企業にAI利用規約の整備が求められています。",
      },
      {
        heading: "なぜ今必要なのか",
        body: "生成AIの普及により、著作権リスク、個人情報の学習利用、AIの判断に対する責任など、新たな法的課題が浮上しています。AI利用ポリシーは、これらのリスクに対する企業の姿勢を明確にします。",
      },
      {
        heading: "主要な記載事項",
        body: "AI技術の利用目的と範囲、使用するAIモデルの種類、AI生成コンテンツの取り扱い方針、データの学習利用に関する方針、倫理的配慮、人間による監督体制を記載します。",
      },
    ],
  },
  disclaimer: {
    title: "免責事項 テンプレート - AI自動生成",
    h1: "免責事項をAIで自動生成",
    description:
      "Webサイト・ブログに必要な免責事項のテンプレートをAIが自動生成。情報の正確性や損害に関する責任範囲を明確に。",
    keywords: ["免責事項 テンプレート", "免責事項 書き方", "ブログ 免責事項"],
    sections: [
      {
        heading: "免責事項とは",
        body: "免責事項とは、Webサイトが提供する情報やサービスに関する責任の範囲を定めた文書です。特にブログやメディアサイトでは、情報の正確性に関する免責が重要です。",
      },
      {
        heading: "記載すべき内容",
        body: "情報の正確性に関する免責、外部リンクに関する免責、サービス停止に関する免責、損害賠償の制限、適用範囲を記載します。",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie\u30dd\u30ea\u30b7\u30fc \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "Cookie\u30dd\u30ea\u30b7\u30fc\u3092AI\u3067\u81ea\u52d5\u751f\u6210",
    description:
      "Cookie\u30dd\u30ea\u30b7\u30fc\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002Google Analytics\u3084\u5e83\u544a\u30bf\u30b0\u3092\u4f7f\u7528\u3059\u308bWeb\u30b5\u30a4\u30c8\u306b\u5fc5\u9808\u306eCookie\u540c\u610f\u6587\u66f8\u3092\u4f5c\u6210\u3002",
    keywords: [
      "Cookie\u30dd\u30ea\u30b7\u30fc \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",
      "Cookie\u540c\u610f \u6587\u8a00",
      "GDPR Cookie\u5bfe\u5fdc",
    ],
    sections: [
      {
        heading: "Cookie\u30dd\u30ea\u30b7\u30fc\u3068\u306f",
        body: "Cookie\u30dd\u30ea\u30b7\u30fc\u3068\u306f\u3001Web\u30b5\u30a4\u30c8\u304c\u4f7f\u7528\u3059\u308bCookie\u306e\u7a2e\u985e\u3001\u76ee\u7684\u3001\u7ba1\u7406\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b\u6587\u66f8\u3067\u3059\u3002Google Analytics\u3084\u5e83\u544a\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u3092\u5229\u7528\u3059\u308b\u30b5\u30a4\u30c8\u3067\u306f\u7279\u306b\u91cd\u8981\u3067\u3059\u3002",
      },
    ],
  },
  "refund-policy": {
    title: "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc\u3092AI\u3067\u81ea\u52d5\u751f\u6210",
    description:
      "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002EC\u30b5\u30a4\u30c8\u306b\u5fc5\u9808\u306e\u8fd4\u54c1\u30fb\u8fd4\u91d1\u6761\u4ef6\u3092\u660e\u78ba\u306b\u3002",
    keywords: [
      "\u8fd4\u54c1\u30dd\u30ea\u30b7\u30fc \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",
      "\u8fd4\u91d1\u898f\u5b9a \u4f5c\u308a\u65b9",
      "EC\u30b5\u30a4\u30c8 \u8fd4\u54c1",
    ],
    sections: [
      {
        heading: "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc\u3068\u306f",
        body: "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc\u3068\u306f\u3001\u5546\u54c1\u306e\u8fd4\u54c1\u3084\u8fd4\u91d1\u306b\u95a2\u3059\u308b\u6761\u4ef6\u3092\u5b9a\u3081\u305f\u6587\u66f8\u3067\u3059\u3002EC\u30b5\u30a4\u30c8\u3067\u306f\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u3088\u308a\u3001\u8fd4\u54c1\u6761\u4ef6\u306e\u660e\u793a\u304c\u7fa9\u52d9\u4ed8\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002",
      },
    ],
  },
};

export const INDUSTRY_SEO: Record<
  Industry,
  {
    title: string;
    h1: string;
    description: string;
    recommendedDocs: DocumentType[];
    points: string[];
  }
> = {
  ec: {
    title: "EC\u30b7\u30e7\u30c3\u30d7\u5411\u3051\u6cd5\u52d9\u6587\u66f8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "EC\u30b7\u30e7\u30c3\u30d7\u306b\u5fc5\u8981\u306a\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "Shopify\u30fbBASE\u30fbSTORES\u306a\u3069\u306eEC\u30b7\u30e7\u30c3\u30d7\u306b\u5fc5\u8981\u306a\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001\u5229\u7528\u898f\u7d04\u3001\u7279\u5546\u6cd5\u8868\u8a18\u3001\u8fd4\u54c1\u30dd\u30ea\u30b7\u30fc\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002",
    recommendedDocs: [
      "privacy-policy",
      "terms",
      "tokushoho",
      "refund-policy",
      "cookie-policy",
    ],
    points: [
      "\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u8a18\u304c\u6cd5\u7684\u306b\u5fc5\u9808",
      "\u8fd4\u54c1\u30fb\u8fd4\u91d1\u6761\u4ef6\u306e\u660e\u793a\u304c\u30c8\u30e9\u30d6\u30eb\u9632\u6b62\u306b\u6709\u52b9",
      "\u6c7a\u6e08\u60c5\u5831\u3092\u6271\u3046\u305f\u3081\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u304c\u91cd\u8981",
      "Cookie\u3067\u30ab\u30fc\u30c8\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u5834\u5408Cookie\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u8981",
    ],
  },
  saas: {
    title: "SaaS\u30fbWeb\u30b5\u30fc\u30d3\u30b9\u5411\u3051\u6cd5\u52d9\u6587\u66f8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "SaaS\u30fbWeb\u30b5\u30fc\u30d3\u30b9\u306b\u5fc5\u8981\u306a\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "\u6708\u984d\u8ab2\u91d1\u578bWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a\u5229\u7528\u898f\u7d04\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001AI\u5229\u7528\u30dd\u30ea\u30b7\u30fc\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002",
    recommendedDocs: [
      "terms",
      "privacy-policy",
      "ai-policy",
      "cookie-policy",
    ],
    points: [
      "\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u6271\u3044\u3068SLA\u306e\u660e\u8a18\u304c\u91cd\u8981",
      "AI\u6a5f\u80fd\u642d\u8f09\u6642\u306fAI\u5229\u7528\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u9808",
      "\u7121\u6599\u30d7\u30e9\u30f3\u3068\u6709\u6599\u30d7\u30e9\u30f3\u306e\u6761\u4ef6\u5dee\u7570\u3092\u898f\u7d04\u3067\u660e\u78ba\u5316",
      "\u30a2\u30ab\u30a6\u30f3\u30c8\u524a\u9664\u6642\u306e\u30c7\u30fc\u30bf\u51e6\u7406\u3092\u660e\u8a18",
    ],
  },
  blog: {
    title: "\u30d6\u30ed\u30b0\u30fb\u30e1\u30c7\u30a3\u30a2\u5411\u3051\u6cd5\u52d9\u6587\u66f8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "\u30d6\u30ed\u30b0\u30fb\u30e1\u30c7\u30a3\u30a2\u306b\u5fc5\u8981\u306a\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "\u30d6\u30ed\u30b0\u3084\u30e1\u30c7\u30a3\u30a2\u30b5\u30a4\u30c8\u306b\u5fc5\u8981\u306a\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001\u514d\u8cac\u4e8b\u9805\u3001Cookie\u30dd\u30ea\u30b7\u30fc\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002",
    recommendedDocs: [
      "privacy-policy",
      "disclaimer",
      "cookie-policy",
    ],
    points: [
      "Google AdSense\u5229\u7528\u6642\u306fCookie\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u9808",
      "\u30a2\u30d5\u30a3\u30ea\u30a8\u30a4\u30c8\u30ea\u30f3\u30af\u306e\u514d\u8cac\u4e8b\u9805\u304c\u91cd\u8981",
      "\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u3067\u500b\u4eba\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u5834\u5408PP\u304c\u5fc5\u8981",
    ],
  },
  app: {
    title: "\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5411\u3051\u6cd5\u52d9\u6587\u66f8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u5fc5\u8981\u306a\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "iOS/Android\u30a2\u30d7\u30ea\u306b\u5fc5\u8981\u306a\u5229\u7528\u898f\u7d04\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001AI\u5229\u7528\u30dd\u30ea\u30b7\u30fc\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002App Store/Google Play\u306e\u8981\u4ef6\u306b\u5bfe\u5fdc\u3002",
    recommendedDocs: [
      "terms",
      "privacy-policy",
      "ai-policy",
    ],
    points: [
      "App Store / Google Play\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3067\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u9808",
      "\u4f4d\u7f6e\u60c5\u5831\u30fb\u30ab\u30e1\u30e9\u7b49\u306e\u6a29\u9650\u4f7f\u7528\u76ee\u7684\u306e\u660e\u793a",
      "\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1\u304c\u3042\u308b\u5834\u5408\u306f\u5229\u7528\u898f\u7d04\u3067\u660e\u8a18",
    ],
  },
  freelance: {
    title: "\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9\u5411\u3051\u6cd5\u52d9\u6587\u66f8 - AI\u81ea\u52d5\u751f\u6210",
    h1: "\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9\u306b\u5fc5\u8981\u306a\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "\u500b\u4eba\u4e8b\u696d\u4e3b\u30fb\u30d5\u30ea\u30fc\u30e9\u30f3\u30b5\u30fc\u306e\u30b5\u30fc\u30d3\u30b9\u30b5\u30a4\u30c8\u306b\u5fc5\u8981\u306a\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001\u5229\u7528\u898f\u7d04\u3001\u7279\u5546\u6cd5\u8868\u8a18\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002",
    recommendedDocs: [
      "privacy-policy",
      "terms",
      "tokushoho",
    ],
    points: [
      "\u6709\u6599\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u6642\u306f\u7279\u5546\u6cd5\u8868\u8a18\u304c\u5fc5\u9808",
      "\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3082\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u304c\u63a8\u5968",
      "\u53d7\u6ce8\u6848\u4ef6\u306e\u77e5\u7684\u8ca1\u7523\u6a29\u3092\u5229\u7528\u898f\u7d04\u3067\u660e\u78ba\u5316",
    ],
  },
  other: {
    title: "\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u81ea\u52d5\u751f\u6210",
    h1: "\u3042\u306a\u305f\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u5408\u3063\u305f\u6cd5\u52d9\u6587\u66f8\u3092AI\u3067\u751f\u6210",
    description:
      "\u3042\u3089\u3086\u308b\u696d\u7a2e\u306eWeb\u30b5\u30fc\u30d3\u30b9\u306b\u5bfe\u5fdc\u3002\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3001\u5229\u7528\u898f\u7d04\u3001AI\u5229\u7528\u30dd\u30ea\u30b7\u30fc\u306a\u30697\u7a2e\u985e\u306e\u6cd5\u52d9\u6587\u66f8\u3092AI\u304c\u81ea\u52d5\u751f\u6210\u3002",
    recommendedDocs: [
      "privacy-policy",
      "terms",
      "ai-policy",
    ],
    points: [
      "\u500b\u4eba\u60c5\u5831\u3092\u6271\u3046\u5168\u3066\u306e\u30b5\u30a4\u30c8\u306b\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u8981",
      "AI\u3092\u6d3b\u7528\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306b\u306fAI\u5229\u7528\u30dd\u30ea\u30b7\u30fc\u304c\u63a8\u5968",
      "\u696d\u7a2e\u56fa\u6709\u306e\u6cd5\u898f\u5236\u304c\u3042\u308b\u5834\u5408\u306f\u5c02\u9580\u5bb6\u306b\u78ba\u8a8d\u3092\u63a8\u5968",
    ],
  },
};
