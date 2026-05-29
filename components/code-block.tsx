"use client";

import * as React from "react";
import { Terminal, Copy, Check, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  code,
  filename,
  language,
  className,
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border/60 bg-zinc-950 shadow-xs",
        className
      )}
    >
      {/* Filename Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Terminal className="size-3.5 text-zinc-500" />
          {filename ? (
            <>
              <FileCode className="size-3.5 text-zinc-500" />
              <span className="font-mono text-[0.75rem] text-zinc-400">
                {filename}
              </span>
            </>
          ) : (
            language && (
              <span className="font-mono text-[0.7rem] uppercase text-zinc-600">
                {language}
              </span>
            )
          )}
        </div>
      </div>

      {/* Code Body */}
      <div className="relative">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 flex size-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-400 opacity-0 backdrop-blur-xs transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white group-hover:opacity-100 focus:opacity-100"
          title="Copy code"
        >
          {hasCopied ? (
            <Check className="size-3.5 text-emerald-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>

        {/* Code */}
        <div className="overflow-x-auto p-4 pt-3">
          <pre className="m-0 bg-transparent p-0">
            <code className="block font-mono text-[0.8125rem] leading-relaxed text-zinc-100">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
