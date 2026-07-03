import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowMoveUpLeftIcon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";

import { components } from "@/lib/data/components/components";

import { CodeBlock } from "@/components/component/code-block";
import { CodeBlockServer } from "@/components/code-block-server";
import { ComponentPreview } from "@/components/component/component-preview";
import { InstallTabs } from "@/components/install-tabs";
import { PropsTable } from "@/components/props-table";
import { MDX } from "@/components/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const component = components.find((item) => item.slug === slug);

  if (!component) {
    return notFound();
  }

  return {
    title: `${component.title} | Roshan Sahu`,
    description: component.description,
  };
}

export default async function ComponentSlugPage({ params }: Props) {
  const slug = (await params).slug;
  const component = components.find((item) => item.slug === slug);

  if (!component) {
    notFound();
  }

  // Registry URL for install tabs
  const registryUrl =
    typeof component.installation === "string"
      ? component.installation
      : component.installation.registry;  // Read source file for Manual install tab
  let manualCode: string | undefined;
  if (component.sourceFile) {
    try {
      const filePath = path.join(process.cwd(), component.sourceFile);
      manualCode = await fs.readFile(filePath, "utf-8");
    } catch {
      // If file can't be read, silently fall back to CLI-only
    }
  }

  // Prev / Next index calculations
  const currentIndex = components.findIndex((item) => item.slug === slug);

  const previous = currentIndex > 0 ? components[currentIndex - 1] : null;

  const next =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;
const PreviewComponent  = component.component;

  return (
    <main className="container mx-auto max-w-4xl py-10">
      <div className="space-y-10">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/components"
            className="group inline-flex items-center gap-2 font-geist-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <HugeiconsIcon
              icon={ArrowMoveUpLeftIcon}
              size={15}
              strokeWidth={2.2}
              className="transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            />
            Back to Components
          </Link>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-2">
            {previous && (
              <Link
                href={`/components/${previous.slug}`}
                className="flex size-6 items-center justify-center rounded-md border border-zinc-800 bg-muted backdrop-blur-xs transition hover:bg-muted/70"
                title={`Previous: ${previous.title}`}
              >
                <HugeiconsIcon
                  icon={ArrowLeft02Icon}
                  size={18}
                  strokeWidth={2}
                />
              </Link>
            )}

            {next && (
              <Link
                href={`/components/${next.slug}`}
                className="flex size-6 items-center justify-center rounded-md border border-zinc-800 bg-muted backdrop-blur-xs transition hover:bg-muted/70"
                title={`Next: ${next.title}`}
              >
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={14}
                  strokeWidth={2}
                />
              </Link>
            )}
          </div>
        </div>

        {/* Component Title & Header Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>Components</span>
            <span>/</span>
            <span className="font-medium text-foreground">
              {component.title}
            </span>
          </div>
          <h1 className="font-geist-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {component.title}
          </h1>
          <p className="max-w-2xl font-geist-sans text-lg leading-relaxed text-muted-foreground">
            {component.description}
          </p>
        </div>

        {/* 1. COMPONENT PREVIEW & CODE TABS */}
        <section className="space-y-4">
          <ComponentPreview
            preview={<PreviewComponent />}
            code={component.usage}
            filename={`components/${slug}.tsx`}
          >
            <CodeBlockServer code={component.usage} language="tsx" />
          </ComponentPreview>
        </section>

        {/* 2. COMPONENT INSTALLATION */}
        <section id="installation" className="space-y-6 pt-6">
          <h2 className="text-xl tracking-tight">Installation</h2>
          <InstallTabs url={registryUrl} manualCode={manualCode} />
        </section>

        {/* 3. USAGE */}
        <section id="usage" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-xl tracking-tight">Usage</h2>
            <p className="text-sm text-muted-foreground">
              Import the component in your project pages.
            </p>
          </div>
          <CodeBlock
            code={component.usage}
            language="tsx"
            filename={`components/${slug}.tsx`}
            className="rounded-lg"
          >
            <CodeBlockServer code={component.usage} language="tsx" />
          </CodeBlock>
        </section>

        {/* 4. API REFERENCE / PROPS TABLE */}
        <section id="api-reference" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-xl tracking-tight">API Reference</h2>
            <p className="text-sm text-muted-foreground">
              Configure your component behavior using these props.
            </p>
          </div>
          <PropsTable props={component.props ?? []} />
        </section>

        {/* 5. ADDITIONAL README / MDX DOCS (If present) */}
        {"readme" in component && typeof component.readme === "string" && (
          <section className="mt-10 border-t pt-10">
            <MDX code={component.readme} />
          </section>
        )}
      </div>
    </main>
  );
}
