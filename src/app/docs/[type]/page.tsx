import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCUMENT_TYPES } from "@/lib/constants";
import { DOC_TYPE_SEO } from "@/lib/seo-content";
import type { DocumentType } from "@/lib/types";

const validTypes = Object.keys(DOCUMENT_TYPES) as DocumentType[];

export function generateStaticParams() {
  return validTypes.map((type) => ({ type: DOCUMENT_TYPES[type].slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const docType = validTypes.find((t) => DOCUMENT_TYPES[t].slug === type);
  if (!docType) return {};
  const seo = DOC_TYPE_SEO[docType];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  };
}

export default async function DocTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const docType = validTypes.find((t) => DOCUMENT_TYPES[t].slug === type);
  if (!docType) notFound();

  const seo = DOC_TYPE_SEO[docType];
  const doc = DOCUMENT_TYPES[docType];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">{seo.h1}</h1>
      <p className="text-white/60 text-lg leading-relaxed mb-8">
        {seo.description}
      </p>

      <Link
        href={`/generate?type=${docType}`}
        className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 mb-12"
      >
        {doc.label}を無料で作成
      </Link>

      <div className="space-y-8">
        {seo.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold text-white mb-3">
              {section.heading}
            </h2>
            <p className="text-white/60 leading-[1.75]">{section.body}</p>
          </section>
        ))}
      </div>

      {/* Other document types */}
      <section className="mt-16">
        <h2 className="text-xl font-bold text-white mb-6">
          その他の対応文書
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {validTypes
            .filter((t) => t !== docType)
            .map((t) => (
              <Link
                key={t}
                href={`/docs/${DOCUMENT_TYPES[t].slug}`}
                className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-white/10"
              >
                <p className="text-white font-medium text-sm">
                  {DOCUMENT_TYPES[t].label}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
