// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/opportunities",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
