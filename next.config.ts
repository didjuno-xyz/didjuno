import type { NextConfig } from 'next';

const isNetlifyBuild =
  process.env.NETLIFY === 'true' ||
  process.env.npm_lifecycle_event === 'build:netlify';

const nextConfig: NextConfig = {
  output: isNetlifyBuild ? 'export' : undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: isNetlifyBuild,
  },
};

export default nextConfig;
