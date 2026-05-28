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
import { highlightCode } from "@/lib/highlight-code";

import { InstallTabs } from "@/components/docs/install-tabs";
import { CodeBlock } from "@/components/docs/code-block";
import { PropsTable } from "@/components/docs/props-table";
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
    title: component.title,
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

  const highlightedUsage = await highlightCode(component.usage, "tsx");

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
    <main className="container py-10">
      <div className="mx-autogap-16 lg:grid-cols-[1fr_220px]">
        
        {/* Main Content */}
        <div className="space-y-14">
          
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            
            {/* Back Button */}
            <Link
              href="/components"
              className="inline-flex items-center gap-2 font-geist-pixel-square text-muted-foreground transition-colors hover:text-foreground"
            >
              <HugeiconsIcon
                icon={ArrowMoveUpLeftIcon}
                size={16}
                strokeWidth={2}
              />

              Components
            </Link>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              
              {previous && (
                <Link
                  href={`/components/${previous.slug}`}
                  className="flex size-9 items-center justify-center rounded-xl border transition hover:bg-muted"
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
                  className="flex size-9 items-center justify-center rounded-xl border transition hover:bg-muted"
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

          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              {component.title}
            </h1>

            <p className="max-w-2xl text-muted-foreground">
              {component.description}
            </p>
          </div>

          {/* Preview */}
          <section className="overflow-hidden rounded-3xl border w-full">
            
            {/* Preview Area */}
            <div className="flex min-h-[350px]  items-center justify-center p-10">
              <PreviewComponent />
            </div>

            {/* Component Code */}
            <CodeBlock code={component.usage} html={highlightedUsage} />
          </section>

          {/* Installation */}
          <section
            id="installation"
            className="space-y-5"
          >
            <h2 className="text-2xl font-semibold">
              Installation
            </h2>

            <InstallTabs
              installation={component.installation}
            />
          </section>

          {/* Usage */}
          <section
            id="usage"
            className="space-y-5"
          >
            <h2 className="text-2xl font-semibold">
              Usage
            </h2>

            <CodeBlock code={component.usage} html={highlightedUsage} />
          </section>

          {/* API Reference */}
          <section
            id="api-reference"
            className="space-y-5"
          >
            <h2 className="text-2xl font-semibold">
              API Reference
            </h2>

            <PropsTable props={component.props} />
          </section>
        </div>

        {/* Readme/Docs if present */}
        {"readme" in component && typeof component.readme === "string" && (
          <div className="mt-10 border-t pt-10">
            <MDX code={component.readme} />
          </div>
        )}
       

      </div>
    </main>
  );
}