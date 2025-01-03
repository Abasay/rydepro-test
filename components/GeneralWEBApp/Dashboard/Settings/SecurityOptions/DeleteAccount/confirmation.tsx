/** @format */

import { useDashboardContext } from '@/contexts/DashboardContext';
import React, { FC, useEffect, useRef } from 'react';

interface ConfirmationProps {
  isClicked: boolean;
}

const Confirmation: FC<ConfirmationProps> = ({ isClicked }) => {
  const { settings, setSettings } = useDashboardContext();
  const getRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (getRef.current && !getRef.current.contains(event.target as Node)) {
      setSettings({
        ...settings,
        securityOptions: {
          ...settings.securityOptions,
          isDeleteConfirmationPopUpActive: false,
        },
      });
    }
  };

  //useEffects

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRef]);

  return isClicked ? (
    <div
      ref={getRef}
      className='md:w-[390px] min-h-[200px] rounded-[8px] py-[24px] px-[20px] gap-[24px] flex flex-col justify-center items-center bg-[#FFFFFF]'>
      <div className='min-h-[80px] gap-[8px] flex flex-col'>
        <h2 className='text-[18px] leading-[24px] text-center font-medium text-[#0E0E0E]'>
          Delete Account
        </h2>
        <span className='text-base leading-[24px] font-normal text-[#3C3C3C] text-center'>
          Are you sure you want to permanently delete your account?
        </span>
      </div>
      {/**Buttons */}
      <div className='h-[48px] w-full flex gap-[24px]'>
        <button
          type='button'
          className='rounded-[8px] border-[0.5px] p-[8px] gap-[16px] bg-[#F5F5F5] border-[#D0D0D0] text-base leading-[24px] md:w-[163px] w-1/2 font-medium text-[#0E0E0E]'>
          Cancel
        </button>
        <button
          type='button'
          className='rounded-[8px] border-[0.5px] p-[8px] gap-[16px] bg-[#D21B34] border-[#D0D0D0] text-base leading-[24px] md:w-[163px] w-1/2 font-medium text-[#FAF6F6]'>
          Delete Account
        </button>
      </div>
    </div>
  ) : null;
};

export default Confirmation;
