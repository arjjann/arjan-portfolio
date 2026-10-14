/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'arjan-portfolio';

const nextConfig = {
  // Generates static HTML/CSS/JS files for GitHub Pages
  output: 'export',
  trailingSlash: true,

  // Applies subpath routing only when building for GitHub Pages
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : '',

  // Disables server-side image optimization required for static exports
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;