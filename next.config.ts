import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/thue-xe/thuexe-4-cho", destination: "/thue-xe/thue-xe-4-cho", permanent: true },
      { source: "/thue-xe/thuexe-7-cho", destination: "/thue-xe/thue-xe-7-cho", permanent: true },
      { source: "/thue-xe/thuexe-16-cho", destination: "/thue-xe/thue-xe-16-cho", permanent: true },
      { source: "/thue-xe/thuexe-29-cho", destination: "/thue-xe/thue-xe-29-cho", permanent: true },
      { source: "/thue-xe/thuexe-45-cho", destination: "/thue-xe/thue-xe-45-cho", permanent: true },
      { source: "/thue-xe/thuexe-limousine", destination: "/thue-xe/thue-xe-limousine", permanent: true },
      { source: "/thue-xe-du-lich-dak-lak", destination: "/thue-xe/du-lich-dak-lak", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value: "attribution-reporting=()",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      // Content-Security-Policy is set per-request in src/middleware.ts (nonce +
      // 'strict-dynamic'). Do not duplicate it here — Next.js sends both the
      // config-level and middleware-level headers as separate CSP instances,
      // which the browser then enforces as an intersection, not an override.
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/image(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
