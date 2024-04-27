// @ts-check

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  compiler: {
    removeConsole: isProduction,
  },
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
  typescript: {
    ignoreBuildErrors: isProduction,
  },
};

module.exports = nextConfig;
