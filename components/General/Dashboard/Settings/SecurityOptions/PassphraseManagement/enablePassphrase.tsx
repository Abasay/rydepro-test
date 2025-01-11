/** @format */

import React from 'react';
import RectangleComponent from '@/components/General/Dashboard/Settings/recComp';
import { useDashboardContext } from '@/contexts/DashboardContext';

const EnablePassphrase = () => {
  const { settings, setSettings, navMap, setNavMap } = useDashboardContext();
  const {} = settings.securityOptions.passPhrase;
  return (
    <section className='w-full min-h-[128px] gap-[16px] flex flex-col md:w-[564px]'>
      {/* <RectangleComponent text='' onClick={() => {}} /> */}
      <div
        onClick={() => {
          setSettings({
            ...settings,
            setHeadingText: 'Auto-Generate Passphrase',
            securityOptions: {
              ...settings.securityOptions,
              passPhrase: {
                ...settings.securityOptions.passPhrase,
                isAutoGeneratePassphraseClicked: true,
                isManuallyCreatePassphraseClicked: false,
                isChangePassphraseClicked: false,
                isUserVerifiedForPassphrase: false,
              },
            },
          });
          setNavMap([...navMap, 'Auto-Generate Passphrase']);
        }}
        className='h-[56px] w-full md:w-[564px] cursor-pointer rounded-[8px] flex justify-between items-center'
      >
        <div className='flex items-center gap-[16px]'>
          <span className='font-medium text-[18px] leading-[24px] text-[#0E0E0E]'>Auto-Generate Passphrase</span>
        </div>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.73966 7.20041C9.43613 7.48226 9.41856 7.95681 9.70041 8.26034L13.2265 12L9.70041 15.7397C9.41856 16.0432 9.43613 16.5177 9.73967 16.7996C10.0432 17.0815 10.5177 17.0639 10.7996 16.7603L14.7996 12.5103C15.0668 12.2226 15.0668 11.7774 14.7996 11.4897L10.7996 7.23966C10.5177 6.93613 10.0432 6.91856 9.73966 7.20041Z'
            fill='#8A8A8A'
          />
        </svg>
      </div>
      {/* <RectangleComponent
        text='Manually Create Passphrase'
        onClick={() => {}}
      /> */}
      <div
        onClick={() => {
          setSettings({
            ...settings,
            setHeadingText: 'Manually Create Passphrase',
            securityOptions: {
              ...settings.securityOptions,
              passPhrase: {
                ...settings.securityOptions.passPhrase,
                isAutoGeneratePassphraseClicked: false,
                isManuallyCreatePassphraseClicked: true,
                isChangePassphraseClicked: false,
                isUserVerifiedForPassphrase: false,
              },
            },
          });
          setNavMap([...navMap, 'Manually Create Passphrase']);
        }}
        className='h-[56px] w-full md:w-[564px] cursor-pointer rounded-[8px] flex justify-between items-center'
      >
        <div className='flex items-center gap-[16px]'>
          <span className='font-medium text-[18px] leading-[24px] text-[#0E0E0E]'>Manually Create Passphrase</span>
        </div>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.73966 7.20041C9.43613 7.48226 9.41856 7.95681 9.70041 8.26034L13.2265 12L9.70041 15.7397C9.41856 16.0432 9.43613 16.5177 9.73967 16.7996C10.0432 17.0815 10.5177 17.0639 10.7996 16.7603L14.7996 12.5103C15.0668 12.2226 15.0668 11.7774 14.7996 11.4897L10.7996 7.23966C10.5177 6.93613 10.0432 6.91856 9.73966 7.20041Z'
            fill='#8A8A8A'
          />
        </svg>
      </div>
    </section>
  );
};

export default EnablePassphrase;
