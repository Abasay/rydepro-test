/** @format */

'use client';
import React, { useState } from 'react';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';

const DeleteAccount = () => {
  const { setNavMap, navMap, settings, setSettings } = useDashboardContext();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    setSettings({
      ...settings,
      securityOptions: {
        ...settings.securityOptions,
        isDeleteAccountConfirmationPageActive: true,
      },
    });
  };
  return (
    <form
      method='post'
      onClick={(e: React.FormEvent) => {
        e.preventDefault();
      }}
      className={`md:w-[564px] min-h-[152px] flex flex-col gap-[48px] ${styles['slide-from-right']}`}>
      <span className='text-base leading-[24px] font-normal text-[#D21B34]'>
        Your account will be permanently deleted from our database and you will
        not be able to recover this account.
      </span>
      <div className='flex justify-end md:justify-normal mt-[100px] md:mt-0'>
        <button
          onClick={handleClick}
          title='Proceed to Delete Account'
          type='button'
          className='h-[48px] md:h-[56px] min-w-[138px] md:w-full float-right rounded-[8px] p-[8px] gap-[16px] bg-[#D21B34] text-[#FAF6F6] text-base leading-[24px] font-medium'>
          Proceed to Delete Account
        </button>
      </div>
    </form>
  );
};

export default DeleteAccount;
