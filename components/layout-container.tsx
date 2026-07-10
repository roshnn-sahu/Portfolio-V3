"use client";

import { usePathname } from "next/navigation";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isComponentSlug = /^\/components\/[^/]+/.test(pathname);

  return (
    <div
      className={`relative container mx-auto border border-x border-border ${
        isComponentSlug ? "max-w-4xl" : "md:max-w-170"
      }`}
    >
      <div className="absolute top-0 -left-4 z-50 hidden h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-80 [--pattern-fg:var(--color-neutral-300)] md:flex dark:opacity-12" />
      {children}
      <div className="absolute top-0 -right-4 z-50 hidden h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-80 [--pattern-fg:var(--color-neutral-300)] md:flex dark:opacity-12" />
    </div>
  );
}
