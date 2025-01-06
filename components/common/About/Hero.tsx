'use client';
import React from 'react';
import clsx from 'clsx';
import hero from '@/public/assets/about/hero.webp';
import styles from '@/styles/stylish.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className={clsx('h-[370px] flex relative justify-center md:items-center transition duration-500 w-full')}
      aria-labelledby='hero-heading' // Associate the section with its heading
    >
      {/* Hero Image */}
      <Image
        src={hero}
        alt='A group of people collaborating in a modern office environment' // Descriptive alt text
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        className='w-full h-full absolute top-0 -rotate-270 transform scale-y-[-1]'
        style={
          {
            // mixBlendMode: 'multiply',
          }
        }
        priority
        placeholder='blur'
        aria-hidden='true' // Hide the image from screen readers (since it's decorative)
      />

      {/* Overlay */}
      <div
        className='absolute h-full w-full top-0 bg-black bg-opacity-50'
        aria-hidden='true' // Hide the overlay from screen readers
      ></div>

      {/* Content */}
      <div className='w-full  bg-black bg-opacity-60 h-full grid place-items-center px-[6%]'>
        <div className='flex  items-center w-full gap-2 container relative max-h-[188px] min-h-[125px] h-[104px] max-430:h-[148px] max-360:h-[168px]'>
          {/* Decorative Border */}
          <div
            className='h-full border-l-[7px] rounded-tl-[7px] rounded-bl-[7px] rounded-tr-[1px] rounded-br-[1px] border-gray-100'
            aria-hidden='true' // Hide the decorative border from screen readers
          ></div>

          {/* Text Content */}
          <div className={`relative tracking-wider max-md:mt-4 pl-5 flex flex-col gap-5 w-full ${styles['slide-in']}`}>
            <h1
              id='hero-heading'
              className='font-bold text-[#F7F7F7] text-xl md:text-3xl lg:text-4xl xl:text-[32px] leading-6 md:leading-8 xl:leading-10 min-h-[64px] max-w-[834px]'
            >
              Who We Are – Evolving a New Era of On-Demand Transportation
            </h1>
            <p className='text-[#F5F5F5] text-sm md:text-base lg:text-lg xl:text-2xl font-normal leading-5 md:leading-6 lg:leading-7 xl:leading-8 min-h-[32px] w-auto max-w-[1024px]'>
              At RYDEPRO Inc., we&apos;re changing the way you think about on-demand transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
