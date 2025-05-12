import createJiti from "jiti";

import withPWAInit from "@ducanh2912/next-pwa";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import vercelToolbar from "@vercel/toolbar/plugins/next";
import createNextIntlPlugin from "next-intl/plugin";

const withVercelToolbar = vercelToolbar();

// const withPWA = withPWAInit({
//   register: true,
//   disable: process.env.NODE_ENV === "development",
// });

// const jiti = createJiti(new URL(import.meta.url).pathname);
// // Import env files to validate at build time. Use jiti so we can load .ts files in here.
// jiti("./src/env");
// jiti("@agilelix/auth/env");

// const withNextIntl = createNextIntlPlugin("./src/i18n/i18n.ts");

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });
// @ts-ignore
export default (phase, { defaultConfig }) => {
  // console.log("🚀 ~ next.config.mjs:28 ~ defaultConfig:", defaultConfig);
  const isDev = phase === "phase-development-server";

  // const allowedOrigins = [
  //   "www.psg-labs.net",
  //   "app.psg-labs.net",
  //   "www.agilelix.com",
  //   "app.agilelix.com",
  //   "develop.agilelix.com",
  //   "app.develop.agilelix.com",
  // ];
  // if (process.env.NEXT_PUBLIC_APP_URL) {
  //   allowedOrigins.push(
  //     process.env.NEXT_PUBLIC_APP_URL.replace("https://", "").replace("http://", ""),
  //   );
  // }
  // if (process.env.NEXT_PUBLIC_MARKETING_URL) {
  //   allowedOrigins.push(
  //     process.env.NEXT_PUBLIC_MARKETING_URL.replace("https://", "").replace("http://", ""),
  //   );
  // }
  // if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  //   allowedOrigins.push(process.env.NEXT_PUBLIC_VERCEL_URL);
  // }
  // if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
  //   allowedOrigins.push(process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL);
  // }

  // console.log("allowedOrigins", allowedOrigins);

  /** @type {import("next").NextConfig} */
  const config = {
    // assetPrefix:
    //   process.env.NEXT_PUBLIC_VERCEL_URL && !isDev
    //     ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    //     : undefined,
    // reactStrictMode: true,
    // env: {
    //   NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV ?? "",
    //   NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    //   NEXT_PUBLIC_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA ?? "",
    //   NEXT_PUBLIC_GIT_BRANCH: process.env.VERCEL_GIT_COMMIT_REF ?? "",
    //   NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    // },
    // /** Enables hot reloading for local packages without a build step */
    // transpilePackages: [
    //   "@agilelix/api",
    //   "@agilelix/auth",
    //   "@agilelix/constants",
    //   "@agilelix/db",
    //   "@agilelix/models",
    //   "@agilelix/ui",
    //   "@agilelix/utils",
    // ],
    // /** We already do linting and typechecking as separate tasks in CI */
    // eslint: { ignoreDuringBuilds: true },
    // typescript: { ignoreBuildErrors: true },
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "**.agilelix.com",
    //     },
    //     {
    //       protocol: "https",
    //       hostname: "**.googleusercontent.com",
    //     },
    //     {
    //       protocol: "https",
    //       hostname: "storage.googleapis.com",
    //     },
    //     {
    //       protocol: "https",
    //       hostname: "**.agileanalytic.com",
    //     },
    //     {
    //       protocol: "http",
    //       hostname: "localhost",
    //       port: "3000",
    //     },
    //   ],
    // },
    // experimental: {
    //   serverActions: {
    //     allowedOrigins,
    //   },
    // },
  };
  return withVercelToolbar(config);
};
