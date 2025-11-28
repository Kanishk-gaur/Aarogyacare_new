import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the 'images' object with 'unoptimized: true' to skip image optimization
  images: {
    unoptimized: true,
  },
  /* other config options here */
};

export default nextConfig;