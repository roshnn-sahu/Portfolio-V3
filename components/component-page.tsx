import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { ComponentPreview } from "@/components/component-preview";
import { CodeBlock } from "@/components/code-block";
import { CodeBlockServer } from "@/components/code-block-server";
import { InstallTabs } from "@/components/install-tabs";
import { PropsTable } from "@/components/props-table";

interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ComponentPageProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  installUrl: string;
  usageCode: string;
  usageFilename?: string;
  props: PropItem[];
}

export function ComponentPage({
  title,
  description,
  preview,
  code,
  installUrl,
  usageCode,
  usageFilename = "usage.tsx",
  props,
}: ComponentPageProps) {
  return (
    <main className="container py-10 max-w-4xl mx-auto">
      <div className="space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/components"
            className="font-mono text-xs transition-colors hover:text-foreground"
          >
            Components
          </Link>
          <ChevronRight className="size-3 text-muted-foreground/50" />
          <span className="font-mono text-xs font-medium text-foreground">
            {title}
          </span>
        </nav>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Component Preview */}
        <section>
          <ComponentPreview preview={preview} code={code} />
        </section>

        {/* Installation */}
        <section id="installation" className="space-y-6 pt-6">
          <h2 className="text-2xl tracking-tight">Installation</h2>
          <InstallTabs url={installUrl} />
        </section>

        {/* Usage */}
        <section id="usage" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-2xl  tracking-tight">Usage</h2>
            <p className="text-sm text-muted-foreground">
              Import the component in your project.
            </p>
          </div>
          <CodeBlock code={usageCode} filename={usageFilename} language="tsx">
            <CodeBlockServer code={usageCode} language="tsx" />
          </CodeBlock>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-2xl tracking-tight">
              API Reference
            </h2>
            <p className="text-sm text-muted-foreground">
              Configure the component behavior using these props.
            </p>
          </div>
          <PropsTable props={props} />
        </section>
      </div>
    </main>
  );
}
