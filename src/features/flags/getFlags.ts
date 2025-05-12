import { enableSmsMfaFlag } from "./enableSmsMfaFlag";
import { useCreateRetroDialogFlag } from "./useCreateRetroDialogFlag";
import { showHomepageBannerFlag } from "./showHomepageBannerFlag";

export async function getFlags() {
  const flags = {
    useCreateRetroDialogFlag: await useCreateRetroDialogFlag(),
    showHomepageBannerFlag: await showHomepageBannerFlag(),
    enableSmsMfaFlag: await enableSmsMfaFlag(),
  };

  return flags;
}
