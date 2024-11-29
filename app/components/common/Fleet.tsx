"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import bg from "../../../public/bgread.png";
import world from "../../../public/Grad.png";
import { vehicleData, VehicleInfo } from "../vehicle/Vehicle";

const Fleet: React.FC = () => {
  const [vehicleTier, setVehicleTier] = useState<string>("PREMIUM");
  const [vehicleType, setVehicleType] = useState<string>("Sedan");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");

  const tiers: string[] = Object.keys(vehicleData);
  const types: string[] = useMemo(() => {
    return vehicleData[vehicleTier]
      ? Object.keys(vehicleData[vehicleTier])
      : [];
  }, [vehicleTier]);

  // Safely retrieve the current vehicle
  const currentVehicle: VehicleInfo | undefined =
    vehicleData[vehicleTier]?.[vehicleType];

  // Handle auto transition
  useEffect(() => {
    if (isPaused || !currentVehicle) return;

    const interval = setInterval(() => {
      setAnimationClass("slide-out");
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
        setAnimationClass("slide-in");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [vehicleTier, types, tiers, isPaused, currentVehicle]);

  return (
    <section
      className="bg-black-500 relative text-white py-8 px-4 lg:px-16 border"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center text-xl lg:text-3xl font-semibold mb-4">Fleet</h1>
      <p className="text-center text-gray-400 mb-6">Scheduled Booking</p>

      {/* Vehicle Tier */}
      <div
        className="flex flex-col p-2 items-start"
        style={{
          backgroundImage: `url(${world.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-gray-400">Vehicle Tier</span>
        <div className="flex flex-wrap w-full justify-center gap-4 mb-8">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setVehicleTier(tier)}
              className={`px-4 flex-grow py-2 text-sm lg:text-base transition ${
                vehicleTier === tier
                  ? "bg-gradient-to-r from-[#ffffff31] to-[#9999993a]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Vehicle Type */}
        <span className="text-gray-400">Vehicle Type</span>
        <div className="flex flex-wrap w-full justify-start gap-4 mb-6">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setVehicleType(type)}
              className={`px-4 flex-grow py-2 text-sm lg:text-base transition ${
                vehicleType === type
                  ? "bg-gradient-to-r from-[#ffffff31] to-[#9999993a]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="text-left mb-6 pl-3">
        <h2 className="text-[2rem] font-semibold">{`${vehicleTier} ${vehicleType}`}</h2>
      </div>

      {/* Image and Information */}
      {currentVehicle ? (
        <div
          className="flex flex-col lg:flex-row items-center lg:justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`vehicle-image-wrapper ${animationClass}`}>
            <Image
              src={currentVehicle.image}
              alt={`${vehicleTier} ${vehicleType}`}
              width={400}
              height={300}
              className="fixed-dimensions"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-4xl">{currentVehicle.passengers}</h3>
            <p className="text-gray-400 text-sm">Passengers</p>
            <h3 className="text-4xl">{currentVehicle.luggage}</h3>
            <p className="text-gray-400 text-sm">Luggage</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">
          Vehicle data unavailable. Please select a valid type or tier.
        </p>
      )}

      {/* Free Waiting Times */}
      {currentVehicle && (
        <div className="mt-8 flex flex-col items-end">
          <h4 className="text-base font-semibold mb-4">Free Waiting Times</h4>
          {currentVehicle.times.map((time, index) => (
            <p key={index} className="text-right">
              {time}
            </p>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-8 text-center text-sm text-gray-400 space-x-4">
        <a href="#" className="hover:text-white underline decoration-gray-400 leading-[3]">
          Cancellation Policy
        </a>
        <a
          href="#"
          className="hover:text-white underline decoration-gray-400 leading-[3] border-l border-gray-400 pl-4"
        >
          Luggage Policy
        </a>
      </div>
    </section>
  );
};

export default Fleet;
