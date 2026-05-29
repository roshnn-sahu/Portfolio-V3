"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

export function CodeBlock({
  code,
  html,
  filename,
}: {
  code: string;
  html?: string;
  filename?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-zinc-950 shadow-xs">
      {/* Filename Header */}
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            {/* Dot decoration */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-600"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>
            <span className="font-mono text-[0.75rem] text-zinc-400">
              {filename}
            </span>
          </div>
        </div>
      )}

      {/* Code Body + Copy Button */}
      <div className="relative p-5 pb-5 text-sm text-zinc-100">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 backdrop-blur-xs transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          title="Copy code"
        >
          <HugeiconsIcon
            icon={hasCopied ? Tick02Icon : Copy01Icon}
            size={16}
            strokeWidth={2}
          />
        </button>

        {/* Code */}
        <div className="overflow-x-auto">
          {html ? (
            <div
              className="[&>pre]:m-0! [&>pre]:bg-transparent! [&>pre]:p-0!"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <pre className="m-0 bg-zinc-800 p-0">
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
