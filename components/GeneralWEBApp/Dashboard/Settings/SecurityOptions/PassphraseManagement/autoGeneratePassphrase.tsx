/** @format */

'use client';
import React, { useState } from 'react';
import { randomPassphrase } from './data';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';

const AutoGeneratePassphrase = () => {
  const [passPhrase, setPassphrase] = useState<string>('');
  const [error, setError] = useState<any>('');
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();

  const formik = useFormik({
    initialValues: {
      passphrase: passPhrase || '',
    },
    onSubmit: async () => {
      try {
        const response = await axios.post('/api/passphrase', {
          passphrase: passPhrase,
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
          },
        },
      });
    },
  });

  const generatePassphrase = () => {
    const randomIndex = Math.floor(Math.random() * randomPassphrase['length']);
    setPassphrase(randomPassphrase[randomIndex]);
  };
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
          htmlFor='generatePassphrase'
          className='min-h-[84px] w-full gap-[8px] flex flex-col'>
          <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>
            Generated Passphrase
          </span>
          <input
            type='text'
            disabled
            value={passPhrase}
            className='min-h-[56px] rounded-[8px] border-[1px] md:border-y-[1px] md:border-x-0 p-[16px] border-[#111111] md:border-[#DADADA] text-base leading-[24px] font-normal text-[#0E0E0E] outline-none cursor-not-allowed md:text-start text-center'
            placeholder='Ball boy was born 1920'
          />
        </label>
        <button
          type='button'
          onClick={generatePassphrase}
          title='Regenerate'
          className='w-[105px] h-[36px] rounded-[8px] border-[0.5px] py-[2px] px-[16px] gap-[16px] bg-[#F5F5F5] border-[#D0D0D0] text-[#0E0E0E] text-[14px] leading-[20px] font-medium'>
          Regenerate
        </button>
      </div>
      {/**button */}
      <button
        title='Save Passphrase'
        type='submit'
        className='h-[48px] md:h-[56px] rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]'>
        Save Passphrase
      </button>
    </form>
  );
};

export default AutoGeneratePassphrase;
