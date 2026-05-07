export function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredSiteUrl) {
    return new URL(configuredSiteUrl);
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }

  return new URL("http://localhost:3000");
}