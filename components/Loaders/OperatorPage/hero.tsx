/** @format */

'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/OperatorPage/style.module.css';
import Button from '@/components/Common/Button';
import Image from 'next/image';
import bg from '@/public/assets/OperatorWebPage/heroImg.jpeg';
// import Button from '@/components/AboutUs/button';
// import

const Hero = () => {
  // const [getTop, setGetTop] = useState<number>();

  return (
    <section
      className={`w-full min-h-[632px] max-h-[930px] max-[450px]:min-h-[710px] max-[350px]:h-[800px]  relative`}
    >
      {/* <div
        ref={heroRef}
        className={`relative bg-gray-400 ${styles.hero}`}
      ></div> */}
      <Image
        src={bg}
        alt='Rydepro Operators'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        placeholder='blur'
        priority
        className=' absolute top-0'
      />
      <div className=' z-10 w-full h-full absolute top-0 bg-black bg-opacity-70'></div>
      <div
        className={`absolute z-20  w-full flex lg:justify-center items-center px-14 py-20 max-md:px-5 lg:px-24`}
      >
        <div className='lg:container h-[inherit] flex flex-col gap-8'>
          <h1 className='text-[#D0D0D0] text-[20px] font-[500px] md:text-[24px] leading-[32px] lg:text-lg'>
            RYDEPRO
          </h1>
          <div className='flex flex-col min-w-[200px] min-h-[472px] max-h-[640px] max-w-[930px]  max-lg:max-w-[677px] gap-4'>
            <h2 className='text-[32px] font-[500px] leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[56px] text-white'>
              Join Our Elite Teams of Independent Driver Operators
            </h2>
            <p className='text-base text-[#D0D0D0] md:text-[18px] lg:text-xl leading-[24px] font-[400] w-full md:w-[600px] lg:w-[820px]'>
              Welcome to a new era of passenger transportation, where
              independence and excellence meet. At RYDEPRO, we&apos;re not just
              another rideshare service, we&apos;re a Transportation Network
              Provider dedicated to redefining the way people travel.
            </p>
            <p className='text-base text-[#D0D0D0] md:text-[18px] lg:text-[20px] lg:leading-[32px] leading-[24px] font-[400px] w-full mt-3'>
              If you&apos;re a skilled, professional, and independent driver or
              chauffeur, we invite you to become a valued member of our elite
              team
            </p>
            <div className='w-full flex justify-center items-center md:items-start md:justify-start'>
              <Button
                value='Sign Up Now'
                className='text-center text-[16px] leading-[24px] font-[500px] text-[#0E0E0E] h-[56px] w-[294px] py-[8px] px-[24px] lg:px-8 bg-white rounded-[8px] lg:w-[300px] mt-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = React.memo(Hero);
export default HeroSection;
