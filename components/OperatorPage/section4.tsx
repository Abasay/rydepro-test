'use client';
import React from 'react';
import { communityData, supportData } from './data';
import RoundedRectShape from './RoundedRectShape';

const Section4 = () => {
  return (
    <section
      className='min-h-[400px] container mx-auto flex justify-center lg:py-10 py-0 px-4 md:px-8 lg:px-10 md:mt-6'
      aria-labelledby='support-community'
    >
      <div className=' flex flex-col justify-center min-h-[400px]  gap-4 md:gap-10 lg:gap-10'>
        <header className='flex flex-col items-center gap-2' id='support-community'>
          <h2 className='text-[#3C3C3C] text-base leading-[24px] font-normal'>Responsibility</h2>
          <h3 className='text-2xl md:text-[40px] md:leading-[48px] font-medium text-[#0E0E0E]'>Support & Community</h3>
        </header>
        <div className='w-full mx-auto flex md:flex-row flex-col justify-between gap-5'>
          {supportData.map((item, idx) => {
            const { description, head } = item;
            return <RoundedRectShape head={head} description={description} key={idx} className='mt-6 md:mt-0' />;
          })}
          {communityData.map((item, idx) => {
            const { description, head } = item;
            return <RoundedRectShape head={head} description={description} key={idx} className='' />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Section4;
