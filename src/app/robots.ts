import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

// /blog and /studio stay crawlable on purpose: both are noindex, and crawlers
// can only honour that if they're allowed to fetch the page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
