/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [{ hostname: "img.kwcdn.com" }],
  },
};

export default nextConfig;
