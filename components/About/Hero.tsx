'use client';
import React from 'react';
import clsx from 'clsx';
import hero from '@/public/assets/about/hero.webp';
import styles from '@/styles/stylish.module.css';
import Image from 'next/image';

const Hero = () => {
  // const { animate, setAnimate } = usePageContext();

  return (
    <section
      // style={heroStyling}
      className={clsx(
        'h-[240px] flex relative justify-center md:items-center transition duration-500 w-full'
      )}
    >
      <Image
        src={hero}
        alt='About Hero Image'
        width={300}
        height={400}
        className=' w-full h-full absolute top-0'
        priority
        placeholder='blur'
      />
      <div className=' absolute h-full w-full top-0 bg-black bg-opacity-50'></div>
      <div
        className={
          'w-full  bg-black bg-opacity-60  h-full grid place-items-center px-[6%] '
        }
      >
        <div className='flex items-center w-full gap-2 container relative max-h-[188px] min-h-[104px] h-[104px] max-[430px]:h-[148px] max-[360px]:h-[198px]'>
          <div className='h-full border-l-[7px] rounded-tl-[7px] rounded-bl-[7px] rounded-tr-[1px] rounded-br-[1px] border-gray-100'></div>
          <div
            className={`relative tracking-wider pl-5 flex flex-col gap-5 w-full ${styles['slide-in']}`}
          >
            <h2 className='font-bold text-[#F7F7F7] text-2xl md:text-3xl lg:text-4xl xl:text-[32px] leading-6 md:leading-8 xl:leading-10 min-h-[64px] max-w-[834px]'>
              Who We Are – Evolving a New Era of On-Demand Transportation
            </h2>
            <span className='text-[#F5F5F5] text-sm md:text-base lg:text-lg xl:text-2xl font-light leading-5 md:leading-6 lg:leading-7 xl:leading-8 min-h-[32px] w-auto max-w-[1024px]'>
              At RYDEPRO Inc., we&apos;re changing the way you think about
              on-demand transportation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
