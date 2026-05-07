import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

const staticRoutes = [
  "/",
//   "/blog",
  "/contact",
  "/design",
  "/automation",
  "/productions",
  "/technology",
  "/terms-of-service",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  return routes;
}