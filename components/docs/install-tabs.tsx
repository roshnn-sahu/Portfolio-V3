"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

interface InstallTabsProps {
  installation: Record<string, string>;
}

export function InstallTabs({ installation }: InstallTabsProps) {
  const [copiedManager, setCopiedManager] = React.useState<string | null>(null);

  const handleCopy = async (manager: string, command: string) => {
    await navigator.clipboard.writeText(command);
    setCopiedManager(manager);
    setTimeout(() => setCopiedManager(null), 2000);
  };

  return (
    <Tabs defaultValue="npm" className="w-full">
      {/* Package Manager Selector */}
      <TabsList className="h-auto gap-1.5 rounded-lg border border-border/40 bg-muted/20 p-1">
        {Object.keys(installation).map((manager) => (
          <TabsTrigger
            key={manager}
            value={manager}
            className="rounded-md border border-transparent px-3 py-1.5 font-mono text-[0.75rem] font-medium transition-all data-active:border-border/60 data-active:bg-background data-active:text-foreground data-active:shadow-xs"
          >
            {manager}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Terminal Command Block */}
      {Object.entries(installation).map(([manager, command]) => (
        <TabsContent key={manager} value={manager} className="mt-4 focus-visible:outline-hidden">
          <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-zinc-950 px-5 py-3.5 shadow-xs">
            {/* Prompt + Command */}
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="shrink-0 select-none font-mono text-sm text-emerald-500">$&nbsp;</span>
              <code className="whitespace-nowrap font-mono text-[0.8125rem] text-zinc-200">
                {command}
              </code>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(manager, command)}
              className="ml-3 flex shrink-0 size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 backdrop-blur-xs transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              title={`Copy ${manager} command`}
            >
              <HugeiconsIcon
                icon={copiedManager === manager ? Tick02Icon : Copy01Icon}
                size={15}
                strokeWidth={2}
              />
            </button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
