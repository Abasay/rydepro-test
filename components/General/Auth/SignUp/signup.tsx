/** @format */

import React, { useEffect, useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import googleIcon from '@/components/General/Auth/SignUp/svgs/google.svg';
import appleIcon from '@/components/General/Auth/SignUp/svgs/apple.svg';
import googleRoundIcon from '@/components/General/Auth/SignUp/svgs/googleRounded.svg';
import appleRoundIcon from '@/components/General/Auth/SignUp/svgs/appleRounded.svg';
import { FooterData, SignUpFooterData } from '@/components/General/data';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSignUpContext } from '@/contexts/signupContext';
//import { encryptPassword } from '@/utils/encrypt';
import SubOption from '@/components/General/SubOption/index';
import styles from '@/styles/stylish.module.css';
import { POST_REQUEST } from '@/utils/requests';
import { URLS } from '@/utils/URLS';

const SignUp = () => {
  const { signUp, setSignUp, setIsHomePageActive } = useSignUpContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [signingUp, setSigningUp] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [confirmErr, setConfirmErr] = useState<boolean>(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be at least 8 characters')
      .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
      .matches(/[@$!%*?&#]/, 'Password should contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('Form data', values);
      const { password, email, confirmPassword } = values;
      const payload = {
        email,
        password,
        confirm: confirmPassword,
      };
      //const encryptedPassword = encryptPassword(password, '');
      setSigningUp(true);
      const url = URLS.BASE_AUTH + URLS.RIDER + URLS.sendOTP;
      const response = await POST_REQUEST(url, { email, password, confirm: confirmPassword });
      if (response.success) {
        setSignUp({
          ...signUp,
          email: values.email,
          password: values.password,
          isOTPVerificationPageActive: true,
          isSignUpButtonClicked: false,
        });
      } else {
        setError((response as any).message);
      }
      setSigningUp(false);
      // setSignUp({
      //   ...signUp,
      //   email: values.email,
      //   password: values.password,
      //   confirmPassword: values.confirmPassword,
      // });
    },
  });

  useEffect(() => {
    if (
      formik.values.password &&
      formik.values.confirmPassword &&
      formik.values.password !== formik.values.confirmPassword
    ) {
      // formik.setErrors({confirmPassword: 'Passwords do not match'})
      setConfirmErr(true);
    } else {
      setConfirmErr(false);
    }
  }, [formik]);

  useEffect(() => {
    const timer = setTimeout(() => {
      formik.setErrors({});
    }, 3000);
    return () => clearTimeout(timer);
  }, [formik.errors]);

  useEffect(() => {
    const interval = setInterval(() => {
      setError('');
    }, 3000);
    return () => clearInterval(interval);
  }, [error]);

  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-center md:justify-between px-0 md:px-10 ${styles['fade-in']}`}
      >
        <div className='inline md:hidden'></div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]' width={75} height={77} />
        <Button
          className='md:inline hidden'
          onClick={() => {
            window.location.href = '/onboarding/login';
          }}
          value='Sign In'
        />
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
      <main className={`w-full flex justify-center items-center ${styles['slide-from-bottom']}`}>
        <form
          onSubmit={formik.handleSubmit}
          className='container md:w-[614px] mt-10 md:mt-0 min-h-[896px] rounded-[24px] md:p-[48px] flex flex-col gap-[24px] md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='flex flex-col md:w-[518px] md:gap-[8px] md:h-[92px]'>
            <span className='text-base leading-[24px] font-medium text-[#0E0E0E] hidden md:flex'>
              Create an Account
            </span>
            <h2 className='text-[20px] md:text-[24px] leading-[32px] font-medium text-[#0E0E0E]'>
              Let&apos;s get you to your destination.
            </h2>
            <span className='text-base leading-[24px] font-normal text-[#3C3C3C]'>
              Sign up now to start your journey with us
            </span>
          </div>

          {/** Inputs fields */}
          <div className='flex flex-col md:w-[518px] gap-[24px]'>
            <label htmlFor='email' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Email Address</span>
              <input
                name='email'
                id='email'
                type='email'
                required
                placeholder='johndoe@gmail.com'
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className='text-red-600 text-sm'>{formik.errors.email}</p>
              ) : null}
            </label>

            <label htmlFor='password' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Password</span>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='**********'
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className='flex items-center gap-[4px] rounded-[8px]'>
                <svg
                  width='16'
                  height='16'
                  className='w-[16px] h-[16px]'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 5C6.27614 5 6.5 5.22386 6.5 5.5V8.5C6.5 8.77614 6.27614 9 6 9C5.72386 9 5.5 8.77614 5.5 8.5V5.5C5.5 5.22386 5.72386 5 6 5ZM6.00001 4.24907C6.41369 4.24907 6.74905 3.91371 6.74905 3.50003C6.74905 3.08635 6.41369 2.751 6.00001 2.751C5.58633 2.751 5.25098 3.08635 5.25098 3.50003C5.25098 3.91371 5.58633 4.24907 6.00001 4.24907ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1Z'
                    fill='#111111'
                  />
                </svg>
                <span className='text-[12px] leading-[16px] font-normal text-[#3C3C3C]'>
                  Password should be at least 8 characters long, contain at least 1 uppercase, 1 lowercase, & 1 special
                  character
                </span>
              </span>
              {formik.touched.password && formik.errors.password ? (
                <p className='text-red-600 text-sm'>{formik.errors.password}</p>
              ) : null}
            </label>

            <label htmlFor='confirmPassword' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Confirm Password</span>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='**********'
                className='h-[56px] rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] placeholder:text-[#8A8A8A] focus:border-[#111111] font-normal bg-transparent text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <p className='text-red-600 text-sm'>{formik.errors.confirmPassword}</p>
              ) : null}

              {confirmErr ? <p className='text-red-600 text-sm'>Passwords do not match</p> : null}
            </label>
          </div>

          {/** Button */}
          {error && <p className='text-red-600 text-sm my-1 text-center'>{error}</p>}
          <button
            // onClick={formik.submitForm}
            disabled={signingUp}
            title='Create Account'
            type='submit'
            className='h-[56px] rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] disabled:cursor-not-allowed'
          >
            {signingUp ? 'Creating account...' : 'Create Account'}
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
            {SignUpFooterData.map((item, idx) => (
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
            {SignUpFooterData.map((item, idx) => {
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
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default SignUp;
