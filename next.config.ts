import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // turbopack.root keeps the dev server anchored to this project's own
  // package-lock.json when the machine's home directory also has one.
  // Vercel's build environment always has a matching git root so the
  // option is harmless in CI/production.
  turbopack: { root: __dirname },
};

export default nextConfig;
