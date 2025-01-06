/** @format */

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/stylish.module.css';
import axios from 'axios';
import { useDashboardContext } from '@/contexts/DashboardContext';

const ConfirmAccountCodeRecovery = () => {
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
        // First API call to validate the recovery code
        const response = await axios.post('/api/change-recovery-code');
        if (response.data?.recoveryCode !== values.recoveryCode) {
          setError('Invalid recovery code');
          return;
        }

        // Second API call to confirm the recovery code
        const sendData = await axios.post('/api/confirm-recovery-code', {
          confirmCode: values.recoveryCode,
        });

        if (sendData.status === 200) {
          console.log('Recovery Code Changed Successfully');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred. Please try again.');
      }
      setSettings({
        ...settings,
        isSecurityOptionsClicked: true,
        setHeadingText: 'Security',
        setSubHeadingText: 'Enable both layers of Security',
        securityOptions: {
          ...settings.securityOptions,
          isUserVerifiedForRecoveryCode: false,
          isConfirmAccountRecoveryCodePageActive: false,
        },
      });
      navMap.pop();
    },
  });
  return (
    <form
      method='post'
      action={''}
      onSubmit={formik.handleSubmit}
      className={`min-h-[204px] flex flex-col gap-[64px] md:w-[564px] w-full ${styles['slide-from-left']}`}>
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
        {formik.errors.recoveryCode || formik.touched.recoveryCode ? (
          <span className='text-sm text-red-500'>
            {formik.errors.recoveryCode}
          </span>
        ) : null}
      </label>
      <button
        type='submit'
        className='md:h-[56px] h-[48px] rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-[#FAF6F6] text-base leading-[24px] font-medium'>
        Save
      </button>
    </form>
  );
};

export default ConfirmAccountCodeRecovery;
