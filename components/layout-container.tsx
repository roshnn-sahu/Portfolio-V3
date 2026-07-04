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
        isComponentSlug ? "max-w-6xl" : "md:max-w-170"
      }`}
    >
      <div className="hidden md:flex absolute top-0 -left-6 z-50 h-full w-6 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-80 [--pattern-fg:var(--color-neutral-300)] dark:opacity-12" />
      {children}
      <div className="hidden md:flex absolute top-0 -right-6 z-50 h-full w-6 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-80 [--pattern-fg:var(--color-neutral-300)] dark:opacity-12" />
    </div>
  );
}
