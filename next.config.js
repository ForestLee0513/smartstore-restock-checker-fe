const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  customWorkerDir: "worker",
  runtimeCaching,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shop-phinf.pstatic.net"],
  },
};

module.exports = withPWA(nextConfig);
