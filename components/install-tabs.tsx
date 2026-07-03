"use client";

import * as React from "react";
import { Terminal, FileCode } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/component/code-block";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

interface InstallTabsProps {
  url: string;
  manualCode?: string;
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

export function InstallTabs({ url, manualCode }: InstallTabsProps) {
  const [installTab, setInstallTab] = React.useState<string>("cli");
  const [activeManager, setActiveManager] = React.useState<string>("pnpm");

  return (
    <Tabs
      value={installTab}
      onValueChange={setInstallTab}
      className={cn(
        "w-full gap-0 overflow-hidden rounded-lg border",
        "dark:border-zinc-800"
      )}
    >
      {/* Header row with CLI / Manual tabs */}
      <div
        className={cn(
          "relative flex items-center justify-between border-b bg-muted/50 px-4 py-2",
          "dark:border-zinc-800"
        )}
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          {installTab === "cli" ? (
            <Terminal className="size-5 text-zinc-500" />
          ) : (
            <FileCode className="size-5 text-zinc-500" />
          )}

          {/* CLI / Manual primary tabs */}
          <TabsList className="h-auto gap-1 bg-transparent p-0">
            <TabsTrigger
              value="cli"
              className="rounded-md font-geist-sans text-xs font-medium transition-all shadow-none"
            >
              CLI
            </TabsTrigger>
            {manualCode && (
              <TabsTrigger
                value="manual"
                className="rounded-md font-geist-sans text-xs font-medium transition-all shadow-none"
              >
                Manual
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        {/* Copy button — shows command in CLI mode, shows full code in Manual mode */}
        {installTab === "cli" ? (
          <CopyButton value={getCommand(activeManager, url)} title="Copy command" />
        ) : (
          <CopyButton value={manualCode ?? ""} title="Copy code" />
        )}
      </div>

      {/* CLI Tab Content — Package manager sub-tabs */}
      <TabsContent value="cli" className="mt-0 focus-visible:outline-hidden">
        {/* Sub-header with package manager pills */}
        <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-1.5 dark:border-zinc-800">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
            Package Manager
          </span>
          <div className="flex items-center gap-1">
            {PACKAGE_MANAGERS.map((manager) => (
              <button
                key={manager}
                onClick={() => setActiveManager(manager)}
                className={cn(
                  "rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
                  activeManager === manager
                    ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                {manager}
              </button>
            ))}
          </div>
        </div>

        <CodeBlock
          code={getCommand(activeManager, url)}
          language="bash"
          className="scrollbar-none w-full border-0 p-0 [&_button]:hidden"
        />
      </TabsContent>

      {/* Manual Tab Content — Raw source code */}
      {manualCode && (
        <TabsContent value="manual" className="mt-0 focus-visible:outline-hidden">
          <CodeBlock
            code={manualCode}
            language="tsx"
            className="scrollbar-none w-full border-0 p-0 [&_button]:hidden"
          />
        </TabsContent>
      )}
    </Tabs>
  );
}
