/** @format */

// contexts/GlobalContext.tsx
'use client';

import { SignUpProps } from '@/types/GeneralTypes';
import { GeneralWebState } from '@/types/types';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

// Define the shape of the context state

// Create the context with an initial undefined value
const GeneralWebContext = createContext<GeneralWebState | undefined>(undefined);

// Create a provider component
export const GeneralWebProvider = ({ children }: { children: ReactNode }) => {
  const [accountType, setAccountType] = useState<string>('');
  return (
    <GeneralWebContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </GeneralWebContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useGeneralWebContext = () => {
  const context = useContext(GeneralWebContext);
  if (context === undefined) {
    throw new Error('Must be within the GeneralWebContext');
  }
  return context;
};
