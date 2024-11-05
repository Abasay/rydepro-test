import React from 'react';

type TimeProps = {
    days?: number | string;
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
};

const Component = ({ days, hours, minutes, seconds }: TimeProps) => {
    return (
        <section className='w-[45px] h-[60px]'>
            <div className='w-[40px] h-[55px] flex items-center justify-between text-[#FFFFFF] filter bg-[#FFFFFF26] rounded-md'></div>
            <svg
                width='10'
                height='12'
                viewBox='0 0 11 14'
                fill='none'
                className='absolute rotate-180 -mt-8 ml-[30px]'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M10 6.13398C10.6667 6.51888 10.6667 7.48112 10 7.86603L0.999999 13.0622C0.333333 13.4471 -0.5 12.966 -0.5 12.1962L-0.5 1.80385C-0.5 1.03405 0.333333 0.552922 1 0.937822L10 6.13398Z'
                    fill='black'
                />
            </svg>
            <span className='absolute z-10 -mt-11 w-[40px] -ml-[22px] text-white text-2xl'>
                {days || hours || minutes || seconds}
            </span>
            <svg
                width='10'
                height='12'
                viewBox='0 0 11 14'
                fill='none'
                className='absolute -mt-8'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M10 6.13398C10.6667 6.51888 10.6667 7.48112 10 7.86603L0.999999 13.0622C0.333333 13.4471 -0.5 12.966 -0.5 12.1962L-0.5 1.80385C-0.5 1.03405 0.333333 0.552922 1 0.937822L10 6.13398Z'
                    fill='black'
                />
            </svg>
        </section>
    );
};

export default Component;
