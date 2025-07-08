/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["accessories.ngengroup.org"],
    remotePatterns: [new URL("https://accessories.ngengroup.org/**")],
  },
};

export default nextConfig;
