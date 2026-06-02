"use client";

import * as React from "react";
import { Terminal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/component/code-block";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

interface InstallTabsProps {
  url: string;
}

const PACKAGE_MANAGERS = ["npm", "pnpm", "yarn", "bun"] as const;

function getCommand(manager: string, url: string): string {
  switch (manager) {
    case "npm":
      return `npx shadcn@latest add ${url}`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${url}`;
    case "yarn":
      return `npx shadcn@latest add ${url}`;
    case "bun":
      return `bunx --bun shadcn@latest add ${url}`;
    default:
      return `npx shadcn@latest add ${url}`;
  }
}

export function InstallTabs({ url }: InstallTabsProps) {
  const [activeTab, setActiveTab] = React.useState<string>("pnpm");

  return (
    <Tabs
      defaultValue="pnpm"
      onValueChange={setActiveTab}
      className="w-full gap-0 overflow-hidden rounded-lg border border-zinc-800"
    >
      {/* Unified Terminal Header Row */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-muted/50 px-4 py-2">
        <div className="flex items-center gap-3">
          {/* Terminal Promp Icon */}
          <Terminal className="size-5 border text-zinc-500" />

          {/* Package Manager Minimal Pills Layout */}
          <TabsList variant="line" className="h-auto gap-1 bg-transparent p-0">
            {PACKAGE_MANAGERS.map((manager) => (
              <TabsTrigger
                key={manager}
                value={manager}
                className={cn(
                  "rounded-md font-geist-sans text-xs font-medium text-zinc-400 transition-all",
                  "shadow-none",
                  "group-data-[variant=line]/tabs-list:data-active:bg-zinc-900 group-data-[variant=line]/tabs-list:data-active:text-zinc-100"
                )}
              >
                {manager}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <CopyButton value={getCommand(activeTab, url)} title="Copy command" />
      </div>

      {/* Terminal Code Body */}
      {PACKAGE_MANAGERS.map((manager) => (
        <TabsContent
          key={manager}
          value={manager}
          className="mt-0 focus-visible:outline-hidden"
        >
          {/* '[&_button]:hidden' targeting safely hides the inner duplicate floating copy icon */}
          <CodeBlock
            code={getCommand(manager, url)}
            language="bash"
            className="scrollbar-none w-full border-0 p-0 [&_button]:hidden"
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
