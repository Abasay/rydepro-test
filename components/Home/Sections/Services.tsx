'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
// import phone from '@/public/assets/sections/qualityPhone1.png';
import phone from '@/public/assets/sections/Our Services - Desktop.png';
import { services, services1Lg, services1Md, services2Lg, services2Md } from './servicesData';
import clsx from 'clsx';
import Wallpaper from '@/public/assets/sections/newBgImage.png';
import styles from './index.module.css';
import bg from '@/public/assets/sections/ReverseBG.png';

const Services = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any = ref.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const handleScroll2 = () => {
      const sectionTop: number | undefined | any = ref2.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);
  return (
    <>
      {' '}
      <section
        className={`bg-black px-0 relative py-10 flex flex-col min-h-[900px] max-md:min-h-[1300px]`}
        aria-label='Services'
        aria-labelledby='services'
      >
        {/* Background Image */}
        <Image
          src={bg}
          alt='Background image for Rydepro Services section'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
          className='absolute top-0'
          aria-hidden='true' // Decorative image, hidden from screen readers
        />

        {/* Content Section */}
        <div className='w-full container  mx-auto flex justify-center z-10 flex-col gap-10'>
          <div className='max-sm:w-full lg:w-[70%] w-full  mx-auto lg:justify-center text-[#F7F7F7] flex flex-col gap-2'>
            <h2 className='text-md leading-6 font-normal' id='services'>
              Services
            </h2>
            <h3 className='leading-[48px] text-lg sm:text-xl md:text-2xl lg:text-4xl max-md:leading-8 text-[#F7F7F7]'>
              Dynamic Scheduling & On-Demand Travels
            </h3>
          </div>
        </div>

        {/* <div className='w-full h-[50%] z-10 absolute bottom-0 bg-gradient-to-t to-black via-black/70 from-transparent'></div> */}
        {/* <div className='w-full h-20 z-10 absolute bottom-[0] bg-gradient-to-t from-black via-black/50 to-transparent'></div> */}
        {/* <div className='w-full h-40 z-10 absolute bottom-[50%] bg-gradient-to-t from-black via-black/35 to-transparent'></div> */}

        {/* Desktop Layout */}
        <div className='max-md:hidden w-full absolute top-40 z-20'>
          <div className='w-full mx-auto lg:container max-lg:px-6'>
            <div className='gap-12 w-full flex justify-center py-16'>
              <div className='flex flex-col gap-2 mt-5'>
                <Image
                  src={phone}
                  alt='Rydepro app interface showcasing unique services'
                  width={400}
                  height={500}
                  priority
                  className='min-w-[300px] w-full h-full max-w-[401.1px] max-h-[480px]'
                />
              </div>
              <div className='flex flex-col gap-8'>
                {services1Lg.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-auto flex flex-col py-4 gap-4 max-w-[300px] min-h-[136px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                        borderBottom: `${index === services1Lg.length - 1 ? '1px solid #FFFFFF' : 'none'}`,
                      }}
                    >
                      <h4 className='text-2xl tracking-wider font-medium text-[#FCFCFC]'>{title}</h4>
                      <p className='text-[#D0D0D0] font-normal'>{description}</p>
                    </div>
                  );
                })}
              </div>
              <div className='flex flex-col gap-8'>
                {services2Lg.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-auto flex flex-col py-4 gap-4 max-w-[300px] min-h-[136px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                        borderBottom: `${index === services2Lg.length - 1 ? '1px solid #FFFFFF' : 'none'}`,
                      }}
                    >
                      <h4 className='text-2xl tracking-wider font-medium text-[#FCFCFC]'>{title}</h4>
                      <p className='text-[#D0D0D0] font-light'>{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='max-md:block md:hidden w-full absolute top-40 z-20'>
          <div className='w-[98%] mx-auto mt-6'>
            <div className='flex flex-col items-center justify-center gap-8'>
              <div className='grid grid-cols-2 px-1 gap-6'>
                {services1Md.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-full flex flex-col py-4 gap-4 max-w-[300px] min-h-[144px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                        borderBottom: `${index === 2 || index === 3 ? '1px solid #FFFFFF' : 'none'}`,
                      }}
                    >
                      <h4 className='max-sm:text-base text-lg leading-6 tracking-wider font-medium text-[#FCFCFC]'>
                        {title}
                      </h4>
                      <p className='text-[#D0D0D0] max-sm:text-sm text-md leading-6 font-normal'>{description}</p>
                    </div>
                  );
                })}
              </div>
              <Image
                src={phone}
                alt='Rydepro app interface showcasing unique services'
                width={500}
                height={500}
                priority
                className='max-w-[356px] max-[400px]:max-w-[200px] min-[400px]:block h-[540px]'
              />
              {/* <Image
                src={phone}
                alt='Rydepro app interface showcasing unique services'
                width={400}
                height={500}
                priority
                className='max-w-[276px] max-[400px]:block min-[400px]:hidden h-[540px]'
              /> */}
              <div className='grid grid-cols-2 px-1 gap-6'>
                {services2Md.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-full flex flex-col py-4 gap-4 max-w-[300px] min-h-[144px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                        borderBottom: `${index === 2 || index === 3 ? '1px solid #FFFFFF' : 'none'}`,
                      }}
                    >
                      <h4 className='max-sm:text-base text-lg tracking-wider font-medium text-[#FCFCFC]'>{title}</h4>
                      <p className='text-[#D0D0D0] max-sm:text-sm text-md leading-6 font-normal'>{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={`${styles.wallpaper} h-[700px] cover`}></div> */}
    </>
  );
};

const bgImg = {
  background: Wallpaper.src,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export default Services;
