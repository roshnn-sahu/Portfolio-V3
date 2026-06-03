"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";

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
  return (
    <div
      className={cn(
        "group overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xs bg-background",
        className
      )}
    >
      {/* Top bar with filename or language indicator */}
      {/* <div className="relative flex items-center justify-between border-b border-zinc-800 bg-muted/50 px-4 py-2">
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
      </div> */}

      {/* Code area with copy button */}
      <div className="relative">
        <CopyButton
          value={code}
          title="Copy code"
          
        />
        {/* Pre-highlighted code from server (children), or raw fallback */}
        {children ?? (
          <div className="overflow-x-auto no-scrollbar bg-zinc-50 dark:bg-muted/50 p-4 pt-3">
            <pre className="m-0 p-0">
              <code className="block font-geist-mono text-[0.8125rem] tracking-wide text-zinc-600 dark:text-zinc-400">
                {code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
