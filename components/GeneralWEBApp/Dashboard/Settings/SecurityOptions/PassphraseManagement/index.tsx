/** @format */

import React, { useState } from 'react';
import RectangleComponent from '@/components/GeneralWEBApp/Dashboard/Settings/recComp';
import settingsIcon from '@/components/GeneralWEBApp/Dashboard/svgs/securityGuard.svg';
import languageIcon from '@/components/GeneralWEBApp/Dashboard/svgs/language.svg';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';
import RecComponent from '../../../RecComponent';

const PassphraseManagement = () => {
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { isPinCreatedSuccessfully } = settings.securityOptions.pinManagement;
  return (
    <div className={`w-full flex justify-center ${styles['slide-from-left']}`}>
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
        className='md:hidden flex items-center justify-center absolute -top-[120px] left-0 w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md'>
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
      {/**heading */}
      {/* <h2 className='md:hidden flex items-center justify-center absolute top-0 text-[#0E0E0E] font-medium text-[18px] leading-[24px]'>
        Reset Password
      </h2> */}
      <div className='h-[128px] w-full md:w-[564px] flex flex-col gap-[16px]'>
        <RecComponent
          text='Passphrase'
          className='text-[18px]'
          onClick={() => {
            setIsClicked(!isClicked);
            setSettings({
              ...settings,
              isLanguageClicked: false,
              isSecurityOptionsClicked: false,
              setHeadingText: 'Passphrase Management',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isPinManagementClicked: false,
                isPassphraseManagement: true,
                passPhrase: {
                  ...settings.securityOptions.passPhrase,
                },
              },
            });
            // setNavMap([...navMap, 'Passphrase Management']);
          }}
          idLabel=''
          isClicked={
            isPinCreatedSuccessfully ? isPinCreatedSuccessfully : isClicked
          }
          textSize='text-[18px]'
        />
        <RectangleComponent
          text='Change Passphrase'
          onClick={() => {
            const { isChangePinClicked, isUserVerified } =
              settings.securityOptions.pinManagement;

            setSettings({
              ...settings,
              isSecurityOptionsClicked: false,
              isLanguageClicked: false,
              setHeadingText: 'Passphrase Management',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isPinManagementClicked: false,
                isPassphraseManagement: true,
                passPhrase: {
                  ...settings.securityOptions.passPhrase,
                  isChangePassphraseClicked: true,
                },
              },
            });

            if (isUserVerified) {
              setNavMap([...navMap, 'Change Passphrase']);
            }
          }}
          // img={languageIcon}
        />
      </div>
    </div>
  );
};

export default PassphraseManagement;
