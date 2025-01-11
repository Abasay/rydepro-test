/** @format */

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import './styles.modules.css';

const RecComponent = ({
  img,
  text,
  onClick,
  isClicked,
  className,
  id,
  idLabel,
  textSize,
}: {
  img?: any;
  text: string;
  onClick: () => void;
  isClicked?: boolean;
  className?: string;
  id?: number;
  idLabel: string;
  textSize?: string;
}) => {
  return (
    <label
      key={id}
      onClick={onClick}
      htmlFor={idLabel}
      className={`flex h-[68px] w-full md:w-[564px] rounded-[8px] justify-between py-[20px] px-[16px] ${className}`}>
      <div className='flex gap-2 items-center'>
        {/* <Image
          src={img}
          alt=''
          className='w-[28px] h-[28px]'
          width={20}
          height={21}
        /> */}
        <span
          className={`${
            textSize ? textSize : 'text-base'
          } font-medium leading-[24px] text-[#3C3C3C]`}>
          {text}
        </span>
      </div>
      {/**toggle */}
      <div>
        <div
          onClick={onClick}
          className={`toggle-switch rounded-[100px] flex items-center justify-center py-[6px] px-[4px] ${
            isClicked ? 'active' : ''
          }`}>
          <div className='circle'></div>
        </div>
      </div>
    </label>
  );
};

export default RecComponent;
