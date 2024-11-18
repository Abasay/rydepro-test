/** @format */

'use client';
import { useGeneralWebContext } from '@/contexts/GeneralContext';
import React from 'react';

const Index = () => {
  const { accountType } = useGeneralWebContext();
  return <React.Fragment>{accountType === 'operator'}</React.Fragment>;
};

export default Index;
