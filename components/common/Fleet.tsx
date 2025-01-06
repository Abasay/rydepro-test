'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import bg from '@/public/bgread.png';
// import world from "@/public/Grad.png";
import { vehicleData, VehicleInfo } from '../vehicle/Vehicle';

const Fleet: React.FC = () => {
  const [vehicleTier, setVehicleTier] = useState<string>('PREMIUM');
  const [vehicleType, setVehicleType] = useState<string>('Sedan');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>('');

  const tiers: string[] = Object.keys(vehicleData);
  const types: string[] = useMemo(() => {
    return vehicleData[vehicleTier] ? Object.keys(vehicleData[vehicleTier]) : [];
  }, [vehicleTier]);

  // Safely retrieve the current vehicle
  const currentVehicle: VehicleInfo | undefined = vehicleData[vehicleTier]?.[vehicleType];

  // Handle auto transition
  useEffect(() => {
    if (isPaused || !currentVehicle) return;

    const interval = setInterval(() => {
      setAnimationClass('slide-out');
      setTimeout(() => {
        setVehicleType((prev) => {
          const currentIndex = types.indexOf(prev);
          if (currentIndex + 1 < types.length) {
            return types[currentIndex + 1];
          } else {
            const nextTierIndex = (tiers.indexOf(vehicleTier) + 1) % tiers.length;
            setVehicleTier(tiers[nextTierIndex]);
            return Object.keys(vehicleData[tiers[nextTierIndex]])[0];
          }
        });
        setAnimationClass('slide-in');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [vehicleTier, types, tiers, isPaused, currentVehicle]);

  // return (
  //   // <section
  //   //   className="bg-black-500 pt-8 flex item-center justify-center  relative  text-white  px-4"
  //   //   style={{
  //   //     backgroundImage: `url(${bg.src})`,
  //   //     backgroundSize: "cover",
  //   //     backgroundPosition: "center",
  //   //     backgroundRepeat: "no-repeat"
  //   //   }}
  //   // >

  //   //   <div className="relative w-[80%] flex flex-col gap-10">
  //   //       <div>
  //   //         <h1 className="text-center text-xl lg:text-3xl font-semibold mb-4">Fleet</h1>
  //   //         <p className="text-center text-gray-400 mb-6">Scheduled Booking</p>
  //   //       </div>

  //   //       {/* Vehicle Tier */}
  //   //       <div
  //   //         className="flex flex-col p-2 items-start  cx:mb-10"
  //   //       >
  //   //         <span className="text-gray-400">Vehicle Tier</span>
  //   //         <div className="flex flex-wrap w-full justify-center gap-4 mb-8">
  //   //           {tiers.map((tier) => (
  //   //             <button
  //   //               key={tier}
  //   //               onClick={() => setVehicleTier(tier)}
  //   //               className={`px-4 flex-grow py-2 text-[#F7F7F7] text-[18px] lg:text-base transition ${
  //   //                 vehicleTier === tier
  //   //                   ? "bg-gradient-to-r from-[#ffffff31] to-[#9999993a]"
  //   //                   : "text-gray-500 hover:text-white"
  //   //               }`}
  //   //             >
  //   //               {tier}
  //   //             </button>
  //   //           ))}
  //   //         </div>

  //   //         {/* Vehicle Type */}
  //   //         <span className="text-gray-400">Vehicle Type</span>
  //   //         <div className="flex flex-wrap w-full justify-start gap-4 mb-6">
  //   //           {types.map((type) => (
  //   //             <button
  //   //               key={type}
  //   //               onClick={() => setVehicleType(type)}
  //   //               className={`px-4 flex-grow py-2 text-[#F7F7F7] text-[18px] lg:text-base transition ${
  //   //                 vehicleType === type
  //   //                   ? "bg-gradient-to-r from-[#ffffff31] to-[#9999993a]"
  //   //                   : "text-gray-500 hover:text-white"
  //   //               }`}
  //   //             >
  //   //               {type}
  //   //             </button>
  //   //           ))}
  //   //         </div>

  //   //       </div>

  //   //       <div className="">
  //   //         {/* Vehicle Details */}
  //   //         <div className="text-left mb-16 pl-3 cx:mb-7">
  //   //           <h2 className="text-[2rem] cx:text-[1.3rem] font-semibold">{`${vehicleTier} ${vehicleType}`}</h2>
  //   //         </div>
  //   //         {/* Image and Information */}
  //   //         {currentVehicle ? (
  //   //           <div
  //   //             className="flex relative pt-28 pb-20 flex-col items-center lg:justify-between"
  //   //             onMouseEnter={() => setIsPaused(true)}
  //   //             onMouseLeave={() => setIsPaused(false)}
  //   //           >
  //   //             <div className={`vehicle-image-wrapper cx:bottom-[-200px]  absolute ${animationClass}`}>
  //   //               <Image
  //   //                 src={currentVehicle.image}
  //   //                 alt={`${vehicleTier} ${vehicleType}`}
  //   //                 width={650}
  //   //                 height={300}
  //   //                 className="fixed-dimensions"
  //   //               />
  //   //             </div>

  //   //             <div className="flex  cx:flex-col justify-between w-full ">
  //   //               <div className=" flex flex-col cx:flex-row cx:justify-between gap-8">
  //   //                 <div>
  //   //                   <h3 className="text-4xl cx:text-2xl">{currentVehicle.passengers}</h3>
  //   //                   <p className="text-gray-400 text-sm">Passengers</p>
  //   //                 </div>
  //   //                 <div>
  //   //                   <h3 className="text-4xl cx:text-2xl">{currentVehicle.luggage}</h3>
  //   //                   <p className="text-gray-400 text-sm">Luggage</p>
  //   //                 </div>
  //   //               </div>

  //   //               {/* Free Waiting Times */}
  //   //                 {currentVehicle && (
  //   //                   <div className="mt-8 flex flex-col items-end  cx:items-center">
  //   //                     <h4 className="text-base font-semibold mb-4">Free Waiting Times</h4>
  //   //                     {currentVehicle.times.map((time, index) => (
  //   //                       <p key={index} className="text-right">
  //   //                         {time}
  //   //                       </p>
  //   //                     ))}
  //   //                   </div>
  //   //                 )}
  //   //             </div>
  //   //           </div>
  //   //           ) : (
  //   //             <p className="text-center text-red-500">
  //   //               Vehicle data unavailable. Please select a valid type or tier.
  //   //             </p>
  //   //           )}
  //   //       </div>

  //   //         <div className="cx:mt-24">
  //   //           <div className="cx:mt-32 text-center text-xl text-white space-x-4">
  //   //             <a href="#" className="hover:text-white underline decoration-gray-400 leading-[3]">
  //   //               Cancellation Policy
  //   //             </a>
  //   //             <a
  //   //               href="#"
  //   //               className="hover:text-white underline decoration-gray-400 leading-[3] -l -gray-400 pl-4"
  //   //             >
  //   //               Luggage Policy
  //   //             </a>
  //   //           </div>
  //   //         </div>
  //   //   </div>
  //   //       {/* Links */}
  //   // </section>
  // );
  return null;
};

export default Fleet;
