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

import { CodeBlock } from "@/components/code-block";
import { CodeBlockServer } from "@/components/code-block-server";
import { ComponentPreview } from "@/components/component-preview";
import { InstallTabs } from "@/components/install-tabs";
import { PropsTable } from "@/components/props-table";
import { MDX } from "@/components/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const component = components.find(
    (item) => item.slug === slug
  );

  if (!component) {
    return notFound();
  }

  return {
    title: `${component.title} | Roshan Sahu`,
    description: component.description,
  };
}

export default async function ComponentSlugPage({
  params,
}: Props) {
  const slug = (await params).slug;

  const component = components.find(
    (item) => item.slug === slug
  );

  if (!component) {
    notFound();
  }

  // Registry URL for install tabs
  const registryUrl =
    typeof component.installation === "string"
      ? component.installation
      : "";

  // Prev / Next index calculations
  const currentIndex = components.findIndex(
    (item) => item.slug === slug
  );

  const previous =
    currentIndex > 0
      ? components[currentIndex - 1]
      : null;

  const next =
    currentIndex < components.length - 1
      ? components[currentIndex + 1]
      : null;

  const PreviewComponent = component.component;

  return (
    <main className="container py-10 max-w-4xl mx-auto">
      <div className="space-y-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 font-geist-mono text-sm text-muted-foreground transition-colors hover:text-foreground group"
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
                className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-background/50 backdrop-blur-xs transition hover:bg-muted"
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
                className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-background/50 backdrop-blur-xs transition hover:bg-muted"
                title={`Next: ${next.title}`}
              >
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={18}
                  strokeWidth={2}
                />
              </Link>
            )}
          </div>
        </div>

        {/* Component Title & Header Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span>Components</span>
            <span>/</span>
            <span className="text-foreground font-medium">{component.title}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {component.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
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
          <h2 className="text-2xl font-bold tracking-tight">
            Installation
          </h2>
          <InstallTabs url={registryUrl} />
        </section>

        {/* 3. USAGE */}
        <section id="usage" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
              Usage
            </h2>
            <p className="text-sm text-muted-foreground">
              Import the component in your project pages.
            </p>
          </div>
          <CodeBlock
            code={component.usage}
            language="tsx"
            filename={`components/${slug}.tsx`}
          >
            <CodeBlockServer code={component.usage} language="tsx" />
          </CodeBlock>
        </section>

        {/* 4. API REFERENCE / PROPS TABLE */}
        <section id="api-reference" className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
              API Reference
            </h2>
            <p className="text-sm text-muted-foreground">
              Configure your component behavior using these props.
            </p>
          </div>
          <PropsTable props={component.props} />
        </section>

        {/* 5. ADDITIONAL README / MDX DOCS (If present) */}
        {"readme" in component && typeof component.readme === "string" && (
          <section className="border-t pt-10 mt-10">
            <MDX code={component.readme} />
          </section>
        )}

      </div>
    </main>
  );
}