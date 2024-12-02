import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : '',
  assetPrefix: process.env.URL ? process.env.URL : undefined,
};

export default nextConfig;
