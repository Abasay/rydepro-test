'use client';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { dummy, fleet, getRandomElement } from './servicesData';
//premium
import premiumSedan from '@/public/assets/new-car-models/cars/Premium Sedan.png';
import premiumMinivan from '@/public/assets/new-car-models/cars/Premium Minivan.png';
import premiumElectricSedan from '@/public/assets/new-car-models/cars/Premium Electric Sedan.png';
//Luxury
import luxurySedan from '@/public/assets/new-car-models/cars/Luxury Sedan.png';
import luxurySUV from '@/public/assets/new-car-models/cars/Luxury SUV.png';
import luxuryElectricSedan from '@/public/assets/new-car-models/cars/Luxury Electric Sedan.png';
//Executive
import executiveSedan from '@/public/assets/new-car-models/cars/Executive Sedan.png';
import executiveSUV from '@/public/assets/new-car-models/cars/Executive SUV.png';
import executiveElectricSedan from '@/public/assets/new-car-models/cars/Executive Electric Sedan.png';
//Other imgs for commercials
import sprinters from '@/public/assets/new-car-models/cars/Sprinters.png';
import transit from '@/public/assets/new-car-models/cars/Transit Van.png';
import buses from '@/public/assets/new-car-models/cars/Buses.png';

import shadow from '@/public/assets/new-car-models/shadow.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faPlaneLock,
} from '@fortawesome/free-solid-svg-icons';

import bgImage from '@/public/assets/sections/carsInfoBg.png';
import bgCars from '@/public/assets/sections/carsBg.png';
import Link from 'next/link';

const carImages = [
  { name: 'Premium Sedan', path: premiumSedan },
  { name: 'Premium Minivan', path: premiumMinivan },
  { name: 'Premium Electric Sedan', path: premiumElectricSedan },
  { name: 'Luxury Sedan', path: luxurySedan },
  { name: 'Luxury SUV', path: luxurySUV },
  { name: 'Luxury Electric Sedan', path: luxuryElectricSedan },
  { name: 'Executive Sedan', path: executiveSedan },
  { name: 'Executive SUV', path: executiveSUV },
  { name: 'Executive Electric Sedan', path: executiveElectricSedan },
  { name: 'Commercial Sprinters', path: sprinters },
  { name: 'Commercial Transit Van', path: transit },
  { name: 'Commercial Buses', path: buses },
];

