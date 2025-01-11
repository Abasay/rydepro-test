/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/General/Dashboard/Sidebar/sidebar';
import Header from '@/components/General/Dashboard/header/header';
import { useDashboardContext } from '@/contexts/DashboardContext';
import Image from 'next/image';
import guard from '@/components/admin/Dashboard/svgs/guard.svg';
import arrowRight from '@/components/admin/Dashboard/svgs/arrowRight.svg';
import Settings from '@/components/General/Dashboard/Settings/index';
import Verification from './Settings/Verification';
import styles from '@/styles/stylish.module.css';
import Confirmation from './Settings/SecurityOptions/DeleteAccount/confirmation';

const Dashboard = () => {
  const { settings, setSettings } = useDashboardContext();

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <React.Fragment>
      <section
        className={`w-full bg-[#FEFEFE] min-h-[100vh] flex filter transition duration-500 ${
          settings.securityOptions.pinManagement.isChangePinClicked ||
          settings.securityOptions.passPhrase.isChangePassphraseClicked ||
          settings.securityOptions.isChangePasswordClicked ||
          settings.securityOptions.isChangeAccountRecoveryCodeClicked ||
          settings.securityOptions.isDeleteAccountConfirmationPageActive ||
          settings.securityOptions.isDeleteConfirmationPopUpActive
            ? 'brightness-75'
            : 'brightness-100'
        }`}
      >
        <div className='w-full flex min-h-[1024px] border'>
          <Sidebar />
          <div className='w-full flex flex-col'>
            <Header />
            {settings.isSettingsClicked && <Settings />}
          </div>
        </div>
      </section>
      {/**pop up */}
      {settings.securityOptions.pinManagement.isChangePinClicked && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-left']}`}
        >
          {settings.securityOptions.pinManagement.isChangePinClicked && (
            <Verification isClicked={settings.securityOptions.pinManagement.isChangePinClicked} />
          )}
        </div>
      )}
      {settings.securityOptions.passPhrase.isChangePassphraseClicked && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-bottom']}`}
        >
          {settings.securityOptions.passPhrase.isChangePassphraseClicked && (
            <Verification isClicked={settings.securityOptions.passPhrase.isChangePassphraseClicked} />
          )}
        </div>
      )}
      {settings.securityOptions.isChangePasswordClicked && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-top']}`}
        >
          {settings.securityOptions.isChangePasswordClicked && (
            <Verification isClicked={settings.securityOptions.isChangePasswordClicked} />
          )}
        </div>
      )}
      {settings.securityOptions.isChangeAccountRecoveryCodeClicked && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-left']}`}
        >
          {settings.securityOptions.isChangeAccountRecoveryCodeClicked && (
            <Verification isClicked={settings.securityOptions.isChangeAccountRecoveryCodeClicked} />
          )}
        </div>
      )}
      {settings.securityOptions.isDeleteAccountConfirmationPageActive && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-right']}`}
        >
          {settings.securityOptions.isDeleteAccountConfirmationPageActive && (
            <Verification isClicked={settings.securityOptions.isDeleteAccountConfirmationPageActive} />
          )}
        </div>
      )}
      {settings.securityOptions.isDeleteConfirmationPopUpActive && (
        <div
          className={`w-full justify-center absolute top-0 min-h-[100vh] px-4 items-center flex ${styles['slide-from-bottom']}`}
        >
          {settings.securityOptions.isDeleteConfirmationPopUpActive && (
            <Confirmation isClicked={settings.securityOptions.isDeleteConfirmationPopUpActive} />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
