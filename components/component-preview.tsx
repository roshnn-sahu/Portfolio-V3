"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

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
      {/* 1. The Live Preview Box (Top Half) */}
      <div className="relative flex min-h-[250px] w-full items-center justify-center overflow-hidden rounded-t-xl border border-zinc-800 bg-[#09090b] p-10">
        {/* Subtle background grid pattern to match the clean documentation depth */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Minimal Refresh/Restart button floating in the top-right corner */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
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
      <div className="w-full rounded-b-xl bg-zinc-950">
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
