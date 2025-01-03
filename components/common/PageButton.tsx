/** @format */
'use client';
import Image from 'next/image';
import React from 'react';

type ButtonProps = {
  text: string;
  className?: string;
  icon?: any;
  iconClassName?: string;
  disabled?: boolean;
  onCLick: (type: any) => void;
};

const PageButton = ({
  text,
  onCLick,
  className,
  icon,
  iconClassName,
  disabled,
}: ButtonProps) => {
  return (
    <button
      title={disabled ? 'Button is currently diabled' : text}
      disabled={disabled}
      onClick={disabled ? undefined : onCLick}
      className={`${className} ${disabled ? 'cursor-not-allowed' : ''}`}
      type='button'
    >
      {icon ? <i></i> : null}
      <span>{text}</span>
      {icon ? (
        <Image
          className={iconClassName}
          src={icon}
          alt=''
          width={20}
          height={20}
        />
      ) : null}
    </button>
  );
};

export default PageButton;
