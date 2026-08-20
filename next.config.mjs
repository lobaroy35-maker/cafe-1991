/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'ipx.lamenu.uz',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lamenu.uz',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lacafe.uz',
      },
    ],
  },
};

export default nextConfig;
