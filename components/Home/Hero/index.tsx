'use client';
import React from 'react';
import starimg from '@/public/assets/start.png';
import Image from 'next/image';
import Time from './Time/time';
import AppStore from '@/public/assets/AppStore.png';
import GooglePlay from '@/public/assets/GooglePlay.png';
// import Cookies from 'js-cookie';
import styles from '@/styles/stylish.module.css';
import PageButton from '@/components/Common/PageButton';
import videoBg from '@/public/assets/sections/video-bg.png';
import Link from 'next/link';

const Hero = () => {
  // const { auth, setAuth } = usePageContext();

  return (
    <>
      <section className='h-auto relative w-full flex flex-col items-center bg-black '>
        {/* <Image
          src={videoBg}
          alt='Rydepro Hero'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
          className=' absolute top-0'
        /> */}
        <video
          className='w-full  h-[800px] max-[850px]:h-[850px] max-[415px]:h-[900px] max-[375px]:h-[930px] max-[346px]:h-[1100px] max-[290px]:h-[1180px] max-[272px]:h-[1250px] max-[240px]:h-[1350px]'
          autoPlay
          disablePictureInPicture
          muted
          loop
          playsInline
          preload='auto'
          style={{
            filter: 'brightness(0.5)',
            objectFit: 'cover',
          }}
        >
          <source src='/Traffic.webm' />
        </video>
        <section className='absolute w-full flex flex-col gap-4 text-center py-10 lg:px-20 px-2'>
          <h1 className='text-xl md:text-2xl text-[#D0D0D0] font-medium'>
            RYDEPRO
          </h1>
          <h1 className='text-3xl md:text-3xl text-white md:w-[80%] md:ml-[10%] text-center  '>
            Your Ultimate On Demand Passenger Transport Solution
          </h1>
          <p className='text-base md:text-xl text-[#FAF6F6] tracking-widest leading-5 font-[400]'>
            Driven by Cutting-Edge Technology and Sustainable Innovation:
            Redefining <br /> Your Commute
          </p>
          <section className='flex flex-col gap-2 text-center justify-center items-center md:mt-6'>
            <span className='flex items-center gap-1 '>
              <Image src={starimg} width={20} height={20} alt='' />
              <p className='text-[#FAF6F6] text-base md:text-xl'>
                Early Access Special Offer
              </p>
            </span>
            <div className='flex md:flex-row flex-col justify-between mt-2 md:gap-2 lg:gap-6 gap-4'>
              <p
                className={`lg:max-w-[460px] max-w-[450px]  md:max-w-[385px] lg:text-sm text-[11px] text-white py-2  px-2 ${styles['border-animate']}`}
              >
                Sign-Up for Early Access & Get 15% off your first 5 rides
              </p>
              <p
                className={`lg:max-w-[500px]  max-w-[450px] md:max-w-[450px] lg:text-sm text-[11px] text-[#F7F7F7] tracking-wider max-lg:tracking-wide py-2  px-2 ${styles['border-animate']}`}
              >
                For each friend you refer, you’ll get an extra 10% off your next
                3 rides
              </p>
              {/* <p
                className={`lg:max-w-[460px] min-[395px]:hidden max-w-[450px] md:max-w-[390px] lg:text-[14px] text-[13px] text-[#F7F7F7] tracking-wider max-lg:tracking-wide py-2  px-2 ${styles['border-animate']}`}
              >
                For each friend you refer, you’ll get an extra 10% off your next
                3 rides
              </p> */}
            </div>
            <div className='flex flex-col gap-4 mt-6'>
              <div className=' flex flex-col gap-4'>
                <p className='text-[#DADADA] md:text-lg tracking-wider text-sm'>
                  Limited time offer. Hurry, this offer ends soon!
                </p>
                <Link
                  href={'/promotions'}
                  className='text-[#DADADA] underline underline-offset-4 md:text-lg tracking-wider text-sm'
                >
                  Promotional Terms & Services
                </Link>
              </div>

              <Time />
            </div>
          </section>
          <section className='flex justify-center items-center gap-4 flex-col mt-6'>
            <span className='text-sm md:text-xl text-[#DADADA]'>
              Sign Up via Web:
            </span>
            <PageButton
              // style={}
              text='Sign Up Now for Early Access'
              className={`bg-[#F5F5F5] text-black py-2 px-6 shadow-md w-fit rounded-md`}
              onCLick={() => {}}
            />
            <span className='text-sm md:text-xl tracking-wider text-[#DADADA]'>
              Sign Up via App:
            </span>
            <span className='md:hidden tracking-wider flex text-sm text-[#DADADA]'>
              Sign Up via App: Download the RYDEPRO App from the App Store or
              Google Play
            </span>
            <div className='flex flex-row flex-wrap justify-center items-center gap-4 '>
              <Image
                src={AppStore}
                width={120}
                height={35}
                alt=''
                className=''
              />
              <Image
                src={GooglePlay}
                width={120}
                height={35}
                alt=''
                className=''
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

const HeroComponent = React.memo(Hero);

export default HeroComponent;
