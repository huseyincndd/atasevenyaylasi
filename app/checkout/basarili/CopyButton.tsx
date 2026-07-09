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
      className={`w-full sm:w-auto px-4 py-2.5 sm:p-2 sm:px-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-semibold sm:font-medium shadow-sm sm:shadow-none border border-slate-200 sm:border-transparent ${
        copied ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
      }`}
      title="Kodu Kopyala"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Kopyalandı" : "Kopyala"}
    </button>
  );
};
