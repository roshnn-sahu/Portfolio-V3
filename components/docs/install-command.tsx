"use client";

import * as React from "react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface InstallCommandProps {
  command: string;
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-zinc-950 px-5 py-3.5 shadow-xs">
      {/* Prompt symbol + command */}
      <div className="flex items-center gap-3 overflow-x-auto">
        <span className="text-emerald-500 font-mono text-sm select-none shrink-0">$ </span>
        <code className="whitespace-nowrap font-mono text-sm text-zinc-200">
          {command}
        </code>
      </div>

      <button
        onClick={handleCopy}
        className="ml-3 flex shrink-0 size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 backdrop-blur-xs transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        title="Copy command"
      >
        <HugeiconsIcon
          icon={hasCopied ? Tick02Icon : Copy01Icon}
          size={15}
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
