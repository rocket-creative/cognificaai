import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "media-src 'self' https:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://fonts.googleapis.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/for-employers", destination: "/workforce", permanent: true },
      { source: "/for-clinics", destination: "/medical", permanent: true },
      { source: "/for-insurers", destination: "/medical#insurers", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cogai.health",
      },
      {
        protocol: "https",
        hostname: "cogai.health",
      },
      {
        protocol: "https",
        hostname: "www.cognifica.app",
      },
    ],
  },
};

export default nextConfig;
