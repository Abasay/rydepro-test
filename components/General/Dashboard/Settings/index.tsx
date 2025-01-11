/** @format */

'use client';
import { useDashboardContext } from '@/contexts/DashboardContext';
import React, { useEffect, useState } from 'react';
import RectangleComponent from './recComp';
import settingsIcon from '@/components/General/Dashboard/svgs/securityGuard.svg';
import languageIcon from '@/components/General/Dashboard/svgs/language.svg';
import styles from '@/styles/stylish.module.css';
import SecurityOptions from './SecurityOptions';
import PinManagement from './SecurityOptions/PinManagement';
import CreatePin from './SecurityOptions/PinManagement/CreatePin';
import ConfirmPin from './SecurityOptions/PinManagement/ConfirmPin';
import ChangePin from './SecurityOptions/PinManagement/ChangePin';
import Verification from './Verification';
import PassphraseManagement from './SecurityOptions/PassphraseManagement';
import EnablePassphrase from './SecurityOptions/PassphraseManagement/enablePassphrase';
import AutoGeneratePassphrase from './SecurityOptions/PassphraseManagement/autoGeneratePassphrase';
import ManuallyCreatePassphrase from './SecurityOptions/PassphraseManagement/createPassphrase';
import ChangePassword from './SecurityOptions/ChangePassword/changePassword';
import ConfirmPassword from './SecurityOptions/ChangePassword/ConfirmPassword';
import AccountRecovery from './SecurityOptions/AccountRecovery/accountRecovery';
import ConfirmAccountCodeRecovery from './SecurityOptions/AccountRecovery/confirmAccountCodeRecovery';
import DeleteAccount from './SecurityOptions/DeleteAccount';

