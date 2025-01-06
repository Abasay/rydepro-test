'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/stylish.module.css';
import { ServiceAreas } from './Regions';
import EmojiText from './EmojiConvert';
import FlagIcon from './FlagIcon';
import Flag from 'react-world-flags';

const CONTINENTS = ServiceAreas.map((area) => area.continent);

const Dump = () => {
  const [selectedContinent, setSelectedContinent] =
    useState('Select a Continent');
  const [selectedRegion, setSelectedRegion] =
    useState<string>('Select a Region');
  const [selectedCountry, setSelectedCountry] =
    useState<string>('Select a Country');

  const [continentListOpen, setContinentListOpen] = useState<boolean>(false);
  const [regionListOpen, setRegionListOpen] = useState<boolean>(false);
  const [countryListOpen, setCountryListOpen] = useState<boolean>(false);

  const [regions, setRegions] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  // const [servicesArea, setServicesArea] = useState<
  //   {
  //     continent: string;
  //     regions: { region: string; states: string[] }[];
  //   }[]
  // >(ServiceAreas);

  useEffect(() => {
    if (selectedContinent !== 'Select a Continent') {
      setRegions(
        ServiceAreas.find(
          (area) => area.continent === selectedContinent
        )?.regions.map((region) => region.region) || []
      );

      const newServicesArea = ServiceAreas.filter(
        (continent) => selectedContinent === continent.continent
      );
      // setServicesArea(newServicesArea);
    }

    if (selectedRegion !== 'Select a Region') {
      // setCountries(
      //   ServiceAreas.find(
      //     (area) =>
      //       area.continent === selectedContinent &&
      //       area.regions.find((region) => region.region === selectedRegion)
      //   )?.regions.find((region) => region.region === selectedRegion)?.states ||
      //     []
      // );

      const newServicesAreas = ServiceAreas.filter(
        (area) => selectedContinent === area.continent
      );

      // const newRegions = newServicesAreas.map((area) =>
      //   area.regions.find((region) => region.region === selectedRegion)
      // ) as [{ region: string; states: string[] }];
      // console.log(newRegions);

      // setServicesArea([{ continent: selectedContinent, regions: newRegions }]);
    }
  }, [selectedContinent, selectedRegion]);

  const handleContinentSelect = (continent: React.SetStateAction<string>) => {
    setSelectedContinent(continent);
    setSelectedRegion('Select a Region');
    setSelectedCountry('Select a Country');
    setContinentListOpen(false);
  };

  const handleRegionSelect = (region: React.SetStateAction<string>) => {
    setSelectedRegion(region);
    setSelectedCountry('Select a Country');
    setRegionListOpen(false);
  };

  const handleCountrySelect = (country: React.SetStateAction<string>) => {
    setSelectedCountry(country);
    setCountryListOpen(false);
  };
  return (
    <div className=' mt-16 w-full tracking-wider max-md:text-md max-md:leading-6 text-[#000000]'>
      <div className=' w-[60%] md:w-[70%] max-sm:w-[90%] mx-auto py-2 flex flex-col text-xl leading-8  font-[400] gap-10 max-md:text-md max-md:leading-6 '>
        <p>
          We are excited to announce that RYDEPRO, your premier choice for
          premium to luxury passenger transportation, is expanding its services
          to new and exciting destinations
        </p>
        <p>
          This global expansion signifies our commitment to excellence and our
          dedication to redefining passenger transportation worldwide.
        </p>
      </div>
      <div className=' w-[90%] max-sm:w-[90%] mx-auto my-12 flex flex-col gap-8 text-xl leading-8 font-[400] max-md:text-md max-md:leading-6'>
        <p className=''>
          Our elite transportation services will soon be available in the
          following locations:
        </p>

        <h4 className='text-2xl max-md:text-xl mb-3 mt-3 font-bold tracking-wider text-[#0E0E0E]'>
          NORTH AMERICA
        </h4>
        <div className=' flex flex-col gap-16'>
          {ServiceAreas.map((area, idx) => {
            const { continent, regions } = area;

            return (
              <div className='flex flex-col gap-4' key={continent}>
                <h4 className='text-xl max-md:text-md max-md:leading-6 font-bold text-[#0E0E0E] tracking-wider'>
                  {continent.toUpperCase()}
                  {/* <EmojiText text='🇨🇦' /> */}
                  {/* {emojiConvert('\u{1F923}')} */}
                  {/* {emojiConvert('U+1F1E6 U+1F1EB')} */}
                  {/* {String.fromCodePoint(parseInt('1f1e6', 16))} */}
                  <span className=' text-[12px]'>
                    <Flag code='CA' width={20} height={20} />
                  </span>
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
                        className={clsx(
                          'flex flex-col gap-2 mt-4 min-w-[210px] ',
                          `${styles['areas-slide']}`,
                          `${
                            region.region === 'Pacific Islands' &&
                            ' sm:min-w-[450px] '
                          }`
                        )}
                      >
                        <h5 className='text-lg max-md:text-md max-md:leading-6 text-[#0E0E0E] font-medium'>
                          {region.region}
                        </h5>
                        <ul
                          className={clsx(
                            'list-none  text-[#3C3C3C] text-md leading-6',
                            `${styles['fade-in']}`,
                            `${
                              region.region === 'Territories' &&
                              continent === 'Canada Territories' &&
                              ' sm:max-h-[150px] sm:max-w-[250px] sm:flex sm:flex-col sm:flex-wrap '
                            }`,
                            `${
                              region.region === 'Pacific Islands' &&
                              ' sm:max-h-[250px] sm:max-w-[250px] sm:flex sm:flex-col sm:flex-wrap '
                            }`
                          )}
                        >
                          {region.provinces.map((state: any, idx: any) => {
                            return (
                              <li
                                key={state}
                                className={clsx(
                                  'py-1 max-md:text-md max-md:leading-6 text-[#3C3C3C] font-[400]',
                                  `${
                                    selectedCountry === state &&
                                    'font-bold underline-offset-3 underline '
                                  }`,
                                  `${
                                    region.region === 'Pacific Islands' &&
                                    idx >= 7 &&
                                    'sm:ml-20'
                                  }`,
                                  `${
                                    region.region === 'Territories' &&
                                    continent === 'Canada Territories' &&
                                    idx >= 4 &&
                                    'sm:ml-20'
                                  }`
                                )}
                              >
                                {state}
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
          <div className=' '></div>
        </div>
      </div>
    </div>
  );
};

export default Dump;
