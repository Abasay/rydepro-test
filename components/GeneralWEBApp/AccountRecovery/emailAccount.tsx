/** @format */

import React, { useState } from 'react';
import GeneralDesign from '@/components/GeneralWEBApp/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/GeneralWEBApp/Button/index';
import ellipses from '@/components/GeneralWEBApp/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';
import { options } from '@/components/GeneralWEBApp/Auth/SignIn/data/index';
import { FooterData } from '@/components/GeneralWEBApp/data';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import { useSignUpContext } from '@/contexts/signupContext';
import SubOption from '@/components/GeneralWEBApp/SubOption/index';
import backArrow from '@/components/GeneralWEBApp/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { error } from 'console';
import { useResetContext } from '@/contexts/resetContext';
import toast from 'react-hot-toast';
import styles from '@/styles/stylish.module.css';

const EmailCodeAccountRecovery = () => {
  const { reset, setReset, setIsHomePageActive } = useResetContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const validationSchema = Yup.object({
    email: Yup.string().required('Please, put in your email'),
    recoveryCode: Yup.string().required('Please, put in the recovery code'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      recoveryCode: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setReset({
        ...reset,
        isAccountRecoveryPageActive: false,
        isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
        isVerificationCodePageActive: true,
      });
    },
  });

  // if (formik.errors.email || formik.touched.email) {
  //   toast.error(formik.errors.email as string);
  //   return;
  // }
  // if (formik.errors.recoveryCode || formik.touched.recoveryCode) {
  //   toast.error(formik.errors.recoveryCode as string);
  //   return;
  // }
  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['steps-in']}`}
      >
        <div className='inline md:hidden'></div>
        <div
          onClick={() => {
            setReset({
              ...reset,
              isAccountRecoveryPageActive: true,
              isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
            });
            setIsHomePageActive(true);
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md md:hidden left-4 top-10'
        >
          <Image
            src={backArrow}
            width={20}
            height={20}
            className='w-[20px] h-[20px]'
            alt=''
          />
        </div>
        <Image
          src={RydeProLogo}
          alt=''
          className='w-[77px] h-[77px] '
          width={75}
          height={52}
        />
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
          className='md:hidden'
        />
      </header>
      <main
        className={`w-full flex justify-center items-center ${styles['slide-in']}`}
      >
        <form
          action=''
          onSubmit={formik.handleSubmit}
          method='post'
          className='md:w-[614px] w-[390px] min-h-[452px] mt-20 md:mt-0 rounded-[24px] md:p-[48px] gap-[24px] md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='flex flex-col min-h-[60px] md:w-[518px] gap-[8px]'>
            <h2 className='font-medium text-[24px] leading-[32px] text-[#0E0E0E]'>
              Account Recovery
            </h2>
            <span className='font-normal text-[16px] leading-[24px] text-[#3C3C3C]'>
              Please enter the following details to recover your account.
            </span>
          </div>
          {/**input fields */}
          <div className='md:w-[518px] min-h-[272px] flex flex-col gap-[120px] mt-10'>
            <div className='md:w-[518px] min-h-[300px] gap-[24px] flex flex-col'>
              {/**EMail */}
              <label
                htmlFor='email'
                className='min-h-[84px] gap-[8px] flex flex-col'
              >
                <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E]'>
                  Registered Email Address
                </span>
                <input
                  placeholder='johndoe@gmail.com'
                  required
                  name='email'
                  id='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] font-normal text-base outline-none leading-[24px] placeholder:text-[#8A8A8A] text-[#0E0E0E]'
                  type='email'
                />
                {formik.errors.email || formik.touched.email ? (
                  <span className='text-sm text-[#D21B34]'>
                    {formik.errors.email}
                  </span>
                ) : null}
              </label>
              {/**Recovery Code */}
              <label
                htmlFor='recoveryCode'
                className='min-h-[84px] gap-[8px] flex flex-col'
              >
                <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E]'>
                  Account Recovery Code
                </span>
                <input
                  placeholder='**********'
                  name='recoveryCode'
                  id='recoveryCode'
                  required
                  value={formik.values.recoveryCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] font-normal text-base outline-none leading-[24px] placeholder:text-[#8A8A8A] text-[#0E0E0E]'
                  type='password'
                />
                {formik.errors.recoveryCode || formik.touched.recoveryCode ? (
                  <span className='text-sm text-[#D21B34]'>
                    {formik.errors.recoveryCode}
                  </span>
                ) : null}
              </label>

              {/** Button */}
              <button
                type='submit'
                className='h-[48px] md:min-h-[56px] mt-[160px] md:mt-0 md:w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] '
              >
                Verify
              </button>
            </div>
          </div>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default EmailCodeAccountRecovery;
