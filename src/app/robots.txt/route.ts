import { NextResponse } from "next/server";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

export function GET() {
  const content = `User-agent: *\nDisallow: /blog\nSitemap: ${new URL("/sitemap.xml", siteUrl).toString()}\n`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
