import type { Metadata } from "next";
import { GenerateForm } from "@/components/generate-form";
import { DOCUMENT_TYPES, INDUSTRIES } from "@/lib/constants";
import type { DocumentType, Industry } from "@/lib/types";

export const metadata: Metadata = {
  title: "法務文書を作成",
  description:
    "プライバシーポリシー、利用規約、AI利用ポリシーなど、あなたのサービスに合った法務文書をAIが30秒で自動生成。無料で利用可能。",
};

export default async function GeneratePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; industry?: string }>;
}) {
  const params = await searchParams;
  const docType = params.type && params.type in DOCUMENT_TYPES
    ? (params.type as DocumentType)
    : undefined;
  const industry = params.industry && params.industry in INDUSTRIES
    ? (params.industry as Industry)
    : undefined;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">法務文書を作成</h1>
        <p className="mt-2 text-white/50">
          サービス情報を入力すると、AIがあなたのサービスに最適化された法務文書を生成します。
        </p>
      </div>
      <GenerateForm defaultDocType={docType} defaultIndustry={industry} />
    </div>
  );
}
