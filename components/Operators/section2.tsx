'use client';
import React from 'react';
import img from '@/public/assets/operators/section2Image.jpeg';
import Image from 'next/image';

const Section2 = () => {
  return (
    <section className='container mx-auto lg:py-10 px-5 md:px-8 lg:px-10 mt-40'>
      <article className='min-h-[400px] bg-opacity-85 rounded-3xl relative flex justify-center'>
        <Image
          src={img}
          alt='A background image depicting professional drivers'
          role='img'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          placeholder='blur'
          priority
          className='absolute top-0 rounded-3xl'
        />

        <div
          className='z-10 w-full rounded-3xl h-full absolute top-0 bg-black bg-opacity-85'
          role='presentation'
          aria-hidden='true'
        ></div>
        <div className='absolute container grid z-20 py-8 max-430:py-10 px-24 lg:px-32 max-md:px-16 place-content-center items-start md:items-center justify-center gap-[8px]'>
          <header className='flex flex-col text-[#F7F7F7] gap-2 justify-center items-center'>
            <span className='text-center text-base font-normal'>Why Choose Us</span>
            <h2 className='text-[24px] md:text-[40px] md:leading-[48px] font-medium max-430:text-lg text-center'>
              Who We&apos;re Looking For
            </h2>
          </header>

          <div className='flex sm:flex-row flex-col gap-6 mt-5 sm:mt-10 lg:mt-16 min-w-[250px] max-w-[874px]'>
            <article className='w-full flex flex-col gap-2'>
              <h3 className='text-lg md:text-2xl font-bold max-430:text-base text-[#FCFCFC]'>
                Independent Driver Operators
              </h3>
              <p className='text-[#D0D0D0] text-base max-430:text-sm font-medium'>
                If you&apos;re self-employed and take pride in offering top-tier service, we want you.
              </p>
            </article>
            <article className='w-full flex flex-col gap-2'>
              <h3 className='text-lg md:text-2xl font-bold max-430:text-base text-[#FCFCFC]'>
                Charter Carrier Operators
              </h3>
              <p className='text-[#D0D0D0] text-base max-430:text-sm font-medium'>
                Join a network that values your expertise and offers opportunities to expand your business.
              </p>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section2;
