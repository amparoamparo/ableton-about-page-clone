/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ableton-production.imgix.net"],
  },
};

module.exports = nextConfig;
