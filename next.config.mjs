/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Replace 'your-repo-name' with your actual repository name
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
}

export default nextConfig
