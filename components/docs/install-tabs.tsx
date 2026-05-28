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
      <div className="mb-3 flex items-center gap-1.5">
        <TabsList className="h-8 gap-0 rounded-md border bg-muted/20 p-0.5">
          {Object.keys(installation).map((manager) => (
            <TabsTrigger
              key={manager}
              value={manager}
              className="rounded border-0 px-2.5 py-1 font-mono text-xs font-medium transition-all data-active:bg-background data-active:text-foreground data-active:shadow-xs"
            >
              {manager}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Terminal Command Block */}
      {Object.entries(installation).map(([manager, command]) => (
        <TabsContent key={manager} value={manager} className="mt-0 focus-visible:outline-hidden">
          <div className="relative flex items-center justify-between overflow-hidden rounded-xl border bg-zinc-950 px-4 py-3">
            {/* Prompt + Command */}
            <div className="flex items-center gap-2.5 overflow-x-auto pr-2">
              <span className="shrink-0 select-none font-mono text-sm font-semibold text-emerald-500">$</span>
              <code className="whitespace-nowrap font-mono text-sm text-zinc-200">
                {command}
              </code>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(manager, command)}
              className="shrink-0 rounded-md border border-zinc-800 bg-zinc-900/60 p-1.5 text-zinc-400 opacity-60 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white hover:opacity-100"
              title={`Copy ${manager} command`}
            >
              <HugeiconsIcon
                icon={copiedManager === manager ? Tick02Icon : Copy01Icon}
                size={14}
                strokeWidth={2}
              />
            </button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
