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
    selectOpen: boolean;
    selections: string[];
    setSelectOpen: (value: boolean) => void;
    
}

const CustomSelect: React.FC<InputProps> = ({ label, name, type, value, onChange, onBlur, error, touched, selectOpen, selections, setSelectOpen }) => {
    return (
        <label htmlFor={name} className='flex relative flex-col gap-[8px] w-[inherit]'>
            <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>
                {label}
            </span>
            <span
                title={name}
                onClick={() => setSelectOpen(!selectOpen)}
                id={name}
                className={`h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px]   placeholder:text-[#8A8A8A] font-normal cursor-pointer text-base leading-[24px] outline-none text-[#0E0E0E] ${selectOpen ? 'border-[#111111]' : 'border-[#DADADA]'}`}
               
                
            >{
                value ? value : <span className='text-[#8A8A8A]'>Select {label}</span>
            }</span>
            {touched && error ? (
                <p className='text-red-600 text-sm'>
                    {error}
                </p>
            ) : null}
            {
                selectOpen && <div className=' rounded-[8px] border-[1px]  border-[#DADADA] focus:border-[#111111]  font-normal text-base leading-[24px]  text-[#0E0E0E] absolute top-[86px] left-0 right-0 z-10 bg-[#FFFFFF]'>
                {
                    selections.map((selection, index) => (
                        <div key={index} className={
                            `cursor-pointer hover:bg-[#DADADA] ${value === selection ? 'bg-[#DADADA]' : ''} h-[40px] py-[10px] px-[16px] `
                        } onClick={() =>{ setSelectOpen(!selectOpen)
                            onChange({target: {name, value: selection}} as any)
                        }}>
                            {selection}
                        </div>
                    ))
                }
            </div>
            }
        </label>
    );
};

export default CustomSelect;