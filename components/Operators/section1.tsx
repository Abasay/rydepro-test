/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import { data1 } from './data';
// import Image from 'next/image';
import img from '@/public/assets/operators/section1Image.jpeg';
import Image from 'next/image';

const Section1 = () => {
  const [index, setIndex] = useState<number>(0);
  const [defaultHeading, setDefaultHeading] = useState<string>('Competitive Earnings');
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

  return (
    <section className='container mx-auto flex justify-center px-5 md:px-2 lg:px-10 max-md:px-5  py-8 max-430:py-6 '>
      <div className='mx-auto flex flex-col lg:justify-center gap-10 md:mt-0'>
        <header className='headings flex flex-col items-center gap-2 max-430:gap-1'>
          <span className='text-[#3C3C3C] text-base leading-[24px] font-normal'>Why Choose Us</span>
          <h2 className='text-2xl font-medium md:text-[40px] md:leading-[48px] text-[#0E0E0E]'>Why Choose Us</h2>
        </header>
        <div className='w-full flex max-785:flex-col-reverse gap-6 flex-row'>
          <article className='max-785:w-full min-w-[200px] max-w-[694px] lg:max-w-[934px] min-h-[400px] max-h-[800px] flex flex-col mt-12 md:mt-0 '>
            {data1.map((item, idx) => {
              const { heading, text } = item;
              return (
                <button
                  key={idx}
                  onClick={() => setDefaultHeading(heading)}
                  className={`flex flex-col  items-start justify-start min-h-[120px] max-h-[350px] cursor-pointer gap-4 transition duration-500 ${
                    heading === defaultHeading ? 'border-l-[3px] border-[#0E0E0E]' : 'border-l-[3px] border-[#D0D0D0] '
                  } px-5 py-4 md:py-6 md:px-8`}
                  aria-label={`Select ${heading}`}
                >
                  <span className='text-lg text-start font-bold md:text-2xl text-[#0E0E0E]'>{heading}</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: text }}
                    className='text-base text-start font-medium text-[#3C3C3C]'
                  />
                </button>
              );
            })}
          </article>
          <div className='mx-auto rounded-3xl transition-opacity duration-500 min-w-[335px] md:min-w-[446px] max-430:min-w-[300px] max-430:max-w-[300px] max-w-[530px] lg:max-w-[620px] min-h-[300px] max-h-[560px]'>
            <Image
              src={img}
              width={500}
              height={700}
              alt='Why Choose Us, Rydepro'
              className='rounded-xl h-full w-full object-cover object-center'
              priority
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
