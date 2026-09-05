import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: '/daily', destination: '/weekly', permanent: true },
    ];
  },
};

export default nextConfig;
