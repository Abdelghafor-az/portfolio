/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES ? '/portfolio/' : '',
  basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
};