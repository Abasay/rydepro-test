import Operator from '@/components/OperatorPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Operator Page',
  description: 'Become a RYDEPRO operator and earn money driving with us.',
};
const OperatorPage = () => {
  return <Operator />;
};

export default OperatorPage;
