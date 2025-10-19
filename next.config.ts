import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dvdldaiduong.com",
      },
    ],
  },
};

export default nextConfig;
