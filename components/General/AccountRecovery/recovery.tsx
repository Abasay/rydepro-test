/** @format */

import React, { useState } from 'react';
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
import styles from '@/styles/stylish.module.css';

const AccountRecovery = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { reset, setReset, setIsHomePageActive } = useResetContext();

  const validationSchema = Yup.object({
    lastName: Yup.string().required('Please, input your Last Name'),
    phoneNumber: Yup.number().required('Please, input your phone number'),
    dateOfBirth: Yup.string().required('Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      dateOfBirth: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setReset({
        ...reset,
        isAccountRecoveryPageActive: false,
        isRecoverAccountUsingEmailAndRecoveryCodePageActive: true,
      });
    },
  });
  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['about-steps-in']}`}>
        <div className='inline md:hidden'></div>
        <div
          onClick={() => {
            setReset({ ...reset, isAccountRecoveryPageActive: false });
            setIsHomePageActive(true);
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
            window.location.href = '/onboarding';
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
      <main className={`w-full flex justify-center items-center ${styles['slide-from-left']}`}>
        <form
          onSubmit={formik.handleSubmit}
          action=''
          className='md:w-[614px] min-h-[560px] mt-20 md:mt-0 rounded-[24px] md:p-[48px] gap-[24px] md:bg-[#FFFFFF] md:shadow-sm'
          method='post'
        >
          {/**header */}
          <div className='flex flex-col min-h-[60px] gap-[4px]'>
            <h2 className='text-[24px] leading-[32px] font-medium text-[#0E0E0E]'>Account Recovery</h2>
            <span className='text-base leading-[24px] font-normal text-[#3C3C3C]'>
              Please enter the following details to recover your account.
            </span>
          </div>
          {/**input fields */}
          <div className='md:w-[518px] min-h-[380px] flex flex-col gap-[120px] mt-10'>
            <div className='md:w-[518px] min-h-[300px] gap-[24px] flex flex-col'>
              {/**Last Name */}
              <label htmlFor='' className='min-h-[84px] gap-[8px] flex flex-col'>
                <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E]'>Last Name</span>
                <input
                  placeholder='John Doe'
                  required
                  name='lastName'
                  id='lastName'
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] font-normal text-base outline-none leading-[24px] placeholder:text-[#8A8A8A] text-[#0E0E0E]'
                  type='text'
                />
                {formik.errors.lastName || formik.touched.lastName ? (
                  <span className='text-sm text-[#D21B34]'>{formik.errors.lastName}</span>
                ) : null}
              </label>
              {/**Date of Birth */}
              <label htmlFor='dateOfBirth' className='min-h-[84px] gap-[8px] flex flex-col'>
                <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E]'>Date of Birth</span>
                <input
                  placeholder=''
                  name='dateOfBirth'
                  id='dateOfBirth'
                  required
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] font-normal text-base outline-none leading-[24px] placeholder:text-[#8A8A8A] text-[#0E0E0E]'
                  type='date'
                />
                {formik.errors.dateOfBirth ? (
                  <span className='text-sm text-[#D21B34]'>{formik.errors.dateOfBirth}</span>
                ) : null}
              </label>
              {/**Phone Number */}
              <label htmlFor='phoneNumber' className='min-h-[84px] gap-[8px] flex flex-col'>
                <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E]'>Phone Number</span>
                <PhoneInputWithCountrySelect
                  value={formik.values.phoneNumber}
                  style={{ outline: 'none', background: 'transparent' }}
                  placeholder='123456789'
                  defaultCountry='US'
                  id='phoneNumber'
                  name='phoneNumber'
                  className='h-[56px] rounded-[8px] border-b-[1px] p-[16px] bg-transparent border-[#DADADA] font-normal text-base outline-none leading-[24px] placeholder:text-[#8A8A8A] text-[#0E0E0E]'
                  onChange={(value) => formik.setFieldValue('phoneNumber', value)}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.phoneNumber || formik.touched.phoneNumber ? (
                  <span className='text-sm text-[#D21B34]'>{formik.errors.phoneNumber}</span>
                ) : null}
              </label>
            </div>
          </div>

          {/** Button */}
          <button
            onClick={formik.submitForm}
            type='submit'
            className='h-[48px] md:min-h-[56px] mt-20 md:mt-0 w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]'
          >
            Verify
          </button>
        </form>
      </main>
      <SubOption isClicked={isClicked} setIsClicked={setIsClicked} />
    </GeneralDesign>
  );
};

export default AccountRecovery;
