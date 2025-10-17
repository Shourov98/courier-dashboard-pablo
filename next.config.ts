import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore all ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Skip TypeScript type-checking during build (optional)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
