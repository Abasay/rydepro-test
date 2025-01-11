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
  title: 'RydePro - Sign Up',
  description: '',
};

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SignUpProvider>
      <GeneralLogInProvider>
        <ResetProvider>
          {' '}
          {children}
          <Toaster />
        </ResetProvider>
      </GeneralLogInProvider>
    </SignUpProvider>
  );
}
