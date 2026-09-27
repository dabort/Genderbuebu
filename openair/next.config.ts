import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-894f6ed26225410c96c9a46e36ef0199.r2.dev",
        pathname: "/openair/**",
      },
    ],
  },
};

export default nextConfig;
