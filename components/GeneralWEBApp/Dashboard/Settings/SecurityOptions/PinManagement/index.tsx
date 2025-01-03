/** @format */

import React, { useState } from 'react';
import RectangleComponent from '@/components/GeneralWEBApp/Dashboard/Settings/recComp';
import settingsIcon from '@/components/GeneralWEBApp/Dashboard/svgs/securityGuard.svg';
import languageIcon from '@/components/GeneralWEBApp/Dashboard/svgs/language.svg';
import styles from '@/styles/stylish.module.css';
import { useDashboardContext } from '@/contexts/DashboardContext';
import RecComponent from '../../../RecComponent';

const PinManagement = () => {
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { isPinCreatedSuccessfully } = settings.securityOptions.pinManagement;
  return (
    <div className={`w-full flex justify-center ${styles['slide-from-left']}`}>
      <div className='h-[128px] w-full md:w-[564px] flex flex-col gap-[16px]'>
        <RecComponent
          text='Pin'
          className='text-[18px]'
          onClick={() => {
            setIsClicked(!isClicked);
            setSettings({
              ...settings,
              isLanguageClicked: false,
              isSecurityOptionsClicked: false,
              setHeadingText: 'Create your 4-digit pin',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isPinManagementClicked: false,
                pinManagement: {
                  ...settings.securityOptions.pinManagement,
                  isPinClicked: true,
                },
              },
            });
            setNavMap([...navMap, 'Create Pin']);
          }}
          idLabel=''
          isClicked={
            isPinCreatedSuccessfully ? isPinCreatedSuccessfully : isClicked
          }
          textSize='text-[18px]'
        />
        <RectangleComponent
          text='Change Pin'
          onClick={() => {
            const { isChangePinClicked, isUserVerified } =
              settings.securityOptions.pinManagement;

            setSettings({
              ...settings,
              isSecurityOptionsClicked: false,
              isLanguageClicked: false,
              setHeadingText: 'Pin Management',
              setSubHeadingText: '',
              securityOptions: {
                ...settings.securityOptions,
                isPinManagementClicked: true,
                pinManagement: {
                  ...settings.securityOptions.pinManagement,
                  isChangePinClicked: true,
                  isConfirmPinClicked: false,
                  isPinClicked: false,
                },
              },
            });

            if (isUserVerified) {
              setNavMap([...navMap, 'Change Pin']);
            }
          }}
          // img={languageIcon}
        />
      </div>
    </div>
  );
};

export default PinManagement;
