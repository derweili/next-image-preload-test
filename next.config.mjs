/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
