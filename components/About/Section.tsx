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

const AboutSection = ({ className }: { className?: string }) => {
  const { animate, displayMission, options, textAnimate, visibleSubIds } =
    usePageContext();
  const getSectionRef = useRef<HTMLDivElement>(null);

  const [titleActive, setTitleActive] = useState<any>('');
  const [subTitlesActive, setSubTitlesActive] = useState<any>([]);

  useEffect(() => {
    console.warn(getSectionRef?.current);
  }, [getSectionRef]);

  //     width: 1437px;
  // height: 1001px;
  // top: 446px;
  // left: 1px;
  // padding: 107px 63px 107px 95px;
  // gap: 0px;
  // opacity: 0px;

  // console.log(subTitlesActive, titleActive);

  return (
    <main
      className={clsx(
        className,
        'min-h-[800px] w-full py-24  relative px-20 bg-gray-50 flex  transition duration-500 pb-20 max-md:pb-0 max-md:px-5',
        `${styles['fade-in']}`
      )}
    >
      <section className='flex  md:w-full justify-center max-w-[1437px] mx-auto flex-row gap-14 '>
        <SideBar />
        <section
          className={clsx(
            'w-full flex flex-col max-md:absolute max-md:px-4 transition duration-500 ',
            displayMission && 'justify-center items-center'
            //structure
          )}
        >
          {displayMission && (
            <section className='flex h-full flex-col w-full items-center gap-12 py-5 pt-2'>
              <div className='max-md:flex hidden flex-col items-center gap-5 '>
                <Image
                  src={AmericanEagle}
                  alt='American Eagle'
                  width={260}
                  height={220}
                />
                {/* width: 408px; height: 348.27px; padding: 9px
                                37.5px 0px 37.5px; gap: 20.27px; opacity: 0px; */}
                {/* <Image
                                    src={USA}
                                    alt='USA'
                                    width={223}
                                    height={64}
                                /> */}
              </div>
              <div className='max-md:hidden flex flex-col items-center gap-5 '>
                <Image
                  src={AmericanEagle2}
                  alt='American Eagle'
                  width={408}
                  height={348}
                />
              </div>
              <div className=' max-w-full   shadow-md rounded-[28px] md:mt-4 flex flex-col gap-3 px-5 py-12 md:py-10 bg-white'>
                <h2 className='text-2xl text-zinc-800 font-medium'>
                  Our Mission is Simple
                </h2>
                <span></span>
                <p className='text-xl font-light text-opacity-70 flex gap-4 flex-col items-start '>
                  <span>
                    To create a seamless, efficient, and sustainable
                    transportation experience tailored to your needs.
                  </span>
                  <span>
                    Leveraging the latest technology and innovative solutions,
                    we bring you the future of mobility.
                  </span>
                </p>
              </div>
            </section>
          )}
          {!displayMission &&
            options.map((item: any, itemIndex: number) => {
              const { subTitle, id, isClicked, title } = item;

              return isClicked ? (
                <div
                  key={id}
                  id={id}
                  className={clsx(
                    'flex flex-col gap-4 w-full transition-opacity duration-500  ease-in-out delay-150 lg:pl-8 mt-5 ',
                    `${styles['slide-from-left']}`
                  )}
                >
                  <h2
                    className={`text-[32px] max-md:text-xl  leading-10 tracking-wider font-medium  ${styles['slide-in']}`}
                  >
                    {title}
                  </h2>
                  {subTitle.map((sub: any) => {
                    const { sub_id, title, isClicked, text, list, headText } =
                      sub;
                    return (
                      <>
                        {visibleSubIds.includes(sub_id) && (
                          <div
                            className={clsx(
                              'transition-opacity duration-500 ease-in-out delay-150',
                              visibleSubIds.includes(sub_id)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 h-0 overflow-hidden -translate-y-4',
                              `${styles['slide-from-left']}`
                            )}
                          >
                            {' '}
                            <h2
                              className={clsx(
                                'text-zinc-800 text-[24px] max-md:text-[18px] max-md:leading-6  font-medium tracking-wide leading-[40px] transition-opacity duration-500 ease-out mb-6 mt-2'
                              )}
                            >
                              {title.toString()}
                            </h2>
                            <p
                              className='font-[400] tracking-wide max-md:text-md max-md:leading-6'
                              dangerouslySetInnerHTML={{
                                __html: text,
                              }}
                            />
                            <div className='flex flex-col mt-5 gap-2 font-[400] tracking-wide'>
                              <span>{headText && headText}</span>
                              {list && (
                                <ul
                                  className={clsx(
                                    'pl-3 mt-2 flex font-[400] tracking-wide flex-col gap-6 list-disc list-inside',
                                    title ===
                                      'Superior Service Quality and User Experience' &&
                                      'gap-3 pb-6'
                                  )}
                                >
                                  {list.map((listItem: any, index: number) => (
                                    <li
                                      dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(listItem),
                                      }}
                                      className={clsx(
                                        title ===
                                          'Superior Service Quality and User Experience' ||
                                          (title ===
                                            'Artificial Intelligence for a Competitive Edge' &&
                                            'list-inside list-disc'),
                                        'flex items-center gap-2 flex-wrap text-base'
                                      )}
                                      key={index + 33}
                                    />
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              ) : null;
            })}
        </section>
      </section>
    </main>
  );
};

export default AboutSection;
