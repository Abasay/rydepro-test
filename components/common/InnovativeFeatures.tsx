'use client';
import { useState } from 'react';
// import Image from "next/image";

const InnovativeFeatures: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const features = [
    {
      title: 'Real-Time Tracking',
      description: 'Share your ride status with friends or family.',
    },
    {
      title: 'AI Vehicle Coming Soon',
      description: 'Get ready for the future with our AI-powered vehicles.',
    },
    {
      title: 'Multi-Modal Integration',
      description: 'Seamlessly integrate your app with other transportation services',
    },
    {
      title: 'Innovative Payment Coming Soon',
      description: 'Blockchain technology and SEC approved stable coins',
    },
  ];

  return (
    <section className='flex flex-col items-center pt-10'>
      {/* Features Section */}
      <h2 className='text-sm uppercase tracking-widest'>Features</h2>
      <h1 className='text-[2.5rem]'>Innovative Features</h1>

      <div className='feat flex ex:px-8 ex:py-8 ex:gap-6 ex:flex-wrap  ex:justify-center items-center justify-around w-full text-white lg:px-52 lg:py-16'>
        <div className='flex flex-col gap-8 w-full lg:w-1/2 border-l-[3px] border-[#FFFFFF4D]'>
          <div className='flex flex-col gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-4 flex flex-col gap-3 border-l-[3px] ml-[-2px] transition ${
                  activeIndex === index
                    ? 'border-white bg-gradient-to-r from-white/10 to-transparent'
                    : 'border-transparent'
                } cursor-pointer`}
              >
                <h3 className='text-lg font-semibold'>{feature.title}</h3>
                <p className='text-sm text-gray-400'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          {/* <Image
                src="/mockrocket.png"
                alt="RydePro Mobile"
                width={266}
                height={531}
                className="block"
                /> */}
        </div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;
