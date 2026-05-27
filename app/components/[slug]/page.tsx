import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { components } from "@/lib/data/components/components";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowMoveUpLeftIcon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import PostShareMenu from "@/components/blog/post-share-menu";
import { InstallCommand } from "@/components/docs/install-command";
import ComponentPreview from "@/components/docs/component-preview";

export async function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return notFound();
  }

  return {
    title: `${component.title} - Components`,
    description: component.description,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  const index = components.findIndex((c) => c.slug === slug);
  const previous = index > 0 ? components[index - 1] : null;
  const next = index < components.length - 1 ? components[index + 1] : null;

  const componentName = component.title.replace(/\s+/g, "");
  const usageCode = `import { ${componentName} } from "@/components/ui/${component.slug}"

export default function Demo() {
  return <${componentName} />
}`;

  return (
    <main className="container">
      <div className="flex flex-col space-y-12 pt-10">
        <div className="flex items-center justify-between">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 font-geist-pixel-square text-muted-foreground transition-colors hover:text-foreground"
          >
            <HugeiconsIcon
              icon={ArrowMoveUpLeftIcon}
              strokeWidth={2}
              className="size-4"
            />
            Components
          </Link>
          <div className="flex items-center gap-2">
            <PostShareMenu url={`/components/${component.slug}`} />
            {previous && (
              <Link href={`/components/${previous.slug}`}>
                <Button variant="secondary" className="cursor-pointer px-2">
                  <HugeiconsIcon
                    icon={ArrowLeft02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  <span className="sr-only">Previous</span>
                </Button>
              </Link>
            )}
            {next && (
              <Link href={`/components/${next.slug}`}>
                <Button variant="secondary" className="cursor-pointer px-2">
                  <span className="sr-only">Next</span>
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-4xl space-y-10">
        {/* Heading */}
        <div>
          <h1 className="font-geist-sans text-5xl font-bold tracking-tight">
            {component.title}
          </h1>

          <p className="mt-3 font-geist-sans text-lg text-muted-foreground">
            {component.description}
          </p>
        </div>

        {/* Preview */}
        <section className="space-y-4">
          <h2 className="font-geist-sans text-2xl font-semibold">Preview</h2>
          <ComponentPreview>
            <p className="font-geist-sans text-sm text-muted-foreground">
              {component.title} Preview here
            </p>
          </ComponentPreview>
        </section>

        {/* Install */}
        <section className="space-y-4">
          <h2 className="font-geist-sans text-2xl font-semibold">
            Installation
          </h2>
          <InstallCommand command={`npx roshan-ui add ${component.slug}`} />
        </section>

        {/* Code */}
        <section className="space-y-4">
          <h2 className="font-geist-sans text-2xl font-semibold">Usage</h2>

          <div className="rounded-2xl border bg-black p-6 text-white">
            <pre className="overflow-x-auto font-mono text-sm">{usageCode}</pre>
          </div>
        </section>
      </div>
    </main>
  );
}
