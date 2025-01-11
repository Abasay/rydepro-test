/** @format */

import React from 'react';

interface ButtonProps {
  value: string;
  onClick?: () => void;
  isDisabled?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

const OTPButton: React.FC<ButtonProps> = ({
  value,
  onClick,
  isDisabled,
  title,
  className,
  style,
}) => {
  return (
    <button
      type='button'
      style={style}
      onClick={isDisabled ? undefined : onClick}
      title={title ? title : value}
      className={`${className} h-[36px] rounded-[8px] border-[0.5px] py-[2px] px-[16px] gap-[16px] bg-[#F5F5F5] border-[#D0D0D0] text-[14px] leading-[20px] font-bold`}>
      {value}
    </button>
  );
};

export default OTPButton;
