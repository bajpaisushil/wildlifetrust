"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/data/site";

export default function CopyUpi({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-5 pr-2 font-mono text-[15px] text-ink shadow-md shadow-black/5 transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {site.upiId}
      <span className="inline-flex items-center gap-1 rounded-full bg-leaf-soft px-3 py-1 font-sans text-sm font-semibold text-leaf-dark">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
