import Operator from '@/components/Operators';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Rydepro | Operator Operators - Become an Operator with Rydepro Today',
  description: 'Rydepro is a ride-sharing service that is expanding to California, U.S. cities, and soon, the world.',
};

const Operators = () => {
  return (
    <>
      <Operator />
    </>
  );
};

export default Operators;
