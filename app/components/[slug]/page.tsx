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
import { cn } from "@/lib/utils";
import { generateWebsiteMetadata } from "@/config/metadata";
import { SITE_CONFIG } from "@/config/site";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const component = components.find((item) => item.slug === slug);

  if (!component) {
    return notFound();
  }

  return generateWebsiteMetadata({
    title: `${component.title} | Components`,
    description: component.description,
    url: `/components/${component.slug}`,
    keywords: [
      component.title.toLowerCase().replace(/\s+/g, " "),
      `${component.title} React component`,
      `${component.title} shadcn`,
      ...(component.category ? [component.category.toLowerCase()] : []),
    ],
  });
}

export default async function ComponentSlugPage({ params }: Props) {
  const slug = (await params).slug;

  const component = components.find((item) => item.slug === slug);

  if (!component) {
    notFound();
  }

  const componentUrl = `${SITE_CONFIG.url}/components/${component.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: component.title,
    description: component.description,
    url: componentUrl,
    keywords: [component.title, ...(component.features ?? [])],
    ...(component.category ? { applicationCategory: component.category } : {}),
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  };

  // Registry URL for install tabs
  const registryUrl =
    typeof component.installation === "string"
      ? component.installation
      : component.installation.registry;

  // Prev / Next index calculations
  const currentIndex = components.findIndex((item) => item.slug === slug);

  const previous = currentIndex > 0 ? components[currentIndex - 1] : null;

  const next =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;
  const PreviewComponent = component.component;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
                className={cn(
                  "flex size-6 items-center justify-center rounded-md border bg-muted text-muted-foreground backdrop-blur-xs transition hover:bg-muted/70"
                )}
                title={`Previous: ${previous.title}`}
              >
                <HugeiconsIcon
                  icon={ArrowLeft02Icon}
                  size={14}
                  strokeWidth={2}
                />
              </Link>
            )}

            {next && (
              <Link
                href={`/components/${next.slug}`}
                className={cn(
                  "flex size-6 items-center justify-center rounded-md border bg-muted text-muted-foreground backdrop-blur-xs transition hover:bg-muted/70"
                )}
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
          <InstallTabs url={registryUrl} />
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
    </>
  );
}
