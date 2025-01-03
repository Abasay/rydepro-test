/** @format */

import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  value: string;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  img?: any;
}

const Button = ({
  value,
  title,
  style,
  disabled,
  onClick,
  className,
  img,
}: ButtonProps) => {
  return (
    <button
      style={style}
      className={`h-[48px] min-w-[120px] rounded-[8px] border-[0.5px] p-[8px] ${
        img ? 'gap-[8px]' : 'gap-[16px]'
      } border-[#D0D0D0] bg-[#F5F5F5] text-base leading-[24px] font-medium text-[#0E0E0E] flex items-center justify-center ${className}`}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      title={title ? title : value}
      type='button'>
      {img ? (
        <Image
          alt=''
          src={img}
          width={16}
          height={16}
          className='w-[16px] h-[16px]'
        />
      ) : null}
      <span>{value}</span>
    </button>
  );
};

export default Button;
