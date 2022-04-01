/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firbasestorage.googleapis.com',
      'avatars.githubusercontent.com',
    ],
  },
};