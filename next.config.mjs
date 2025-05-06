/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://ims.ngengroup.org/**")],
  },
};

export default nextConfig;
