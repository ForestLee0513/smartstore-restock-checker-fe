const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  customWorkerDir: "worker",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development" ? true : false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop-phinf.pstatic.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
