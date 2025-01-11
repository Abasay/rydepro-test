/** @format */

import React, { useEffect, useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';
import { options } from '@/components/General/Auth/SignIn/data/index';
import { FooterData } from '@/components/General/data';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import { useSignUpContext } from '@/contexts/signupContext';
import SubOption from '@/components/General/SubOption/index';
import backArrow from '@/components/General/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { error } from 'console';
import { useResetContext } from '@/contexts/resetContext';
import toast from 'react-hot-toast';
import styles from '@/styles/stylish.module.css';
import axios from 'axios';

const ConfirmPassword = () => {
  const { reset, setReset } = useResetContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  //enums
  enum StatusCodes {
    success = 200,
    badRequest = 404,
  }

  const MobileValidationSchema = Yup.object({
    confirmPassword: Yup.string()
      .required('Please, fill out this field')
      .min(8, 'Password must be minimum of 8 characters long')
      .matches(/['A-Z']/, 'Password must contain at least one uppercase')
      .matches(/[a-z]/, 'Password must contain at least one lowercase')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
  });

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Please, fill out this field')
      .min(8, 'Password must be minimum of 8 characters long')
      .matches(/['A-Z']/, 'Password must contain at least one uppercase')
      .matches(/[a-z]/, 'Password must contain at least one lowercase')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    confirmPasword: Yup.string()
      .required('Please, fill out this field')
      .min(8, 'Password must be minimum of 8 characters long')
      .matches(/['A-Z']/, 'Password must contain at least one uppercase')
      .matches(/[a-z]/, 'Password must contain at least one lowercase')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: isMobile ? MobileValidationSchema : validationSchema,
    onSubmit: async (values) => {
      const { password, confirmPassword } = formik.values;
      const payload = { password, confirmPassword };
      try {
        if (!isMobile) {
          const response = await axios.post('/api/set-password', payload);
          if (response.status === StatusCodes.success) {
            toast.success('Password changed successfully');
          }
        }
        const response = await axios.post('/api/confirm-password', {
          confirmPassword: confirmPassword,
        });
        if (response.status === StatusCodes.success) {
          toast.success('Password changed successfully');
        }
      } catch (err) {
        console.log('Error: ', err);
      }
      // if (isMobile)
      // return setReset({
      //   ...reset,
      //   isAccountRecoveryPageActive: false,
      //   isConfirmPasswordPageActive: true,
      //   isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
      //   isSetNewPasswordPageActive: false,
      //   isVerificationCodePageActive: false,
      // });

      // return setReset({
      //   ...reset,
      //   isAccountRecoveryPageActive: false,
      //   isConfirmPasswordPageActive: false,
      //   isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
      //   isSetNewPasswordPageActive: false,
      //   isVerificationCodePageActive: false,
      // });
    },
  });

  //All use Effects
  useEffect(() => {
    const { password, confirmPassword } = formik.values;
    if (isMobile && confirmPassword) return setIsFormComplete(true);
    if (password && confirmPassword && password === confirmPassword) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [isFormComplete, formik.values, isMobile]);

  useEffect(() => {
    checkIsMobile(); // Initial check
    console.log(isMobile);
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [isMobile]);
  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['steps-in']}`}>
        <div className='inline md:hidden'></div>
        <div
          onClick={() => {
            setReset({
              ...reset,
              isAccountRecoveryPageActive: false,
              isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
              isSetNewPasswordPageActive: true,
              isConfirmPasswordPageActive: false,
            });
            // setIsHomePageActive(true);
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md md:hidden left-4 top-10'
        >
          <Image src={backArrow} width={20} height={20} className='w-[20px] h-[20px]' alt='' />
        </div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px] ' width={75} height={52} />
        <Button
          className='md:flex hidden'
          img={backArrow}
          onClick={() => {
            setReset({
              ...reset,
              isAccountRecoveryPageActive: true,
              isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
            });
          }}
          value='Back'
        />
        <Image
          src={ellipses}
          width={20}
          height={5}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          alt=''
          className='hidden'
        />
      </header>
      <main className={`flex justify-center items-center w-full ${styles['slide-from-right']}`}>
        <form
          action=''
          method='post'
          onSubmit={formik.handleSubmit}
          className='w-[614px] min-h-[668px] rounded-[24px] md:p-[48px] gap-[24px] flex flex-col md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='h-[92px] gap-[8px] hidden md:flex flex-col'>
            <span className='text-base leading-[24px] font-medium text-[#0E0E0E]'>Account Recovery</span>
            <div className='h-[6px] gap-[4px] flex flex-col'>
              <h2 className='text-[24px] leading-[32px] text-[#0E0E0E] font-medium'>Hi, Welcome back Michael!</h2>
              <span className='text-base leading-[24px] font-normal text-[#3C3C3C]'>Please set your new password.</span>
            </div>
          </div>

          <h2 className='md:hidden text-center text-[20px] leading-[32px] font-medium text-[#0E0E0E]'>
            Confirm New Password
          </h2>

          <div className='min-h-[456px] gap-[120px] flex flex-col'>
            <div className='min-h-[312px] gap-[24px] flex flex-col'>
              <div className='min-h-[232px] gap-[24px] flex flex-col'>
                <label htmlFor='password' className='gap-[8px] min-h-[124px] md:flex hidden flex-col'>
                  <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E] md:inline hidden'>
                    Password
                  </span>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    aria-describedby='details'
                    className='h-[56px] outline-none rounded-[8px] border-b-[1px] p-[16px] border-[#DADADA] placeholder:text-[#8A8A8A] text-[#0E0E0E] text-base leading-[24px] font-normal'
                    placeholder='**********'
                  />
                  <span id='details' className='text-[12px] leading-[16px] text-[#3C3C3C] font-normal flex items-start'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8 7C8.27614 7 8.5 7.22386 8.5 7.5V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V7.5C7.5 7.22386 7.72386 7 8 7ZM8.00001 6.24907C8.41369 6.24907 8.74905 5.91371 8.74905 5.50003C8.74905 5.08635 8.41369 4.751 8.00001 4.751C7.58633 4.751 7.25098 5.08635 7.25098 5.50003C7.25098 5.91371 7.58633 6.24907 8.00001 6.24907ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3Z'
                        fill='#111111'
                      />
                    </svg>

                    <span>
                      Password should be at least 8 characters long, contain at least 1 uppercase, 1 lowercase, & 1
                      special character
                    </span>
                  </span>
                  {(formik.errors.password || formik.touched.password) && (
                    <span className='text-sm text-[#D21B34] leading-[20px]'>{formik.errors.password}</span>
                  )}
                </label>

                <label htmlFor='confirmPassword' className='gap-[8px] min-h-[84px] flex flex-col'>
                  <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Confirm Password</span>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type='password'
                    className='h-[56px] outline-none rounded-[8px] border-b-[1px] p-[16px] border-[#DADADA] placeholder:text-[#8A8A8A] text-[#0E0E0E] text-base leading-[24px] font-normal'
                    placeholder='**********'
                  />
                  {(formik.errors.confirmPassword || formik.touched.confirmPassword) && (
                    <span className='text-sm text-[#D21B34] leading-[20px]'>{formik.errors.confirmPassword}</span>
                  )}
                </label>
              </div>
              <div className='flex justify-end md:justify-normal w-full'>
                {/**Button */}
                <button
                  type='submit'
                  disabled={!isFormComplete}
                  className={`h-[48px] md:h-[56px] w-[138px] md:w-full mt-20 md:mt-0 rounded-[8px] p-[8px] gap-[16px] text-base leading-[24px] font-medium ${
                    isFormComplete
                      ? 'bg-[#0E0E0E] text-[#FAF6F6] cursor-pointer'
                      : 'bg-[#8A8A8A] text-[#DADADA] cursor-not-allowed'
                  }`}
                >
                  {isMobile ? 'Confirm' : ' Set Password'}
                </button>
              </div>
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
            {/* <div className='flex md:hidden w-full gap-[12px] justify-center flex-wrap'>
              {FooterData.map((item, idx) => {
                const { text, url } = item;
                return (
                  <Link
                    title={text}
                    // onClick={() => {
                    //   handleNavigation(text);
                    // }}
                    className={`text-[18px] text-[#0E0E0E] ${
                      idx === 1 && 'hidden'
                    } ${
                      idx !== 0 && 'border-l-[1px]'
                    } border-[#D0D0D0] px-3 leading-[24px] font-medium text-center`}
                    href={url}
                    key={idx}>
                    {text}
                  </Link>
                );
              })}
            </div> */}
          </div>
        </form>
      </main>
    </GeneralDesign>
  );
};

export default ConfirmPassword;
