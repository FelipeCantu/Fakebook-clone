/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbbx.com',
      'firbasestorage.googleapis.com',
    ],
  },
};