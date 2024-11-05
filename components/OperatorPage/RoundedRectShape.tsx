import Image from 'next/image';
import React from 'react';

interface RoundedRectShapeProp {
  className?: string;
  head: string;
  description?: { title: string; text: string; icon: any }[];
}

const RoundedRectShape = ({
  className,
  head,
  description,
}: RoundedRectShapeProp) => {
  return (
    <div
      className={`${className} w-[335px] max-md:w-full mx-auto md:w-1/2 max-md:max-h-[800px] min-h-[420px] md:h-[450px] lg:h-[400px] bg-[#0A0A0A] rounded-[16px] flex flex-col gap-6 justify-start pt-14 text-white px-8`}
    >
      <h2 className='text-[#FCFCFC] text-[24px] md:text-[32px] leading-[32px] font-[500px]'>
        {head}
      </h2>
      <div className='flex flex-col gap-10 md:gap-8'>
        {description?.map((item, idx) => {
          const { title, text, icon } = item;
          return (
            <div key={idx} className='flex flex-col gap-1'>
              <div className='flex gap-2'>
                <Image src={icon} alt='' width={25} height={25} />
                <h3 className='text-[#FCFCFC] text-[18px] leading-[24px] md:text-[20px] font-[500px]'>
                  {title}
                </h3>
              </div>
              <span className='text-[#DADADA] text-base leading-[24px] font-[400px] mt-2'>
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoundedRectShape;
