/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["accessories.admin.ngengroup.org"],
    remotePatterns: [new URL("https://accessories.admin.ngengroup.org/**")],
  },
};

export default nextConfig;
