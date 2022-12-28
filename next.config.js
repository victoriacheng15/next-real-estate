/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/image/**',
      },
    ]
  }
}

module.exports = nextConfig
