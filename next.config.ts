/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode to catch potential problems in your app.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // The domain from which your images will be loaded.
      },
    ],
  },
};

export default nextConfig;
