import React from 'react';
import Image from 'next/image';
import mapBg from '@/public/assets/sections/expanding.png';
import map from '@/public/assets/sections/map.webp';

const Section1 = () => {
  return (
    <section className='relative  w-full h-64 bg-black'>
      {/* First Background Image */}
      <Image
        src={mapBg}
        alt='Rydpero is expanding'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        className='z-20' // Places this image behind the second image
      />

      {/* Second Background Image (overlaying the first) */}
      <Image
        src={map}
        alt='Rydpero is expanding 1'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        // width={300}
        // height={400}
        className=' z-30 w-full h-full '
        priority
        placeholder='blur'
        // This image is in front of the first image with some opacity
      />

      {/* Content Overlay */}
      {/* <div className='relative w-full h-full bg-opacity-5'> */}
      <div className='w-full h-full z-40  absolute top-0 bg-black bg-opacity-30 flex flex-col gap-4 items-center justify-center px-1'>
        <h2 className=' text-base sm:text-lg md:text-2xl lg:text-2xl text-[#FCFCFC] text-center font-bold'>
          RYDEPRO®: Expanding Nationwide & Globally
        </h2>
        <p className='text-[#F7F7F7] container flex flex-col gap-1 text-sm sm:text-base md:text-lg text-center font-medium'>
          <span>
            Now in Southern California. Coming soon to New York, DC, Boston, Seattle, Texas, Florida, & all U.S Cities!
            Global expansion to Canada & beyond in 2025
          </span>
        </p>

        {/* </div> */}
      </div>
    </section>
  );
};

const SectionComp = React.memo(Section1);
export default SectionComp;
