import type { NextConfig } from "next";

const r2PublicUrl = process.env.R2_PUBLIC_URL || "https://pub-31f388eee9ee467086e726e2865e639a.r2.dev";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(r2PublicUrl).hostname,
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
