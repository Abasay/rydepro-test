'use client';
import React from 'react';
import clsx from 'clsx';
import hero from '@/public/assets/services/hero.jpeg';
import styles from '@/styles/stylish.module.css';
import Image from 'next/image';

const Hero = () => {
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
          'w-full  bg-black bg-opacity-60  h-full grid place-items-center px-[5%] '
        }
      >
        <div className='flex items-center w-full gap-2 container relative max-h-[188px] min-h-[104px] h-[104px] max-[430px]:h-[148px] max-[360px]:h-[198px]'>
          <div className=' h-full border-l-[7px] rounded-tl-[7px] rounded-bl-[7px] rounded-tr-[1px] rounded-br-[1px] border-gray-100'></div>
          <div
            className={`relative tracking-wider pl-5 flex w-full ${styles['slide-in']}`}
          >
            <h2 className='font-medium flex flex-col items-start gap-2 text-[#FCFCFC] max-md:text-[20px] max-md:leading-8 text-[32px] leading-10 '>
              <span>
                RYDEPRO:{' '}
                <span className=' font-[400]'>Expanding Our Horizons</span>
              </span>
              <span className='min-w-[200px] max-md:text-sm font-[400] max-w-[978px] text-[16px] leading-6 text-[#F5F5F5] tracking-wider'>
                We are excited to announce that RYDEPRO, your premier choice for
                premium to luxury passenger transportation, is expanding its
                services to new and exciting destinations.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
