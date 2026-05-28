"use client";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Copy01Icon,
} from "@hugeicons/core-free-icons";

export function CodeBlock({
  code,
  html,
}: {
  code: string;
  html?: string;
}) {
  return (
    <div className="relative rounded-b-2xl border bg-zinc-950 p-6 text-sm text-zinc-100">
      
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
      <div className="overflow-x-auto">
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}