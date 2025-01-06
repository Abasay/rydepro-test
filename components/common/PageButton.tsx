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
  onClick: (type: any) => void; // Fixed typo: onCLick -> onClick
};

const PageButton = ({ text, onClick, className, icon, iconClassName, disabled }: ButtonProps) => {
  return (
    <button
      aria-label={disabled ? `${text} (Disabled)` : text} // Use aria-label for screen readers
      aria-disabled={disabled} // Indicate disabled state to screen readers
      disabled={disabled} // Disable button interaction
      onClick={disabled ? undefined : onClick} // Prevent onClick when disabled
      className={`
        ${className} 
        ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80'} 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      type='button'
    >
      {icon ? <i></i> : null}
      <span>{text}</span>
      {icon ? (
        <Image
          className={iconClassName}
          src={icon}
          alt='' // Use empty alt if the icon is decorative
          aria-hidden='true' // Hide the icon from screen readers if it's decorative
          width={20}
          height={20}
        />
      ) : null}
    </button>
  );
};

export default PageButton;
