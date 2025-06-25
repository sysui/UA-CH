import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/api",
      },
    ];
  },
};

export default nextConfig;
