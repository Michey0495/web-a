import Link from "next/link";
import { DOCUMENT_TYPES, INDUSTRIES, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import type { DocumentType, Industry } from "@/lib/types";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
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
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          法務文書、AIにおまかせ。
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          あなたのサービスに合った規約を、30秒で。
          <br className="hidden md:block" />
          プライバシーポリシーからAI利用ポリシーまで、7種類の法務文書を無料で自動生成。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
          >
            無料で文書を作成
          </Link>
          <Link
            href="/docs/ai-policy"
            className="inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10"
          >
            AI利用ポリシーとは
          </Link>
        </div>
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
