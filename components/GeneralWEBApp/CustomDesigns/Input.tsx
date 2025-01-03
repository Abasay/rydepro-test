import React from 'react';

interface InputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    placeholder?: string;
}

const CustomInput: React.FC<InputProps> = ({ label, name, type, value, onChange, onBlur, error, touched, placeholder }) => {
    return (
        <label htmlFor={name} className='flex flex-col gap-[8px] w-[inherit]'>
            <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>
                {label}
            </span>
            <input
                name={name}
                id={name}
                type={type}
                required
                placeholder={placeholder}
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {touched && error ? (
                <p className='text-red-600 text-sm'>
                    {error}
                </p>
            ) : null}
        </label>
    );
};

export default CustomInput;