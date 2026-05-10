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
    <SiteHeaderWrapper className="sticky top-0 z-50 flex h-16 items-center overflow-hidden bg-background px-2  [--pattern:var(--color-neutral-100)] [--pattern-2:var(--color-zinc-700)] max-md:px-5 sm:py-10 border-b">

      <div className="flex w-full items-center justify-end gap-3 relative z-10">
        <DesktopNav items={NAV_ITEMS} />
        <CommandMenu posts={posts} />
        <div className="flex flex-col items-center justify-center max-sm:hidden">
          <Separator orientation="vertical" className="ml-2 h-4" />
        </div>
        <ThemeToggle />
        <div className="flex flex-col items-center justify-center sm:hidden">
          <Separator orientation="vertical" className="h-4" />
        </div>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </SiteHeaderWrapper>
  );
}

