import { NavItem } from "@/types/nav";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const SITE_CONFIG = {
  name: "Roshan",
  description:
    "I'm Roshan, a Full-Stack Web Developer. I love to build products.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/opengraph-image.png`,
  links: {
    twitter: "https://x.com/RoshanS72056",
    github: "https://github.com/roshnn-sahu",
  },
  keywords: [
    "Roshan",
    "Roshan Sahu",
    "roshan sahu",
    "roshan dev",
    "roshan full stack developer",
    "roshan dev portfolio",
    "roshan portfolio",
    "roshan developer portfolio",
    "web developer",
    "typescript",
    "react",
    "next.js",
  ],
  author: "Roshan Sahu",
};

export type SiteConfig = typeof SITE_CONFIG;

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Collection",
    href: "/collection",
  },
];
