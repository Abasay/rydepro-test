/** @format */

// contexts/GlobalContext.tsx
'use client';

import { SignUpProps } from '@/types/GeneralTypes';
import { GeneralLoginContext } from '@/types/types';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

// Define the shape of the context state

// Create the context with an initial undefined value
const GeneralLogInContext = createContext<GeneralLoginContext | undefined>(
  undefined
);

// Create a provider component
export const GeneralLogInProvider = ({ children }: { children: ReactNode }) => {
  const [isSignUpButtonClicked, setIsSignUpButtonClicked] =
    useState<boolean>(false);
  const [isHomePageActive, setIsHomePageActive] = useState<boolean>(true);

  const [signIn, setSignIn] = useState({
    email: '',
    isSignInPageActive: true,
    isLoginUsingEmailPageActive: false,
    isLoginUsingPinPageActive: false,
    isLoginUsingPassphrasePageActive: false,
  });
  return (
    <GeneralLogInContext.Provider
      value={{
        isSignUpButtonClicked,
        setIsSignUpButtonClicked,
        isHomePageActive,
        setIsHomePageActive,
        signIn,
        setSignIn,
      }}>
      {children}
    </GeneralLogInContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useGeneralLogInContext = () => {
  const context = useContext(GeneralLogInContext);
  if (context === undefined) {
    throw new Error('Must be within the GeneralLogInContext');
  }
  return context;
};
