/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
    //remove console.* except console.error
  },
};

module.exports = nextConfig;
