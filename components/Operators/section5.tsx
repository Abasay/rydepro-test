'use client';
import React, { useEffect, useState } from 'react';
import img from '@/public/assets/operators/section5img.jpeg';
import Button from '@/components/common/Button';
import Image from 'next/image';

const Section5 = () => {
  return (
    <section className='min-h-[400px] container mx-auto w-full flex justify-center lg:py-10 py-0 pt-0 px-4 md:px-8 lg:px-10 md:mt-6 lg:mt-0 mb-10'>
      <div className='flex flex-col md:flex-row justify-between items-center md:min-h-[400px] md:gap-10 lg:gap-10'>
        <article className='md:w-1/2 w-[335px] max-md:w-full mx-auto flex flex-col gap-6 justify-center h-[400px]'>
          <header className='flex flex-col gap-2'>
            <h2 className='text-base font-normal text-[#3c3c3c]'>Sign Up</h2>
            <h3 className='text-2xl md:text-[40px] md:leading-[48px] font-medium text-[#0E0E0E]'>Join Today!</h3>
          </header>
          <p className='text-base text-[#3C3C3C] font-medium'>
            Ready to elevate your career? Click the link below to apply now and take the first step toward a more
            fulfilling and lucrative driving experience.
          </p>
          <Button
            value='Register as an Operator'
            className='bg-[#0E0E0E] py-2 rounded-2xl px-[24px] lg:w-[300px] h-[56px] text-white mt-4 md:mt-0 text-base font-medium'
            aria-label='Register as an Operator to join RYDEPRO'
          />
        </article>
        <div className='min-h-[360px] max-h-[560px] max-md:w-full lg:max-w-[636px] md:max-w-[350px] min-w-[205px] mx-auto mb-10 lg:mb-0'>
          <Image
            src={img}
            alt='Illustration of professional drivers working with RYDEPRO'
            width={400}
            height={500}
            placeholder='blur'
            priority
            className='w-full rounded-3xl border h-full object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
