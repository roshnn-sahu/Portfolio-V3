import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { components } from "@/lib/data/components/components";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowMoveUpLeftIcon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import PostShareMenu from "@/components/blog/post-share-menu";
import { InstallCommand } from "@/components/docs/install-command";
import ComponentPreview from "@/components/docs/component-preview";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { generateWebsiteMetadata } from "@/config/metadata";
import { Prose } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/config/site";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

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

  const componentUrl = `/components/${component.slug}`;
  const ogImage = `/og/simple?title=${encodeURIComponent(component.title)}`;

  return generateWebsiteMetadata({
    title: `${component.title} - Components`,
    description: component.description,
    image: ogImage,
    url: componentUrl,
    type: "article",
  });
}

function getPageJsonLd(component: any): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: component.title,
    description: component.description,
    image: `/og/simple?title=${encodeURIComponent(component.title)}`,
    url: `${SITE_CONFIG.url}/components/${component.slug}`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}/images/avatar.png`,
    },
  };
}

export default async function ComponentSlugPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(component)).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
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
              <Tooltip>
                <TooltipTrigger
                  render={<Link href={`/components/${previous.slug}`} />}
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border-none bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <HugeiconsIcon
                    icon={ArrowLeft02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  <span className="sr-only">Previous</span>
                </TooltipTrigger>
                <TooltipContent
                  className="py-2 pr-2 pl-3 text-[0.85rem]"
                  sideOffset={10}
                >
                  <div className="flex items-center gap-2">
                    Previous Component
                    <Kbd>
                      <HugeiconsIcon icon={ArrowLeft02Icon} />
                    </Kbd>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
            {next && (
              <Tooltip>
                <TooltipTrigger
                  render={<Link href={`/components/${next.slug}`} />}
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border-none bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <span className="sr-only">Next</span>
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </TooltipTrigger>
                <TooltipContent
                  className="py-2 pr-2 pl-3 text-[0.85rem]"
                  sideOffset={10}
                >
                  <div className="flex items-center gap-2">
                    Next Component
                    <Kbd>
                      <HugeiconsIcon icon={ArrowRight02Icon} />
                    </Kbd>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <Prose className="font-geist-sans">
          <h1 className="mb-1 text-3xl font-semibold tracking-tight">
            {component.title}
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <p>{component.description || "UI Component"}</p>
          </div>
         
          <div className="mt-6 max-w-4xl space-y-10">        

            {/* Preview */}
            <section className="y-4">
           
              <ComponentPreview>
                <p className="text-sm font-normal text-muted-foreground">
                  {component.title} Preview here
                </p>
              </ComponentPreview>
            </section>

            {/* Install */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Installation
              </h2>
              <InstallCommand command={`npx roshan-ui add ${component.slug}`} />
            </section>

            {/* Code */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>

              <div className="rounded-2xl border bg-black p-6 text-white">
                <pre className="overflow-x-auto font-mono text-sm">
                  {usageCode}
                </pre>
              </div>
            </section>
          </div>
        </Prose>
      </div>
    </>
  );
}
