"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { TextAlignLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTOCObserver } from "@/hooks/use-toc-observer";
import { cn } from "@/lib/utils";

export default function DocsTOC({
  items,
  className,
  children,
}: {
  items: TOCItemType[];
  className?: string;
  children?: React.ReactNode;
}) {
  const itemUrls = items.map((item) => item.url);
  const activeId = useTOCObserver(itemUrls);

  if (!items.length) {
    return null;
  }

  const minDepth = Math.min(...items.map((i) => i.depth));

  return (
    <nav
      className={cn(
        "not-prose font-geist-sans",
        "no-scrollbar 2xl:fixed 2xl:top-25 2xl:left-[calc(50%+25rem)] 2xl:max-h-100 2xl:w-68 2xl:overflow-y-auto",
        className
      )}
      aria-label="Table of Contents"
    >
      <p className="mb-4 flex items-center gap-2 font-medium text-foreground 2xl:text-sm">
        <HugeiconsIcon
          icon={TextAlignLeftIcon}
          strokeWidth={2}
          className="size-3.5 2xl:size-3"
        />
        {children ?? "On this page"}
      </p>
      <ul className="flex flex-col space-y-2">
        {items.map((item) => {
          const depthOffset = Math.max(0, item.depth - minDepth);
          const isActive = activeId === item.url.replace("#", "");

          return (
            <li
              key={item.url}
              className="relative flex items-start"
              style={{
                paddingInlineStart: `${depthOffset * 1.25}rem`,
              }}
            >
              {depthOffset === 0 && (
                <span className="relative top-2 mr-3 flex h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50 2xl:hidden" />
              )}
              {depthOffset > 0 && <span className="mr-3 flex w-1.5 shrink-0" />}
              <a
                href={item.url}
                className={cn(
                  "inline-block text-sm transition-colors hover:text-foreground",
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
