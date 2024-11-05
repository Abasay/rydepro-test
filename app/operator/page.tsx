import Operator from '@/components/OperatorPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Rydepro | Operator Page',
  description:
    'Rydepro is a ride-sharing service that is expanding to California, U.S. cities, and soon, the world.',
};
const OperatorPage = () => {
  return <Operator />;
};

export default OperatorPage;
