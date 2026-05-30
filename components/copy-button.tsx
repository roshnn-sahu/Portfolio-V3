"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      className={cn(
        "flex size-6 items-center justify-center rounded-md border border-zinc-800 bg-transparent text-zinc-500",
        "transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200",
        className
      )}
      title="Copy"
      {...props}
    >
      {hasCopied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
