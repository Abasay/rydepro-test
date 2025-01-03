/** @format */

// contexts/GlobalContext.tsx
'use client';

import { SettingsProps } from '@/types/DashboardTypes';
import { GeneralDashboardContext } from '@/types/types';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

// Define the shape of the context state

// Create the context with an initial undefined value
const DashboardContext = createContext<GeneralDashboardContext | undefined>(
  undefined
);

// Create a provider component
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [navMap, setNavMap] = useState<string[]>([]);
  const [settings, setSettings] = useState<SettingsProps>({
    setHeadingText: 'Settings',
    setSubHeadingText: '',
    isSettingsClicked: true,
    isSecurityOptionsClicked: false,
    isLanguageClicked: false,
    securityOptions: {
      isPinManagementClicked: false,
      isPassphraseManagement: false,
      isChangePasswordClicked: false,
      isConfirmPasswordPageActive: false,
      isUserVerifiedforChangePassword: false,
      isChangeAccountRecoveryCodeClicked: false,
      isUserVerifiedForRecoveryCode: false,
      isConfirmAccountRecoveryCodePageActive: false,
      isDeleteAccountClicked: false,
      isDeleteAccountConfirmationPageActive: false,
      isDeleteConfirmationPopUpActive: false,
      pinManagement: {
        isPinClicked: false,
        isConfirmPinClicked: false,
        isChangePinClicked: false,
        isPinCreatedSuccessfully: false,
        isUserVerified: false,
      },
      passPhrase: {
        isUserVerifiedForPassphrase: false,
        isChangePassphraseClicked: false,
        isAutoGeneratePassphraseClicked: false,
        isManuallyCreatePassphraseClicked: false,
      },
    },
  });
  return (
    <DashboardContext.Provider
      value={{ settings, setSettings, navMap, setNavMap }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('Must be within the DashboardContext');
  }
  return context;
};
