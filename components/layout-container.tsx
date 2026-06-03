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
      className={`container mx-auto border border-x border-border ${
        isComponentSlug ? "max-w-6xl " : "md:max-w-161"
      }`}
    >
      {children}
    </div>
  );
}
