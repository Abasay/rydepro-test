'use client';
import React, { useEffect, useState } from 'react';
import img from '@/public/assets/OperatorWebPage/section3image.jpeg';
import Image from 'next/image';
import userIcon from './svgs/user.svg';
import trafficIcon from './svgs/road.svg';
import carIcon from './svgs/car.svg';

const Section3 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const image = new window.Image();
    image.src = img.src;
    image.onload = () => setIsLoaded(true); // Once image is loaded, update state
  }, []); // Run when the image source changes

  //Image section styles
  const section3Image = {
    backgroundImage: isLoaded ? `url(${img.src})` : 'none', // Only apply background image when it's loaded
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };
  return (
    <section className='min-h-[400px] mx-auto w-full flex justify-center lg:py-10 relative px-4 md:px-8 lg:px-20 md:mt-6 lg:mt-0'>
      <div className='lg:container flex max-md:flex-col-reverse flex-row justify-between min-h-[300px] mt-6 md:mt-0 gap-20 md:gap-10 lg:gap-14'>
        <div
          // style={section3Image}
          className='min-h-[400px] max-md:max-w-[700px] max-md:min-h-[450px] max-md:max-h-[600px] max-[490px]:min-h-[350px] max-[490px]:max-h-[400px]  max-sm:min-w-[400px] max-[450px]:min-w-[200px] max-[350px]:max-h-[300px] rounded-3xl lg:w-[600px] md:w-full max-md:w-full w-[335px] mx-auto mb-10 lg:mb-0'
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
            className='w-full rounded-3xl  h-full '
          />
        </div>
        <div className='w-[335px] max-md:w-full mx-auto md:w-full flex flex-col gap-2 md:justify-center md:mt-0'>
          <div className='flex flex-col gap-1 justify-center'>
            <span className='text-[#3C3C3C] text-base leading-[24px] font-[400px]'>
              Responsibility
            </span>
            <h2 className='text-[24px] leading-[32px] font-medium md:text-[40px] md:leading-[48px] text-zinc-800'>
              Driver Operator Responsibilities
            </h2>
          </div>
          <div className='flex flex-col gap-2 mt-4 md:mt-0 lg:mt-8'>
            <span className='text-[16px] leading-[24px] font-[400px]'>
              As a member, you will assume a vital role in delivering secure and
              dependable transportation to our esteemed clients. This requires:
            </span>
            <div className='pl-2 lg:pl-6 flex flex-col gap-3 mt-3'>
              <span className='flex items-center gap-[16px]'>
                <Image src={userIcon} alt='' width={20} height={20} />
                <span className='text-[16px] leading-[24px] font-[400px]'>
                  Exceptional customer service skills.
                </span>
              </span>
              <span className='flex items-center gap-[16px]'>
                <Image src={trafficIcon} alt='' width={20} height={20} />
                <span className='text-[16px] leading-[24px] font-[400px]'>
                  Extensive familiarity with local roads and traffic
                  regulations.
                </span>
              </span>
              <span className='flex items-center gap-[16px]'>
                <Image src={carIcon} alt='' width={20} height={20} />
                <span className='text-[16px] leading-[24px] font-[400px]'>
                  An unwavering commitment to maintaining an immaculate and
                  well-maintained vehicle.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const section3Image = {
//     background: `url(${img.src})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'top',
//     // filter: 'brightness(15%)'
// }

export default Section3;
