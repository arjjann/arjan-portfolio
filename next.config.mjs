/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generates static HTML/CSS/JS files for GitHub Pages
  output: 'export',
  trailingSlash: true,

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