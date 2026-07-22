/** @type {import('next').NextConfig} */

// GitHub Pages serves this project site from https://<user>.github.io/PenguinPortfolio/,
// so it needs a static export plus a basePath. Vercel serves from the domain root and
// runs a normal Next.js build, so those options must stay off there.
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoBasePath = '/PenguinPortfolio'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    output: 'export',
    basePath: repoBasePath,
    assetPrefix: `${repoBasePath}/`,
    trailingSlash: true,
  }),
}

export default nextConfig
