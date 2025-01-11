/** @format */

'use client';
import React, { useRef, useState } from 'react';
import GeneralDesign from '@/components/General/GeneralDesign/index';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import Image from 'next/image';
import Button from '@/components/General/Button/index';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import Link from 'next/link';

import { FooterData } from '@/components/General/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import lockIcon from '@/components/General/Auth/SignIn/PinLogin/svgs/lock.svg';
import backArrow from '@/components/General/Auth/SignIn/PinLogin/svgs/backArrow.svg';
import SubOption from '@/components/General/SubOption/index';
import styles from '@/styles/stylish.module.css';
import { useRouter } from 'next/navigation';

const PinLogin = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string>('');
  const { signIn, setSignIn } = useGeneralLogInContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // const [keyBoardOpened, setKeyBoardOpened] = useState<boolean>(false);

  const router = useRouter();
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
        .min(4, 'Enter all 4 digits')
        .max(4, 'Enter all 4 digits'),
    }),
    onSubmit: async (values) => {
      const otpCode = values.otp.join('');
      console.log('Submitted OTP:', otpCode);
      try {
        // const response = await axios.post('/api/verify-otp', { otp: otpCode });
      } catch (error) {
        console.log('Error verifying OTP: ', error);
      }
      // setSignUp({
      //   ...signUp,
      //   isOTPVerificationPageActive: false,
      //   isSignUpButtonClicked: false,
      //   isSetAccountRecoveryPageActive: true,
      // });
      router.push('/onboarding/dashboard');
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

  // useEffect(() => {
  //   const isKeyboardOpen = () => {
  //     const isOpened = window.innerHeight < 500; // Adjust threshold as needed
  //     if (isOpened) {
  //       setKeyBoardOpened(true);
  //     } else {
  //       setKeyBoardOpened(false);
  //     }
  //   };
  //   window.addEventListener('resize', isKeyboardOpen);

  //   return () => {
  //     window.removeEventListener('resize', isKeyboardOpen);
  //   };
  // }, []);

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
        <div className='inline md:hidden'></div>
        <Image src={RydeProLogo} alt='' className='w-[77px] h-[77px]  md:inline ' width={75} height={52} />
        <Button
          className='md:flex hidden'
          onClick={() => {
            setSignIn({
              ...signIn,
              isSignInPageActive: true,
              isLoginUsingEmailPageActive: false,
              isLoginUsingPinPageActive: false,
            });
          }}
          img={backArrow}
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
          className='md:hidden text-[#909090]'
          color='#909090'
        />
      </header>
      <main className={`w-full flex justify-center items-center ${styles['slide-from-right']}`}>
        <form
          onSubmit={formik.handleSubmit}
          action=''
          method='post'
          className='md:w-[614px] [390px] min-h-[560px] mt-10 md:mt-0 rounded-[24px] px-[10px] md:p-[48px] gap-[64px] flex flex-col md:bg-[#FFFFFF] md:shadow-sm'
        >
          <div className='flex flex-col gap-[30px] md:gap-[64px] min-h-[272px] justify-center md:justify-normal items-center md:items-start'>
            <Image src={lockIcon} alt='' width={63} height={63} className='w-[63px] h-[63px] inline md:hidden' />
            <span className='text-[20px] md:text-[24px] leading-[32px] font-medium text-[#3C3C3C]'>
              Enter your 4 digit pin to sign in.
            </span>
            <div className='flex justify-evenly min-w-48 mx-auto  md:relative gap-[24px] md:gap-3'>
              {formik.values.otp.map((_, idx) => (
                <input
                  key={idx}
                  ref={(el: any) => (inputsRef.current[idx] = el)}
                  className='focus-within:outline-none h-[56px] md:w-[56px] text-[#111111] placeholder:text-[#111111] rounded-[4px] text-[20px] border-b-[1px] bg-transparent border-[#DADADA] md:border-[#8A8A8A] gap-[8px] text-center font-[500]'
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

            {/**errors */}
            {error && <span className='text-[#DC5353] float-left text-[14px] leading-[20px] font-normal'>{error}</span>}

            {/** Button */}
            {/* <button
              onClick={formik.submitForm}
              type='submit'
              className={`md:h-[56px] h-[48px] ${
                keyBoardOpened ? 'invisible' : 'visible'
              } absolute md:relative bottom-10 md:bottom-0 right-5 md:right-0 w-[138px] md:w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]`}>
              Sign In
            </button> */}
            <div className='w-full flex justify-end md:flex md:justify-normal md:w-full'>
              {' '}
              {/** Button */}
              <button
                onClick={formik.submitForm}
                type='submit'
                className={`h-[48px] md:h-[56px] mt-[220px] md:mt-2 rounded-[8px] p-[8px] gap-[22px] md:gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] w-[138px] md:w-full`}
              >
                Sign In
              </button>
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
          </div>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default PinLogin;
