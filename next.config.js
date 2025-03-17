/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 