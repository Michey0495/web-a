import Link from "next/link";
import { DOCUMENT_TYPES, INDUSTRIES, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import type { DocumentType, Industry } from "@/lib/types";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  description:
    "プライバシーポリシー、利用規約、AI利用ポリシーなど7種類の法務文書をAIが30秒で自動生成。業種別にカスタマイズ。無料・登録不要。",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  provider: {
    "@type": "Organization",
    name: "Ghostfee",
    url: "https://github.com/Michey0495",
  },
  featureList: [
    "プライバシーポリシー自動生成",
    "利用規約自動生成",
    "AI利用ポリシー自動生成",
    "特定商取引法表記自動生成",
    "業種別カスタマイズ",
    "MCP Server搭載",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "プライバシーポリシーのテンプレートは無料で使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Policy AIは完全無料でご利用いただけます。ユーザー登録も不要で、何度でも法務文書を生成できます。",
      },
    },
    {
      "@type": "Question",
      name: "AI利用ポリシーとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI利用ポリシーは、サービスにおけるAI技術の利用方針を定めた文書です。利用目的、データの取り扱い、人間による監視体制などを明記します。経済産業省のAI事業者ガイドラインに基づき、AIを活用する企業には策定が推奨されています。",
      },
    },
    {
      "@type": "Question",
      name: "生成された法務文書はそのまま使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Policy AIが生成する文書はAIによるテンプレートであり、法的助言ではありません。そのまま利用することも可能ですが、重要な事業判断に関わる場合は法律の専門家にご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "どの業種に対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ECショップ、SaaS/Webサービス、ブログ/メディア、モバイルアプリ、フリーランスなど主要な業種に対応しています。業種ごとに必要な法的要件をAIが自動で反映します。",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="py-24 md:py-32 text-center">
        <p className="text-sm text-blue-400 font-medium tracking-wide mb-4">
          無料 / 登録不要 / 7種類の法務文書
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          法務文書、AIにおまかせ。
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          業種とサービス情報を入力するだけ。30秒で完了。
          <br className="hidden md:block" />
          プライバシーポリシーからAI利用ポリシーまで、
          <br className="hidden md:block" />
          あなたのサービスに最適化された法務文書をAIが自動生成。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center px-10 py-4 bg-blue-500 text-white font-semibold text-lg rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:scale-[1.02]"
          >
            今すぐ無料で作成
          </Link>
          <Link
            href="/docs/ai-policy"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10"
          >
            AI利用ポリシーとは
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/40">
          弁護士に依頼する前に、まず無料で試してみませんか？
        </p>
      </section>

      {/* Document Types */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          対応文書
        </h2>
        <p className="text-white/50 text-center mb-10">
          7種類の法務文書をAIがカスタマイズ生成
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(
            Object.entries(DOCUMENT_TYPES) as [
              DocumentType,
              (typeof DOCUMENT_TYPES)[DocumentType],
            ][]
          ).map(([key, doc]) => (
            <Link
              key={key}
              href={`/docs/${doc.slug}`}
              className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              <h3 className="text-white font-medium mb-2">{doc.label}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          あなたの業種に最適化
        </h2>
        <p className="text-white/50 text-center mb-10">
          業種に応じた法的要件をAIが自動反映
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {(
            Object.entries(INDUSTRIES) as [
              Industry,
              (typeof INDUSTRIES)[Industry],
            ][]
          ).map(([key, ind]) => (
            <Link
              key={key}
              href={`/for/${key}`}
              className="bg-white/5 border border-white/10 rounded-lg p-5 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/20 text-center"
            >
              <p className="text-white font-medium">{ind.label}</p>
              <p className="text-xs text-white/40 mt-1">{ind.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          3ステップで完了
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "業種と文書を選択",
              desc: "ECショップ、SaaS、ブログなどの業種と、必要な文書タイプを選択します。",
            },
            {
              step: "2",
              title: "サービス情報を入力",
              desc: "サービス名・概要・収集する個人情報など、基本的な情報を入力します。",
            },
            {
              step: "3",
              title: "AIが即座に生成",
              desc: "あなたのサービスに最適化された法務文書がAIにより自動生成されます。",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
          >
            今すぐ無料で作成
          </Link>
        </div>
      </section>

      {/* Why Policy AI */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          なぜ Policy AI？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "テンプレートコピペ",
              items: ["業種に合わない内容", "AI対応なし", "法改正に未対応"],
              highlight: false,
            },
            {
              title: "Policy AI",
              items: [
                "業種別にAIがカスタマイズ",
                "AI利用ポリシー対応",
                "最新の法的要件を反映",
                "無料・30秒で完了",
              ],
              highlight: true,
            },
            {
              title: "弁護士に依頼",
              items: ["1文書5〜10万円", "完成まで数週間", "個人開発に厳しい"],
              highlight: false,
            },
          ].map((col) => (
            <div
              key={col.title}
              className={`rounded-lg p-6 ${
                col.highlight
                  ? "bg-blue-500/10 border-2 border-blue-500/30"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <h3
                className={`font-medium mb-4 text-center ${
                  col.highlight ? "text-blue-400" : "text-white/60"
                }`}
              >
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm ${
                      col.highlight ? "text-white" : "text-white/50"
                    }`}
                  >
                    {col.highlight ? "+ " : "- "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          よくある質問
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "本当に無料ですか？",
              a: "はい、完全無料です。ユーザー登録も不要で、何度でも法務文書を生成できます。",
            },
            {
              q: "生成された文書はそのまま使えますか？",
              a: "そのまま利用可能ですが、AIが生成したテンプレートであり法的助言ではありません。重要な事業判断に関わる場合は専門家にご確認ください。",
            },
            {
              q: "AI利用ポリシーは必要ですか？",
              a: "生成AIや機械学習を利用するサービスには策定が推奨されています。経済産業省のAI事業者ガイドラインでも、AI利用方針の明文化が求められています。",
            },
            {
              q: "どの業種に対応していますか？",
              a: "ECショップ、SaaS、ブログ、モバイルアプリ、フリーランスなど主要業種に対応。業種ごとに必要な法的要件が自動で反映されます。",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="bg-white/5 border border-white/10 rounded-lg p-5 cursor-pointer group"
            >
              <summary className="text-white font-medium list-none flex items-center justify-between">
                {item.q}
                <span className="text-white/30 group-open:rotate-45 transition-transform duration-200 text-xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          法務文書の作成、今日から始めませんか？
        </h2>
        <p className="text-white/50 mb-8">
          登録不要。30秒で、あなたのサービスに最適な法務文書が完成します。
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center justify-center px-10 py-4 bg-blue-500 text-white font-semibold text-lg rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:scale-[1.02]"
        >
          無料で文書を作成
        </Link>
      </section>

      {/* Legal notice */}
      <section className="py-16">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
          <p className="text-sm text-white/50 leading-relaxed">
            本サービスが生成する文書はAIによるテンプレートです。法的助言ではありません。
            <br />
            必要に応じて法律の専門家にご確認ください。
          </p>
        </div>
      </section>
    </div>
  );
}
