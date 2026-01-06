import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mc-heads.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'starlightskins.lunareclipse.studio',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
