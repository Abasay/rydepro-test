'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
// import phone from '@/public/assets/sections/qualityPhone1.png';
import phone from '@/public/assets/sections/Our Services - Desktop.png';
import {
  services,
  services1Lg,
  services1Md,
  services2Lg,
  services2Md,
} from './servicesData';
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
      const sectionTop: number | undefined | any =
        ref.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const handleScroll2 = () => {
      const sectionTop: number | undefined | any =
        ref2.current?.getBoundingClientRect()?.top;
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
      <div
        className={`bg-black px-0 relative py-10 flex items-end flex-col min-h-[900px] max-[470px]:min-h-[2100px] max-md:min-h-[1500px]   max-[970px]:min-h-[1050px]  max-[1060px]:min-h-[1000px]`}
      >
        <Image
          src={bg}
          alt='Rydepro Services'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
          className=' absolute top-0'
        />

        {/* <div className={`bg-black min-h-[920px] bg-opacity-35 `}></div> */}
        <div className='w-full flex z-10 flex-col max-md:px-6 max-sm:px-4 justify-center gap-10'>
          <div className=' items-center justify-center mx-auto max-lg:w-[70%] max-md:w-[90%] max-sm:w-full text-[#F7F7F7] flex flex-col gap-2 lg:min-h-[80px]'>
            <p className=' text-md leading-6 text-center font-light'>
              Our Services
            </p>
            <h3 className=' text-center text-[40px] leading-[48px] text-xl lg:text-4xl max-md:leading-8 text-[#F7F7F7]'>
              Dynamic Scheduling & On-Demand Travels
            </h3>
          </div>

          {/* <div className=' flex flex-col gap-'></div> */}
        </div>
        <div className='w-full h-[50%] z-10 absolute bottom-0 bg-gradient-to-t to-black via-black/70 from-transparent'></div>
        {/* <div className='w-full h-20 z-10 absolute bottom-[0] bg-gradient-to-t from-black via-black/50 to-transparent'></div> */}
        <div className='w-full h-40 z-10 absolute bottom-[50%] bg-gradient-to-t from-black via-black/35 to-transparent'></div>

        <div className=' max-md:hidden w-full absolute top-40 z-20'>
          <div className='flex gap-12 justify-center max-[920px]:w-[90%] max-[800px]:w-[95%] max-md:w-[90%] w-[80%]  mx-auto py-16'>
            <div className=' flex flex-col gap-2 -mt-5'>
              <Image
                src={phone}
                alt='Rydepro Unique Services'
                width={400}
                height={500}
                priority
                className=' max-w-[301.1px] h-[470px]'
              />
              <div
                className='w-auto flex flex-col py-4 gap-4 max-w-[400px] border-t border-[#FFFFFF]'
                style={{
                  borderTop: '1px solid #FFFFFF',
                  borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                  borderImageSlice: 1,
                }}
              >
                <h1 className='text-2xl tracking-wider font-medium text-[#FCFCFC]'>
                  Multi-Stop
                </h1>
                <p className='text-[#D0D0D0] font-light'>
                  Over 1,000 vehicles available for any event.
                </p>
              </div>
            </div>
            <div className=' flex flex-col gap-8 mt-40'>
              {services1Lg.map((service, index) => {
                const { title, description } = service;
                return (
                  <div
                    key={index}
                    className='w-auto flex flex-col py-4 gap-4 max-w-[400px] border-t border-[#FFFFFF]'
                    style={{
                      borderTop: '1px solid #FFFFFF',
                      borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                      borderImageSlice: 1,
                    }}
                  >
                    <h1 className='text-2xl tracking-wider font-medium text-[#FCFCFC]'>
                      {title}
                    </h1>
                    <p className='text-[#D0D0D0] font-light'>{description}</p>
                  </div>
                );
              })}
            </div>
            <div className=' flex flex-col gap-8 '>
              {services2Lg.map((service, index) => {
                const { title, description } = service;
                return (
                  <div
                    key={index}
                    className='w-auto flex flex-col py-4 gap-4 max-w-[400px] border-t border-[#FFFFFF]'
                    style={{
                      borderTop: '1px solid #FFFFFF',
                      borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                      borderImageSlice: 1,
                    }}
                  >
                    <h1 className='text-2xl tracking-wider font-medium text-[#FCFCFC]'>
                      {title}
                    </h1>
                    <p className='text-[#D0D0D0] font-light'>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=' max-md:block md:hidden w-full absolute top-40 z-20'>
          <div className=' w-[90%] mx-auto mt-6'>
            <div className=' flex flex-col items-center justify-center gap-8'>
              <div className=' flex flex-wrap gap-6 justify-center items-center flex-shrink'>
                {services1Md.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-auto flex flex-col py-4 gap-4 max-w-[40%] max-[500px]:max-w-[200px] max-[470px]:max-w-[70%] min-h-[144px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                      }}
                    >
                      <h1 className='text-[18px] leading-6 tracking-wider font-medium text-[#FCFCFC]'>
                        {title}
                      </h1>
                      <p className='text-[#D0D0D0] text-md leading-6 font-light'>
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Image
                src={phone}
                alt='Rydepro Unique Services'
                width={500}
                height={500}
                priority
                className=' max-w-[356px] max-[400px]:hidden min-[400px]:block h-[440px]'
              />
              <Image
                src={phone}
                alt='Rydepro Unique Services'
                width={400}
                height={500}
                priority
                className=' max-w-[276px] max-[400px]:block min-[400px]:hidden h-[440px]'
              />
              <div className=' flex flex-wrap gap-6 justify-center items-center flex-shrink'>
                {services2Md.map((service, index) => {
                  const { title, description } = service;
                  return (
                    <div
                      key={index}
                      className='w-auto flex flex-col py-4 gap-4 max-w-[40%] max-[500px]:max-w-[200px] max-[470px]:max-w-[70%] min-h-[144px] border-t border-[#FFFFFF]'
                      style={{
                        borderTop: '1px solid #FFFFFF',
                        borderImageSource: `linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)`,
                        borderImageSlice: 1,
                      }}
                    >
                      <h1 className='text-[18px] leading-6 tracking-wider font-medium text-[#FCFCFC]'>
                        {title}
                      </h1>
                      <p className='text-[#D0D0D0] text-md leading-6 font-light'>
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
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
