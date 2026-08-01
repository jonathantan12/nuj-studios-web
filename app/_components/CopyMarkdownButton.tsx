"use client";

import { useState } from "react";

export default function CopyMarkdownButton({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className="btn btn-outline btn-copy-md" onClick={handleCopy}>
      {copied ? "Copied ✓" : "Copy as Markdown"}
    </button>
  );
}
