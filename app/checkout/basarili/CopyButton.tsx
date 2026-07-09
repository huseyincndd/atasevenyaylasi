"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${
        copied ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
      }`}
      title="Kodu Kopyala"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Kopyalandı" : "Kopyala"}
    </button>
  );
};
