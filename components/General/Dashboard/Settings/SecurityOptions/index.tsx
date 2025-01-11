/** @format */

'use client';
import React, { useState } from 'react';
import RecComponent from '@/components/General/Dashboard/RecComponent';
import RectangleComponent from '@/components/General/Dashboard/Settings/recComp';
import styles from '@/styles/stylish.module.css';
import trash from '@/components/General/Dashboard/svgs/trash.svg';
import Image from 'next/image';
import { useDashboardContext } from '@/contexts/DashboardContext';

const SecurityOptions = () => {
  const [securityOptions, setSecurityOptions] = useState<{
    fingerID: boolean;
    faceID: boolean;
  }>({
    fingerID: false,
    faceID: false,
  });
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();

  return (
    <div className={`md:w-[564px] w-full min-h-[754px] mt-4 gap-[24px] flex flex-col ${styles['slide-from-bottom']}`}>
      {/**First Layer Security Options */}
      <div className='min-h-[188px] gap-[16px] flex flex-col'>
        <span className='font-normal text-base text-[#555555] leading-[24px]'>First Layer Security Option</span>
        <div className='gap-[8px] flex items-start flex-col'>
          <RecComponent
            text='Face ID'
            onClick={() => {
              setSecurityOptions({
                ...securityOptions,
                faceID: !securityOptions.faceID,
              });
            }}
            isClicked={securityOptions.faceID}
            idLabel=''
          />
          <span className='text-[14px] leading-[20px] font-normal text-[#555555] px-[16px]'>Or</span>
          <RecComponent
            text='Finger ID'
            onClick={() => {
              setSecurityOptions({
                ...securityOptions,
                fingerID: !securityOptions.fingerID,
              });
            }}
            isClicked={securityOptions.fingerID}
            idLabel=''
          />
        </div>
      </div>
      {/**Second Layer Security Options */}
      <div className='min-h-[188px] w-full gap-[16px] flex flex-col'>
        <span className='font-normal text-base text-[#555555] leading-[24px]'>Second Layer Security Option</span>
        <div className='gap-[8px] flex items-start flex-col'>
          <RectangleComponent
            text='Pin'
            onClick={() => {
              setSettings({
                ...settings,
                isSecurityOptionsClicked: false,
                setHeadingText: 'Pin Management',
                setSubHeadingText: '',
                securityOptions: {
                  ...settings.securityOptions,
                  isPinManagementClicked: true,
                  isPassphraseManagement: false,
                },
              });
              setNavMap([...navMap, 'Pin Management']);
            }}
          />
          <span className='text-[14px] leading-[20px] font-normal text-[#555555] px-[16px]'>Or</span>
          <RectangleComponent
            text='Passphrase'
            onClick={() => {
              setSettings({
                ...settings,
                isSecurityOptionsClicked: false,
                setHeadingText: 'Passphrase Management',
                setSubHeadingText: '',
                securityOptions: {
                  ...settings.securityOptions,
                  isPinManagementClicked: false,
                  isPassphraseManagement: true,
                  // passPhrase: {
                  //   ...settings.securityOptions.passPhrase,
                  //   isChangePassphraseClicked: false,
                  // },
                },
              });
              setNavMap([...navMap, 'Passphrase Management']);
            }}
          />
        </div>
      </div>
      <div className='min-h-[320px] gap-[16px] flex flex-col border-t-[1px] pt-6'>
        <RectangleComponent
          text='Change Password'
          onClick={() => {
            setSettings({
              ...settings,
              isSecurityOptionsClicked: false,
              setHeadingText: 'Change Password',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isChangePasswordClicked: true,
                isUserVerifiedforChangePassword: false,
              },
            });
            setNavMap([...navMap, 'Change Password']);
          }}
        />
        <RectangleComponent
          text='Change Account Recovery Code'
          onClick={() => {
            setSettings({
              ...settings,
              isSecurityOptionsClicked: false,
              setHeadingText: 'Change Account Recovery Code',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isChangeAccountRecoveryCodeClicked: true,
                isUserVerifiedForRecoveryCode: false,
              },
            });
            setNavMap([...navMap, 'Change Account Recovery Code']);
          }}
        />
        <div
          // title={text}
          // onClick={onClick}
          className='h-[56px] md:w-[564px] w-full cursor-pointer rounded-[8px] mt-4 flex justify-between p-[16px] items-center'
        >
          <div className='flex items-center gap-[16px]'>
            <div className='flex flex-col gap-[4px]'>
              <span className='font-medium text-[18px] leading-[24px] text-[#0E0E0E]'>Manage Devices</span>
              <span className='text-base leading-[24px] font-normal text-[#3C3C3C]'>
                List of devices where you&apos;re logged in
              </span>
            </div>
          </div>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9.73966 7.20041C9.43613 7.48226 9.41856 7.95681 9.70041 8.26034L13.2265 12L9.70041 15.7397C9.41856 16.0432 9.43613 16.5177 9.73967 16.7996C10.0432 17.0815 10.5177 17.0639 10.7996 16.7603L14.7996 12.5103C15.0668 12.2226 15.0668 11.7774 14.7996 11.4897L10.7996 7.23966C10.5177 6.93613 10.0432 6.91856 9.73966 7.20041Z'
              fill='#8A8A8A'
            />
          </svg>
        </div>
        <div
          title={'Delete account'}
          // onClick={onClick}
          className='min-h-[56px] mt-2 border-t-[1px] w-full md:w-[564px] cursor-pointer rounded-[8px] py-[30px] flex justify-between px-[16px] items-center'
        >
          <div
            onClick={() => {
              setSettings({
                ...settings,
                setHeadingText: 'Delete Account',
                setSubHeadingText: '',
                isSecurityOptionsClicked: false,
                securityOptions: {
                  ...settings.securityOptions,
                  isDeleteAccountClicked: true,
                },
              });
              setNavMap([...navMap, 'Delete Account']);
            }}
            className='flex items-center gap-[16px]'
          >
            <div className='flex items-center gap-[16px]'>
              <Image src={trash} alt='' width={48} height={48} className='w-[48px] h-[48px]' />
              <span className='text-[18px] leading-[24px] font-medium text-[#D21B34]'>Delete account</span>
            </div>
          </div>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9.73966 7.20041C9.43613 7.48226 9.41856 7.95681 9.70041 8.26034L13.2265 12L9.70041 15.7397C9.41856 16.0432 9.43613 16.5177 9.73967 16.7996C10.0432 17.0815 10.5177 17.0639 10.7996 16.7603L14.7996 12.5103C15.0668 12.2226 15.0668 11.7774 14.7996 11.4897L10.7996 7.23966C10.5177 6.93613 10.0432 6.91856 9.73966 7.20041Z'
              fill='#8A8A8A'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SecurityOptions;
