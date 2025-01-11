/** @format */

'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useDashboardContext } from '@/contexts/DashboardContext';
import * as Yup from 'yup';

interface VerifiationProps {
  isClicked: boolean;
}

const Verification: FC<VerifiationProps> = ({ isClicked }) => {
  const { settings, setSettings } = useDashboardContext();
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const getRef = useRef<HTMLFormElement>(null);

  const { isPinClicked, isChangePinClicked } =
    settings.securityOptions.pinManagement;
  const { isChangePassphraseClicked } = settings.securityOptions.passPhrase;
  const {
    isChangePasswordClicked,
    isUserVerifiedforChangePassword,
    isChangeAccountRecoveryCodeClicked,
    isDeleteAccountConfirmationPageActive,
    isDeleteAccountClicked,
  } = settings.securityOptions;

  enum StatusCodes {
    SUCCESS = 200,
    BAD_REQUEST = 404,
  }

  const validationSchema = Yup.object({
    password: Yup.string().required('Please, put in your password'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsVerifying(true);
      try {
        const response = await axios.post('/api/verify', {
          password: formik.values.password,
        });
        const { SUCCESS } = StatusCodes;

        switch (response.status) {
          case SUCCESS:
            setIsVerifying(false);
            setSettings({
              ...settings,
              securityOptions: {
                ...settings.securityOptions,
                pinManagement: {
                  ...settings.securityOptions.pinManagement,
                  isUserVerified: true,
                  isChangePinClicked: false,
                },
              },
            });
            break;

          default:
            break;
        }
      } catch (err) {}
      //no api available, just for simulation
      if (settings.securityOptions.pinManagement.isChangePinClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isPinManagementClicked: false,
            pinManagement: {
              ...settings.securityOptions.pinManagement,
              isUserVerified: true,
              isChangePinClicked: false,
            },
          },
        });
      if (settings.securityOptions.passPhrase.isChangePassphraseClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isPassphraseManagement: false,
            passPhrase: {
              ...settings.securityOptions.passPhrase,
              isUserVerifiedForPassphrase: true,
              isChangePassphraseClicked: false,
            },
          },
        });

      if (settings.securityOptions.isChangePasswordClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isUserVerifiedforChangePassword: true,
            isChangePasswordClicked: false,
          },
        });

      if (isChangeAccountRecoveryCodeClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isChangeAccountRecoveryCodeClicked: false,
            isUserVerifiedForRecoveryCode: true,
          },
        });

      if (isDeleteAccountConfirmationPageActive)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isDeleteAccountConfirmationPageActive: false,
            isDeleteAccountClicked: true,
            isDeleteConfirmationPopUpActive: true,
          },
        });
    },
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (getRef.current && !getRef.current.contains(event.target as Node)) {
      if (isChangePinClicked || isPinClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            pinManagement: {
              ...settings.securityOptions.pinManagement,
              isChangePinClicked: false,
            },
          },
        });
      if (isChangePassphraseClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            passPhrase: {
              ...settings.securityOptions.passPhrase,
              isChangePassphraseClicked: false,
            },
          },
        });

      if (isChangePasswordClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isChangePasswordClicked: false,
          },
        });

      if (isChangeAccountRecoveryCodeClicked)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isChangeAccountRecoveryCodeClicked: false,
          },
        });

      if (isDeleteAccountConfirmationPageActive)
        return setSettings({
          ...settings,
          securityOptions: {
            ...settings.securityOptions,
            isDeleteAccountConfirmationPageActive: false,
            isDeleteAccountClicked: true,
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
    <form
      ref={getRef}
      method='post'
      onSubmit={formik.handleSubmit}
      className='md:w-[390px] w-full min-h-[208px] rounded-[8px] py-[24px] px-[20px] gap-[24px] flex flex-col bg-[#FFFFFF]'>
      <div className='min-h-[86px] flex flex-col gap-[16px]'>
        <h2 className='text-[18px] leading-[24px] font-medium text-center text-[#0E0E0E]'>
          Enter your Current Password
        </h2>
        <input
          type='password'
          name='password'
          id='password'
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className='min-h-[48px] gap-[8px] rounded-[8px] border-b-[1px] py-[12px] px-[16px] border-[#DADADA] text-base leading-[24px] font-normal placeholder:text-[#8A8A8A] text-[#0E0E0E] outline-none'
          placeholder='**********'
        />
        {formik.errors.password && (
          <div className='flex gap-[4px] rounded-[8px] min-h-[16px]'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM5.83859 5.96569L5.89645 5.89645C6.07001 5.72288 6.33944 5.7036 6.53431 5.83859L6.60355 5.89645L8 7.293L9.39645 5.89645C9.57001 5.72288 9.83944 5.7036 10.0343 5.83859L10.1036 5.89645C10.2771 6.07001 10.2964 6.33944 10.1614 6.53431L10.1036 6.60355L8.707 8L10.1036 9.39645C10.2771 9.57001 10.2964 9.83944 10.1614 10.0343L10.1036 10.1036C9.92999 10.2771 9.66056 10.2964 9.46569 10.1614L9.39645 10.1036L8 8.707L6.60355 10.1036C6.42999 10.2771 6.16056 10.2964 5.96569 10.1614L5.89645 10.1036C5.72288 9.92999 5.7036 9.66056 5.83859 9.46569L5.89645 9.39645L7.293 8L5.89645 6.60355C5.72288 6.42999 5.7036 6.16056 5.83859 5.96569L5.89645 5.89645L5.83859 5.96569Z'
                fill='#D21B34'
              />
            </svg>

            <span className='text-[12px] leading-[16px] font-normal text-[#D21B34]'>
              {formik.errors.password}
            </span>
          </div>
        )}
      </div>
      {/** Button */}
      <div className='w-full flex justify-end md:justify-normal'>
        <button
          type='submit'
          className={`h-[48px] w-full rounded-[8px] p-[8px] gap-[16px] bg-[#0E0E0E] text-base leading-[24px] font-medium text-[#FAF6F6]`}>
          {isVerifying ? 'Verifying...' : ' Proceed'}
        </button>
      </div>
    </form>
  ) : null;
};

export default Verification;
