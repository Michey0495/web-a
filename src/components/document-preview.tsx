"use client";

import { useState } from "react";
import { CopyButton } from "./copy-button";
import type { OutputFormat } from "@/lib/types";

interface DocumentPreviewProps {
  content: string;
  isStreaming: boolean;
}

export function DocumentPreview({ content, isStreaming }: DocumentPreviewProps) {
  const [format, setFormat] = useState<OutputFormat>("text");

  if (!content && !isStreaming) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">生成結果</h2>
        <div className="flex items-center gap-2">
          <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            {(["text", "markdown", "html"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-3 py-1.5 text-xs cursor-pointer transition-all duration-200 ${
                  format === f
                    ? "bg-blue-500 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
          {content && <CopyButton text={content} />}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 min-h-[300px]">
        {isStreaming && !content && (
          <div className="flex items-center gap-2 text-white/50">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            生成中...
          </div>
        )}
        <div className="text-white/90 text-[15px] leading-[1.75] whitespace-pre-wrap font-mono">
          {content}
          {isStreaming && content && (
            <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-0.5" />
          )}
        </div>
      </div>

      <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-4">
        <p className="text-xs text-white/40 leading-relaxed">
          本文書はAI生成のテンプレートです。法的助言ではありません。必要に応じて法律の専門家にご確認ください。
        </p>
      </div>
    </div>
  );
}
