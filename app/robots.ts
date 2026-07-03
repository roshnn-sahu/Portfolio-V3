import type { MetadataRoute } from "next";
import {config} from "@/config/config";
export default function robots(): MetadataRoute.Robots {
  const baseUrl = config.baseUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

