"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

interface ClientPreviewWrapperProps {
  children: React.ReactNode;
}

export function ClientPreviewWrapper({ children }: ClientPreviewWrapperProps) {
  const [key, setKey] = React.useState(0);

  const handleReset = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center p-10 bg-zinc-950/10 dark:bg-zinc-950/50 rounded-3xl border">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl opacity-60" />

      {/* Action Bar (Top Right) */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={handleReset}
          className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-400 backdrop-blur-xs transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-foreground"
          title="Restart animation"
        >
          {/* Custom SVG reload icon for 100% build safety */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform active:rotate-180 duration-300"
          >
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.7" />
          </svg>
        </button>
      </div>

      {/* Render component with dynamic key to force remount */}
      <div key={key} className="w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
