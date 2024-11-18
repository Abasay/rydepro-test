/** @format */

'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/stylish.module.css';
import axios from 'axios';
import { useDashboardContext } from '@/contexts/DashboardContext';

const AccountRecovery = () => {
  const [error, setError] = useState<any>('');
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();

  const validationSchema = Yup.object({
    recoveryCode: Yup.string()
      .required('Please, input your recovery code')
      .min(8, 'Password should be at least 8 chararcters long')
      .matches(/[A-Z]/, 'Password should contain at least 1 uppercase')
      .matches(/[a-z]/, 'Password should contain at least 1 lowercase')
      .matches(
        /[@$!%*?&#]/,
        'Password should contain at least a special character'
      ),
  });
  const formik = useFormik({
    initialValues: {
      recoveryCode: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/change-recovery-code', {
          recoveryCode: values.recoveryCode,
        });
        if (response.status === 200) {
          console.log('Recovery code changed successfully');
        }
      } catch (err) {
        console.error(err);
        setError(err);
      }
      setSettings({
        ...settings,
        setHeadingText: 'Confirm your Account Recovery Code',
        securityOptions: {
          ...settings.securityOptions,
          isUserVerifiedForRecoveryCode: false,
          isConfirmAccountRecoveryCodePageActive: true,
        },
      });
      // setNavMap([...navMap, 'Confirm your Account Recovery Code']);
    },
  });
  return (
    <form
      method='post'
      action={''}
      onSubmit={formik.handleSubmit}
      className={`md:w-[564px] min-h-[420px] gap-[64px] flex flex-col mt-6 ${styles['slide-from-right']}`}>
      <div className='gap-[24px] flex flex-col min-h-[300px]'>
        <span className='font-normal text-base leading-[24px] text-[#555555]'>
          To keep your account secure, set up a recovery code. You&apos;ll need
          this code if you lose access to your account.
        </span>
        <div className='flex flex-col'>
          <span className='font-normal text-base leading-[24px] text-[#555555]'>
            Instructions:
          </span>
          <ol className='font-normal text-base leading-[24px] text-[#555555] list-decimal list-inside'>
            <li>Create a code you can remember.</li>
            <li>Store it safely.</li>
            <li>Use this code to regain access if needed.</li>
          </ol>
          <label
            htmlFor='recoveryCode'
            className='mt-8 min-h-[108px] gap-[8px] flex flex-col'>
            <span className='text-[14px] font-medium leading-[20px] text-[#0E0E0E]'>
              Account Recovery Code
            </span>
            <input
              type='password'
              name='recoveryCode'
              id='recoveryCode'
              value={formik.values.recoveryCode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder='**********'
              className='min-h-[56px] rounded-[8px] border-b-[1px] p-[16px] border-[#DADADA] text-base leading-[24px] font-normal placeholder:text-[#8A8A8A] text-[#0E0E0E] outline-none'
            />
            <span className='flex items-center gap-[4px] rounded-[8px] min-h-[16px]'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8 7C8.27614 7 8.5 7.22386 8.5 7.5V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V7.5C7.5 7.22386 7.72386 7 8 7ZM8.00001 6.24907C8.41369 6.24907 8.74905 5.91371 8.74905 5.50003C8.74905 5.08635 8.41369 4.751 8.00001 4.751C7.58633 4.751 7.25098 5.08635 7.25098 5.50003C7.25098 5.91371 7.58633 6.24907 8.00001 6.24907ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3Z'
                  fill='#111111'
                />
              </svg>
              <span className='text-[12px] leading-[16px] font-normal text-[#3C3C3C]'>
                Use 8-12 characters with uppercase, lowercase, numbers, and
                special characters (e.g., A1b2C3d4!).
              </span>
            </span>
            {formik.errors.recoveryCode || formik.touched.recoveryCode ? (
              <span className='text-sm text-red-500'>
                {formik.errors.recoveryCode}
              </span>
            ) : null}
          </label>
        </div>
      </div>
      <button
        type='submit'
        className='md:h-[56px] h-[48px] rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-[#FAF6F6] text-base leading-[24px] font-medium'>
        Next
      </button>
    </form>
  );
};

export default AccountRecovery;
