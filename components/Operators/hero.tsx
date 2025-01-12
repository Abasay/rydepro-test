/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import bg from '@/public/assets/operators/heroImg.jpeg';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section
      role='region'
      aria-labelledby='hero-heading'
      className='w-full min-h-[632px] max-h-[930px]  max-505:min-h-[610px] transition-all delay-0 duration-300 ease-in-out  md:min-h-[700px] min-800:min-h-[632px]  max-sm:  relative'
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt='A background image depicting professional drivers'
        role='img'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        placeholder='blur'
        priority
        className='absolute top-0'
      />
      <div
        className='z-10 w-full h-full absolute top-0 bg-black bg-opacity-60'
        role='presentation'
        aria-hidden='true'
      ></div>

      {/* Hero Content */}
      <div className='absolute z-20 w-full bg-black bg-opacity-35 h-full top-0 flex lg:justify-center items-center px-14 py-20 max-md:px-5 lg:px-24'>
        <div className='container mx-auto  h-full flex flex-col max-430:gap-5 gap-8'>
          {/* Section Heading */}
          <h1 id='hero-heading' className='text-[#D0D0D0] text-xl max-430:text-lg font-medium md:text-2xl '>
            RYDEPRO
          </h1>

          {/* Hero Text */}
          <div className='flex flex-col min-w-[200px] min-h-[472px] max-h-[640px] max-w-[930px] max-md:max-w-[677px] gap-5'>
            <h2
              className='text-[32px] max-505:text-2xl font-semibold leading-10 md:text-5xl   text-[#F7F7F7]'
              aria-describedby='hero-description'
            >
              Join Our Elite Teams of Independent Driver Operators
            </h2>
            <p
              className='text-base max-430:text-sm text-[#D0D0D0] md:text-xl leading-[24px] font-medium w-full '
              id='hero-description'
            >
              Welcome to a new era of passenger transportation, where independence and excellence meet. At RYDEPRO,
              we&apos;re not just another rideshare service, we&apos;re a Transportation Network Provider dedicated to
              redefining the way people travel.
            </p>
            <br className='max-505:hidden' />
            <p className='text-base max-430:text-sm text-[#D0D0D0] md:text-xl md:leading-[32px] leading-[24px] font-medium w-full '>
              If you&apos;re a skilled, professional, and independent driver or chauffeur, we invite you to become a
              valued member of our elite team.
            </p>

            {/* Sign Up Button */}
            <div className='w-full flex justify-center items-center md:items-start md:justify-start'>
              <Button
                value='Sign Up Now'
                className='text-center text-[16px] leading-[24px] font-medium text-[#0E0E0E] h-[56px] w-[294px] py-[8px] px-[24px] lg:px-8 bg-white rounded-[8px] lg:w-[300px] mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                aria-label='Sign up now to join our team of independent driver operators'
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
