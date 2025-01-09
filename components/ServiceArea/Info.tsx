'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/stylish.module.css';
// import
import Flag from 'react-world-flags';
import { ServiceAreas, ServiceAreas1 } from './Regions';

const Info = () => {
  return (
    <section className='mt-16 w-full pb-44 px-5 md:px-2 lg:px-20 max-md:px-5 mx-auto tracking-wider max-md:text-md max-md:leading-6 text-[#0E0E0E]'>
      <div className='container mx-auto text-[#3C3C3C] my-12 max-md:my-8 max-430:my-4 mt-10 max-430:mt-0 max-md:mt-4 flex flex-col gap-8 text-xl leading-8 font-[400] max-md:text-md max-md:leading-6'>
        <article className='flex flex-col gap-6 text-base'>
          <p className='min-w-[200px] '>
            This global expansion signifies our commitment to excellence and our dedication to redefining passenger
            transportation worldwide. <br />
            Our airport car service guarantees stress-free airport rides, connecting you to your destination on time,
            every time. With our international chauffeur service, we connect continents one ride at a time.
          </p>
          <p>Our elite transportation services will soon be available in the following locations:</p>
        </article>
        <div className='flex flex-col gap-16'>
          {ServiceAreas1.map((area, idx) => {
            const { continent, states } = area;

            return (
              <article key={continent} className='flex flex-col gap-8 max-md:gap-6'>
                <h2 className='text-2xl max-md:text-xl font-bold tracking-wider text-[#0E0E0E]'>
                  {continent.toUpperCase()}
                </h2>
                {states.map((state, idx) => {
                  return (
                    <section key={state.country} className='flex flex-col gap-4'>
                      <h3 className='text-xl leading-8 max-md:text-lg max-430:text-base font-bold text-[#0E0E0E] tracking-wider'>
                        {state.code ? (
                          <span className='flex items-center gap-2'>
                            <Flag code={state.code} width={20} height={20} alt={`Flag of ${state.country}`} />
                            <span>{state.country}</span>
                          </span>
                        ) : (
                          <span>{state.country}</span>
                        )}
                      </h3>
                      <div
                        className={clsx(
                          `flex gap-6 flex-wrap flex-grow max-md:text-md max-md:leading-6`,
                          `${styles['fade-in']}`
                        )}
                      >
                        {state.regions.map((region, idx) => {
                          return (
                            <article
                              key={region.region}
                              className={clsx('flex flex-col gap-2 mt-2 min-w-[188px]', `${styles['areas-slide']}`)}
                            >
                              <h4 className='text-lg leading-6 max-md:text-base max-430:text-sm max-md:leading-6 text-[#0E0E0E] font-bold'>
                                {region.code ? (
                                  <span className='flex items-center gap-2'>
                                    <Flag code={region.code} width={20} height={20} alt={`Flag of ${region.region}`} />{' '}
                                    <span>{region.region}</span>
                                  </span>
                                ) : (
                                  <span>{region.region}</span>
                                )}
                              </h4>
                              <ul className={clsx('list-none text-[#0E0E0E] text-base', `${styles['fade-in']}`)}>
                                {region.provinces.map((province, idx) => {
                                  return (
                                    <li
                                      key={province.name}
                                      className={clsx(
                                        'py-1 max-md:text-md max-md:leading-6 text-[#0E0E0E] font-normal min-w-fit'
                                      )}
                                    >
                                      {province.code ? (
                                        <span className='flex items-center gap-2'>
                                          <Flag
                                            code={province.code}
                                            width={20}
                                            height={20}
                                            alt={`Flag of ${province.name}`}
                                          />{' '}
                                          <span>{province.name}</span>
                                        </span>
                                      ) : (
                                        <span>{province.name}</span>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </article>
            );
          })}
          {ServiceAreas.map((area, idx) => {
            const { continent, regions, code } = area;

            return (
              <article className='flex flex-col gap-8' key={continent}>
                <h2 className='text-2xl max-md:text-xl font-bold tracking-wider text-[#0E0E0E]'>
                  {code ? (
                    <span className=' flex items-center gap-2'>
                      <Flag code={code} width={20} height={20} />
                      <span>{continent.toUpperCase()}</span>
                    </span>
                  ) : (
                    <span>{continent.toUpperCase()}</span>
                  )}
                </h2>
                <section
                  className={clsx(
                    `flex gap-6 flex-wrap flex-grow max-md:text-md max-md:leading-6`,
                    `${styles['fade-in']}`
                  )}
                >
                  {regions.map((region, idx) => {
                    return (
                      <article
                        key={region.region}
                        className={clsx('flex flex-col gap-2 mt-2  min-w-[180px] ', `${styles['areas-slide']}`)}
                      >
                        <h3 className='text-lg leading-6 max-md:text-base max-430:text-sm max-md:leading-6 text-[#0E0E0E] font-bold'>
                          {region.code ? (
                            <span className=' flex items-center gap-2'>
                              <Flag code={region.code} width={20} height={20} />
                              <span>{region.region}</span>
                            </span>
                          ) : (
                            <span>{region.region}</span>
                          )}
                        </h3>
                        <ul className={clsx('list-none  text-[#0E0E0E] text-[16px] leading-6', `${styles['fade-in']}`)}>
                          {region.provinces.map((province, idx) => {
                            return (
                              <li
                                key={province.name}
                                className={clsx(
                                  'py-1 max-md:text-md max-md:leading-6 text-[#0E0E0E] font-normal min-w-fit'
                                )}
                              >
                                {province.code ? (
                                  <span className=' flex items-center gap-2'>
                                    <Flag code={province.code} width={20} height={20} />
                                    <span>{province.name}</span>
                                  </span>
                                ) : (
                                  <span>{province.name}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </article>
                    );
                  })}
                </section>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Info;
