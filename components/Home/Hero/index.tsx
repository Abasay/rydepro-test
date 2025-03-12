'use client';
import React from 'react';
import starimg from '@/public/assets/start.png';
import Image from 'next/image';
import Time from './Time/time';
import AppStore from '@/public/assets/AppStore.png';
import GooglePlay from '@/public/assets/GooglePlay.png';
import styles from '@/styles/stylish.module.css';
import PageButton from '@/components/Common/PageButton';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='h-auto relative w-full flex flex-col items-center bg-black'>
      <video
        className='w-full h-[900px] max-md:h-[800px] max-[550px]:h-[850px] max-[505px]:h-[920px] max-[410px]:h-[1000px] max-[345px]:h-[1100px] max-[310px]:h-[1200px] max-[282px]:h-[1300px] max-[262px]:h-[1400px]:'
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
        aria-label='Background video of traffic'
      >
        <source src='/Traffic.webm' type='video/webm' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute w-full flex flex-col gap-6 text-center py-10 lg:px-20 px-2'>
        <h1 className='text-xl md:text-3xl text-[#F7F7F7] font-bold'>
          RYDEPRO®: New California Transportation Network Carrier
        </h1>
        <h2 className='text-base md:text-xl text-[#F7F7F7] tracking-wider leading-5 font-medium'>
          California’s Top-Rated Rideshare Alternative
        </h2>
        <p className='text-base md:text-xl text-[#FAF6F6] tracking-wide leading-5 font-medium'>
          US Army Veteran-Owned - FBI-background-checked Chauffeurs{' '}
        </p>

        <h2 className='text-base md:text-xl text-[#FAF6F6] tracking-wide leading-5 font-medium'>
          California’s Los Angeles Airport (Lax) #1 Airport & City Rides Services
        </h2>
        <p className='text-sm  md:text-base text-[#FAF6F6] tracking-wide leading-5 font-medium'>
          Pre-Book Fixed-Price Rides to / from
        </p>
        <p className='text-base md:text-xl text-[#FAF6F6] tracking-wide leading-5 font-medium'>
          LAX | SFO | SAN | BUR | SNA | LGB | SMF & More (+ 20+ CA Airports)
        </p>

        <p className='text-base md:text-xl text-[#FAF6F6] tracking-wide leading-5 font-normal'>
          ✓ City Rides Reliability ✓ Live Flight Tracking ✓ No Hidden Fees{' '}
        </p>

        <div className='flex flex-col gap-2 text-center justify-center items-center md:mt-6'>
          <p className='flex items-center gap-1'>
            <span className='text-[#FAF6F6]  text-base md:text-lg font-medium'>
              Join 5,000+ California Early Riders & Unlock Exclusive Discounts!
            </span>
          </p>

          <p className='flex items-center gap-2'>
            <Image src={starimg} width={20} height={20} alt='Star icon' aria-hidden='true' />
            <span className='text-[#FAF6F6]  text-base md:text-lg font-medium'>Early Access Special Offer </span>
          </p>
          <div className='flex  items-center max-[480px]:flex-col justify-between mt-2 md:gap-2 lg:gap-6 gap-4'>
            <p
              className={`lg:max-w-[460px] max-w-[450px] md:max-w-[385px] lg:text-base text-sm text-white py-2 px-2 ${styles['border-animate']}`}
            >
              Get Cashback % on every ride
            </p>
            <p
              className={`lg:max-w-[500px] max-w-[450px] md:max-w-[450px] lg:text-base text-sm text-[#F7F7F7] tracking-wider max-lg:tracking-wide py-2 px-2 ${styles['border-animate']}`}
            >
              Refer Friends & Earn Up to 30% Off{' '}
            </p>
          </div>
          <div className='flex flex-col gap-4 mt-6'>
            <div className='flex flex-col gap-4'>
              <p className='  text-sm lg:text-base text-[#DADADA] font-normal'>
                <span>Limited time offer. Hurry, this offer ends soon!</span>
              </p>
              <Link
                href={'/promotions'}
                className='text-[#DADADA] underline underline-offset-4 md:text-lg tracking-wider text-sm'
                aria-label='Read promotional terms'
              >
                Promotional Terms & Services
              </Link>
            </div>
            <Time />
          </div>
        </div>
        <p className='sm:text-sm md:text-base lg:text-xl flex flex-col items-center text-[#DADADA] font-normal'>
          <span className=''>24/7 Rides & Live Support:</span>
          <span>Need a ride? We’re here day or night—chat, call, or app message</span>
        </p>
      </div>
    </section>
  );
};

const HeroComponent = React.memo(Hero);

export default HeroComponent;
