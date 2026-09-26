import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/united-capitals-fund-v2',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
