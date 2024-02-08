/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["ecommm.s3.ap-south-1.amazonaws.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommm.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
