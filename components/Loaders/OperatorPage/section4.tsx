'use client';
import React from 'react';
import { communityData, supportData } from './data';
import RoundedRectShape from './RoundedRectShape';

const Section4 = () => {
  return (
    <section className='min-h-[400px] w-full flex justify-center lg:py-10 px-4 md:px-8 lg:px-20 md:mt-16'>
      <div className='lg:container flex flex-col justify-center min-h-[400px] mt-8 md:mt-0 gap-4 md:gap-10 lg:gap-10'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-[#3C3C3C] text-base leading-[24px] font-[400px]'>
            Responsibility
          </span>
          <h3 className='text-[24px] leading-[32px] md:text-[40px] md:leading-[48px] font-medium'>
            Support & Community
          </h3>
        </div>
        <div className='w-full mx-auto flex md:flex-row flex-col justify-between gap-5'>
          {supportData.map((item, idx) => {
            const { description, head } = item;
            return (
              <RoundedRectShape
                head={head}
                description={description}
                key={idx}
                className='mt-6 md:mt-0'
              />
            );
          })}
          {communityData.map((item, idx) => {
            const { description, head } = item;
            return (
              <RoundedRectShape
                head={head}
                description={description}
                key={idx}
                className=''
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section4;
