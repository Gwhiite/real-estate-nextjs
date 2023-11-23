/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
