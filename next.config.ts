import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "top-fwz1.mail.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        pathname: "/**",
      },
    ],

    // или вариант с шаблоном:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'top-fwz1.mail.ru', pathname: '/**' }
    // ],
  },
};
module.exports = nextConfig;
export default nextConfig;
