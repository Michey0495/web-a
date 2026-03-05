import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCUMENT_TYPES, INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_SEO } from "@/lib/seo-content";
import type { Industry } from "@/lib/types";

const validIndustries = Object.keys(INDUSTRIES) as Industry[];

export function generateStaticParams() {
  return validIndustries.map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  if (!validIndustries.includes(industry as Industry)) return {};
  const seo = INDUSTRY_SEO[industry as Industry];
  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  if (!validIndustries.includes(industry as Industry)) notFound();

  const ind = industry as Industry;
  const seo = INDUSTRY_SEO[ind];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">{seo.h1}</h1>
      <p className="text-white/60 text-lg leading-relaxed mb-8">
        {seo.description}
      </p>

      <Link
        href={`/generate?industry=${ind}`}
        className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 mb-12"
      >
        {INDUSTRIES[ind].label}向けの文書を作成
      </Link>

      {/* Key points */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">
          {INDUSTRIES[ind].label}で重要なポイント
        </h2>
        <ul className="space-y-3">
          {seo.points.map((point, i) => (
            <li
              key={i}
              className="text-white/60 leading-relaxed pl-4 border-l-2 border-blue-500/30"
            >
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Recommended documents */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">
          {INDUSTRIES[ind].label}に推奨される文書
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {seo.recommendedDocs.map((docType) => (
            <Link
              key={docType}
              href={`/docs/${DOCUMENT_TYPES[docType].slug}`}
              className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-white/10"
            >
              <p className="text-white font-medium text-sm">
                {DOCUMENT_TYPES[docType].label}
              </p>
              <p className="text-xs text-white/40 mt-1">
                {DOCUMENT_TYPES[docType].description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
