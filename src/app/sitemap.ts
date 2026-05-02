import type { MetadataRoute } from "next";

import { client } from "@/sanity/lib/client";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

type PostSlug = {
  slug?: string;
  updatedAt?: string;
};

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

const postsQuery = `*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<PostSlug[]>(postsQuery);

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

//   for (const post of posts) {
//     if (!post.slug) continue;

//     routes.push({
//       url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
//       lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
//       changeFrequency: "monthly",
//       priority: 0.6,
//     });
//   }

  return routes;
}