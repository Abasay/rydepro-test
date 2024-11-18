/** @format */

'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/stylish.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import lockIcon from '@/components/GeneralWEBApp/Dashboard/svgs/lock.svg';
import Image from 'next/image';
import { useDashboardContext } from '@/contexts/DashboardContext';

const ConfirmPin = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<any>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { settings, setSettings } = useDashboardContext();

  const validationSchema = Yup.object({
    confirmpin: Yup.array()
      .of(
        Yup.string()
          .matches(/^[0-9]$/, 'Only numbers allowed')
          .required('Required')
      )
      .min(4, 'Enter all 4 digits')
      .max(4, 'Enter all 4 digits'),
  });

  const formik = useFormik({
    initialValues: {
      confirmpin: ['', '', '', ''],
    },
    validationSchema,
    onSubmit: async (values) => {
      setSettings({
        ...settings,
        setHeadingText: 'Pin Management',
        setSubHeadingText: '',
        securityOptions: {
          ...settings.securityOptions,
          isPinManagementClicked: true,
          pinManagement: {
            ...settings.securityOptions.pinManagement,
            isPinClicked: false,
            isConfirmPinClicked: false,
            isPinCreatedSuccessfully: true,
          },
        },
      });
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

    formik.setFieldValue(`confirmpin[${idx}]`, value);

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

  const onDeviceChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  //useEffects
  useEffect(() => {
    onDeviceChange();
    window.addEventListener('resize', onDeviceChange);
    return () => window.removeEventListener('resize', onDeviceChange);
  }, [isMobile]);

  return (
    <form
      method='post'
      onClick={formik.handleSubmit}
      className={`${styles['slide-from-bottom']} min-h-[176px] md:w-[518px] w-full flex flex-col gap-[64px]`}
    >
      <div className='flex md:hidden flex-col min-h-[125px] items-center justify-center gap-[30px]'>
        <Image
          src={lockIcon}
          alt=''
          width={63}
          height={63}
          className='w-[63px] h-[63px]'
        />
        <h2 className='text-[20px] leading-[32px] text-[#0E0E0E] font-medium'>
          Confirm your 4-digit Pin
        </h2>
      </div>
      <div className='flex justify-center md:relative gap-[24px] px-[20px] md:mt-10'>
        {formik.values.confirmpin.map((_, idx) => (
          <input
            key={idx}
            ref={(el: any) => (inputsRef.current[idx] = el)}
            className='focus-within:outline-none h-[56px] md:w-[56px] text-[#111111] placeholder:text-[#111111] rounded-[4px] text-[20px] border-y-[1px] md:border-b-[1px] bg-transparent border-[#8A8A8A] gap-[8px]  text-center font-[500]'
            maxLength={1}
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            placeholder='*'
            value={formik.values.confirmpin[idx]}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
      {/** Button */}
      <div className='w-full flex justify-end md:justify-normal'>
        <button
          type='submit'
          className={`h-[48px] md:h-[56px] md:mt-4 w-[138px] md:w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6] ${
            isMobile ? 'mt-20' : 'mt-0'
          }`}
        >
          {isMobile ? 'Next' : 'Proceed'}
        </button>
      </div>
    </form>
  );
};

export default ConfirmPin;
