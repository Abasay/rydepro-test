/** @format */

import Image from 'next/image';
import React from 'react';

interface RectangleComponentProps {
  img?: any;
  text: string;
  onClick?: (e: any) => void;
}

const RectangleComponent: React.FC<RectangleComponentProps> = ({
  img,
  text,
  onClick,
}) => {
  return (
    <div
      title={text}
      onClick={onClick}
      className='h-[56px] w-full md:w-[564px] cursor-pointer rounded-[8px] flex justify-between p-[16px] items-center'>
      <div className='flex items-center gap-[16px]'>
        {img && (
          <Image
            src={img}
            width={48}
            height={48}
            className='w-[48px] h-[48px]'
            alt=''
          />
        )}
        <span className='font-medium text-[18px] leading-[24px] text-[#0E0E0E]'>
          {text}
        </span>
      </div>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.73966 7.20041C9.43613 7.48226 9.41856 7.95681 9.70041 8.26034L13.2265 12L9.70041 15.7397C9.41856 16.0432 9.43613 16.5177 9.73967 16.7996C10.0432 17.0815 10.5177 17.0639 10.7996 16.7603L14.7996 12.5103C15.0668 12.2226 15.0668 11.7774 14.7996 11.4897L10.7996 7.23966C10.5177 6.93613 10.0432 6.91856 9.73966 7.20041Z'
          fill='#8A8A8A'
        />
      </svg>
    </div>
  );
};

export default RectangleComponent;
