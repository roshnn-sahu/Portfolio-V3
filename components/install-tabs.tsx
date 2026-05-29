"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";

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
  return (
    <Tabs defaultValue="pnpm" className="w-full">
      <div className="mb-3 flex items-center gap-1.5">
        <TabsList className="h-8 gap-0 rounded-md border bg-muted/20 p-0.5">
          {PACKAGE_MANAGERS.map((manager) => (
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

      {PACKAGE_MANAGERS.map((manager) => (
        <TabsContent key={manager} value={manager} className="mt-0 focus-visible:outline-hidden">
          <CodeBlock code={getCommand(manager, url)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
