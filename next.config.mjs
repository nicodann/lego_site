/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.brickinstructions.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
