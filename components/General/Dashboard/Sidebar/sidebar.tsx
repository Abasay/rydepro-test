/** @format */

'use client';
import Image from 'next/image';
import React, { useReducer, useState } from 'react';
import RydeProLogo from '@/public/assets/RydeproLogo.png';
import barsIcon from '@/components/General/Dashboard/svgs/bars.svg';
import settingsIcon from '@/components/General/Dashboard/svgs/settings.svg';
import roundedBars from '@/components/General/Dashboard/svgs/roundedBars.svg';
import { useDashboardContext } from '@/contexts/DashboardContext';
import styles from '@/styles/stylish.module.css';
import { sideBarFirstSection } from '@/components/General/Dashboard/Sidebar/data';
import { Reducer } from '@/components/General/Dashboard/Sidebar/reducer';

type State = string[];

const Sidebar = () => {
  const initialState: { activeLink: string | null } = { activeLink: null };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { settings, setSettings } = useDashboardContext();

  const handleClick = (text: string, headType: string) => {
    const payload = { text, headType };
    dispatch({ type: 'SET_ACTIVE_LINK', payload });
  };

  return (
    <aside
      className={`min-w-[240px] mmin-h-[1024px] border-r-[1px] border-b-[1px] pb-[32px] gap-[32px] hidden md:flex flex-col border-[#F1F1F1] ${styles['slide-from-left']}`}
    >
      <section className='flex flex-col'>
        <div className='h-[100px] border-r-[1px] border-b-[1px]  flex gap-[32px] justify-center items-center'>
          <Image src={RydeProLogo} alt='' width={78} height={64} className='h-[70px] w-[77.42px]' />
        </div>
        <div className='min-h-[860px] pb-[48px] flex flex-col justify-between mt-10'>
          <Image
            src={roundedBars}
            alt=''
            width={32}
            height={32}
            className='w-[32px] h-[32px] absolute ml-[225px] -mt-[30px] z-10'
          />
          <div className='flex flex-col gap-[8px]'>
            {sideBarFirstSection.map((item, idx) => {
              if (idx <= 3) {
                return (
                  <div title={item.header} className='gap-[4px] cursor-pointer flex flex-col' key={idx}>
                    <span className='text-[14px] px-[12px] font-normal leading-[20px] text-[#8A8A8A]'>
                      {item.header}
                    </span>
                    <div className='flex flex-col'>
                      <div className='min-h-[56px] cursor-pointer flex flex-col'>
                        {item?.subHeader?.map((subItem, sub_idx) => (
                          <div
                            title={subItem.title}
                            key={sub_idx}
                            onClick={() => {
                              handleClick(subItem.title, 'subItem');
                            }}
                            className='flex items-center gap-[8px] py-[16px] px-[24px]'
                          >
                            <Image src={subItem.icon} width={24} height={24} alt='' className='w-[24px] h-[24px]' />
                            <span
                              className={`text-bae leading-[24px] font-normal ${
                                state.activeLink === subItem.title ? 'text-[#0E0E0E]' : 'text-[#8A8A8A]'
                              }`}
                            >
                              {subItem.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className='h-[184px] flex flex-col gap-[8px]'>
            {sideBarFirstSection.map((item, idx) => {
              if (idx > 3) {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        isSettingsClicked: !settings.isSettingsClicked,
                      });
                      handleClick(item.header, 'header');
                    }}
                    className={`h-[56px] transition duration-500 cursor-pointer flex py-[16px] px-[24px] gap-[8px] items-center ${
                      state.activeLink === item.header && 'bg-[#F8F8F8] border-l-[3px] border-[#111111]'
                    }`}
                  >
                    <Image src={item.icon} width={24} height={24} alt='' className='w-[24px] h-[24px]' />
                    <span
                      className={`font-medium text-base leading-[24px] ${
                        state.activeLink === item.header ? 'text-[#0E0E0E]' : 'text-[#8A8A8A]'
                      } `}
                    >
                      {item.header}
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
