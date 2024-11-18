/** @format */

// components/ConditionalHeader.tsx
'use client';

import { usePathname } from 'next/navigation';
// import Footer from '@/components/About/footer';
import Footer from '../Footer';
import { useEffect } from 'react';

export default function ConditionalFooter() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return pathname.includes('/general') ||
    pathname.includes('/dashboard') ? null : (
    <Footer />
  );
}
