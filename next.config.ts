import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

// Report-Only until it has been watched in production. Uses 'unsafe-inline' because
// nonces would force every page into dynamic rendering and lose the static CDN cache.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://cdn.sanity.io",
  "media-src 'self' https://res.cloudinary.com",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  // Lets a Cloudflare quick tunnel load dev assets when sharing a local preview
  allowedDevOrigins: ["*.trycloudflare.com"],
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Sanity Studio loads from several of its own origins, so it's left out of the CSP
        source: "/((?!studio).*)",
        headers: [{ key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy }],
      },
    ];
  },
};

export default nextConfig;
