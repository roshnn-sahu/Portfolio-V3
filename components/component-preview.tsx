"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
}

export function ComponentPreview({ preview, code }: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0);

  const handleReset = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex items-center justify-between border-b pb-1.5">
        <TabsList variant="line" className="h-9">
          <TabsTrigger
            value="preview"
            className="px-4 text-sm font-medium"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="px-4 text-sm font-medium"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Preview Tab */}
      <TabsContent value="preview" className="mt-4 focus-visible:outline-hidden">
        <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background p-10">
          {/* Dot grid background */}
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-60"
          />

          {/* Refresh button */}
          <button
            onClick={handleReset}
            className="absolute top-3 right-3 z-10 flex size-7 items-center justify-center rounded-md border border-zinc-200 bg-white/70 text-zinc-500 backdrop-blur-xs transition-all hover:bg-zinc-50 hover:text-foreground dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:bg-zinc-800"
            title="Restart animation"
          >
            <RotateCw className="size-3.5 transition-transform active:rotate-180 duration-300" />
          </button>

          {/* Rendered component */}
          <div key={key} className="flex w-full items-center justify-center">
            {preview}
          </div>
        </div>
      </TabsContent>

      {/* Code Tab */}
      <TabsContent value="code" className="mt-4 focus-visible:outline-hidden">
        <CodeBlock code={code} language="tsx" />
      </TabsContent>
    </Tabs>
  );
}
