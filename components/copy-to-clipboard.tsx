"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function CopyToClipboard({ text }: { text: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { position: "bottom-right" });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button onClick={handleCopy} className="hover:cursor-pointer">
      <Copy />
    </button>
  );
}
