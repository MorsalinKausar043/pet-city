/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "media.istockphoto.com",
      "demoapus2.com",
      "github.com",
    ],
  },
  reactStrictMode: true,
  optimizeFonts: true,
};

module.exports = nextConfig
