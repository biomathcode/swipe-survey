/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
