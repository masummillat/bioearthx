import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "bioearthx";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isProduction:", isProd);
console.log("basePath:", isProd ? `/${repoName}` : "");
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig