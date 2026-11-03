import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a Cloudflare quick tunnel load dev assets when sharing a local preview
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
