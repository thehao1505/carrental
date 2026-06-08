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
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://cdn.sanity.io https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com; frame-src https://www.google.com https://maps.google.com https://www.googletagmanager.com; connect-src 'self' https://*.sanity.io https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net; object-src 'none';",
      },
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
