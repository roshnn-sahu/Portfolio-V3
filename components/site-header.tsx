import { NAV_ITEMS } from "@/config/site";
import DesktopNav from "./layout/desktop-nav";
import SiteHeaderWrapper from "./site-header-wrapper";
import ThemeToggle from "./theme-toggle";
import { Separator } from "./ui/separator";
import MobileNav from "./layout/mobile-nav";
import { CommandMenu } from "./command-menu";
import { getAllPosts } from "@/lib/data/blog/posts";

export default function SiteHeader() {
  const posts = getAllPosts();

  return (
    <SiteHeaderWrapper className="sticky top-0 z-50 flex h-16 items-center overflow-hidden border-b border-border border-dashed bg-background px-2 [--pattern-2:var(--color-zinc-700)] [--pattern:var(--color-neutral-100)] max-md:px-5 sm:py-10">
      <div className="relative z-10 flex w-full items-center justify-between gap-3 pl-3">
        <DesktopNav items={NAV_ITEMS} />
        <div className="flex items-center gap-2">
        <CommandMenu posts={posts} />
        <div className="flex flex-col items-center justify-center max-sm:hidden">
          <Separator orientation="vertical" className="ml-2 h-4" />
        </div>
        <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center sm:hidden">
          <Separator orientation="vertical" className="h-4" />
        </div>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </SiteHeaderWrapper>
  );
}
