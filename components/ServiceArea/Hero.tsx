'use client';
import React from 'react';
import clsx from 'clsx';
import hero from '@/public/assets/services/hero.jpeg';
import styles from '@/styles/stylish.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      role='region'
      aria-labelledby='hero-heading'
      className={clsx('h-[240px] flex relative justify-center md:items-center transition duration-500 w-full')}
    >
      <Image
        src={hero}
        alt="Illustration of RYDEPRO's service area expansion"
        role='img'
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        className='w-full h-full absolute top-0'
        priority
        placeholder='blur'
      />
      {/* Overlay */}
      <div className='absolute h-full w-full top-0 bg-black bg-opacity-50' aria-hidden='true'></div>
      <div className='w-full bg-black bg-opacity-60 h-full grid place-items-center px-[6%]'>
        <div className='flex items-center container gap-6 relative max-h-[188px] min-h-[104px] h-[104px] max-430:h-[148px] max-360:h-[198px]'>
          <div className='h-full border-l-[7px] rounded-tl-[7px] rounded-bl-[7px] rounded-tr-[1px] rounded-br-[1px] border-gray-100'></div>
          <div className={`relative tracking-wider flex w-full ${styles['slide-in']}`}>
            <h1
              id='hero-heading'
              aria-describedby='hero-description'
              className='font-medium flex flex-col items-start gap-4 text-[#FCFCFC] max-md:text-[20px] max-md:leading-8 text-[32px] max-md: leading-10'
            >
              <span className='font-bold'>
                RYDEPRO: <span className='font-medium'>Expanding Our Horizons</span>
              </span>
              <span
                id='hero-description'
                className='min-w-[200px] font-normal max-w-[978px] max-md:text-sm max-430:text-xs text-base text-[#F5F5F5] tracking-wide'
              >
                We are excited to announce that RYDEPRO, your premier choice for premium to luxury passenger
                transportation, is expanding its services to new and exciting destinations.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
