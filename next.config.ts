import type { NextConfig } from "next";

const repoName = "bioearthx";
console.log("ENV:", process.env.NODE_ENV);
console.log("basePath:", process.env.NODE_ENV === "production" ? `/${repoName}` : "");
console.log("assetPrefix:", process.env.NODE_ENV === "production" ? `/${repoName}/` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
};

export default nextConfig;
