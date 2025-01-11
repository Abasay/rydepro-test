/** @format */

import React, { useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';
import { FooterData } from '@/components/General/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import googleIcon from '@/components/General/Auth/SignUp/svgs/google.svg';
import appleIcon from '@/components/General/Auth/SignUp/svgs/apple.svg';
import googleRoundIcon from '@/components/General/Auth/SignUp/svgs/googleRounded.svg';
import appleRoundIcon from '@/components/General/Auth/SignUp/svgs/appleRounded.svg';
import backArrow from '@/components/General/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import SubOption from '@/components/General/SubOption';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';

const EmailLogin = () => {
  const { signIn, setSignIn } = useGeneralLogInContext();
  const {} = useDashboardContext();
  const [password, setPassword] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password should be at least 8 characters')
      .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
      .matches(/[@$!%*?&#]/, 'Password should contain at least one special character'),
  });

  const formik = useFormik({
    initialValues: {
      email: signIn.email || '',
      password: password || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // try {
      //   const response = await postRequest({
      //     url: URLS.
      //   })
      // } catch (err) {}
      //go to dashboard
      window.location.href = '/dashboard';
    },
  });
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
            });
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md md:hidden left-4 top-10'
        >
          <Image src={backArrow} width={20} height={20} className='w-[20px] h-[20px]' alt='' />
        </div>
        <div className='md:hidden inline'></div>
        <Image
          src={RydeProLogo}
          alt=''
          className='w-[106.45px] h-[98px] md:w-[61.94px] md:h-[51.2px]'
          width={75}
          height={52}
        />
        <Button
          className='md:flex hidden'
          img={backArrow}
          onClick={() => {
            setSignIn({
              ...signIn,
              isSignInPageActive: true,
              isLoginUsingEmailPageActive: false,
              isLoginUsingPinPageActive: false,
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
      <main className={`w-full flex justify-center items-center ${styles['slide-from-left']}`}>
        <form
          onSubmit={formik.handleSubmit}
          action='POST'
          className='md:w-[614px] w-full min-h-[716px] rounded-[24px] py-[48px] md:p-[48px] flex flex-col gap-[24px] md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='flex flex-col min-h-[60px] gap-[8px]'>
            <h2 className='text-[24px] leading-[32px] font-medium text-[#0E0E0E]'>Hello. Ready to Ride?</h2>
            <span className='text-[#3C3C3C] text-base leading-[24px]'>Sign In Now!</span>
          </div>
          <div className='flex flex-col w-full min-h-[536px] gap-[20px] md:gap-[40px]'>
            <label htmlFor='email' className='flex flex-col gap-[8px]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Email Address</span>
              <input
                id='email'
                name='email'
                className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] border-[#DADADA] bg-transparent text-base leading-[24px] font-normal placeholder:text-[#8A8A8A] text-[#0E0E0E] outline-none'
                type='email'
                placeholder='johndoe@gmail.com'
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email || formik.touched.email ? (
                <div className='text-red-600 text-sm'>{formik.errors.email}</div>
              ) : null}
            </label>

            <label htmlFor='password' className='flex flex-col gap-[8px]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Pasword</span>
              <input
                id='password'
                name='password'
                className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] text-base leading-[24px] font-normal placeholder:text-[#8A8A8A] text-[#0E0E0E] outline-none'
                type='password'
                placeholder='**********'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password || formik.touched.password ? (
                <div className='text-red-600 text-sm'>{formik.errors.password}</div>
              ) : null}
            </label>

            {/** Button */}
            <button
              onClick={formik.submitForm}
              type='submit'
              className='h-[48px] md:h-[56px] rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]'
            >
              Sign In
            </button>

            <div className='w-[inherit] h-[24px] flex gap-[24px] items-center'>
              <hr className='w-[226px] border-[1px]' />
              <span className='text-base leading-[24px] font-normal text-[#AAAAAA]'>Or</span>
              <hr className='w-[226px] border-[1px]' />
            </div>

            <div className='hidden md:flex flex-col h-[128px] gap-[16px]'>
              <button
                type='button'
                className='flex justify-center items-center h-[56px] rounded-[8px] border-[0.5px] p-[8px] gap-[12px] bg-[#F5F5F5] border-[#D0D0D0] text-base leading-[24px] font-medium text-[#0E0E0E]'
              >
                <Image src={googleIcon} alt='' width={16} height={16} />
                <span>Sign Up with Google</span>
              </button>
              <button
                type='button'
                className='flex justify-center items-center h-[56px] rounded-[8px] border-[0.5px] p-[8px] gap-[12px] bg-[#F5F5F5] border-[#D0D0D0] text-base leading-[24px] font-medium text-[#0E0E0E]'
              >
                <Image src={appleIcon} alt='' width={16} height={16} />
                <span>Sign Up with Apple</span>
              </button>
            </div>

            <div className='md:hidden flex h-[92px] justify-evenly'>
              <div className='flex flex-col gap-[4px]'>
                <Image src={googleRoundIcon} alt='' width={64} height={64} className='w-[64px] h-[64px]' />
                <span className='font-bold text-base text-[#0E0E0E] leading-[24px] text-center'>Google</span>
              </div>
              <div className='flex flex-col gap-[4px]'>
                <Image src={appleRoundIcon} alt='' width={64} height={64} className='w-[64px] h-[64px]' />
                <span className='font-bold text-base text-[#0E0E0E] leading-[24px] text-center'>Apple</span>
              </div>
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

            <div className='flex md:hidden w-full gap-[12px] mt-16 justify-center flex-wrap'>
              {FooterData.map((item, idx) => {
                const { text, url } = item;
                return (
                  <Link
                    title={text}
                    onClick={() => {
                      // {
                      //   text === 'Sign Up' &&
                      //     setSignUp({ ...signUp, isSignUpButtonClicked: true });
                      //   setIsHomePageActive(false);
                      // }
                    }}
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

export default EmailLogin;
