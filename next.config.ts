import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vanlocksecurity.co.uk",
      },
    ],
  },
};

export default nextConfig;
