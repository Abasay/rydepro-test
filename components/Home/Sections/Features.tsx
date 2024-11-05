'use client';
import { clsx } from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { features } from './featureData';
import Image from 'next/image';
import Phone from '@/public/assets/sections/Features - Desktop.png';
import bg from '@/public/assets/sections/ReverseBG.png';

const Features = () => {
  const [getHeading, setHeading] = useState<string>('Real-Time Tracking');
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timerID = setTimeout(() => {}, 3000);

    return () => clearTimeout(timerID);
  });
  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any =
        imageRef.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={clsx(
        'w-full relative px-2 bg-black  min-h-[750px] max-md:min-h-[1300px] max-[430px]:min-h-[1350px] max-[350px]:min-h-[1400px]    flex justify-center pt-40 '
      )}
    >
      <Image
        src={bg}
        alt='Rydepro Features'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        className=' absolute top-0'
      />
      <div className=' md:pb-20 absolute top-20 max-md:top-72 max-[515px]:top-80 max-[345px]:top-[350px]'>
        <div className='container flex flex-col items-center md:gap-4 gap-2'>
          <span className='text-lg md:text-sm text-gray-400'>Features</span>
          <h2 className='text-2xl md:text-3xl text-white'>
            Innovative Features
          </h2>
          <div className=' w-full mt-4 flex md:flex-row flex-col justify-between items-center lg:px-[160px] px-4 gap-4'>
            <div className='flex flex-col border-l-[3px] border-[#FFFFFF4D] pl-[30px]  gap-6'>
              {features.map((item, idx) => {
                const { heading, text } = item;
                return (
                  <div
                    onClick={() => {
                      setHeading(heading);
                    }}
                    title={heading}
                    key={idx}
                    className={`flex flex-col gap-2 transition-all w-full delay-0 duration-300 ease-in-out  ${
                      heading === getHeading &&
                      ' border-l-[3px] border-[#FFFFFF]'
                    } pl-[30px] py-2 -ml-[32px] cursor-pointer`}
                  >
                    <span className='text-white text-xl'>{heading}</span>
                    <span className='text-[#F7F7F7] text-sm'>{text}</span>
                  </div>
                );
              })}
            </div>
            <div className='overflow-x-hidden mt-6 md:mt-0'>
              <Image
                ref={imageRef}
                src={Phone}
                alt='Phone'
                // objectFit='fill'
                width={300}
                height={500}
                className={clsx(
                  'transition-all duration-700 ease-in-out transform md:max-w-[320px] max-md:max-w-[263.21px] h-[531px] max-md:h-[440px] ml-5 md:ml-0',
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
