import { flag } from "flags/next";

/**
 * Usage:
 *
 * Server Side:
 * const showBanner = await showHomepageBannerFlag();
 *
 * Client Side:
 * const { showHomepageBannerFlag } = useFeatureFlags();
 *
 */

// Used to define the flag in Vercel Toolbar
// Must be imported in apps/nextjs/src/app/.well-known/vercel/flags/route.ts
// export const showHomepageBannerFlagDefinition: FlagDefinitionType = {
//   description: "Should we show the homepage banner (LaunchDarkly Flag)?",
//   origin: "https://example.com/#new-feature",
//   options: [
//     { value: false, label: "Off" },
//     { value: true, label: "On" },
//   ],
// };

/**
 *
 * This function determines the default value of the flag.
 * It can be overridden on a browser by browser basis using the Vercel Toolbar.
 *
 */

export const showHomepageBannerFlag = flag({
  key: "showHomepageBannerFlag",
  decide: () => false, // Default is hard coded to false

  // decide: () => process.env.EXAMPLE_FLAG_ENABLED === 'true', // Default is controlled by environment variable.  Requires a redeploy to change.

  // async decide() {
  //   const session = await auth();
  // const user = session?.user;
  //   // Database
  //   const context: LDContext = {
  //     kind: "user",
  //     key: user?.id ? `user-${user.id}` : "user-anonymous",
  //     name: user?.name ? user.name : "unknown",
  //   };
  //   const ldClient = await getLaunchDarklyClient();
  //   return ldClient.variation(this.key, context, false);
  // },
});
