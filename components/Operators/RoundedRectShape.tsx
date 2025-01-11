import Image from 'next/image';
import React from 'react';

interface RoundedRectShapeProp {
  className?: string;
  head: string;
  description?: { title: string; text: string; icon: any }[];
}

const RoundedRectShape = ({ className, head, description }: RoundedRectShapeProp) => {
  return (
    <article
      className={`${className} w-[335px] max-md:w-full mx-auto md:w-1/2 max-md:max-h-[800px] min-h-[420px] bg-[#0A0A0A] rounded-[16px] flex flex-col gap-8 justify-start pt-14 text-[#FCFCFC] px-8`}
    >
      <div>
        <h3 className='text-[#FCFCFC] text-2xl md:text-[32px] font-medium'>{head}</h3>
      </div>
      <div className='flex flex-col gap-8'>
        {description?.map((item, idx) => {
          const { title, text, icon } = item;
          return (
            <section key={idx} className='flex flex-col gap-2'>
              <div className='flex gap-4'>
                <Image
                  src={icon}
                  alt={`Icon for ${title}`}
                  width={40}
                  height={40}
                  className='w-8 h-8 md:w-10 md:h-10'
                  aria-hidden='true'
                />
                <h3 className='text-[#FCFCFC] text-[18px] leading-[24px] md:text-xl font-bold'>{title}</h3>
              </div>
              <p className='text-[#DADADA] text-base leading-[24px] font-medium mt-2'>{text}</p>
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default RoundedRectShape;
