"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { CodeBlock } from "@/components/component/code-block";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
  filename?: string;
  children?: React.ReactNode;
}

export function ComponentPreview({
  preview,
  code,
  filename,
  children,
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0);

  const handleReset = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="my-6 flex w-full flex-col">
      <div
        className={cn(
          "relative flex min-h-[250px] w-full items-center justify-center overflow-hidden rounded-t-xl border p-10",
          "border-zinc-200 bg-background",
          "dark:border-zinc-800 dark:bg-[#09090b]"
        )}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-size-[16px_16px] opacity-50 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-40" />

        <button
          onClick={handleReset}
          className={cn(
            "absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            "border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700",
            "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
          )}
          title="Restart animation"
        >
          <RotateCw className="h-3.5 w-3.5 transition-transform duration-300 active:rotate-180" />
        </button>

        {/* The live rendering of your animated component */}
        <div key={key} className="flex w-full items-center justify-center">
          {preview}
        </div>
      </div>

      {/* 2. The Code Snippet Container (Bottom Half) */}
      {/* "border-t-0" prevents a thick double border at the seam where the two boxes touch */}
      <div className="w-full rounded-b-xl">
        <div className="w-full [&_pre]:my-0 [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:bg-transparent [&_pre]:p-4">
          <CodeBlock
            code={code}
            language="tsx"
            filename={filename}
            className="rounded-b-lg"
          >
            {children}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
