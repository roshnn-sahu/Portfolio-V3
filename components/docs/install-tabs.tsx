"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { HugeiconsIcon } from "@hugeicons/react";

import { Copy01Icon } from "@hugeicons/core-free-icons";

interface InstallTabsProps {
  installation: Record<string, string>;
}

export function InstallTabs({ installation }: InstallTabsProps) {
  return (
    <Tabs defaultValue="npm" className="w-full">
      {/* Header */}
      <TabsList className="h-auto gap-2 rounded-none border-b bg-transparent p-0">
        {Object.keys(installation).map((manager) => (
          <TabsTrigger
            key={manager}
            value={manager}
            className="rounded-md border border-transparent px-2.5 py-1 font-mono text-xs data-[state=active]:border-zinc-800 data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
          >
            {manager}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Content */}
      {Object.entries(installation).map(([manager, command]) => (
        <TabsContent key={manager} value={manager} className="mt-4">
          <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black px-4 py-4">
            <code className="overflow-x-auto font-mono text-[13px] text-zinc-300">
              {command}
            </code>

            <button
              onClick={() => navigator.clipboard.writeText(command)}
              className="text-zinc-500 transition hover:text-white"
            >
              <HugeiconsIcon icon={Copy01Icon} size={16} strokeWidth={2} />
            </button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
