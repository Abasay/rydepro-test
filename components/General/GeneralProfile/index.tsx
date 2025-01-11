/** @format */

'use client';
import { useGeneralWebContext } from '@/contexts/GeneralContext';
import React from 'react';
import Dashboard from '../Dashboard';

const Index = () => {
  const { accountType } = useGeneralWebContext();
  return <React.Fragment><Dashboard/></React.Fragment>;
};

export default Index;
