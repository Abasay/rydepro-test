'use client';
import React, { useEffect, useRef, useState } from 'react';
import SideBar from './SideBar';
import clsx from 'clsx';
import Image from 'next/image';
import AmericanEagle from '@/public/assets/about/eagle.webp';
import AmericanEagle2 from '@/public/assets/about/eagle2.webp';
import USA from '@/public/assets/USA.png';
import DOMPurify from 'dompurify';
import styles from '@/styles/stylish.module.css';
import { usePageContext } from '@/contexts/PageContext';
import { SidebarData, sidebarData } from './aboutSidebar';

const AboutSection = ({ className }: { className?: string }) => {
  const { animate, displayMission, textAnimate, visibleSubIds } = usePageContext();
  const getSectionRef = useRef<HTMLDivElement>(null);

  const [options, setOptions] = useState<SidebarData[]>(sidebarData);

  const [actives, setActives] = useState<{
    title: string;
    [key: string]: string | string[];
  }>({
    title: '',
  });

  const [titleActive, setTitleActive] = useState<string>('');
  const [subTitlesActive, setSubTitlesActive] = useState<
    {
      sub_id: number;
      title: string;
      text?: string | Node;
      headText?: string;
      list?: string[];
      option?: string[];
      isClicked: boolean;
      subTitleText?: string;
    }[]
  >([]);

  useEffect(() => {
    const sidebarData = options.find((item) => item.title === actives.title);
    if (sidebarData) {
      setTitleActive(sidebarData?.title);
      setSubTitlesActive(sidebarData?.subTitle);
    }

    console.log(sidebarData);
  }, [actives, options]);

  console.log(titleActive, subTitlesActive);

  useEffect(() => {
    console.warn(getSectionRef?.current);
  }, [getSectionRef]);

  return (
    <section
      className={clsx(
        className,
        'min-h-[300px] max-h-[2500px] w-full py-24  relative px-20 bg-gray-50 flex transition duration-500  max-md:px-5',
        `${styles['fade-in']}`
      )}
      aria-labelledby='about-section-heading' // Associate the section with its heading
      id='about-section'
    >
      <div className='flex md:w-full  justify-center container mx-auto flex-row gap-14'>
        <SideBar actives={actives} setActives={setActives} />

        <div
          className={clsx(
            'w-full flex flex-col max-md:hidden max-md:px-4 transition duration-500',
            !actives.title && 'justify-center items-center'
          )}
        >
          {!actives.title ? (
            <div className='flex h-full flex-col w-full items-center max-md:mb-7 gap-12 py-5 pt-2'>
              {/* Mobile Image */}
              <div className='max-md:flex hidden flex-col items-center gapx-5'>
                <Image src={AmericanEagle} alt='American Eagle' width={260} height={220} priority />
              </div>

              {/* Desktop Image */}
              <div className='max-md:hidden flex flex-col items-center gap-5'>
                <Image src={AmericanEagle2} alt='American Eagle' width={408} height={348} priority />
              </div>

              {/* Mission Content */}
              <div className='max-w-full shadow-md rounded-[28px]  md:mt-4 flex flex-col gap-7 px-5 py-4 md:py-12 bg-white'>
                <h2 className='text-[32px] max-md:text-xl leading-[40px] text-[#000000] font-medium'>
                  Our Mission is Simple
                </h2>
                <p className='text-2xl max-md:text-lg font-normal text-[#000000B2]  flex gap-7 flex-col items-start'>
                  <span>
                    To create a seamless, efficient, and sustainable transportation experience tailored to your needs.
                  </span>
                  <span>
                    Leveraging the latest technology and innovative solutions, we bring you the future of mobility.
                  </span>
                </p>
              </div>
            </div>
          ) : (
            // options[actives.title]
            <div
              // id={String(id)}
              className={clsx(
                'flex flex-col gap-6 w-full transition-opacity duration-500 ease-in-out delay-150 lg:pl-8 ',
                `${styles['slide-from-left']}`
              )}
            >
              <h2
                className={`text-[32px] max-md:text-xl leading-10 tracking-wide font-medium text-[#000000] ${styles['slide-in']}`}
              >
                {titleActive}
              </h2>

              {subTitlesActive.map((sub) => {
                const { sub_id, title, text, list, headText, subTitleText } = sub;

                return actives[actives.title].includes(title) ? (
                  <div
                    key={sub_id}
                    className={clsx(
                      'transition-opacity pb-4 duration-500  ease-in-out delay-150',
                      actives[actives.title].includes(title)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 h-0 overflow-hidden -translate-y-4',
                      `${styles['slide-from-left']}`
                    )}
                  >
                    {subTitleText && (
                      <p
                        className=' mb-10 text-[#3C3C3C] font-medium tracking-wide max-md:text-base max-md:leading-6'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitleText) }}
                      />
                    )}
                    <h2 className='text-[#0E0E0E]  text-[24px] max-md:text-[18px] max-md:leading-6 font-medium  leading-[40px] mb-6 mt-2'>
                      {title.toString()}
                    </h2>
                    {text && (
                      <p
                        className='font-normal text-[#3C3C3C] tracking-wide max-md:text-base max-md:leading-6'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
                      />
                    )}
                    {list && (
                      <div className='flex flex-col mt-5 gap-2 font-normal tracking-wide'>
                        {headText && <span>{headText}</span>}
                        <ul className='pl-3 mt-2 flex flex-col gap-6 list-disc list-inside'>
                          {list.map((listItem: any, index: number) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(listItem) }}
                              className='flex items-center gap-2 flex-wrap text-base'
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>

        <div
          className={clsx(
            'w-full flex flex-col md:hidden mt-6 max-md:px-0 transition duration-500',
            !actives.title && 'justify-center items-center'
          )}
        >
          {!actives.title ? (
            <div className='flex h-full flex-col w-full items-center gap-12 py-5 pt-2'>
              {/* Mobile Image */}
              <div className='max-md:flex hidden flex-col items-center gapx-5'>
                <Image src={AmericanEagle} alt='American Eagle' width={260} height={220} priority />
              </div>

              {/* Desktop Image */}
              <div className='max-md:hidden flex flex-col items-center gap-5'>
                <Image src={AmericanEagle2} alt='American Eagle' width={408} height={348} priority />
              </div>

              {/* Mission Content */}
              <div className='max-w-full shadow-md rounded-[28px]  md:mt-4 flex flex-col gap-7 px-5 py-4 md:py-12 bg-white'>
                <h2 className='text-[32px] max-md:text-xl leading-[40px] text-[#000000] font-medium'>
                  Our Mission is Simple
                </h2>
                <p className='text-2xl max-md:text-lg font-normal text-[#000000B2]  flex gap-7 flex-col items-start'>
                  <span>
                    To create a seamless, efficient, and sustainable transportation experience tailored to your needs.
                  </span>
                  <span>
                    Leveraging the latest technology and innovative solutions, we bring you the future of mobility.
                  </span>
                </p>
              </div>
            </div>
          ) : (
            // options[actives.title]
            <div
              // id={String(id)}
              className={clsx(
                'flex flex-col gap-6 w-full transition-opacity duration-500 ease-in-out delay-150 lg:pl-8 ',
                `${styles['slide-from-left']}`
              )}
            >
              <h2
                className={`text-[32px] max-md:text-xl leading-10 tracking-wide font-medium text-[#000000] ${styles['slide-in']}`}
              >
                {titleActive}
              </h2>

              {subTitlesActive.map((sub) => {
                const { sub_id, title, text, list, headText, subTitleText } = sub;

                return actives[actives.title].includes(title) ? (
                  <div
                    key={sub_id}
                    className={clsx(
                      'transition-opacity pb-4 duration-500  ease-in-out delay-150',
                      actives[actives.title].includes(title)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 h-0 overflow-hidden -translate-y-4',
                      `${styles['slide-from-left']}`
                    )}
                  >
                    {subTitleText && (
                      <p
                        className=' mb-10 text-[#3C3C3C] font-medium tracking-wide max-md:text-base max-md:leading-6'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitleText) }}
                      />
                    )}
                    <h2 className='text-[#0E0E0E]  text-[24px] max-md:text-[18px] max-md:leading-6 font-medium  leading-[40px] mb-6 mt-2'>
                      {title.toString()}
                    </h2>
                    {text && (
                      <p
                        className='font-normal text-[#3C3C3C] tracking-wide max-md:text-base max-md:leading-6'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
                      />
                    )}
                    {list && (
                      <div className='flex flex-col mt-5 gap-2 font-normal tracking-wide'>
                        {headText && <span>{headText}</span>}
                        <ul className='pl-3 mt-2 flex flex-col gap-6 list-disc list-inside'>
                          {list.map((listItem: any, index: number) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(listItem) }}
                              className='flex items-center gap-2 flex-wrap text-base'
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
