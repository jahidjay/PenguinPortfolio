/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/PenguinPortfolio",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
