const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
const basePath =
  envBasePath !== undefined
    ? envBasePath
    : process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgPagesRepo
      ? `/${repoName}`
      : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
