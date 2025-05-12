import { flag } from "flags/next";

// Used to define the flag in Vercel Toolbar
// Must be imported in apps/nextjs/src/app/.well-known/vercel/flags/route.ts
// export const useCreateRetroDialogFlagDefinition: FlagDefinitionType = {
//   description: "If this is set, we will use a Create Retro Dialog",
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

export const useCreateRetroDialogFlag = flag({
  key: "useCreateRetroDialogFlag",
  decide: () => false, // Default is hard coded to false

  // decide: () => process.env.EXAMPLE_FLAG_ENABLED === 'true', // Default is controlled by environment variable.  Requires a redeploy to change.

  // async decide() {
  //   // Database
  //   const fireworkerService = new FireworkerService();
  //   const useCreateRetroDialogFlag = await fireworkerService.get(`flags/useCreateRetroDialogFlag`);
  //   return useCreateRetroDialogFlag?.enabled;
  //   // Third Party
  //   // return getLaunchDarklyClient().variation(this.key, false);
  // },
});
