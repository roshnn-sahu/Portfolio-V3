import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/data/blog/posts";
import { components } from "@/lib/data/components/components";
import { config } from "@/config/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.baseUrl;
  const posts = getAllPosts();

  // Blog posts and component posts (from MDX)
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}${
      post.metadata.category === "components"
        ? `/components/${post.slug}`
        : `/blog/${post.slug}`
    }`,
    lastModified: new Date(post.metadata.updatedAt || post.metadata.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Individual registry component pages
  const componentPages = components.map((component) => ({
    url: `${baseUrl}/components/${component.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Static routes with varying priorities
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/components`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...routes, ...blogPosts, ...componentPages];
}
