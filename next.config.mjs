/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath is required when deploying to GitHub Pages at openscan-explorer.github.io/docs.
  // Remove this if you configure a custom domain (e.g. docs.openscan.io).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
