import { getProviderData, createFlagsDiscoveryEndpoint } from 'flags/next';
import { enableSmsMfaFlag } from "../../../../features/flags/enableSmsMfaFlag";
import { showHomepageBannerFlag } from "../../../../features/flags/showHomepageBannerFlag";
import { useCreateRetroDialogFlag } from "../../../../features/flags/useCreateRetroDialogFlag";

export const GET = createFlagsDiscoveryEndpoint(async (request) => {

  const apiData = await getProviderData({
      useCreateRetroDialogFlag,
      showHomepageBannerFlag,
      enableSmsMfaFlag,
  });
return apiData;
});
