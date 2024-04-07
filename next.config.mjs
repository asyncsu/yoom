/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  basePath: '/yoom',
  // assetPrefix: "/yoom/", //Not work like expected
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