const fleetDetails = {
  'Premium Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '60 mins',
        airportInternational: '60 mins',
        cruises: '60 mins',
        intercity: '5 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Premium Electric Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '60 mins',
        airportInternational: '60 mins',
        cruises: '60 mins',
        intercity: '5 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Premium Minivan': {
    details: {
      passengers: 5,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '65 mins',
        airportInternational: '65 mins',
        cruises: '65 mins',
        intercity: '7 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  // 'Premium SUV': {
  //     details: {
  //         passengers: 6,
  //         luggages: 'Varies',
  //         waitingTimes: {
  //             airportDomestic: '65 mins',
  //             airportInternational: '65 mins',
  //             cruises: '65 mins',
  //             intercity: '5 mins',
  //             customizable: false,
  //         },
  //         policies: {
  //             cancellation: 'Rydepro.com/cancellation',
  //             luggages: 'Rydepro.com/luggages',
  //         },
  //     },
  // },
  'Executive Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '70 mins',
        airportInternational: '70 mins',
        cruises: '70 mins',
        intercity: '8 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Executive Electric Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '70 mins',
        airportInternational: '70 mins',
        cruises: '70 mins',
        intercity: '8 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Executive SUV': {
    details: {
      passengers: 6,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '75 mins',
        airportInternational: '75 mins',
        cruises: '75 mins',
        intercity: '10 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Luxury Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '80 mins',
        airportInternational: '80 mins',
        cruises: '80 mins',
        intercity: '15 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Luxury Electric Sedan': {
    details: {
      passengers: 3,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '80 mins',
        airportInternational: '80 mins',
        cruises: '80 mins',
        intercity: '15 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Luxury SUV': {
    details: {
      passengers: 6,
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: '90 mins',
        airportInternational: '90 mins',
        cruises: '90 mins',
        intercity: '15 mins',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Commercial Transit Van': {
    details: {
      passengers: 'Customized',
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: 'Customized',
        airportInternational: 'Customized',
        cruises: 'Customized',
        intercity: 'Customized',
        customizable: true,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Commercial Sprinters': {
    details: {
      passengers: 'Customized',
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: 'Customized',
        airportInternational: 'Customized',
        cruises: 'Customized',
        intercity: 'Customized',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggages',
      },
    },
  },
  'Commercial Buses': {
    details: {
      passengers: 'Customized',
      luggages: 'Varies',
      waitingTimes: {
        airportDomestic: 'Customized',
        airportInternational: 'Customized',
        cruises: 'Customized',
        intercity: 'Customized',
        customizable: false,
      },
      policies: {
        cancellation: 'Rydepro.com/cancellation',
        luggages: 'Rydepro.com/luggage',
      },
    },
  },
} as any;

const CarsSection = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const [getTop, setGetTop] = useState<number>(0);
  const [car, setCar] = useState<string>('Premium Sedan');
  const [type, setType] = useState<string>('');
  const [image, setImage] = useState<any>(premiumSedan);
  const [subArray, setSubArray] = useState<any[]>(dummy);
  const [animateImage, setAnimateImage] = useState<boolean>(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [activeCarFamily, setActiveCarFamily] = useState<string>('Premium');
  const [activeCarType, setActiveCarType] = useState<string>('Sedan');

  const [activeDetails, setActiveDetails] = useState<{
    passengers: string | number;
    luggages: string | number;
    waitingTimes: {
      airportDomestic: string;
      airportInternational: string;
      cruises: string;
      intercity: string;
      customizedOffer: boolean;
    };
  }>({
    passengers: 3,
    luggages: 3,
    waitingTimes: {
      airportDomestic: '60 mins',
      airportInternational: '60 mins',
      cruises: '60 mins',
      intercity: '5 mins',
      customizedOffer: false,
    },
  });
  const [activeDetail, setActiveDetail] = useState<any>('');
  const [animateClass, setAnimationClass] = useState<string>('slide-in-right'); // Start with slide-in from right
  const [slideDirection, setSlideDirection] = useState<boolean>(true);
  //Randomness

  const getRandomFleet = () => {
    const randomFleet = getRandomElement(fleet);
    const randomType = getRandomElement(randomFleet.types);
    setSubArray(randomFleet.types);
    setActiveCarType(randomType.car);
    console.log(randomFleet, randomType.car);
    return `${randomFleet.head} ${randomType.car}`;
  };

  let random: string;

  const handleClick = (carType: string) => {
    setActiveCarType(carType);
    setSlideDirection((prev) => !prev);

    // Trigger the current slide-out animation
    setAnimationClass(slideDirection ? 'slide-out-left' : 'slide-out-right');

    setTimeout(() => {
      const carImage = `${activeCarFamily} ${carType}`;
      setCar(`${activeCarFamily} ${carType}`);
      setImage(carImages.find((imageCar) => imageCar.name === carImage)?.path);

      setActiveDetails(
        fleetDetails[carImage]?.details || {
          passengers: 3,
          luggages: 3,
          waitingTimes: {
            airportDomestic: '60 minutes',
            airportInternational: '60 minutes',
            cruises: '60 minutes',
            intercity: '5 minutes',
            customizedOffer: false,
          },
        }
      );
      setAnimationClass(slideDirection ? 'slide-in-left' : 'slide-in-right');
    }, 1000);
  };

  const handleClickCarFamily = (carFamily: string) => {
    setActiveCarFamily(carFamily);
    setSlideDirection((prev) => !prev);

    // Trigger the current slide-out animation
    setAnimationClass(slideDirection ? 'slide-out-left' : 'slide-out-right');

    const searchFamily = fleet.find(
      (fleetFamily) => fleetFamily.head === carFamily
    );

    setSubArray((searchFamily as any)?.types);
    setActiveCarType((searchFamily as any)?.types[0].car);

    setTimeout(() => {
      const carImage = `${carFamily} ${searchFamily?.types[0].car}`;
      setCar(`${carFamily} ${searchFamily?.types[0].car}`);
      setImage(carImages.find((imageCar) => imageCar.name === carImage)?.path);

      setActiveDetails(
        fleetDetails[carImage]?.details || {
          passengers: 3,
          luggages: 3,
          waitingTimes: {
            airportDomestic: '60 minutes',
            airportInternational: '60 minutes',
            cruises: '60 minutes',
            intercity: '5 minutes',
            customizedOffer: false,
          },
        }
      );
      setAnimationClass(slideDirection ? 'slide-in-left' : 'slide-in-right');
    }, 1000);
  };

  useEffect(() => {
    const randomInterval = setInterval(() => {
      // Alternate the slide direction
      setSlideDirection((prev) => !prev);

      // Trigger the current slide-out animation
      setAnimationClass(slideDirection ? 'slide-out-left' : 'slide-out-right');

      setTimeout(() => {
        // Get new random fleet after slide-out
        let random = getRandomFleet();
        while (random === car) {
          random = getRandomFleet();
        }
        // if (random.startsWith('Commercial')) random = 'Transit Van';
        const randomSplit = random.split(' ');
        const findImage = carImages.find((image) => image.name === random);

        // Update car details
        setActiveCarFamily(randomSplit[0]);
        // setActiveCarType(randomSplit[randomSplit.length - 1]);
        setCar(random);
        setImage(findImage?.path);
        setActiveDetails(
          fleetDetails[random]?.details || {
            passengers: 3,
            luggages: 3,
            waitingTimes: {
              airportDomestic: '60 minutes',
              airportInternational: '60 minutes',
              cruises: '60 minutes',
              intercity: '5 minutes',
              customizedOffer: false,
            },
          }
        );

        // Trigger the slide-in animation with the opposite direction
        setAnimationClass(slideDirection ? 'slide-in-left' : 'slide-in-right');
      }, 1000); // Match the slide-out duration
    }, 5000); // Change the fleet every 5 seconds

    return () => clearInterval(randomInterval); // Cleanup the interval on unmount
  }, [slideDirection]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  /**useEffects */
  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any =
        carRef.current?.getBoundingClientRect()?.top;
      setGetTop(sectionTop);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (windowDimensions.width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, windowDimensions]);

  return (
    <section
      className={clsx(
        `w-full min-h-[800px] bg-black  max-h-[1150px] relative flex justify-center `
      )}
      // style={{
      //   backgroundImage: `url(${bgImage.src})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   minHeight: '700px',
      // }}
    >
      <Image
        src={bgImage}
        alt='Rydepro Fleet Informations'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        className=' absolute top-0'
      />
      <div
        // ref={carRef}
        className='w-full relative  flex flex-col items-center'
      >
        <div className=' w-full py-12  flex flex-col gap-7 items-center  bg-black bg-opacity-80'>
          <div className=' flex flex-col gap-4 items-center'>
            <h2 className='text-[#F7F7F7] font-medium tracking-wider text-4xl max-md:text-2xl'>
              Fleet
            </h2>
            <h3 className=' text-md leading-6 text-[#F7F7F7] font-light max-sm:text-sm'>
              Scheduled Booking
            </h3>
          </div>

          <div className='flex flex-col max-w-[1540px] md:mt-4  w-[80%]  mx-auto gap-4  tracking-wider'>
            <div className=' w-full'>
              <span className=' text-[#8A8A8A] text-md -mb-[4px] leading-6'>
                Vehicle Tier
              </span>
              <div className='grid grid-cols-2 md:flex md:flex-row transition flex-wrap w-full'>
                {fleet.map((item, idx: number) => {
                  const { head, types } = item;
                  return (
                    <>
                      <div
                        className={`md:py-2 text-center md:px-4 py-2 px-4 border-l border-gray-700 max-w-[250px]  min-w-[167.5px] max-md:min-w-[120px] lg:w-1/4 cursor-pointer filter  hover:bg-[#FFFFFF1A]  transition ease-in-out text-[18px] leading-6 tracking-wider font-medium max-md:text-base text-[#F7F7F7] ${
                          activeCarFamily === head && ' bg-[#FFFFFF1A]'
                        }`}
                        onClick={() => {
                          handleClickCarFamily(head);
                        }}
                        key={idx}
                      >
                        {head.toLowerCase() === 'commercial'
                          ? head.toUpperCase() + ' BUSES'
                          : head.toUpperCase()}
                      </div>
                      {/* <span className='text-white text-lg absolute'>{head}</span> */}
                    </>
                  );
                })}
              </div>
            </div>

            <div className=' w-full'>
              <span className=' text-[#8A8A8A] text-md -mb-[4px] leading-6'>
                Vehicle Type
              </span>
              <div
                className={`flex gap-0   md:flex md:flex-row transition flex-wrap w-full mx-auto`}
              >
                {' '}
                {subArray?.map((item, idx: number) => {
                  const { car } = item;
                  return (
                    <div
                      className={`md:py-2 text-center px-2 py-2 border-l border-gray-700 max-w-[300px]  min-w-[30%] cursor-pointer filter hover:bg-[#FFFFFF1A] transition tracking-wide font-light text-md leading-6 ease-in-out text-[#FCFCFC] ${
                        activeCarType.toLowerCase() === car.toLowerCase() &&
                        'bg-[#FFFFFF1A]'
                      } ${styles['slide-in']} `}
                      onClick={() => {
                        handleClick(car);
                      }}
                      key={idx}
                    >
                      {car}
                    </div>
                  );
                })}
              </div>
            </div>

            <h2 className='text-4xl  max-md:text-2xl font-bold py-2 w-full text-white md:mt-4'>
              {/* {car.normalize()} {car ? type.normalize() : ''} */}
              {car.startsWith('Commercial')
                ? `${car.split(' ')[1]} ${
                    car.split(' ')[2] ? car.split(' ')[2] : ''
                  }`
                : car}
            </h2>
          </div>
          <div className=' bg-black  bg-opacity-30 w-full h-[20px]'></div>
          <div className=' bg-black  bg-opacity-20 w-full h-20'></div>
        </div>

        <div className='relative w-full  flex justify-center'>
          <div className=' absolute bottom-[40%] max-w-[1540px]  max-h-[470px] max-md:bottom-0 max-md:-top-28 z-10 md:w-[80%] max-md:w-full mx-auto'>
            <div className={`flex gap-3 items-end w-full`}>
              <div
                className={`flex md:flex-row flex-col items-center justify-between w-full`}
              >
                {/**car details */}
                <div
                  className={` mt-[150px] md:hidden max-md:mt-2 min-h-[300px] transition duration-500 `}
                >
                  {' '}
                  <Image
                    title='Click on to focus'
                    src={image}
                    onClick={() => {
                      // setTracker(false);
                    }}
                    alt=''
                    width={335}
                    height={400}
                    className={`cursor-pointer max-md:max-w-[420px] max-md:w-[420px] max-md:max-h-[400px] max-[400px]:max-w-[350px] max-[350px]:max-w-[280px]  transition duration-500 ${styles[animateClass]}`}
                  />
                </div>

                {/* Hide on from MD upward */}
                <div className=' md:hidden w-full max-md:block '>
                  <div
                    className={clsx(
                      'flex  mx-auto w-[80%] md:flex-col max-md:flex-row max-md:justify-between  justify-center md:mt-40 items-center gap-10',
                      `${styles['fade-in']}`
                    )}
                  >
                    <span className='flex flex-col'>
                      <span className='text-xl font-bold text-[#FFFFFF]'>
                        {activeDetails.passengers}
                      </span>
                      <span className='text-[#8A8A8A] text-sm'>Passengers</span>
                    </span>
                    <span className='flex flex-col'>
                      <span className='text-xl font-bold text-[#FFFFFF] text-right md:text-left'>
                        {activeDetails.luggages}
                      </span>
                      <span className='text-[#8A8A8A] text-sm'>Lugggages</span>
                    </span>

                    {/** ${styles.carWallpaper} */}
                  </div>{' '}
                  <div className=' h-auto mx-auto pb-8 w-full flex flex-col items-center gap-5  max-md:-mt-8 pt-4 bg-black '>
                    <div
                      className={clsx(
                        'flex  flex-col  transition-all delay-0 md:text-right md:mt-40 justify-center gap-5 items-center md:items-end mt-6',
                        `${styles['fade-in']} min-h-[200px]`
                      )}
                    >
                      <span className='flex justify-end items-center text-right gap-1'>
                        <span className='max-md:text-md max-md:leading-6 text-xl text-[#D0D0D0]'>
                          Free Waiting Times
                        </span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          className=' w-5'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16ZM12 6.5C12.8423 6.50003 13.6583 6.79335 14.3078 7.3296C14.9573 7.86585 15.3998 8.61154 15.5593 9.43858C15.7188 10.2656 15.5853 11.1224 15.1818 11.8617C14.7783 12.601 14.1299 13.1768 13.348 13.49C13.2322 13.5326 13.1278 13.6014 13.043 13.691C12.999 13.741 12.992 13.805 12.993 13.871L13 14C12.9997 14.2549 12.9021 14.5 12.7272 14.6854C12.5522 14.8707 12.313 14.9822 12.0586 14.9972C11.8042 15.0121 11.5536 14.9293 11.3582 14.7657C11.1627 14.6021 11.0371 14.3701 11.007 14.117L11 14V13.75C11 12.597 11.93 11.905 12.604 11.634C12.8783 11.5245 13.1176 11.3423 13.2962 11.107C13.4748 10.8717 13.5859 10.5922 13.6176 10.2986C13.6493 10.0049 13.6004 9.70813 13.4762 9.44014C13.352 9.17215 13.1571 8.94307 12.9125 8.77748C12.6679 8.61189 12.3829 8.51606 12.0879 8.50027C11.793 8.48448 11.4993 8.54934 11.2384 8.68787C10.9775 8.8264 10.7593 9.03338 10.6072 9.28658C10.4551 9.53978 10.3748 9.82962 10.375 10.125C10.375 10.3902 10.2696 10.6446 10.0821 10.8321C9.89457 11.0196 9.64022 11.125 9.375 11.125C9.10978 11.125 8.85543 11.0196 8.66789 10.8321C8.48036 10.6446 8.375 10.3902 8.375 10.125C8.375 9.16359 8.75692 8.24156 9.43674 7.56174C10.1166 6.88192 11.0386 6.5 12 6.5Z'
                            fill='#636363'
                          />
                        </svg>
                      </span>
                      {!activeDetails?.waitingTimes?.customizedOffer ? (
                        <div className='grid transition-all delay-0 duration-400 ease-in grid-cols-2 grid-rows-2 md:flex md:flex-col gap-x-4 md:gap-x-0'>
                          <div className='flex flex-col  items-center mt-4'>
                            <span className='text-white text-md leading-6 font-bold'>
                              {activeDetails.waitingTimes.airportDomestic}
                            </span>
                            <span className='text-sm text-[#8A8A8A]'>
                              ✈️ Airport Domestic{' '}
                            </span>
                          </div>
                          <div className='flex flex-col items-center mt-4'>
                            <span className='text-white text-md leading-6 font-bold'>
                              {activeDetails.waitingTimes.airportInternational}
                            </span>
                            <span className='text-md leading-6 text-[#8A8A8A]'>
                              🌐 Airport International
                            </span>
                          </div>
                          <div className='flex flex-col items-center mt-4'>
                            <span className='text-white text-md leading-6 font-bold'>
                              {activeDetails.waitingTimes.cruises}
                            </span>
                            <span className='text-sm text-[#8A8A8A]'>
                              🚢 Cruises
                            </span>
                          </div>
                          <div className='flex flex-col items-center mt-4'>
                            <span className='text-white text-md leading-6 font-bold'>
                              {activeDetails.waitingTimes.intercity}
                            </span>
                            <span className='text-sm text-[#8A8A8A]'>
                              🏙️ Intercity
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className='grid transition-all delay-0 duration-400 ease-in grid-cols-2 grid-rows-2 md:flex md:flex-col gap-x-4 md:gap-x-0'>
                          <span className='text-white text-sm font-bold'>
                            Customized Offer
                          </span>
                        </div>
                      )}
                      <div className=' text-center  w-full mx-auto'>
                        <p className='text-md  w-full leading-6 flex gap-4 items-center font-[500] mx-auto text-center tracking-widest text-[#F7F7F7] mt-0  '>
                          <Link
                            href={'/cancellation'}
                            className=' border-r underline-offset-7 underline-[#FFFFF] underline pr-4 border-[#8A8A8A]'
                          >
                            Cancellation Policy
                          </Link>
                          <Link
                            href={'/luggages'}
                            className=' underline-offset-7 underline-[#FFFFF] underline'
                          >
                            Luggage Policy
                          </Link>
                        </p>
                      </div>

                      {/** */}
                    </div>
                  </div>
                </div>

                <div className='flex max-md:w-full  min-h-[200px] max-md:hidden md:flex-col max-md:flex-row max-md:justify-between  justify-center md:mt-40  gap-10'>
                  <span className='flex flex-col'>
                    <span
                      className={clsx(
                        ' font-bold text-[#FFFFFF]',
                        activeDetails.passengers === 'Customized' ||
                          activeDetails.passengers === 'Varies'
                          ? 'text-xl'
                          : 'text-6xl md:text-5xl'
                      )}
                    >
                      {activeDetails.passengers}
                    </span>
                    <span className='text-[#8A8A8A] text-md leading-6'>
                      Passengers
                    </span>
                  </span>
                  <span className='flex flex-col'>
                    <span
                      className={clsx(
                        '  font-bold text-[#FFFFFF]',
                        activeDetails.luggages === 'Customized' ||
                          activeDetails.luggages === 'Varies'
                          ? 'text-xl'
                          : 'text-6xl md:text-5xl'
                      )}
                    >
                      {activeDetails.luggages}
                    </span>
                    <span className='text-[#8A8A8A] text-sm'>Lugggages</span>
                  </span>

                  {/** ${styles.carWallpaper} */}
                </div>
                <div
                  className={` mt-[80px] md:flex max-md:hidden  transition duration-500 `}
                >
                  {' '}
                  <Image
                    title='Click on to focus'
                    src={image}
                    onClick={() => {
                      // setTracker(false);
                    }}
                    alt=''
                    width={550}
                    height={400}
                    className={`cursor-pointer max-w-[854.69px] max-[985px]:hidden  max-h-[465.62px] md:h-[initial] transition duration-500 ${styles[animateClass]}`}
                  />
                  <Image
                    title='Click on to focus'
                    src={image}
                    onClick={() => {
                      // setTracker(false);
                    }}
                    alt=''
                    width={400}
                    height={300}
                    className={`cursor-pointer max-[985px]:max-w-[600px] min-[985px]:hidden  max-h-[465.62px] md:h-[initial] transition duration-500 ${styles[animateClass]}`}
                  />
                </div>
                <div className='flex max-md:hidden min-w-[170px] min-h-[250px]   flex-col  transition-all delay-0 duration-400 md:text-right justify-center items-center md:items-end '>
                  <span className='flex justify-end items-center text-right gap-1'>
                    <span className='max-md:text-md max-md:leading-6 text-xl text-[#D0D0D0]'>
                      Free Waiting Times
                    </span>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      className=' w-5'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16ZM12 6.5C12.8423 6.50003 13.6583 6.79335 14.3078 7.3296C14.9573 7.86585 15.3998 8.61154 15.5593 9.43858C15.7188 10.2656 15.5853 11.1224 15.1818 11.8617C14.7783 12.601 14.1299 13.1768 13.348 13.49C13.2322 13.5326 13.1278 13.6014 13.043 13.691C12.999 13.741 12.992 13.805 12.993 13.871L13 14C12.9997 14.2549 12.9021 14.5 12.7272 14.6854C12.5522 14.8707 12.313 14.9822 12.0586 14.9972C11.8042 15.0121 11.5536 14.9293 11.3582 14.7657C11.1627 14.6021 11.0371 14.3701 11.007 14.117L11 14V13.75C11 12.597 11.93 11.905 12.604 11.634C12.8783 11.5245 13.1176 11.3423 13.2962 11.107C13.4748 10.8717 13.5859 10.5922 13.6176 10.2986C13.6493 10.0049 13.6004 9.70813 13.4762 9.44014C13.352 9.17215 13.1571 8.94307 12.9125 8.77748C12.6679 8.61189 12.3829 8.51606 12.0879 8.50027C11.793 8.48448 11.4993 8.54934 11.2384 8.68787C10.9775 8.8264 10.7593 9.03338 10.6072 9.28658C10.4551 9.53978 10.3748 9.82962 10.375 10.125C10.375 10.3902 10.2696 10.6446 10.0821 10.8321C9.89457 11.0196 9.64022 11.125 9.375 11.125C9.10978 11.125 8.85543 11.0196 8.66789 10.8321C8.48036 10.6446 8.375 10.3902 8.375 10.125C8.375 9.16359 8.75692 8.24156 9.43674 7.56174C10.1166 6.88192 11.0386 6.5 12 6.5Z'
                        fill='#636363'
                      />
                    </svg>
                  </span>
                  <div className='grid transition-all delay-0 duration-400 ease-in grid-cols-2 grid-rows-2 md:flex md:flex-col gap-x-4 md:gap-x-0'>
                    <div className='flex flex-col mt-4'>
                      <span className='text-white text-xl font-bold'>
                        {activeDetails.waitingTimes.airportDomestic}
                      </span>
                      <span className='text-md leading-6 text-[#8A8A8A]'>
                        ✈️ Airport Domestic{' '}
                      </span>
                    </div>
                    <div className='flex flex-col mt-4'>
                      <span className='text-white text-xl font-bold'>
                        {activeDetails.waitingTimes.airportInternational}
                      </span>
                      <span className='text-md leading-6 text-[#8A8A8A]'>
                        🌐 Airport International
                      </span>
                    </div>
                    <div className='flex flex-col mt-4'>
                      <span className='text-white text-xl font-bold'>
                        {activeDetails.waitingTimes.cruises}
                      </span>
                      <span className='text-md leading-6 text-[#8A8A8A]'>
                        🚢 Cruises
                      </span>
                    </div>
                    <div className='flex flex-col mt-4'>
                      <span className='text-white text-xl font-bold'>
                        {activeDetails.waitingTimes.intercity}
                      </span>
                      <span className='text-md leading-6 text-[#8A8A8A]'>
                        🏙️ Intercity
                      </span>
                    </div>
                  </div>

                  {/** */}
                </div>
              </div>
            </div>
          </div>

          <div
            className='relative w-full bg-gray-300'
            style={{
              backgroundImage: `url(${bgCars.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '250px',
            }}
          >
            <div className=' absolute  bottom-[20%] max-md:min-h-[180px] max-md:bottom-[10%] w-full '>
              <p className='text-md max-md:hidden leading-6 flex gap-4 justify-center items-center font-[500] w-[80%] mx-auto text-center tracking-widest text-[#F7F7F7] md:mt-0  '>
                <Link
                  href={'/cancellation'}
                  className=' border-r px-4 underline-offset-7 underline-[#FFFFF] underline border-[#8A8A8A]'
                >
                  Cancellation Policy
                </Link>
                <Link
                  href={'/luggages'}
                  className=' underline-offset-7 underline-[#FFFFF] underline'
                >
                  Luggage Policy
                </Link>
              </p>
            </div>
            {/* <div className='w-full max-md:hidden h-[10%] z-10 absolute bottom-0 bg-gradient-to-t from-black via-black/30 to-transparent'></div>
                            <div className='w-full max-md:hidden h-full z-10 absolute -bottom-full bg-gradient-to-b from-black via-black/90 to-transparent'></div> */}
          </div>
        </div>

        {/**Cancellation Policy | Luggage Policy */}
      </div>
    </section>
  );
};

export default CarsSection;
