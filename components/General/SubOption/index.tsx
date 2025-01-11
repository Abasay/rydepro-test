/** @format */

import { useResetContext } from '@/contexts/resetContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type SubOptionProps = {
  isClicked: boolean;
  setIsClicked: (type: boolean) => void;
};

const SubOption = ({ isClicked, setIsClicked }: SubOptionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { reset, setReset, setIsHomePageActive } = useResetContext();
  const pathname = usePathname();

 

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return (
    <React.Fragment>
      {isClicked ? (
        <section
          ref={ref}
          className='min-w-[150px] h-[168px] absolute top-[77px] right-5 rounded-[10px] p-[10px] flex flex-col gap-[10px] bg-[#111111E5]'>
          <div className='min-w-[130px] h-[142px] flex flex-col gap-[8px] items-center justify-center'>
            <Link href={'/reset'}
              className='h-[35px] p-[10px] flex gap-[10px] text-[14px] leading-[20px] font-normal text-[#F2F6FF]'>
              Account Recovery
            </Link>
            <Link
              href={'/'}
              className='h-[35px] p-[10px] flex gap-[10px] text-[14px] leading-[20px] font-normal text-[#F2F6FF]'>
              Contact Us
            </Link>
            <Link
              href={'/'}
              className='h-[35px] p-[10px] flex gap-[10px] text-[14px] leading-[20px] font-normal text-[#F2F6FF]'>
              FAQ
            </Link>
          </div>
        </section>
      ) : null}
    </React.Fragment>
  );
};

export default SubOption;
