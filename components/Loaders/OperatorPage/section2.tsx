/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import img from '@/public/assets/OperatorWebPage/section2Image.jpeg';

const Section2 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const image = new window.Image();
    image.src = img.src;
    image.onload = () => setIsLoaded(true); // Once image is loaded, update state
  }, []); // Run when the image source changes

  //Image section styles
  const section2Image = {
    backgroundImage: isLoaded ? `url(${img.src})` : 'none', // Only apply background image when it's loaded
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    filter: 'brightness(15%)',
  };
  return (
    <section className='min-h-[500px] mx-auto px-3 md:w-full flex justify-center lg:py-10 md:px-8 lg:px-20 mt-10 md:mt-6 lg:mt-0'>
      <div
        style={section2Image}
        className='container flex flex-col justify-center items-center h-[400px] mt-8 md:mt-0 rounded-3xl bg-black'
      ></div>
      <div className='absolute container mt-20 flex flex-col items-start md:items-center justify-center gap-[8px]'>
        <p className='text-[#D0D0D0] text-center text-[16px] leading-[24px] pl-6 md:pl-0 pr-4 md:pr-0'>
          Why Choose Us
        </p>
        <p className='text-[24px] md:text-[36px] text-[#F7F7F7] pl-6 md:pl-0 pr-4 md:pr-0'>
          Who We&apos;re Looking For
        </p>
        <div className='w-full md:w-[650px] lg:w-[900px] h-[120px] md:p-2 mt-6 flex md:flex-row flex-col justify-between gap-1'>
          <div className='lg:w-[490px] md:w-[310px] w-full h-[100px] flex flex-col gap-2 pl-6 md:pl-0 pr-4 md:pr-0'>
            <h2 className='leading-[24px] font-[500px] text-lg md:text-[24px] text-[#FCFCFC]'>
              Independent Driver Operators
            </h2>
            <p className='text-[#D0D0D0] text-[16px] leading-[24px] font-[400px]'>
              If you&apos;re self-employed and take pride in offering top-tier
              service, we want you.
            </p>
          </div>
          <div className='lg:w-[490px] md:w-[310px] w-full h-[100px] flex flex-col gap-2 text-sm mt-8 md:mt-0 pl-6 md:pl-0 pr-4 md:pr-0'>
            <h2 className='leading-[24px] font-[500px] text-lg md:text-[24px] text-[#FCFCFC]'>
              Charter Carrier Operators
            </h2>
            <p className='text-[#D0D0D0] text-[16px] leading-[24px] font-[400px]'>
              Join a network that values your expertise and offers opportunities
              to expand your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// const section2Image = {
//   background: `url(${img.src})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'top',
//   filter: 'brightness(15%)',
// };

export default Section2;
