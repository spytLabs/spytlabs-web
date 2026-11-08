import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/caseStudies";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

// Update a route's date when its content really changes; search engines
// discount lastmod once every URL reports the same build time.
const routes: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-11-08" },
  { path: "/design", lastModified: "2026-11-08" },
  { path: "/automation", lastModified: "2026-11-08" },
  { path: "/productions", lastModified: "2026-11-08" },
  { path: "/technology", lastModified: "2026-11-08" },
  { path: "/work", lastModified: "2026-11-08" },
  { path: "/about", lastModified: "2026-11-08" },
  { path: "/contact", lastModified: "2026-11-08" },
  { path: "/privacy-policy", lastModified: "2026-11-08" },
  { path: "/terms-of-service", lastModified: "2026-11-08" },
  ...caseStudies
    .filter((study) => !study.hidden)
    .map((study) => ({ path: `/work/${study.slug}`, lastModified: study.lastModified })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }));
}
