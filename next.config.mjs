/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cmspics.onoffice.de' },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'image.onoffice.de',
      },
    ],
  },
}

export default nextConfig
