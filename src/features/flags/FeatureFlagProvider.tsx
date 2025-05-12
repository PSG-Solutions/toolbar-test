"use client";

import { createContext, useContext } from "react";

interface FeatureFlagProps {
  showHomepageBannerFlag: boolean;  
  useCreateRetroDialogFlag: boolean;
  enableSmsMfaFlag: boolean;
}

export const FeatureFlagContext = createContext<FeatureFlagProps>({
  showHomepageBannerFlag: false,
  useCreateRetroDialogFlag: false,
  enableSmsMfaFlag: false,
});

export const useFeatureFlags = () => useContext(FeatureFlagContext);

export function FeatureFlagProvider({
  flags,
  children,
}: {
  flags: FeatureFlagProps;
  children: React.ReactNode;
}) {
  return <FeatureFlagContext.Provider value={{
    showHomepageBannerFlag: flags.showHomepageBannerFlag,
    useCreateRetroDialogFlag: flags.useCreateRetroDialogFlag,
    enableSmsMfaFlag: flags.enableSmsMfaFlag,
  }}>{children}</FeatureFlagContext.Provider>;
}
