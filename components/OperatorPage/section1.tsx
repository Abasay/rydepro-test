/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import { data1 } from './data';
// import Image from 'next/image';
import img from '@/public/assets/OperatorWebPage/section1Image.jpeg';
import Image from 'next/image';

const Section1 = () => {
  const [index, setIndex] = useState<number>(0);
  const [defaultHeading, setDefaultHeading] = useState<string>(
    'Competitive Earnings'
  );
  const [arr, setArr] = useState(data1);
  const [isLoaded, setIsLoaded] = useState(false);

  //useEffects
  useEffect(() => {
    arr.map((item, idx) => {
      if (idx === index) {
        setDefaultHeading(item.heading);
      }
    });
    const intervalID = setTimeout(() => {
      setIndex((prev) => {
        if (prev === arr.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => {
      clearTimeout(intervalID);
    };
  }, [index, arr]);

  // useEffect(() => {
  //   // Preload image
  //   const image = new Image();
  //   image.src = img.src;
  //   image.onload = () => setIsLoaded(true); // Once image is loaded, update state
  // }, []); // Run when the image source changes

  //Image section styles
  const section1Image = {
    backgroundImage: isLoaded ? `url(${img.src})` : 'none', // Only apply background image when it's loaded
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  return (
    <section className='min-h-[1000px] w-full flex justify-center py-16 px-4 md:px-8 lg:px-20'>
      <div className='lg:container flex flex-col lg:justify-center mt-8 md:mt-0'>
        <div className='headings flex flex-col items-center gap-1'>
          <h2 className='text-[#3C3C3C] text-base leading-[24px] font-[400px]'>
            Why Choose Us
          </h2>
          <h3 className='text-[24px] leading-[32px] font-[500px] md:text-[40px] md:font-medium'>
            Why Choose Us
          </h3>
        </div>
        <div className='w-full flex max-[785px]:flex-col-reverse flex-row max-[785px]:justify-between mt-16'>
          <div className='max-[785px]:w-full w-1/2 border-l-2 pl-6 flex flex-col mt-12 md:mt-0 gap-4'>
            {data1.map((item, idx) => {
              const { heading, text } = item;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setDefaultHeading(heading);
                  }}
                  className={`flex flex-col justify-center md:h-[140px] cursor-pointer gap-4 transition duration-500 ${
                    heading === defaultHeading && 'border-l-2 border-zinc-800'
                  } px-5 py-2 -ml-[26px]`}
                >
                  <span className='text-[18px] leading-[24px] font-bold md:text-[24px] md:leading-[32px] lg:text-xl'>
                    {heading}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: text }}
                    className='text-base leading-[24px] font-[400px] text-[#3C3C3C]'
                  />
                </div>
              );
            })}
          </div>
          <div
            // style={section1Image}
            className={`lg:min-w-[530px] max-[840px]:max-w-[420px] max-[805px]:max-w-[400px] max-[785px]:max-w-[500px] max-[785px]:mb-6 max-sm:mb-2 max-lg:min-w-[400px] max-lg:max-w-[450px]  lg:max-w-[530px] max-sm:w-full max-[480px]:min-w-[250px] max-[480px]:max-w-[400px] max-[480px]:min-h-[250px] max-[480px]:max-h-[370px] max-[375px]:max-w-[335px] max-[375px]:max-h-[320px] max-lg:min-h-[550px] min-h-[600px] max-h-[752px] mx-auto h-[320px] md:h-[inherit] rounded-3xl bg-gray-400 transition-opacity duration-500 `}
          >
            <Image
              src={img}
              width={500}
              height={700}
              className='rounded-xl h-full w-full'
              objectFit='cover'
              objectPosition='center'
              priority
              placeholder='blur'
              // fill
              alt=''
            />
          </div>

          {/* <div
            // style={section1Image}
            className={`w-[446px] max-sm:w-full mx-auto md:w-1/2 lg:w-[530px] h-full rounded-3xl bg-gray-400 transition-opacity duration-500 `}
          >
            <Image
              src={img}
              width={500}
              height={600}
              className='w-full h-full rounded-xl'
              objectFit='cover'
              objectPosition='center'
              alt='Why Choose Us'
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

// const section1Image = {
//   background: `url(${img.src})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'top',
// };

export default Section1;
