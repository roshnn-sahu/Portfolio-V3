import { Metadata } from "next";
import { ComponentCard } from "@/components/component/component-card";
import { components } from "@/lib/data/components/components";
import { generateWebsiteMetadata } from "@/config/metadata";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Components",
  description:
    "Reusable UI components built with Next.js, Tailwind CSS, and Framer Motion. Interactive navbar, expandable cards, magnetic buttons, and more.",
  keywords: [
    "React components",
    "UI components",
    "shadcn components",
    "Roshan components",
    "interactive navbar",
    "magnetic button",
    "expandable card",
  ],
  url: "/components",
});

export default function ComponentsPage() {
  return (
    <section
      className="h-[calc(100svh-16rem)] space-y-12 pt-8"
      aria-labelledby="blog-heading"
    >
      <header className="flex flex-col gap-3">
        <h2 id="blog-heading" className="font-geist-pixel-square text-xl">
          Components
        </h2>
        <p className="font-geist-sans text-muted-foreground">
          Reusable UI components built with Next.js, Tailwind CSS, and Framer
          Motion.
        </p>
      </header>
      <div className="group/cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {components.reverse().map((component, idx) => (
          <ComponentCard key={component.slug} {...component} idx={idx} />
        ))}
      </div>
    </section>
  );
}
