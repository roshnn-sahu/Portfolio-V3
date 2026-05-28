import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

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
import { InstallCommand } from "@/components/docs/install-command";
import { MDX } from "@/components/mdx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ClientPreviewWrapper } from "@/components/docs/client-preview-wrapper";

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

  // Load component usage highlighted code
  const highlightedUsage = await highlightCode(component.usage, "tsx");

  // Load actual source code of the component from the registry
  let registryCode = "";
  let highlightedRegistryCode = "";
  try {
    const codePath = path.join(process.cwd(), "registry", `${slug}.tsx`);
    registryCode = await fs.readFile(codePath, "utf-8");
    highlightedRegistryCode = await highlightCode(registryCode, "tsx");
  } catch (err) {
    console.error(`Could not read registry file for slug: ${slug}`, err);
  }

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

  // Derive packages to install manually
  const peerDependencies = ["@hugeicons/react", "@hugeicons/core-free-icons"];

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
          <Tabs defaultValue="preview" className="w-full">
            <div className="flex items-center justify-between border-b pb-1.5">
              <TabsList variant="line" className="h-9">
                <TabsTrigger value="preview" className="px-4 text-sm font-medium">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="px-4 text-sm font-medium">
                  Code
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Preview Tab Area */}
            <TabsContent value="preview" className="mt-4 focus-visible:outline-hidden">
              <ClientPreviewWrapper>
                <PreviewComponent />
              </ClientPreviewWrapper>
            </TabsContent>

            {/* Usage Code Tab Area */}
            <TabsContent value="code" className="mt-4 focus-visible:outline-hidden">
              <CodeBlock
                code={component.usage}
                html={highlightedUsage}
                filename={`components/${slug}.tsx`}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* 2. COMPONENT INSTALLATION */}
        <section id="installation" className="space-y-6 pt-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
              Installation
            </h2>
            <p className="text-sm text-muted-foreground">
              Install the component using the shadcn CLI or set it up manually.
            </p>
          </div>

          <Tabs defaultValue="cli" className="w-full">
            <TabsList variant="line" className="h-9 border-b-0">
              <TabsTrigger value="cli" className="px-3 text-xs font-medium">
                CLI
              </TabsTrigger>
              <TabsTrigger value="manual" className="px-3 text-xs font-medium">
                Manual Setup
              </TabsTrigger>
            </TabsList>

            {/* CLI Installation */}
            <TabsContent value="cli" className="mt-4 focus-visible:outline-hidden">
              <InstallTabs installation={component.installation} />
            </TabsContent>

            {/* Manual Setup */}
            <TabsContent value="manual" className="mt-4 space-y-8 focus-visible:outline-hidden">
              {/* Step 1: Install Peer Dependencies */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold font-mono flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-muted text-[11px] font-bold shrink-0">1</span>
                  Install peer dependencies
                </h3>
                <p className="text-sm text-muted-foreground pl-8">
                  You will need to install the following packages for icon support:
                </p>
                <div className="pl-8">
                  <InstallCommand command={`npm install ${peerDependencies.join(" ")}`} />
                </div>
              </div>

              {/* Step 2: Copy Component Source Code */}
              {registryCode && (
                <div className="space-y-3">
                  <h3 className="text-base font-semibold font-mono flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-muted text-[11px] font-bold shrink-0">2</span>
                    Create the component file
                  </h3>
                  <p className="text-sm text-muted-foreground pl-8">
                    Create a file at <code className="code-inline">components/ui/{slug}.tsx</code> and copy-paste the source code below:
                  </p>
                  <div className="pl-8 pt-1">
                    <CodeBlock
                      code={registryCode}
                      html={highlightedRegistryCode}
                      filename={`components/ui/${slug}.tsx`}
                    />
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
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
            html={highlightedUsage}
            filename={`components/${slug}.tsx`}
          />
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