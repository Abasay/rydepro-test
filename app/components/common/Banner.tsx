// components/Banner.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center text-center text-white h-screen overflow-hidden px-4 pb-20 sm:px-8 ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[100dvh] object-cover z-[-1]"
        src="/text.mp4"
        loop
        autoPlay
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 pt-[100px]">
        {/* Title */}
        <span className="text-lg sm:text-2xl pt-20">RYDEPRO</span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal w-[100%] max-w-6xl">
          Your Ultimate On Demand Passenger Transportation Solution
        </h1>
        <p className="text-sm sm:text-base lg:text-lg w-[90%] max-w-lg leading-6">
          Experience premium chauffeur services, seamless airport transfers, and worldwide rideshare services.
        </p>

        {/* Early Access Section */}
        <div className=" p-4 rounded-lg text-center max-w-5xl w-full">
          <div className="flex items-center justify-center gap-4">
            <Image src="/start.png" alt="star" width={24} height={24} />
            <span>Early Access Special Offer</span>
          </div>

          <div className="flex  justify-center gap-4 mt-4 w-[100%]">
            <span className="border md:text-[12px] border-yellow-400 px-4 py-2 rounded-full bg-white bg-opacity-10">
              Sign-Up for Early Access & Get 15% off your first 2 rides
            </span>
            <span className="border md:text-[12px] border-yellow-400 px-4 py-2 rounded-full bg-white bg-opacity-10">
              For each friend you refer, youll get an extra 10% off your next ride
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <span>Limited time offer. Hurry, this offer ends soon!</span>
            <Link href="#" className="text-white ">
              Promotional Terms & Services
            </Link>
          </div>

          {/* Timer */}
          <div className="flex items-center justify-center gap-10 mt-6">
            {['Days', 'Hours', 'Mins'].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="flex gap-2">
                  <span className="bg-white bg-opacity-10 px-3 py-2 rounded-lg text-2xl sm:text-3xl">8</span>
                  <span className="bg-white bg-opacity-10 px-3 py-2 rounded-lg text-2xl sm:text-3xl">8</span>
                </div>
                <span className="mt-2 text-sm">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-base">Sign Up via Web:</span>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semiboldtransition">
            Sign Up Now for Early Access
          </button>
        </div>

        {/* App Download Section */}
        <div className="flex gap-4 mt-4 pb-20 flex-wrap">
          <Image src="/appstore.png" alt="App Store" width={200} height={50} />
          <Image src="/googleplay.png" alt="Google Play" width={200} height={50} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
