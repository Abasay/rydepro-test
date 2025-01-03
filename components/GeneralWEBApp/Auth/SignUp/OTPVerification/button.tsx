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
      className={`${className} h-[36px] rounded-[19px] py-[8px] px-[16px] gap-[10px] bg-[#0000000D] text-[14px] leading-[20px] font-bold`}>
      {value}
    </button>
  );
};

export default OTPButton;
