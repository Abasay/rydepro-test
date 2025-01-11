/** @format */
'use client';
import React, { useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';
import { options } from '@/components/General/Auth/SignIn/data/index';
// import { FooterData } from '@/components/General/data';
import { FooterData } from '../../data';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import { useSignUpContext } from '@/contexts/signupContext';
import SubOption from '@/components/General/SubOption/index';
import styles from '@/styles/stylish.module.css';

const SignIn = () => {
  const { signIn, setSignIn, setIsHomePageActive } = useGeneralLogInContext();
  const { signUp, setSignUp } = useSignUpContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (text: string) => {
    switch (text) {
      case 'email':
        setSignIn({
          ...signIn,
          isSignInPageActive: false,
          isLoginUsingEmailPageActive: true,
          isLoginUsingPassphrasePageActive: false,
          isLoginUsingPinPageActive: false,
        });
        break;
      case 'pin':
        setSignIn({
          ...signIn,
          isSignInPageActive: false,
          isLoginUsingPinPageActive: true,
          isLoginUsingEmailPageActive: false,
          isLoginUsingPassphrasePageActive: false,
        });
        break;
      case 'passphrase':
        setSignIn({
          ...signIn,
          isSignInPageActive: false,
          isLoginUsingPassphrasePageActive: true,
          isLoginUsingEmailPageActive: false,
          isLoginUsingPinPageActive: false,
        });
        break;
      default:
        break;
    }
  };
  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['fade-in']}`}>
        <div className='inline md:hidden'></div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]  md:inline ' width={75} height={77} />
        <Button className='md:inline hidden' onClick={() => {}} value='Sign In' />
        <Image
          src={ellipses}
          width={20}
          height={5}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          alt=''
          className='md:hidden cursor-pointer'
        />
      </header>
      <main className={`w-full flex justify-center items-center ${styles['slide-from-bottom']}`}>
        <form
          action=''
          className={`md:w-[614px] w-full min-h-[720px] rounded-[24px] py-[48px] md:p-[48px] flex flex-col justify-between md:bg-[#FFFFFF] md:shadow-sm `}
        >
          <div className='md:w-[518px] min-h-[540px] flex flex-col gap-[40px]'>
            <div className='md:flex md:flex-col min-h-[60px] hidden'>
              <h2 className='font-medium text-[24px] leading-[32px] text-[#0E0E0E]'>Hello. Time to Book Your Ride!</h2>
              <span className='font-normal text-base leading-[24px] text-[#3C3C3C]'>Sign in to continue.</span>
            </div>
            <h2 className='md:hidden inline font-bold text-[20px] leading-[32px] text-[#0E0E0E] text-center'>
              Sign In Options
            </h2>
            <div className='md:w-[518px] w-full min-h-[440px] flex flex-col gap-[20px]'>
              {options.map((opt, idx) => {
                const { text, image, as } = opt;
                return (
                  <div
                    key={idx}
                    title={text}
                    id={text}
                    onClick={() => {
                      handleClick(as);
                    }}
                    className='h-[72px] cursor-pointer w-full rounded-[16px] border-[1px] py-[10px] px-[24px] flex items-center gap-[10px] bg-[#F8F8F8]'
                  >
                    <Image src={image} alt='' width={24} height={24} className='w-[24px] h-[24px]' />
                    <span className='font-bold text-base leading-[24px] text-center text-[#0E0E0E]'>{text}</span>
                  </div>
                );
              })}
            </div>
            {/** Footer */}
            <div className='hidden md:flex w-[518px] h-[24px] gap-[12px] justify-center mt-6'>
              {FooterData.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  title={item.text}
                  className={`text-[18px] text-[#0E0E0E] ${
                    idx !== 0 && 'border-l-[1px]'
                  } border-[#D0D0D0] px-3 leading-[24px] font-medium text-center`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className='flex md:hidden w-full gap-[12px] mt-10 justify-center flex-wrap'>
              {FooterData.map((item, idx) => {
                const { text, url } = item;
                return (
                  <Link
                    title={text}
                    // onClick={() => {
                    //   if (item.text === 'Sign Up')
                    //     window.location.href = '/onboarding/signup';
                    // }}
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
          </div>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default SignIn;
