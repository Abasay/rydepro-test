/** @format */

'use client';
import React, { useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Home/svgs/ellipses.svg';
import faceID from '@/components/General/Home/svgs/faceID.svg';
import fingerID from '@/components/General/Home/svgs/fingerID.svg';
import { homepageFooter } from '@/components/General/Home/data/data';
import Link from 'next/link';
import { useSignUpContext } from '@/contexts/signupContext';
import { FooterData } from '../data';
import { usePathname } from 'next/navigation';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import { useRouter } from 'next/navigation';
import SubOption from '@/components/General/SubOption/index';
import { useResetContext } from '@/contexts/resetContext';
import styles from '@/styles/stylish.module.css';

const Homepage = () => {
  const { signUp, setSignUp, setIsHomePageActive } = useSignUpContext();
  const { setIsHomePageActive: setLoginIsHomePageActive, signIn, setSignIn } = useGeneralLogInContext();
  const { reset, setReset, setIsHomePageActive: setResetHomePageActive } = useResetContext();
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const router = useRouter();

  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-center md:justify-between px-0 md:px-10 ${styles['fade-in']}`}
      >
        {/* <div className='inline md:hidden'></div> */}
        <Image
          src={RydeProLogo}
          alt=''
          className='w-[106.45px] h-[98px] md:w-[61.94px] md:h-[51.2px]'
          width={75}
          height={52}
        />
        <Link href={'/onboarding/signup'}>
          <Button
            className='md:inline hidden'
            // onClick={() => {
            //   // if (pathname.includes('/login')) {
            //   //   window.location.href = '/general/signup';
            //   //   return;
            //   // }
            //   // setIsHomePageActive(false);
            //   // setSignUp({ ...signUp, isSignUpButtonClicked: true });
            //   window.location.href = '';
            // }}
            value='Sign Up'
          />
        </Link>
        <Image
          src={ellipses}
          width={20}
          height={5}
          alt=''
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className='md:hidden absolute right-10 top-[56px]'
        />
      </header>
      <main className={`container h-screen flex flex-col justify-center items-center ${styles['slide-from-bottom']}`}>
        <section className='w-full md:w-[614px] h-[550px] mt-10 md:mt-0 rounded-[24px] py-[48px] md:p-[48px] flex flex-col gap-[80px] md:bg-[#FFFFFF] md:shadow-sm'>
          <div className='head w-full md:w-[518px] h-[60px] gap-[4px] hidden md:flex md:flex-col'>
            <h2 className='text-[24px] leading-[32px] font-medium text-[#0E0E0E]'>Hello. Ready to Ride? </h2>
            <span className='font-normal text-base leading-[24px] text-[#3C3C3C]'>Sign In Now!</span>
          </div>
          <div className='flex flex-col gap-[48px] justify-center h-[184px] items-center'>
            <div className='w-[240px] h-[112px] flex gap-[80px]'>
              <div title='Finger ID' className='flex flex-col w-[80px] h-[80px] gap-[8px] cursor-pointer'>
                <Image src={fingerID} width={80} height={80} alt='' />
                <h2 className='text-base leading-[24px] text-center font-bold text-[#0E0E0E]'>Finger ID</h2>
              </div>
              <div title='Face ID' className='flex flex-col gap-[8px] cursor-pointer'>
                <Image src={faceID} width={80} height={80} alt='' />
                <h2 className='text-base leading-[24px] text-center font-bold text-[#0E0E0E]'>Face ID</h2>
              </div>
            </div>
            <Link
              href={'/onboarding/login'}
              className='text-base cursor-pointer leading-[24px] text-center text-[#0E0E0E]'
            >
              Other Sign In Options
            </Link>
          </div>
          {/**footer */}
          <div className='hidden md:flex w-[518px] h-[24px] gap-[12px] justify-center'>
            {FooterData.map((item, idx) => {
              const { text, url } = item;
              return (
                <Link
                  title={text}
                  // onClick={() => {
                  //   handleNavigation(text);
                  // }}
                  className={`text-[18px] text-[#0E0E0E] ${
                    idx !== 0 && 'border-l-[1px]'
                  } border-[#D0D0D0] px-3 leading-[24px] font-medium text-center`}
                  href={url}
                  key={idx}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className='flex md:hidden w-full gap-[12px] justify-center flex-wrap'>
            {FooterData.map((item, idx) => {
              const { text, url } = item;
              return (
                <Link
                  title={text}
                  className={`text-[18px] text-[#0E0E0E] ${idx === 1 && 'hidden'} ${
                    idx !== 0 && 'border-l-[1px]'
                  } border-[#D0D0D0] px-3 leading-[24px] font-medium text-center`}
                  href={url}
                  key={idx}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          {/**sub footer */}
          <div className='flex flex-col justify-center items-center md:hidden gap-[4px]'>
            <div className='flex flex-col gap-[4px]'>
              <span className='text-[14px] leading-[16px] text-center font-normal text-[#0E0E0E]'>
                United States of America
              </span>
              <span className='text-[12px] leading-[16px] text-center font-normal text-[#0E0E0E]'>
                Veteran Owned Business
              </span>
            </div>
            <div className='text-center h-[24px]'>
              <span className='text-[12px] leading-[16px] text-center font-normal text-[#0E0E0E] flex items-center gap-[4px]'>
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 0.25C4.16797 0.25 0.25 4.16797 0.25 9C0.25 13.832 4.16797 17.75 9 17.75C13.832 17.75 17.75 13.832 17.75 9C17.75 4.16797 13.832 0.25 9 0.25ZM9 16.2656C4.98828 16.2656 1.73438 13.0117 1.73438 9C1.73438 4.98828 4.98828 1.73438 9 1.73438C13.0117 1.73438 16.2656 4.98828 16.2656 9C16.2656 13.0117 13.0117 16.2656 9 16.2656ZM10.709 9.72852C11.3887 9.47852 12.2402 8.77148 12.2402 7.40039C12.2402 6.00977 11.3516 4.83984 9.42383 4.83984H6.38281C6.29688 4.83984 6.22656 4.91016 6.22656 4.99609V13.0039C6.22656 13.0898 6.29688 13.1602 6.38281 13.1602H7.44727C7.5332 13.1602 7.60352 13.0898 7.60352 13.0039V9.96094H9.33594L10.793 13.0703C10.8184 13.125 10.873 13.1602 10.9336 13.1602H12.1445C12.1711 13.1604 12.1972 13.1538 12.2204 13.1409C12.2437 13.1281 12.2632 13.1095 12.2772 13.0869C12.2911 13.0643 12.299 13.0385 12.3 13.012C12.3011 12.9855 12.2953 12.9592 12.2832 12.9355L10.709 9.72852ZM9.19531 8.86328H7.60352V5.97266H9.23242C10.1699 5.97266 10.8125 6.4668 10.8125 7.44727C10.8125 8.36328 10.2305 8.86328 9.19531 8.86328Z'
                    fill='#0E0E0E'
                  />
                </svg>
                <span>2024 RYDEPRO, All Rights Reserved</span>
              </span>
            </div>
          </div>
        </section>
      </main>
      {<SubOption isClicked={isClicked} setIsClicked={setIsClicked} />}
    </GeneralDesign>
  );
};

export default Homepage;
