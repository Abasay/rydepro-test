/** @format */
import React from 'react';

interface ButtonProps {
  value: string;
  title?: string;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  name?: string;
}

const Button = ({ title, value, className, isDisabled, onClick, name }: ButtonProps) => {
  return (
    <button
      name={name}
      type='button'
      className={` border-hidden hover:border-solid ${className}`}
      disabled={isDisabled}
      onClick={onClick}
      title={title ? title : value}
    >
      {value}
    </button>
  );
};

// const Button = React.memo(ButtonComponent);
export default Button;
