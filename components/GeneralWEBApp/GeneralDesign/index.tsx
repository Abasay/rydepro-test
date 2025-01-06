/** @format */

import React from 'react';

const GeneralDesign = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='md:bg-[#FEFEFE] bg-[#FFFFFF] min-h-[100vh] w-full flex flex-col items-center py-[24px] px-[26px] gap-[48px]'>
      {children}
    </section>
  );
};

export default GeneralDesign;
