"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import {
  Copy,
  ChevronDown,
  FileText,
  Terminal,
  Bot,
  Sparkles,
  Cpu,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PageActionsProps {
  prevSlug: string | null;
  nextSlug: string | null;
  prevTitle?: string;
  nextTitle?: string;
}

export function PageActions({
  prevSlug,
  nextSlug,
  prevTitle,
  nextTitle,
}: PageActionsProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopyPage = async (platform: string) => {
    // Perform copy or routing operations depending on the selector
    await navigator.clipboard.writeText(window.location.href);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 select-none">
      {/* Copy Page Dropdown Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            className={cn(
              "inline-flex h-8 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 text-xs font-medium text-zinc-300 transition-colors",
              "hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-zinc-100 data-[state=open]:bg-zinc-800/80"
            )}
          >
            {hasCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-zinc-500" />
            )}
            <span>Copy Page</span>
            <ChevronDown className="h-3.5 w-3.5 text-zinc-600 transition-transform duration-200" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-[180px] border-zinc-800 bg-zinc-950/95 p-1 text-zinc-200 backdrop-blur-md"
        >
          <DropdownMenuItem
            onClick={() => handleCopyPage("markdown")}
            className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
          >
            <FileText className="h-3.5 w-3.5 text-zinc-500" />
            <span>View as Markdown</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleCopyPage("v0")}
            className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
          >
            <Terminal className="h-3.5 w-3.5 text-zinc-500" />
            <span>Open in v0</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleCopyPage("chatgpt")}
            className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
          >
            <Bot className="h-3.5 w-3.5 text-zinc-500" />
            <span>Open in ChatGPT</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleCopyPage("claude")}
            className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-zinc-500" />
            <span>Open in Claude</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleCopyPage("scira")}
            className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
          >
            <Cpu className="h-3.5 w-3.5 text-zinc-500" />
            <span>Open in Scira</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Prev Navigation Control */}
      {prevSlug ? (
        <Link
          href={`/components/${prevSlug}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition hover:bg-zinc-800/80 hover:text-zinc-100"
          title={prevTitle ? `Previous: ${prevTitle}` : "Previous"}
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={16} strokeWidth={2} />
        </Link>
      ) : (
        <div className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/20 text-zinc-700">
          <HugeiconsIcon icon={ArrowLeft02Icon} size={16} strokeWidth={2} />
        </div>
      )}

      {/* Next Navigation Control */}
      {nextSlug ? (
        <Link
          href={`/components/${nextSlug}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition hover:bg-zinc-800/80 hover:text-zinc-100"
          title={nextTitle ? `Next: ${nextTitle}` : "Next"}
        >
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
        </Link>
      ) : (
        <div className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/20 text-zinc-700">
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
        </div>
      )}
    </div>
  );
}
