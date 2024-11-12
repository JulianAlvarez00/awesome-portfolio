import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  env: {
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
};

export default nextConfig;


