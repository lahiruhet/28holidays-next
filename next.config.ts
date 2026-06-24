import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/itineraries.html', destination: '/itineraries', permanent: true },
      { source: '/rentacar', destination: '/car-rental', permanent: true },
      { source: '/rentacar.html', destination: '/car-rental', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us.html', destination: '/about', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/inquire', destination: '/contact', permanent: true },
      { source: '/inquire.html', destination: '/contact', permanent: true },
      { source: '/reserve', destination: '/contact', permanent: true },
      { source: '/reserve.html', destination: '/contact', permanent: true },
      { source: '/payments', destination: '/contact', permanent: true },
      { source: '/payments.html', destination: '/contact', permanent: true },
      { source: '/payment-policy', destination: '/terms-and-conditions', permanent: true },
      { source: '/payment-policy.html', destination: '/terms-and-conditions', permanent: true },
      { source: '/vitanova', destination: '/shop', permanent: true },
      { source: '/vitanova.html', destination: '/shop', permanent: true },
      { source: '/success.html', destination: '/', permanent: true },
    ];
  },
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
        hostname: 'dynamic-media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nictic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bluelankatours.com',
      },
    ],
  },
};

export default nextConfig;
