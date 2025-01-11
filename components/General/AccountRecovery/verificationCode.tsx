/** @format */

import React, { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
// import OTPButton from './button';
import OTPButton from './button';
import styles from '@/styles/stylish.module.css';

const VerificationCode = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string>('');
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const { reset, setReset, setIsHomePageActive } = useResetContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      otp: ['', '', '', ''],
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]$/, 'Only numbers allowed')
            .required('Required')
        )
        .max(4, 'Enter all 4 digits')
        .max(4, 'Enter all 4 digits'),
    }),
    onSubmit: async (values) => {
      const otpCode = values.otp.join('');
      console.log('Submitted OTP:', otpCode);
      try {
        const response = await axios.post('/api/verify-otp', { otp: otpCode });
      } catch (error) {
        console.log('Error verifying OTP: ', error);
      }
      console.log('fired');
      setReset({
        ...reset,
        isAccountRecoveryPageActive: false,
        isVerificationCodePageActive: false,
        isRecoverAccountUsingEmailAndRecoveryCodePageActive: false,
        isSetNewPasswordPageActive: true,
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && idx > 0 && !inputsRef.current[idx]?.value) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  // Check if all inputs have been filled
  useEffect(() => {
    const isComplete = formik.values.otp.every((digit) => digit !== '');
    setIsFormComplete(isComplete);
  }, [formik.values.otp]);

  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['steps-in']}`}>
        <div className='inline md:hidden'></div>
        <div
          onClick={() => {
            setReset({
              ...reset,
              isAccountRecoveryPageActive: false,
              isVerificationCodePageActive: false,
              isRecoverAccountUsingEmailAndRecoveryCodePageActive: true,
            });
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
              isAccountRecoveryPageActive: false,
              isVerificationCodePageActive: false,
              isRecoverAccountUsingEmailAndRecoveryCodePageActive: true,
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
      <main className={`w-full flex justify-center items-center ${styles['expand']}`}>
        <form
          action=''
          method='post'
          onSubmit={formik.handleSubmit}
          className='md:w-[614px] w-[380px] mt-5 md:mt-0 min-h-[404px] rounded-[24px] px-2 md:p-[48px] py-[48px] gap-[64px] flex flex-col md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='min-h-[188px] md:w-[518px] flex flex-col gap-[32px]'>
            <div className='h-[60px] gap-[8px] flex flex-col items-center md:items-start'>
              <h2 className='text-[24px] leading-[32px] font-medium text-[#0E0E0E]'>Enter Verification Code</h2>
              <span className='text-[18px] md:text-base text-center md:text-start leading-[24px] text-[#3C3C3C] font-normal'>
                Enter the 4-digit verification code sent to your email
              </span>
            </div>
            <div className='h-[96px] gap-[16px] md:w-[initial] mt-2 flex flex-col'>
              <label htmlFor='' className='h-[56px] gap-[8px] flex items-center justify-center'>
                <div className='flex md:justify-evenly md:relative gap-[24px] md:gap-3'>
                  {formik.values.otp.map((_, idx) => (
                    <input
                      key={idx}
                      ref={(el: any) => (inputsRef.current[idx] = el)}
                      className='focus-within:outline-none h-[56px] md:w-[56px] text-[#111111] placeholder:text-[#111111] md:placeholder:text-[#DADADA] rounded-[4px] text-[20px] border-b-[1px] bg-transparent border-[#DADADA] gap-[8px] text-center font-[500]'
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
              </label>
              <span className='text-base text-[#3C3C3C] leading-[24px] text-center md:text-start font-normal'>
                Didn&apos;t get any code? <time className='font-medium'>00:04</time>
              </span>
              <div className='flex justify-center gap-[10px] md:hidden'>
                <OTPButton value='Resend code' className='min-w-[114px]' />
                <OTPButton value='Send SMS' className='min-w-[97px]' />
              </div>
            </div>
          </div>
          {/**Button */}
          <button
            type='submit'
            disabled={!isFormComplete}
            className={`h-[48px] md:h-[56px] w-full mt-20 md:mt-0 rounded-[8px] p-[8px] gap-[16px] text-base leading-[24px] font-medium ${
              isFormComplete
                ? 'bg-[#0E0E0E] text-[#FAF6F6] cursor-pointer'
                : 'bg-[#8A8A8A] text-[#DADADA] cursor-not-allowed'
            }`}
          >
            Confirm Code
          </button>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default VerificationCode;
