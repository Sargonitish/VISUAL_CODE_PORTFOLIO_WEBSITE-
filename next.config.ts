import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const repo = "VISUAL_CODE_PORTFOLIO_WEBSITE-"; // Your GitHub repository name

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
