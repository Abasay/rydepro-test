/** @format */

// contexts/GlobalContext.tsx
'use client';

import { SignUpProps } from '@/types/GeneralTypes';
import { GeneralSignUpContext } from '@/types/types';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

// Define the shape of the context state

// Create the context with an initial undefined value
const SignUpPageContext = createContext<GeneralSignUpContext | undefined>(
  undefined
);

// Create a provider component
export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [isSignUpButtonClicked, setIsSignUpButtonClicked] =
    useState<boolean>(false);
  const [isHomePageActive, setIsHomePageActive] = useState<boolean>(true);

  const [signUp, setSignUp] = useState<SignUpProps>({
    email: '',
    password: '',
    confirmPassword: '',
    isSignUpButtonClicked: true,
    isOTPVerificationPageActive: false,
    isSetAccountRecoveryPageActive: false,
    isConfirmAccountRecoveryPageActive: false,
  });

  return (
    <SignUpPageContext.Provider
      value={{
        isSignUpButtonClicked,
        setIsSignUpButtonClicked,
        isHomePageActive,
        setIsHomePageActive,
        signUp,
        setSignUp,
      }}>
      {children}
    </SignUpPageContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useSignUpContext = () => {
  const context = useContext(SignUpPageContext);
  if (context === undefined) {
    throw new Error('Must be within the GeneralSignUpContext');
  }
  return context;
};
