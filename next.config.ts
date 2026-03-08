import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nictic.com',
      },
    ],
  },
};

export default nextConfig;
