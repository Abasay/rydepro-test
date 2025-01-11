/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';

const ManuallyCreatePassphrase = () => {
  const [error, setError] = useState<any>('');
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      passphrase: '',
    },
    onSubmit: async () => {
      try {
        const response = await axios.post('/api/passphrase', {
          passphrase: formik.values.passphrase,
        });
        if (response.status === 200) {
          toast.success('Password Saved');
        }
      } catch (err) {
        setError(err);
        toast.error('Sorry, something went wrong');
        console.log(error);
      }
      setSettings({
        ...settings,
        setHeadingText: 'Passphrase Management',
        securityOptions: {
          ...settings.securityOptions,
          isPassphraseManagement: true,
          passPhrase: {
            ...settings.securityOptions.passPhrase,
            isAutoGeneratePassphraseClicked: false,
            isManuallyCreatePassphraseClicked: false,
          },
        },
      });
    },
  });

  useEffect(() => {
    formik.values.passphrase !== '' ? setIsEmpty(false) : setIsEmpty(true);
  }, [isEmpty, formik.values.passphrase]);

  return (
    <form
      method='post'
      onSubmit={formik.handleSubmit}
      className={`md:w-[564px] w-full min-h-[336px] flex flex-col gap-[64px] ${styles['slide-from-bottom']}`}>
      <div className='min-h-[216px] flex flex-col gap-[24px] justify-center items-center'>
        <span className='text-base leading-[24px] font-normal text-[#555555]'>
          Passphrase is based on predefined criteria (e.g., number of words,
          inclusion of special characters and numbers), “blue-sky-apple-42”).
        </span>
        <label
          htmlFor='passphrase'
          className='min-h-[84px] w-full gap-[8px] flex flex-col'>
          <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>
            Enter Passphrase
          </span>
          <input
            type='text'
            name='passphrase'
            id='passphrase'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.passphrase}
            className='min-h-[56px] rounded-[8px] border-[1px] md:border-y-[1px] md:border-x-0 p-[16px] border-[#111111] md:border-[#DADADA] text-base leading-[24px] font-normal text-[#0E0E0E] outline-none md:text-start text-center'
            placeholder='Ball boy was born 1920'
          />
        </label>
      </div>
      {/**button */}
      <button
        title='Save Passphrase'
        type='submit'
        className={`h-[48px] md:h-[56px] rounded-[8px] p-[8px] gap-[16px] text-base leading-[24px] font-medium  ${
          isEmpty
            ? 'bg-[#8A8A8A] text-[#DADADA]'
            : 'bg-[#0E0E0E] text-[#FAF6F6]'
        }`}>
        Save Passphrase
      </button>
    </form>
  );
};

export default ManuallyCreatePassphrase;
