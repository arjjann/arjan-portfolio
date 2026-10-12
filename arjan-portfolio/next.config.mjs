/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'arjan-portfolio';

const nextConfig = {
  // Export a fully static site so GitHub Pages can serve it without a Node.js server.
  output: 'export',
  trailingSlash: true,
  // GitHub project pages live under /<repository-name>/ rather than the domain root.
  ...(isGitHubPages
    ? {
        basePath: `/${repositoryName}`,
      }
    : {}),
  // Required if Next.js Image Optimization is used with static export.
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
