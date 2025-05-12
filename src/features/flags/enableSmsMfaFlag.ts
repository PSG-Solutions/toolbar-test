import { flag } from 'flags/next';

// Used to define the flag in Vercel Toolbar
// Must be imported in apps/nextjs/src/app/.well-known/vercel/flags/route.ts
// export const enableSmsMfaFlagDefinition: FlagDefinitionType = {
//   description: "If this is set, we will use a Sms MFA",
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

export const enableSmsMfaFlag = flag({
  key: "enableSmsMfaFlag",
  decide: () => true, // Default is hard coded to true
});
