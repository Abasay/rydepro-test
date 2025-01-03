/** @format */

// contexts/GlobalContext.tsx
'use client';

import { ResetProps } from '@/types/GeneralTypes';
import { GlobalResetContext } from '@/types/types';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

// Define the shape of the context state

// Create the context with an initial undefined value
const ResetContext = createContext<GlobalResetContext | undefined>(undefined);

// Create a provider component
export const ResetProvider = ({ children }: { children: ReactNode }) => {
  const [isHomePageActive, setIsHomePageActive] = useState<boolean>(true);

  const [reset, setReset] = useState<ResetProps>({
    email: '',
    isAccountRecoveryPageActive: true,
    isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
    isVerificationCodePageActive: false,
    isSetNewPasswordPageActive: false,
    isConfirmPasswordPageActive: false, // for mobiles
  });
  return (
    <ResetContext.Provider
      value={{
        isHomePageActive,
        setIsHomePageActive,
        reset,
        setReset,
      }}>
      {children}
    </ResetContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useResetContext = () => {
  const context = useContext(ResetContext);
  if (context === undefined) {
    throw new Error('Must be within the GeneralWebPageState');
  }
  return context;
};
