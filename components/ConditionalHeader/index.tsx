/** @format */

// components/ConditionalHeader.tsx
'use client';

import { usePathname } from 'next/navigation';
// import Header from '@/components/Header';
import HeaderComponent from '../Header';
import { useEffect } from 'react';

export default function ConditionalHeader() {
  const pathname = usePathname();

  return pathname.includes('/general') || pathname.includes('/dashboard') ? null : <HeaderComponent />;
}
