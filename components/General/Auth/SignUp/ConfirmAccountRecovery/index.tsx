/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import GeneralDesign from '@/components/GeneralWEBApp/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/GeneralWEBApp/Button/index';
import ellipses from '@/components/GeneralWEBApp/Auth/SignUp/svgs/ellipses.svg';
import SubOption from '@/components/GeneralWEBApp/SubOption/index';
import backArrow from '@/components/GeneralWEBApp/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import { useResetContext } from '@/contexts/resetContext';
import { useSignUpContext } from '@/contexts/signupContext';
import styles from '@/styles/stylish.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PUT_REQUEST } from '@/utils/requests';
import { URLS } from '@/utils/URLS';

const ConfirmAccountRecovery = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { signUp, setSignUp } = useSignUpContext();
  const [recoveryCode, setRecoveryCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validationSchema = Yup.object({
    recoveryCode: Yup.string()
      .min(8, 'Password should be at least 8 characters')
      .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
      .matches(/[@$!%*?&#]/, 'Password should contain at least one special character')
      .matches(/[0-9]/, 'Password should contain at least one number'),
  });
  const formik = useFormik({
    initialValues: {
      recoveryCode: recoveryCode || '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      event?.preventDefault();
      console.log(values);
      if (signUp.recoveryCode !== values.recoveryCode) {
        setError('Recovery code does not match');
        return;
      }
      const payload = {
        email: signUp.email,
        code: values.recoveryCode,
        confirmCode: values.recoveryCode,
      };

      setSubmitting(true);
      const url = URLS.BASE_AUTH + URLS.RIDER + URLS.setRecoveryCode;
      const response = await PUT_REQUEST(url, payload);
      if (response.success) {
        setSignUp({
          ...signUp,
          isOTPVerificationPageActive: false,
          isSignUpButtonClicked: false,
          isSetAccountRecoveryPageActive: false,
          isConfirmAccountRecoveryPageActive: false,
          showOnboardUser: true,
        });
        resetForm();
      } else {
        setError((response as any).message);
      }
      setSubmitting(false);
      // setSubmitting(false);
      // resetForm();
      // setSignUp({
      //   ...signUp,
      //   isOTPVerificationPageActive: false,
      //   isSignUpButtonClicked: false,
      //   isSetAccountRecoveryPageActive: false,
      //   isConfirmAccountRecoveryPageActive: true,
      // });
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setError('');
    }, 3000);
  }, [error]);
  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-center md:justify-between px-0 md:px-10 ${styles['fade-in']}`}
      >
        <div className='inline md:hidden'></div>
        <div
          onClick={() => {
            setSignUp({
              ...signUp,
              isConfirmAccountRecoveryPageActive: false,
              isSetAccountRecoveryPageActive: true,
            });
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-sm md:hidden left-4 top-10'
        >
          <Image src={backArrow} width={20} height={20} className='w-[20px] h-[20px]' alt='' />
        </div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]  md:inline ' width={75} height={52} />
        <Button
          className='md:inline hidden'
          onClick={() => {
            setSignUp({
              ...signUp,
              isConfirmAccountRecoveryPageActive: false,
              isSetAccountRecoveryPageActive: true,
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
          className='hidden'
        />
      </header>
      <main className={`w-full flex justify-center items-center ${styles['slide-from-bottom']}`}>
        <form
          action=''
          method='POST'
          onSubmit={formik.handleSubmit}
          className='container md:w-[614px] min-h-[524px] mt-20 md:mt-10 rounded-[24px] md:p-[48px] flex flex-col gap-[24px] md:bg-[#FFFFFF] md:shadow-sm justify-center'
        >
          <div className='md:hidden justify-center flex'>
            {' '}
            <svg
              width='64'
              height='63'
              viewBox='0 0 64 63'
              className='md:hidden'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M31.7884 2.13031C21.8157 2.13031 13.7468 10.1879 13.7468 20.1451V29.0391H19.8492V20.5373C19.8492 13.9348 25.198 8.5787 31.7884 8.5787C38.3792 8.5787 43.7279 14.0843 43.7279 20.5371V29.0391H49.8303V20.1452C49.8303 10.4422 41.744 2.13031 31.7885 2.13031H31.7884ZM10.9784 31.3386C9.18065 34.1474 8.16748 37.3861 8.16748 40.7861C8.16748 51.6583 18.6228 60.6582 31.7888 60.6582C44.9546 60.6582 55.4099 51.6583 55.4099 40.7861C55.4099 37.3857 54.3935 34.1477 52.5952 31.3386H10.9781H10.9784ZM31.754 34.2839C34.5028 34.2839 36.7835 36.4914 36.7835 39.2403C36.7835 41.302 35.4792 43.083 33.692 43.8393L37.718 55.9134H25.8593L29.8122 43.8394C28.0248 43.0833 26.7936 41.3022 26.7936 39.2406C26.7936 36.492 29.005 34.2843 31.7538 34.2843L31.754 34.2839Z'
                fill='#0E0E0E'
              />
            </svg>
          </div>

          <h2 className='text-[20px] md:text-[24px] mt-2 md:mt-0 text-center md:text-start leading-[32px] font-medium text-[#0E0E0E]'>
            Confirm your Account Recovery Code
          </h2>
          <label htmlFor='password' className='flex flex-col gap-[8px] min-h-[116px] '>
            <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Account Recovery Code</span>
            <input
              type='password'
              id='recoveryCode'
              name='recoveryCode'
              placeholder='**********'
              className='h-[56px] rounded-[8px] border-b-[1px] bg-transparent p-[16px] border-[#DADADA] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
              value={formik.values.recoveryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.recoveryCode && formik.errors.recoveryCode ? (
              <div className='text-red-600 text-sm'>{formik.errors.recoveryCode}</div>
            ) : null}
            {/*             
            {formik.touched.recoveryCode && formik.errors.recoveryCode ? (
              <div className='text-red-600 text-sm'>
                {formik.errors.recoveryCode}
              </div>
            ) : null} */}
            {/** Button */}
            {/* <button
              // onClick={formik.submitForm}
              type='submit'
              className='h-[56px] absolute md:relative bottom-10 md:bottom-0 right-10 md:right-0 w-[138px] md:w-[initial] md:mt-6 rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]'>
              Save
            </button> */}
            {error && <p className='text-red-600 text-sm'>{error}</p>}
            <div className='w-full flex justify-end md:flex md:justify-normal md:w-[initial]'>
              {' '}
              {/** Button */}
              <button
                type='submit'
                className={`h-[48px] md:h-[56px] mt-[220px] md:mt-2 rounded-[8px] p-[8px] gap-[22px] md:gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] w-[138px] md:w-full`}
              >
                Next
              </button>
            </div>
          </label>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default ConfirmAccountRecovery;
