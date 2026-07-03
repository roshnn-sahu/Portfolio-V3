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
        "absolute top-4 right-4",
        "flex size-7 items-center justify-center rounded-md border",
        "border-zinc-200 bg-background text-zinc-500",
        "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500",
        "cursor-pointer transition-colors",
        "hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-600",
        "dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-200",
        className
      )}
      title="Copy"
      {...props}
    >
      {hasCopied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
