'use client';
import React, { useEffect, useState } from 'react';
import img from '@/public/assets/OperatorWebPage/section5img.jpeg';
import Button from '@/components/Common/Button';
import Image from 'next/image';

const Section5 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Preload image
  //   const image = new window.Image();
  //   image.src = img.src;
  //   image.onload = () => setIsLoaded(true); // Once image is loaded, update state
  // }, []); // Run when the image source changes

  // //Image section styles
  // const section5Image = {
  //   backgroundImage: isLoaded ? `url(${img.src})` : 'none', // Only apply background image when it's loaded
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'top',
  // };
  return (
    <section className='min-h-[400px] w-full flex justify-center lg:py-10 px-4 md:px-8 lg:px-20 md:mt-20 lg:mt-0 mb-10'>
      <div className='lg:container flex flex-col md:flex-row justify-between items-center nd:min-h-[400px] mt-8 md:mt-0 md:gap-10 lg:gap-10'>
        <div className='md:w-1/2 w-[335px] max-md:w-full mx-auto flex flex-col gap-6 justify-center h-[400px]'>
          <div className='flex flex-col gap-1'>
            <span className='text-base leading-[24px] font-[400px]'>
              Sign Up
            </span>
            <h2 className='text-[40px] leading-[48px] font-medium'>
              Join Today!
            </h2>
          </div>
          <span>
            Ready to elevate your career? Click the link below to apply now and
            take the first step toward a more fulfilling and lucrative driving
            experience.
          </span>
          <Button
            value='Register as an Operator'
            className='bg-[#0E0E0E] py-[8px] px-[24px] rounded-[8px] lg:w-[300px] h-[56px] text-white mt-4 md:mt-0'
          />
        </div>
        <div
          // style={section5Image}
          className='h-[400px] max-md:w-full lg:max-w-[636px]  md:max-w-[350px] min-w-[335px] mx-auto mb-10 lg:mb-0'
        >
          <Image
            src={img}
            alt='Rydepro Operators'
            // layout='fill'
            width={400}
            height={500}
            objectFit='cover'
            objectPosition='center'
            placeholder='blur'
            priority
            className='w-full rounded-3xl border h-full '
          />
        </div>
      </div>
    </section>
  );
};

// const section5Image = {
//     background: `url(${img.src})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'top',
//     // filter: 'brightness(15%)'
// }

export default Section5;