const Settings = () => {
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const dynamicRenderingFunction = () => {
    // Default goBackHandler
    let goBackHandler = () => {
      setSettings({ ...settings, isSettingsClicked: false });
    };

    const { isSecurityOptionsClicked, isLanguageClicked, securityOptions } = settings;
    const {
      isPinManagementClicked,
      pinManagement,
      isPassphraseManagement,
      passPhrase,
      isChangePasswordClicked,
      isChangeAccountRecoveryCodeClicked,
      isConfirmAccountRecoveryCodePageActive,
      isUserVerifiedForRecoveryCode,
      isDeleteAccountClicked,
      isUserVerifiedforChangePassword,
      isConfirmPasswordPageActive,
    } = securityOptions;
    const { isPinClicked, isConfirmPinClicked, isChangePinClicked, isUserVerified } = pinManagement;

    /**Pin Routing */
    if (isSecurityOptionsClicked) {
      goBackHandler = () => setSettings({ ...settings, isSecurityOptionsClicked: false });
      return { component: <SecurityOptions />, goBackHandler };
    }
    if (isLanguageClicked) {
      goBackHandler = () => setSettings({ ...settings, isLanguageClicked: false });
      return { component: <p>Language</p>, goBackHandler };
    }
    if (isPinManagementClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Security',
          setSubHeadingText: 'Enable one option from each of the following layers',
          isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isPinManagementClicked: false,
          },
        });
      return { component: <PinManagement />, goBackHandler };
    }

    if (isPinClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Pin Management',
          setSubHeadingText: '',
          securityOptions: {
            ...securityOptions,
            isPinManagementClicked: true,
            pinManagement: { ...pinManagement, isPinClicked: false },
          },
        });
      return { component: <CreatePin />, goBackHandler };
    }
    if (isConfirmPinClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          securityOptions: {
            ...securityOptions,
            pinManagement: {
              ...pinManagement,
              isConfirmPinClicked: false,
              isChangePinClicked: true,
            },
          },
        });
      return { component: <ConfirmPin />, goBackHandler };
    }
    if (isUserVerified) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Pin Management',
          setSubHeadingText: '',
          securityOptions: {
            ...securityOptions,
            isPinManagementClicked: true,
            pinManagement: { ...pinManagement, isUserVerified: false },
          },
        });
      return { component: <ChangePin />, goBackHandler };
    }

    /**Passphrase Routing */
    const { isUserVerifiedForPassphrase, isAutoGeneratePassphraseClicked, isManuallyCreatePassphraseClicked } =
      passPhrase;
    if (isPassphraseManagement) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Security',
          setSubHeadingText: 'Enable one option from each of the following layers',
          isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isPassphraseManagement: false,
          },
        });
      return { component: <PassphraseManagement />, goBackHandler };
    }
    if (isUserVerifiedForPassphrase) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          securityOptions: {
            ...securityOptions,
            isPassphraseManagement: true,
            passPhrase: { ...passPhrase, isUserVerifiedForPassphrase: false },
          },
        });
      return { component: <EnablePassphrase />, goBackHandler };
    }

    if (isAutoGeneratePassphraseClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          securityOptions: {
            ...securityOptions,
            passPhrase: {
              ...passPhrase,
              isAutoGeneratePassphraseClicked: false,
              isUserVerifiedForPassphrase: true,
            },
          },
        });
      return { component: <AutoGeneratePassphrase />, goBackHandler };
    }
    if (isManuallyCreatePassphraseClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          securityOptions: {
            ...securityOptions,
            passPhrase: {
              ...passPhrase,
              isManuallyCreatePassphraseClicked: false,
              isUserVerifiedForPassphrase: true,
            },
          },
        });
      return { component: <ManuallyCreatePassphrase />, goBackHandler };
    }

    /**Change Password */
    if (isUserVerifiedforChangePassword) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Security',
          setSubHeadingText: 'Enable one option from each of the following layers',
          isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isUserVerifiedforChangePassword: false,
          },
        });
      return { component: <ChangePassword />, goBackHandler };
    }
    if (isConfirmPasswordPageActive) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          securityOptions: {
            ...securityOptions,
            isConfirmPasswordPageActive: false,
            isUserVerifiedforChangePassword: true,
          },
        });
      return { component: <ConfirmPassword />, goBackHandler };
    }

    //Change Recovery Code
    if (isUserVerifiedForRecoveryCode) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Security',
          setSubHeadingText: 'Enable one option from each of the following layers',
          isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isUserVerifiedForRecoveryCode: false,
          },
        });
      return { component: <AccountRecovery />, goBackHandler };
    }
    if (isConfirmAccountRecoveryCodePageActive) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          // setHeadingText: 'Security',
          // setSubHeadingText:
          //   'Enable one option from each of the following layers',
          // isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isConfirmAccountRecoveryCodePageActive: false,
            isUserVerifiedForRecoveryCode: true,
          },
        });
      return { component: <ConfirmAccountCodeRecovery />, goBackHandler };
    }
    //Delete Account
    if (isDeleteAccountClicked) {
      goBackHandler = () =>
        setSettings({
          ...settings,
          setHeadingText: 'Security',
          setSubHeadingText: 'Enable one option from each of the following layers',
          isSecurityOptionsClicked: true,
          securityOptions: {
            ...securityOptions,
            isDeleteAccountClicked: false,
          },
        });
      return { component: <DeleteAccount />, goBackHandler };
    }

    //default
    return { component: <SettingsHome />, goBackHandler };
  };

  const onDeviceChange = () => {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  };

  //useEffects
  useEffect(() => {
    onDeviceChange();

    isMobile
      ? setSettings({
          ...settings,
          setSubHeadingText: 'Enable one option from each of the following layers',
        })
      : setSettings({
          ...settings,
          setSubHeadingText: 'Enable both layers of Security',
        });
    window.addEventListener('resize', onDeviceChange);
    return () => window.removeEventListener('resize', onDeviceChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <section
      className={`flex flex-col gap-[16px] py-[10px] md:py-[45px] px-[15px] md:p-[45px] md:items-center md:justify-center ${styles['slide-from-top']}`}
    >
      <div className={`w-full md:min-w-[700px] min-h-[40px] gap-[10px] flex flex-col ${styles['slide-from-left']}`}>
        {/**nav */}
        <div className='md:flex gap-[8px] hidden items-center'>
          {navMap.length !== 0 && (
            <div className='flex gap-2 items-center'>
              <span
                onClick={() => {
                  setSettings({
                    ...settings,
                    isSettingsClicked: true,
                    isLanguageClicked: false,
                    isSecurityOptionsClicked: false,
                    setSubHeadingText: '',
                    setHeadingText: 'Settings',
                    securityOptions: {
                      ...settings.securityOptions,
                      isPinManagementClicked: false,
                      isPassphraseManagement: false,
                      pinManagement: {
                        ...settings.securityOptions.pinManagement,
                        isPinClicked: false,
                        isConfirmPinClicked: false,
                        isChangePinClicked: false,
                        isUserVerified: false,
                      },
                    },
                  });
                  setNavMap([]);
                }}
                className='text-[14px] cursor-pointer leading-[20px] font-normal text-[#8A8A8A]'
              >
                Settings
              </span>
            </div>
          )}
          {navMap.map((text, idx) => (
            <div className='flex gap-2' key={idx}>
              <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.96967 3.21967C6.67678 3.51256 6.67678 3.98744 6.96967 4.28033L11.6893 9L6.96967 13.7197C6.67678 14.0126 6.67678 14.4874 6.96967 14.7803C7.26256 15.0732 7.73744 15.0732 8.03033 14.7803L13.2803 9.53033C13.5732 9.23744 13.5732 8.76256 13.2803 8.46967L8.03033 3.21967C7.73744 2.92678 7.26256 2.92678 6.96967 3.21967Z'
                  fill='#DADADA'
                />
              </svg>
              <span
                onClick={() => {
                  setSettings({ ...settings });
                }}
                className={`text-[14px]  ${
                  navMap[navMap.length - 1] === 'Delete Account' ? 'text-[#D21B34]' : 'text-[#8A8A8A]'
                } leading-[20px] font-normal ${
                  navMap[navMap.length - 1] === text ? 'text-[#0E0E0E]' : 'text-[#8A8A8A]'
                }`}
                key={idx}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-[4px]'>
          {/**Go Back Icon */}
          <div
            onClick={() => {
              dynamicRenderingFunction().goBackHandler();
            }}
            className='md:hidden flex items-center justify-center w-[48px] h-[48px] rounded-[64px] py-[5px] px-[3px] gap-[8px] bg-[#FCFCFC] shadow-md mb-2'
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z'
                fill='#111111'
              />
            </svg>
          </div>
          <h2
            className={`text-[20px] md:text-[24px] leading-[32px] font-medium ${
              settings.setHeadingText === 'Delete Account' ? 'text-[#D21B34]' : 'text-[#2B2B2B]'
            }  ${settings.securityOptions.pinManagement.isUserVerified ? 'hidden md:inline' : 'inline'}`}
          >
            {settings.setHeadingText}
          </h2>
          <span className={`text-base leading-[24px] font-normal text-[#555555]`}>{settings.setSubHeadingText}</span>
        </div>
      </div>

      {/**body */}
      {dynamicRenderingFunction()?.component}
    </section>
  );
};

const SettingsHome = () => {
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  return (
    <div className='w-full flex justify-center'>
      <div className='h-[128px] w-full md:w-[564px] flex flex-col gap-[16px]'>
        <RectangleComponent
          text='Security Options'
          onClick={() => {
            setNavMap([...navMap, 'Security Options']);
            setSettings({
              ...settings,
              isSecurityOptionsClicked: true,
              isLanguageClicked: false,
              setSubHeadingText: 'Enable both layers of Security',
              setHeadingText: 'Security',
            });
          }}
          img={settingsIcon}
        />
        <RectangleComponent
          text='Language'
          onClick={() => {
            setNavMap([...navMap, 'Language']);
            setSettings({
              ...settings,
              isSecurityOptionsClicked: true,
              isLanguageClicked: false,
            });
          }}
          img={languageIcon}
        />
      </div>
    </div>
  );
};

export default Settings;
