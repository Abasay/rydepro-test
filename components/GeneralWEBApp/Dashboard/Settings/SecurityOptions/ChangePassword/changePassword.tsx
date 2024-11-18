/** @format */

'use client';
import React from 'react';
import styles from '@/styles/stylish.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useDashboardContext } from '@/contexts/DashboardContext';

const ChangePassword = () => {
  const { settings, setSettings, setNavMap, navMap } = useDashboardContext();
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Please, put in your password')
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
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/change-password', {
          password: values.password,
        });
        if (response.status === 200) {
        }
      } catch (error) {}
      setSettings({
        ...settings,
        securityOptions: {
          ...settings.securityOptions,
          isChangePasswordClicked: false,
          isUserVerifiedforChangePassword: false,
          isConfirmPasswordPageActive: true,
        },
      });
      setNavMap([...navMap, 'Confirm Password']);
    },
  });
  return (
    <form
      method='post'
      action={''}
      onSubmit={formik.handleSubmit}
      className={`md:w-[564px] min-h-[292px] gap-[64px] flex flex-col mt-2 ${styles['slide-from-left']}`}>
      {/* <div
        onClick={() => {
          // setSettings({
          //   ...settings,
          //   setHeadingText: 'Pin Management',
          //   securityOptions: {
          //     ...settings.securityOptions,
          //     isPinManagementClicked: true,
          //     pinManagement: {
          //       ...settings.securityOptions.pinManagement,
          //       isPinClicked: false,
          //     },
          //   },
          // });
        }}
        className='md:hidden flex items-center justify-center w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z'
            fill='#111111'
          />
        </svg>
      </div> */}
      <div className='min-h-[172px] flex flex-col gap-[24px]'>
        <span className='font-normal text-base leading-[24px] text-[#555555] hidden md:inline'>
          Please enter your new password
        </span>
        <h2 className='text-center md:hidden inline text-[20px] leading-[32px] text-[#0E0E0E] font-medium'>
          Enter New Password
        </h2>
        <label
          htmlFor='password'
          className='min-h-[124px] gap-[8px] flex flex-col'>
          <span className='font-medium text-[14px] leading-[20px] text-[#0E0E0E] hidden md:inline'>
            New Password
          </span>
          <input
            type='password'
            name='password'
            id='password'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            className='min-h-[56px] rounded-[8px] border-b-[1px] p-[16px] border-[#DADADA] text-base leading-[24px] font-normal placeholder:text-[#8A8A8A] text-[#0E0E0E] outline-none'
            placeholder='**********'
          />
          <span className='flex items-start gap-[4px] min-h-[32px] rounded-[8px]'>
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
              Password should be at least 8 characters long, contain at least 1
              uppercase, 1 lowercase, & 1 special character
            </span>
          </span>
          {(formik.errors.password || formik.touched.password) && (
            <span className='text-red-600 text-sm'>
              {formik.errors.password}
            </span>
          )}
        </label>
      </div>
      <div className='flex justify-end md:justify-normal mt-[100px] md:mt-0'>
        <button
          type='submit'
          className='h-[48px] md:h-[56px] w-[138px] md:w-full float-right rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-[#FAF6F6] text-base leading-[24px] font-medium'>
          Procced
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
