/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/harshanand120.github.io',
  assetPrefix: '/harshanand120.github.io/',
}

export default nextConfig
