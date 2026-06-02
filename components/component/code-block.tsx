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
        "group overflow-hidden border dark:border-zinc-800 shadow-xs",
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
          className={cn("absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-md bg-background border text-zinc-500 transition-colors",
            "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200")}
        />
        {/* Pre-highlighted code from server (children), or raw fallback */}
        {children ?? (
          <div className="overflow-x-auto no-scrollbar bg-muted/50 p-4 pt-3">
            <pre className="m-0 p-0 ">
              <code className="block font-geist-mono text-[0.8125rem] tracking-wide text-zinc-400">
                {code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
