"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white/70 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:text-white"
    >
      {copied ? "コピーしました" : "コピー"}
    </button>
  );
}
