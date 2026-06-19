import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 78],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sc04.alicdn.com"
      }
    ]
  }
};

export default nextConfig;
