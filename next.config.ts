import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lógica dos designs registra observers no mount; o StrictMode montaria duas vezes em dev.
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
