'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/stylish.module.css';
// import { ServiceAreas } from './Regions';
import EmojiText from './EmojiConvert';
import FlagIcon from './FlagIcon';
import Flag from 'react-world-flags';
import { ServiceAreas, ServiceAreas1 } from './Regions';

const Info = () => {
  return (
    <div className=' mt-16 container pb-44 px-20 max-md:px-5 mx-auto border-4 border-green-700 tracking-wider max-md:text-md max-md:leading-6 text-[#0E0E0E]'>
      <div className='  text-[#3C3C3C] my-12 flex flex-col gap-8 text-xl leading-8 font-[400] max-md:text-md max-md:leading-6'>
        <p className=' min-w-[200px] max-w-[1048px]'>
          This global expansion signifies our commitment to excellence and our dedication to redefining passenger
          transportation worldwide.
        </p>{' '}
        <p className=''>Our elite transportation services will soon be available in the following locations:</p>
        <div className=' flex flex-col gap-16'>
          {ServiceAreas1.map((area, idx) => {
            const { continent, states } = area;

            return (
              <div key={continent} className='flex flex-col gap-8'>
                <h4 className='text-2xl max-md:text-xl font-bold tracking-wider text-[#0E0E0E]'>
                  {continent.toUpperCase()}
                </h4>
                {states.map((state, idx) => {
                  return (
                    <div className='flex flex-col gap-4' key={state.country}>
                      <h4 className='text-xl leading-8 max-md:text-md max-md:leading-6 font-bold text-[#0E0E0E] tracking-wider'>
                        {state.code ? (
                          <span className=' flex items-center gap-2'>
                            <Flag code={state.code} width={20} height={20} />
                            <span>{state.country}</span>
                          </span>
                        ) : (
                          <span>{state.country}</span>
                        )}
                      </h4>
                      <div
                        className={clsx(
                          `flex gap-6 flex-wrap flex-grow max-md:text-md max-md:leading-6`,
                          `${styles['fade-in']}`
                        )}
                      >
                        {state.regions.map((region, idx) => {
                          return (
                            <div
                              key={region.region}
                              className={clsx('flex flex-col gap-2 mt-4  min-w-[180px] ', `${styles['areas-slide']}`)}
                            >
                              <h5 className='text-lg leading-6 max-md:text-md max-md:leading-6 text-[#0E0E0E] font-medium'>
                                {region.code ? (
                                  <span className=' flex items-center gap-2'>
                                    <Flag code={region.code} width={20} height={20} /> <span>{region.region}</span>
                                  </span>
                                ) : (
                                  <span>{region.region}</span>
                                )}
                              </h5>
                              <ul
                                className={clsx(
                                  'list-none  text-[#0E0E0E] text-[16px] leading-6',
                                  `${styles['fade-in']}`
                                )}
                              >
                                {region.provinces.map((province, idx) => {
                                  return (
                                    <li
                                      key={province.name}
                                      className={clsx(
                                        'py-1  max-md:text-md max-md:leading-6 text-[#0E0E0E] font-[400]'
                                      )}
                                    >
                                      {province.code ? (
                                        <span className=' flex items-center gap-2'>
                                          <Flag code={province.code} width={20} height={20} />{' '}
                                          <span>{province.name}</span>
                                        </span>
                                      ) : (
                                        <span>{province.name}</span>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {ServiceAreas.map((area, idx) => {
            const { continent, regions, code } = area;

            return (
              <div className='flex flex-col gap-8' key={continent}>
                <h4 className='text-2xl max-md:text-md max-md:leading-6 font-bold text-[#0E0E0E] tracking-wider'>
                  {code ? (
                    <span className=' flex items-center gap-2'>
                      <Flag code={code} width={20} height={20} />
                      <span>{continent.toUpperCase()}</span>
                    </span>
                  ) : (
                    <span>{continent.toUpperCase()}</span>
                  )}
                </h4>
                <div
                  className={clsx(
                    `flex gap-6 flex-wrap flex-grow max-md:text-md max-md:leading-6`,
                    `${styles['fade-in']}`
                  )}
                >
                  {regions.map((region, idx) => {
                    return (
                      <div
                        key={region.region}
                        className={clsx('flex flex-col gap-2 mt-4  min-w-[180px] ', `${styles['areas-slide']}`)}
                      >
                        <h5 className='text-lg max-md:text-md max-md:leading-6 text-[#0E0E0E] font-medium'>
                          {region.code ? (
                            <span className=' flex items-center gap-2'>
                              <Flag code={region.code} width={20} height={20} />
                              <span>{region.region}</span>
                            </span>
                          ) : (
                            <span>{region.region}</span>
                          )}
                        </h5>
                        <ul className={clsx('list-none  text-[#0E0E0E] text-[16px] leading-6', `${styles['fade-in']}`)}>
                          {region.provinces.map((province, idx) => {
                            return (
                              <li
                                key={province.name}
                                className={clsx('py-1 max-md:text-md max-md:leading-6 text-[#0E0E0E] font-[400]')}
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
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
