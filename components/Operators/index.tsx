import React from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./hero'));

const Operator = () => {
  return (
    <main className='min-h-fit  flex flex-col w-full  bg-[#FCFCFC]'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
};

export default Operator;
