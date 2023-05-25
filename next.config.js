/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
    unoptimized:true,
  },
  
}

module.exports = nextConfig
