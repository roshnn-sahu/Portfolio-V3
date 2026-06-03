"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { CodeBlock } from "@/components/component/code-block";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  previewUrl?: string; 
  code: string;
  filename?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;  // ← add
}

export function ComponentPreview({
  preview,
  previewUrl,
  code,
  filename,
  children,
  fullWidth = false,  // ← add
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0);

 return (
    <div className="my-6 flex w-full flex-col">
      <div className={cn(
        "relative flex w-full overflow-hidden rounded-t-xl border",
        "border-zinc-200 bg-background dark:border-zinc-800 dark:bg-[#09090b]",
        previewUrl
          ? "min-h-[160px] items-start p-0"
          : fullWidth
            ? "min-h-[160px] items-start p-0"
            : "min-h-[250px] items-center justify-center p-10"
      )}>

        {/* dot grid only for non-fullwidth */}
        {!previewUrl && !fullWidth && (
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-size-[16px_16px] opacity-50 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-40" />
        )}

        {/* refresh button */}
        <button
          onClick={() => setKey(k => k + 1)}
          className={cn(
            "absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            "border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700",
            "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
          )}
          title="Restart animation"
        >
          <RotateCw className="h-3.5 w-3.5 transition-transform duration-300 active:rotate-180" />
        </button>

        {/* iframe or direct render */}
        {previewUrl ? (
          <iframe
            key={key}
            src={previewUrl}
            className="w-full min-h-[320px] border-0"
            title="Component Preview"
          />
        ) : (
          <div
            key={key}
            className={cn(
              fullWidth ? "w-full" : "flex w-full items-center justify-center"
            )}
          >
            {preview}
          </div>
        )}
      </div>

      {/* code block */}
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
