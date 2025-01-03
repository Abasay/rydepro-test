/** @format */

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GeneralDesign from '@/components/GeneralWEBApp/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/GeneralWEBApp/Button/index';
import ellipses from '@/components/GeneralWEBApp/Auth/SignUp/svgs/ellipses.svg';
import axios from 'axios';
import { useSignUpContext } from '@/contexts/signupContext';
import SubOption from '@/components/GeneralWEBApp/SubOption/index';
// import OTPButton from './button';
import OTPButton from './button';
import styles from '@/styles/stylish.module.css';
 import { POST_REQUEST } from '@/app/utils/requests';
import { URLS } from '@/app/utils/URLS';

const OTPVerification = () => {
  const { signUp, setSignUp } = useSignUpContext();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [keyBoardOpened, setKeyBoardOpened] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [verifyingOTP, setVerifyingOTP] = useState(false);
  const [resendingOTP, setResendingOTP] = useState(false);

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      otp: ['', '', '', '', '', ''],
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]$/, 'Only numbers allowed')
            .required('Required')
        )
        .min(6, 'Enter all 6 digits')
        .max(6, 'Enter all 6 digits'),
    }),
    onSubmit: async (values) => {
      const otpCode = values.otp.join('');
      const payload = {
        email: signUp.email,
        otp: otpCode,
      };
      console.log('Submitted OTP:', otpCode, payload);

      setVerifyingOTP(true)
      const url = URLS.BASE_AUTH + URLS.RIDER + URLS.verifyOTP
      const response = await POST_REQUEST(url, payload, '')

      if(response.success){
        setSignUp({
          ...signUp,
          isOTPVerificationPageActive: false,
          isSignUpButtonClicked: false,
          isSetAccountRecoveryPageActive: true,
        });
      } else {
        setError((response as any).message)
      }
      setVerifyingOTP(false)

      // try {
      //   // const response = await axios.post('/api/verify-otp', { otp: otpCode });
      //   const response = await postRequest({
      //     url: URLS.verifyOTP,
      //     token: '',
      //     data: payload,
      //   });
      //   if (response.success) {
      //     setSignUp({
      //       ...signUp,
      //       isOTPVerificationPageActive: false,
      //       isSignUpButtonClicked: false,
      //       isSetAccountRecoveryPageActive: true,
      //     });
      //   }
      // } catch (error) {
      //   console.log('Error verifying OTP: ', error);
      // }
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value } = e.target;
    if (Number.isNaN(Number(value))) {
      setError('Please enter a valid number');
      e.target.value = '';
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    formik.setFieldValue(`otp[${idx}]`, value);

    if (value.length === 1 && idx < inputsRef.current.length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };


  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === 'Backspace' && idx > 0 && !inputsRef.current[idx]?.value) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleResend = async () => {
    const payload = {
      email: signUp.email,
      password: signUp.password,
      confirm: signUp.confirmPassword,
    };

  setResendingOTP(true)
    const response  = await POST_REQUEST(URLS.BASE_AUTH + URLS.RIDER + URLS.sendOTP, payload, '')
  
    if(response.success){
      setTimeRemaining(180);
      setIsTimeUp(false);
    } else {
      setError((response as any).message)
    }
    setResendingOTP(false)
  };

  useEffect(()=>{
    const timer = setInterval(() => {
      setError('')
    }, 3000);
  }, [error])

  useEffect(() => {
    const isComplete = formik.values.otp.every((digit) => digit !== '');
    setIsFormComplete(isComplete);

    if (isComplete) {
     
      formik.handleSubmit();
    }
  }, [formik.values.otp]);

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
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <GeneralDesign>
      <header
        className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['fade-in']}`}
      >
        <div className='inline md:hidden'></div>
        <Image
          src={RydeProLogo}
          alt=''
          className='w-[77px] h-[77px]'
          width={75}
          height={52}
        />
        <Button
          className='md:inline hidden'
          onClick={() => {
            setSignUp({
              ...signUp,
              isOTPVerificationPageActive: false,
              isSignUpButtonClicked: true,
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
          className='md:hidden invisible'
        />
      </header>
      <main
        className={`w-full flex justify-center items-center ${styles['slide-from-bottom']}`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className='md:w-[614px] mt-10 md:mt-0 md:min-h-[640px] rounded-[24px] md:p-[48px] flex flex-col md:justify-center md:items-center gap-[64px] md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='md:w-[518px] min-h-[176px] flex flex-col gap-[14px] md:gap-[32px]'>
            <span className='font-normal text-base leading-[24px] text-[#3C3C3C] hidden md:inline'>
              Verify your Identity Enter the 6 digit code sent to your email
              address. Please check your email inbox or spam{' '}
            </span>
            <h2 className='inline md:hidden font-bold text-center text-[24px] leading-[32px] text-[#212121]'>
              Enter 6-digit code
            </h2>
            <span className='text-[18px] leading-[24px] font-medium text-center inline -mt-2 md:hidden'>
              Please check your email inbox or spam
            </span>
            <div className='flex flex-col gap-[16px] md:w-[518px] mt-[40px] md:mt-0'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E] hidden md:inline'>
                Code
              </span>
              <div className='flex justify-between md:relative gap-2 md:gap-3'>
                {formik.values.otp.map((_, idx) => (
                  <input
                    key={idx}
                    ref={(el: any) => (inputsRef.current[idx] = el)}
                    className='focus-within:outline-none h-[56px] md:w-[56px] text-zinc-700 placeholder-inputcolor rounded-[4px] text-[20px] border-b-[1px] bg-[#5C5A5A05] md:bg-transparent border-[#8A8A8A] gap-[8px]  text-center font-[500]'
                    maxLength={1}
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    placeholder='*'
                    value={formik.values.otp[idx]}
                    onChange={(e) => handleChange(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  />
                ))}
              </div>
              {error && (
                <span className='text-[#C92014] md:text-[#DC5353] text-center md:text-start text-base md:text-[14px] leading-[20px] font-normal'>
                  {error}
                </span>
              )}
              {formik.errors.otp && formik.touched.otp ? (
                <span className='text-[#C92014] md:text-[#DC5353] text-center md:text-start text-base md:text-[14px] leading-[20px] font-normal'>
                  Required
                </span>
              ) : null}
              <span className='text-[16px] hidden md:flex gap-2 leading-[24px] font-normal text-[#3C3C3C]'>
                <span>Didn&apos;t get OTP? </span>
                {isTimeUp ? (
                  <button
                    type='button'
                    onClick={handleResend}
                    title='Resend'
                    className='text-[#0E0E0E] font-medium border-b-2 cursor-pointer border-[#0E0E0E]'
                  >
                    Resend
                  </button>
                ) : (
                  <time>{formatTime(timeRemaining)}</time>
                )}
                .
              </span>
            </div>
          </div>
          {error && <span className='text-[#C92014] md:text-[#DC5353] text-center md:text-start text-base md:text-[14px] leading-[20px] font-normal'>
                  Required
          </span>}
          {/** Button */}
          <button
            type='submit'
            className='h-[56px] hidden md:inline md:mt-4 w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]'
          >
            Verify OTP
          </button>

          <div className='flex justify-center md:hidden'>
            <div className='w-[250px] min-h-[77px] gap-[17px] flex flex-col'>
              <span className='h-[24px] text-[#5C5A5A] text-base leading-[24px] font-normal'>
                I didn&apos;t receive any code?{' '}
                <time>{formatTime(timeRemaining)}</time>
              </span>
              <div className='flex gap-[10px]'>
                <OTPButton
                  value='Resend code'
                  onClick={handleResend}
                  className='min-w-[117px]'
                />
                <OTPButton value='Send SMS' className='min-w-[120px]' />
              </div>
            </div>
          </div>

          <div className={`h-[48px] mt-20 md:hidden`}>
            <button
              onClick={() => {
                setSignUp({
                  ...signUp,
                  isOTPVerificationPageActive: false,
                  isSignUpButtonClicked: true,
                  isSetAccountRecoveryPageActive: false,
                });
              }}
              type='button'
              className='flex gap-[4px] items-center py-[12px] rounded-[8px]'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.57008 5.92992L3.50008 11.9999L9.57008 18.0699'
                  stroke='#909090'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M20.5001 11.9999H3.67008'
                  stroke='#909090'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span className='text-[18px] leading-[24px] font-normal text-[#909090]'>
                Back
              </span>
            </button>
          </div>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

//Incorrect Code. Please try again.

export default OTPVerification;
