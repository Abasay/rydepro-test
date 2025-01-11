'use client';
import React, { useEffect, useState } from 'react';
import img from '@/public/assets/operators/section3image.jpeg';
import Image from 'next/image';
import userIcon from './svgs/user.svg';
import trafficIcon from './svgs/road.svg';
import carIcon from './svgs/car.svg';

const Section3 = () => {
  return (
    <section className='min-h-[400px] mx-auto container flex justify-center py-8 pb-0 lg:py-10 relative px-4 md:px-8 lg:px-10 md:mt-6'>
      <div className='flex max-md:flex-col-reverse flex-row justify-between min-h-[300px] mt-6 md:mt-0 gap-20 md:gap-10 lg:gap-14'>
        <article className='min-h-[400px] max-md:max-w-[700px] max-md:min-h-[450px] max-md:max-h-[450px] max-480:min-h-[350px] max-480:max-h-[400px] max-sm:min-w-[400px] max-430:min-w-[200px] max-360:max-h-[300px] rounded-3xl lg:min-w-[424px] md:w-full max-md:w-full w-[335px] mx-auto mb-10 lg:mb-0'>
          <Image
            src={img}
            alt='Illustration of RYDEPRO drivers providing professional transportation services'
            width={400}
            height={500}
            priority
            placeholder='blur'
            className='w-full rounded-3xl h-full object-cover object-center'
          />
        </article>
        <div className='w-[335px] max-md:w-full mx-auto md:w-full flex flex-col gap-2 md:justify-center md:mt-0'>
          <header className='flex flex-col gap-1 justify-center'>
            <span className='text-[#3C3C3C] text-base leading-[24px] font-normal'>Responsibility</span>
            <h2 className='text-[24px] leading-[32px] font-medium md:text-[40px] md:leading-[48px] text-[#0E0E0E]'>
              Driver Operator Responsibilities
            </h2>
          </header>
          <div className='flex flex-col gap-2 mt-4 md:mt-0 lg:mt-8'>
            <p className='text-[16px] leading-[24px] font-normal text-[#000000]'>
              As a member, you will assume a vital role in delivering secure and dependable transportation to our
              esteemed clients. This requires:
            </p>
            <ul className='pl-2 lg:pl-6 flex flex-col gap-3 mt-3 text-[#3C3C3C] font-medium'>
              <li className='flex items-center gap-4'>
                <Image src={userIcon} alt='Icon representing customer service' width={20} height={20} />
                <span className='text-base font-medium'>Exceptional customer service skills.</span>
              </li>
              <li className='flex items-center gap-4'>
                <Image src={trafficIcon} alt='Icon representing traffic knowledge' width={20} height={20} />
                <span className='text-base font-medium'>
                  Extensive familiarity with local roads and traffic regulations.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <Image src={carIcon} alt='Icon representing vehicle maintenance' width={20} height={20} />
                <span className='text-base font-medium'>
                  An unwavering commitment to maintaining an immaculate and well-maintained vehicle.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
