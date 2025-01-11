/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';
import { options } from '@/components/General/Auth/SignIn/data/index';
import { FooterData } from '@/components/General/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import googleIcon from '@/components/General/Auth/SignUp/svgs/google.svg';
import appleIcon from '@/components/General/Auth/SignUp/svgs/apple.svg';
import googleRoundIcon from '@/components/General/Auth/SignUp/svgs/googleRounded.svg';
import lockIcon from '@/components/General/Auth/SignIn/PinLogin/svgs/lock.svg';
import backArrow from '@/components/General/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import SubOption from '@/components/General/SubOption/index';
import styles from '@/styles/stylish.module.css';

const PassphraseLogin = () => {
  const { signIn, setSignIn } = useGeneralLogInContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [keyBoardOpened, setKeyBoardOpened] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const validationSchema = Yup.object({
    passphrase: Yup.string().required('Please, input your passphrase'),
  });

  const formik = useFormik({
    initialValues: {
      passphrase: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      window.location.href = '/dashboard';
    },
  });

  useEffect(() => {
    const isKeyboardOpen = () => {
      const isOpened = window.innerHeight < 500; // Adjust threshold as needed
      if (isOpened) {
        setKeyBoardOpened(true);
      } else {
        setKeyBoardOpened(false);
      }
    };
    window.addEventListener('resize', isKeyboardOpen);

    return () => {
      window.removeEventListener('resize', isKeyboardOpen);
    };
  }, []);

  useEffect(() => {
    formik.values.passphrase !== '' ? setIsEmpty(false) : setIsEmpty(true);
  }, [formik.values.passphrase]);
  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['fade-in']}`}>
        <div
          onClick={() => {
            setSignIn({
              ...signIn,
              isSignInPageActive: true,
              isLoginUsingEmailPageActive: false,
              isLoginUsingPinPageActive: false,
              isLoginUsingPassphrasePageActive: false,
            });
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md md:hidden left-4 top-10'
        >
          <Image src={backArrow} width={20} height={20} className='w-[20px] h-[20px]' alt='' />
        </div>
        <div className='md:hidden inline'></div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]  md:inline ' width={75} height={52} />
        <Button
          className='md:flex hidden'
          img={backArrow}
          onClick={() => {
            setSignIn({
              ...signIn,
              isSignInPageActive: true,
              isLoginUsingEmailPageActive: false,
              isLoginUsingPinPageActive: false,
              isLoginUsingPassphrasePageActive: false,
            });
          }}
          value='Back'
        />
        <Image
          src={ellipses}
          width={20}
          height={5}
          alt=''
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className='md:hidden'
        />
      </header>
      <main className={`w-full flex justify-center items-center ${styles['steps-in']}`}>
        <form
          action=''
          method='post'
          onClick={formik.handleSubmit}
          className='md:w-[614px] min-h-[560px] rounded-[24px] md:p-[48px] gap-[64px] md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='min-h-[300px] flex flex-col gap-[20px] md:gap-[64px]'>
            <h2 className='text-[20px] md:text-[24px] leading-[32px] font-medium text-[#3C3C3C]'>
              Enter your Passphrase to sign in
            </h2>
            <label htmlFor='passphrase' className='min-h-[84px] flex flex-col gap-[8px]'>
              <span className='text-[14px] hidden md:inline leading-[20px] font-medium text-[#0E0E0E]'>Passphrase</span>
              <input
                type='text'
                placeholder='Enter Passphrase'
                required
                id='passphrase'
                name='passphrase'
                value={formik.values.passphrase}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='h-[56px] bg-transparent rounded-[8px] border-y-[1px] p-[16px] border-[#DADADA] text-[#0E0E0E] text-base leading-[24px] font-normal outline-none'
              />
              {formik.errors.passphrase || formik.touched.passphrase ? (
                <div className='text-red-600 text-sm'>{formik.errors.passphrase}</div>
              ) : null}
            </label>
            {/** Button */}
            <button
              onClick={formik.submitForm}
              type='submit'
              disabled={isEmpty}
              className={`h-[48px] ${
                keyBoardOpened ? 'invisible' : 'visible'
              } md:h-[56px] w-[138px] md:w-full rounded-[8px] p-[8px] gap-[16px] ${
                isEmpty
                  ? 'bg-[#8A8A8A] text-[#DADADA] cursor-not-allowed'
                  : 'bg-[#0E0E0E] text-[#FAF6F6] cursor-pointer'
              }  text-base leading-[24px] font-medium absolute md:relative bottom-10 md:bottom-0 right-5 md:right-0`}
            >
              Sign In
            </button>
          </div>

          {/** Footer */}
          <div className='hidden md:flex w-[518px] h-[24px] gap-[12px] justify-center mt-20'>
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
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default PassphraseLogin;
