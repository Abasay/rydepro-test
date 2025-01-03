/** @format */

import { GeneralLogInProvider } from '@/contexts/loginContext';
import { ResetProvider } from '@/contexts/resetContext';
import { SignUpProvider } from '@/contexts/signupContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
//import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RydePro - Recover Account',
  description: '',
};

export default function GeneralWebAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GeneralLogInProvider>
      <SignUpProvider>
        <ResetProvider>
          {' '}
          {children}
          <Toaster />
        </ResetProvider>
      </SignUpProvider>
    </GeneralLogInProvider>
  );
}
