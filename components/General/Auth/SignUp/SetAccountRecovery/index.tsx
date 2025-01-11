/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import GeneralDesign from '@/components/GeneralWEBApp/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/GeneralWEBApp/Button/index';
import ellipses from '@/components/GeneralWEBApp/Auth/SignUp/svgs/ellipses.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUpContext } from '@/contexts/signupContext';
import SubOption from '@/components/GeneralWEBApp/SubOption/index';
import backArrow from '@/components/GeneralWEBApp/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import styles from '@/styles/stylish.module.css';
import { PUT_REQUEST } from '@/utils/requests';
import { URLS } from '@/utils/URLS';

const SetAccountRecovery = () => {
  const [recoveryCode, setRecoveryCode] = useState<string>('');
  const { signUp, setSignUp } = useSignUpContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [keyBoardOpened, setKeyBoardOpened] = useState<boolean>(false);
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
      setSignUp({
        ...signUp,
        recoveryCode: values.recoveryCode,
        isOTPVerificationPageActive: false,
        isSignUpButtonClicked: false,
        isSetAccountRecoveryPageActive: false,
        isConfirmAccountRecoveryPageActive: true,
      });
      // const payload = {
      //   email: signUp.email,
      //   code: values.recoveryCode,
      //   confirmCode: values.recoveryCode,
      // }

      // setSubmitting(true);
      // const url = URLS.BASE_AUTH + URLS.RIDER + URLS.setRecoveryCode
      // const response = await PUT_REQUEST(url, payload)
      // if(response.success){
      //   setSignUp({
      //     ...signUp,
      //     isOTPVerificationPageActive: false,
      //     isSignUpButtonClicked: false,
      //     isSetAccountRecoveryPageActive: false,
      //     isConfirmAccountRecoveryPageActive: true,
      //   });
      //   resetForm()

      // } else{
      //   setError((response as any).message)
      // }
      // setSubmitting(false);
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

  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-center md:justify-between px-0 md:px-10 ${styles['fade-in']}`}
      >
        <div className='inline md:hidden'></div>
        {/* <div
          onClick={() => {
            // setReset({ ...reset, isAccountRecoveryPageActive: false });
            // setIsHomePageActive(true);
          }}
          className='flex items-center justify-center absolute w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-sm md:hidden left-4 top-10'>
          <Image
            src={backArrow}
            width={20}
            height={20}
            className='w-[20px] h-[20px]'
            alt=''
          />
        </div> */}
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]  md:inline ' width={75} height={52} />
        <Button className='md:inline hidden' onClick={() => {}} value='Sign In' />
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
      <main className={`w-full flex justify-center md:h-[70vh] items-center ${styles['slide-from-right']}`}>
        <form
          action=''
          onSubmit={formik.handleSubmit}
          className='md:w-[614px] min-h-[524px] mt-6 md:mt-0 rounded-[24px] md:p-[48px] gap-[24px] flex flex-col md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='md:w-[518px] md:h-[208px] flex flex-col gap-[8px]'>
            <h2 className='text-[20px] md:text-[24px] text-center md:text-start font-medium leading-[32px] text-[#0E0E0E]'>
              Set Account Recovery Code
            </h2>
            <div className='md:h-[168px] flex flex-col gap-[4px] mt-4 md:mt-0'>
              <span className='text-base font-normal leading-[24px] text-[#3C3C3C]'>
                To keep your account secure, set up a recovery code. You&apos;ll need this code if you lose access to
                your account.
              </span>
              <div className='flex flex-col mt-6'>
                <h2 className='font-bold text-base leading-[24px] text-[#3C3C3C]'>Instructions</h2>
                <ol className=' text-base font-normal leading-[24px] text-[#3C3C3C] list-decimal list-inside'>
                  <li>Create a code you can remember.</li>
                  <li> Store it safely.</li>
                  <li>Use this code to regain access if needed.</li>
                </ol>
              </div>
            </div>
          </div>
          <label htmlFor='password' className='flex flex-col gap-[8px] min-h-[116px] '>
            <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Account Recovery Code</span>
            <input
              type='password'
              aria-describedby='recovery-help'
              id='recoveryCode'
              name='recoveryCode'
              placeholder='**********'
              className='h-[56px] rounded-[8px] bg-transparent border-b-[1px] p-[16px] border-[#DADADA] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
              value={formik.values.recoveryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span id='recovery-help' className='flex items-center gap-[4px] rounded-[8px]'>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 5C6.27614 5 6.5 5.22386 6.5 5.5V8.5C6.5 8.77614 6.27614 9 6 9C5.72386 9 5.5 8.77614 5.5 8.5V5.5C5.5 5.22386 5.72386 5 6 5ZM6.00001 4.24907C6.41369 4.24907 6.74905 3.91371 6.74905 3.50003C6.74905 3.08635 6.41369 2.751 6.00001 2.751C5.58633 2.751 5.25098 3.08635 5.25098 3.50003C5.25098 3.91371 5.58633 4.24907 6.00001 4.24907ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1Z'
                  fill='#111111'
                />
              </svg>
              <span className='text-[12px] leading-[16px] font-normal text-[#3C3C3C]'>
                Use 8-12 characters with uppercase, lowercase, numbers, and special characters (e.g., A1b2C3d4!).
              </span>
            </span>
            {formik.touched.recoveryCode && formik.errors.recoveryCode ? (
              <div className='text-red-600 text-sm'>{formik.errors.recoveryCode}</div>
            ) : null}
          </label>

          <div className='w-full flex justify-end md:flex md:justify-normal md:w-[initial]'>
            {' '}
            {/** Button */}
            <button
              // onClick={formik.submitForm}
              disabled={formik.isSubmitting}
              type='submit'
              className={`h-[48px] md:h-[56px] mt-[220px] md:mt-2 rounded-[8px] p-[8px] gap-[22px] md:gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] w-[138px] md:w-full`}
            >
              {formik.isSubmitting ? 'Loading...' : 'Next'}
            </button>
          </div>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default SetAccountRecovery;
