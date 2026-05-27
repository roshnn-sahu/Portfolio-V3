"use client";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Copy01Icon,
} from "@hugeicons/core-free-icons";

export function CodeBlock({
  code,
}: {
  code: string;
}) {
  return (
    <div className="relative rounded-2xl border bg-zinc-950 p-6 text-sm text-zinc-100">
      
      {/* Copy Button */}
      <button
        onClick={() =>
          navigator.clipboard.writeText(code)
        }
        className="absolute top-4 right-4 text-zinc-400 transition hover:text-white"
      >
        <HugeiconsIcon
          icon={Copy01Icon}
          size={18}
          strokeWidth={1.8}
        />
      </button>

      {/* Code */}
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}