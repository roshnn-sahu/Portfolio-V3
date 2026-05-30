"use client";

import * as React from "react";
import { Terminal, Copy, Check, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: "tsx" | "ts" | "jsx" | "js" | "bash" | "json" | "css";
  filename?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
  children,
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  const isBash = language === "bash";

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-zinc-800 shadow-xs",
        className
      )}
    >
      {/* Top bar with filename or language indicator */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <div className="flex items-center gap-2">
          {isBash ? (
            <Terminal className="size-3.5 text-zinc-500" />
          ) : filename ? (
            <FileCode className="size-3.5 text-zinc-500" />
          ) : (
            <Terminal className="size-3.5 text-zinc-500" />
          )}
          <span className="font-mono text-xs text-zinc-400">
            {filename ?? (isBash ? "terminal" : language)}
          </span>
        </div>
      </div>

      {/* Code area with copy button */}
      <div className="relative bg-zinc-900">
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={cn(
            "absolute top-3 right-3 z-10 flex size-7 items-center justify-center",
            "rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-400",
            "opacity-0 backdrop-blur-xs transition-all",
            "hover:border-zinc-700 hover:bg-zinc-800 hover:text-white",
            "group-hover:opacity-100 focus:opacity-100"
          )}
          title="Copy code"
        >
          {hasCopied ? (
            <Check className="size-3.5 text-emerald-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>

        {/* Pre-highlighted code from server (children), or raw fallback */}
        {children ?? (
          <div className="overflow-x-auto p-4 pt-3  yyo">
            <pre
              className="m-0 p-0"
              
            >
              <code className="block font-mono text-[0.8125rem] leading-relaxed text-zinc-100">
                {code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
