'use client'
// components/Banner.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 0,
    mins: 0,
  });

  useEffect(() => {
    const targetTime = Date.now() + timeLeft.days * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        setTimeLeft({ days, hours, mins });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-t from-black/65 flex items-center justify-center text-center text-white h-full px-4 pb-20 sm:px-8 ">
      {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          loop
          autoPlay
          muted
          playsInline
          >
        <source src="/text.webm" type="video/webm" />
        Your browser does not support the video tag.
    </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 pt-10">
        {/* Title */}
        <span className="text-lg sm:text-2xl">RYDEPRO</span>
        <h1 className="font-[500] ms:font-[500] ms:text-5xl lg:text-5xl font-normalax:w-[80%] w-[80%] max-w-6xl ax:text-[2.2rem]">
          Your Ultimate On Demand Passenger Transportation Solution
        </h1>
        <p className="text-sm fd:text-[20px] sm:text-base lg:text-lg w-[70%]  leading-6 ax:text-[1.2rem]">
        Experience Premium to Luxury with our on-demand Chauffeur services, seamless airport transfers, and worldwide rideshare services.
        </p>

        {/* Early Access Section */}
        <div className=" p-4 rounded-lg text-center max-w-5xl w-full">
          <div className="flex items-center justify-center gap-4">
            <Image src="/start.png" alt="star" width={24} height={24} />
            <span>Early Access Special Offer</span>
          </div>

          <div className="flex  justify-center gap-4 mt-4 w-[100%] lg:w-full cx:flex-wrap">
            <span className="border md:text-[12px] lg:text-sm border-yellow-400 px-4 py-2 rounded-full bg-white bg-opacity-10">
              Sign-Up for Early Access & Get 15% off your first 2 rides
            </span>
            <span className="border md:text-[12px] lg:text-sm border-yellow-400 px-4 py-2 rounded-full bg-white bg-opacity-10">
              For each friend you refer, youll get an extra 10% off your next ride
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <span>Limited time offer. Hurry, this offer ends soon!</span>
            <Link href="#" className="text-white underline">
              Promotional Terms & Services
            </Link>
          </div>

          <div className="flex items-center justify-center gap-10 mt-6">
      {['Days', 'Hours', 'Mins'].map((unit) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="flex gap-2">
            {String(timeLeft[unit.toLowerCase() as keyof typeof timeLeft])
              .padStart(2, '0')
              .split('')
              .map((digit, i) => (
                <span
                  key={i}
                  className="flex items-center justify-center bg-white bg-opacity-15 w-[54px] h-[80px] rounded-[8px] text-[40px]"
                >
                  {digit}
                </span>
              ))}
          </div>
          <span className="mt-2 text-[16px]">{unit}</span>
        </div>
      ))}
    </div>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-base">Sign Up via Web:</span>
          <button className="bg-white text-[#0E0E0E] px-6 py-2 rounded-lg font-semiboldtransition">
            Sign Up Now for Early Access
          </button>
        </div>

        {/* App Download Section */}
        <div className='flex justify-center items-center flex-col'>
            <p className='fd:w-[85%]'>Sign Up via App:</p>
            <div className="flex gap-4 mt-4 pb-20 mb-">
            <Image src="/appstore.png" alt="App Store" width={200} height={50} className='fd:w-[150px]' />
            <Image src="/googleplay.png" alt="Google Play" width={200} height={50} className='fd:w-[150px]' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
