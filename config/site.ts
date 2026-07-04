import { NavItem } from "@/types/nav";
import {config} from "@/config/config";

const baseUrl = config.baseUrl;

export const SITE_CONFIG = {
  name: "Roshan",
  description:
    "Full Stack MERN Developer specializing in React.js, Next.js, Node.js, and AI-powered SaaS products. Based in India, open to remote opportunities.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/opengraph-image.png`,
  links: {
    twitter: "https://x.com/hloRoshan",
    github: "https://github.com/roshnn-sahu",
  },
  keywords: [
    "Roshan",
    "Roshan Sahu",
    "roshan sahu",
    "roshan dev",
    "dev roshan sahu",
    "developer roshan sahu",
    "roshan full stack developer",
    "roshan dev portfolio",
    "roshan portfolio",
    "roshan developer portfolio",
    "web developer",
    "typescript",
    "react",
    "next.js",
    "MERN Developer",
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
    title: "Components",
    href: "/components",
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
