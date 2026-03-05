"use client";

import { useState } from "react";
import {
  DOCUMENT_TYPES,
  INDUSTRIES,
  COLLECTED_DATA_OPTIONS,
} from "@/lib/constants";
import { DocumentPreview } from "./document-preview";
import type {
  DocumentType,
  Industry,
  CollectedData,
  OutputFormat,
} from "@/lib/types";

export function GenerateForm({
  defaultDocType,
  defaultIndustry,
}: {
  defaultDocType?: DocumentType;
  defaultIndustry?: Industry;
}) {
  const [documentType, setDocumentType] = useState<DocumentType>(
    defaultDocType || "privacy-policy"
  );
  const [industry, setIndustry] = useState<Industry>(
    defaultIndustry || "other"
  );
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [collectedData, setCollectedData] = useState<CollectedData[]>([
    "name",
    "email",
    "cookie",
    "access_log",
  ]);
  const [format] = useState<OutputFormat>("text");

  const [result, setResult] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState("");

  const toggleCollectedData = (item: CollectedData) => {
    setCollectedData((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentType,
          industry,
          serviceName,
          serviceDescription,
          companyName: companyName || undefined,
          collectedData,
          format,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "生成に失敗しました");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("ストリーミングに対応していません");

      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.chunk) {
                fullText += data.chunk;
                setResult(fullText);
              }
            } catch {
              // skip malformed JSON
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Document Type */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            文書タイプ
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(
              Object.entries(DOCUMENT_TYPES) as [
                DocumentType,
                (typeof DOCUMENT_TYPES)[DocumentType],
              ][]
            ).map(([key, doc]) => (
              <button
                key={key}
                type="button"
                onClick={() => setDocumentType(key)}
                className={`text-left p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  documentType === key
                    ? "bg-blue-500/10 border-blue-500/30 text-white"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                <p className="text-sm font-medium">{doc.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            業種
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(
              Object.entries(INDUSTRIES) as [
                Industry,
                (typeof INDUSTRIES)[Industry],
              ][]
            ).map(([key, ind]) => (
              <button
                key={key}
                type="button"
                onClick={() => setIndustry(key)}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 text-center ${
                  industry === key
                    ? "bg-blue-500/10 border-blue-500/30 text-white"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                <p className="text-sm font-medium">{ind.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Service Name */}
        <div>
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-white mb-2"
          >
            サービス名 <span className="text-red-400">*</span>
          </label>
          <input
            id="serviceName"
            type="text"
            required
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="例: MyShop、TechBlog"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200"
          />
        </div>

        {/* Service Description */}
        <div>
          <label
            htmlFor="serviceDescription"
            className="block text-sm font-medium text-white mb-2"
          >
            サービス概要 <span className="text-red-400">*</span>
          </label>
          <textarea
            id="serviceDescription"
            required
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            rows={3}
            placeholder="例: ハンドメイドアクセサリーのオンライン販売を行うECサイトです。"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200 resize-none"
          />
        </div>

        {/* Company Name (optional) */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-white mb-2"
          >
            会社名 / 運営者名{" "}
            <span className="text-white/30 text-xs">（任意）</span>
          </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="例: 株式会社サンプル"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200"
          />
        </div>

        {/* Collected Data */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            収集する個人情報
          </label>
          <div className="flex flex-wrap gap-2">
            {(
              Object.entries(COLLECTED_DATA_OPTIONS) as [CollectedData, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleCollectedData(key)}
                className={`px-3 py-1.5 text-sm rounded-lg border cursor-pointer transition-all duration-200 ${
                  collectedData.includes(key)
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isStreaming || !serviceName || !serviceDescription}
          className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isStreaming ? "生成中..." : "AIで文書を生成"}
        </button>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}
      </form>

      <DocumentPreview content={result} isStreaming={isStreaming} />
    </div>
  );
}
