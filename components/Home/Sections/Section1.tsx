import React from 'react';
import Image from 'next/image';
import mapBg from '@/public/assets/sections/map-bg.webp';
import map from '@/public/assets/sections/map.webp';

const Section1 = () => {
  return (
    <section className='relative w-full h-64 bg-black'>
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
      <div className='w-full h-full z-40 absolute top-0 bg-black bg-opacity-60 flex flex-col gap-4 items-center justify-center px-1'>
        <h2 className='text-2xl lg:text-2xl text-[#FCFCFC] text-center font-bold'>
          RYDEPRO is Expanding!
        </h2>
        <p className='text-[#F7F7F7] text-xl md:text-lg text-center font-light'>
          Starting in California, rolling out across U.S. cities, and soon, the
          world. Get ready!
        </p>
        {/* </div> */}
      </div>
    </section>
  );
};

const SectionComp = React.memo(Section1);
export default SectionComp;
