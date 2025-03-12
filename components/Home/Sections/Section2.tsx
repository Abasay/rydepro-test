'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { reasons } from './servicesData';
import Image from 'next/image';
import secondPhone from '@/public/assets/sections/Why Choose Us - Desktop.png';
import bg from '@/public/assets/sections/services.jpeg';

const Section2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any = imageRef.current?.getBoundingClientRect()?.top;
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
    <section
      className={clsx(
        'w-full min-h-[700px]  bg-black max-md:min-h-[1200px] max-[432px]:min-h-[1250px] max-[370px]:min-h-[1300px] max-[320px]:min-h-[1350px] max-[283px]:min-h-[1500px] flex items-end relative'
      )}
      aria-label='why RYDEPRO'
      aria-labelledby='why-RYDEPRO'
    >
      {/* <div
        ref={ref}
        className={clsx(
          'flex min-h-[500px] relative w-full filter brightness-75'
        )}></div> */}
      <Image
        src={bg}
        alt='Why Choose Rydepro?'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        className=' absolute top-0'
      />
      <div className='w-full h-full z-10 absolute bottom-0 bg-black bg-opacity-50'></div>

      <div
        className={`w-full absolute top-12 z-20 flex flex-col max-md:px-6 max-sm:px-4 justify-center items-center gap-10 py-6 md:px-4 lg:px-20`}
      >
        <div className='flex flex-col items-center gap-2 md:hidden'>
          <h2 className=' md:text-base text-[#D0D0D0]' id='why-RYDEPRO'>
            Why Choose Us
          </h2>
          <h3 className=' text-lg md:text-xl lg:text-2xl text-[#F7F7F7] text-center'>
            Join Thousands of Riders Who Trust RYDEPRO
          </h3>
          <p className=' text-sm md:text-base text-[#D0D0D0] font-normal'>
            Driven by Cutting-Edge Technology and Sustainable Innovation: Redefining Your Commute
          </p>
        </div>
        <div className='container flex md:flex-row flex-col-reverse items-center row-gap-5 justify-between'>
          <div className='flex flex-col gap-5 max-md:max-w-[90%] max-lg:max-w-[60%] lg:max-w-[70%]'>
            <h2 className='text-md leading-6  text-[#F7F7F7] hidden md:flex' id='why-RYDEPRO'>
              Why Choose Us
            </h2>
            <h3 className='text-3xl max-md:text-2xl font-medium  text-[#F7F7F7] mt-4 hidden md:flex'>
              Join Thousands of Riders Who Trust RYDEPRO
            </h3>
            <p className='text-[#D0D0D0] text-sm md:text-base text-center  font-normal hidden md:flex'>
              Driven by Cutting-Edge Technology and Sustainable Innovation: Redefining Your Commute
            </p>
            <div className='grid grid-cols-2 md:pl-10 md:grid-rows-3 gap-8 md:gap-6  mt-4'>
              {reasons.map((item: any, index: number) => {
                const { title, descripton } = item;
                return (
                  <div key={index} className='flex flex-col gap-2'>
                    <h4 className='text-[#FCFCFC] font-medium  text-lg'>{title}</h4>
                    <p className='text-[#D0D0D0]  text-sm'>{descripton}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='overflow-x-hidden'>
            <Image
              ref={imageRef}
              src={secondPhone}
              alt='Why Choose RYDEPRO as your ride?'
              // objectFit='fill'
              priority
              //   placeholder='blur'
              width={400}
              height={600}
              className={clsx(
                'transition-all duration-700 ease-in-out transform max-w-[301px] h-[534px]',
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = React.memo(Section2);

export default Section;
