import React from 'react';
import Image from 'next/image';
import mapBg from '@/public/assets/sections/download.png';
import AppStore from '@/public/assets/AppStore.png';
import GooglePlay from '@/public/assets/GooglePlay.png';
import QRCode from './download.svg';
import Link from 'next/link';

const Download = () => {
  return (
    <section
      className='relative w-full h-24 max-lg:h-32  max-[420px]:h-48 max-[550px]:h-40'
      aria-labelledby='download-heading'
    >
      {/* Background Image */}
      <Image
        src={mapBg}
        alt='Map background showing RYDEPRO expansion'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        className='z-20'
        aria-hidden='true' // Decorative image, hidden from screen readers
      />

      {/* Content Overlay */}
      <div className='w-full h-full z-40 absolute top-0 bg-black bg-opacity-5 flex flex-col gap-4 items-center justify-center px-1'>
        <div className='flex container max-[550px]:flex-col transition-all delay-0 duration-300 ease-in-out justify-between w-full items-center max-[550px]:gap-8'>
          {/* Download Text and App Store Links */}
          <div className='flex items-center gap-4 max-[420px]:flex-col transition-all delay-0 duration-300 ease-in-out '>
            <p className='text-[#F7F7F7] text-sm  sm:text-base md:text-lg text-center font-medium'>
              <span id='download-heading'>Download the RYDEPRO App:</span>
            </p>
            <div className='flex gap-4 items-center  transition-all delay-0 duration-300 ease-in-out max-lg:flex-col max-[550px]:flex-row'>
              <Link
                href='https://apps.apple.com' // Replace with actual App Store link
                aria-label='Download RYDEPRO app on the App Store'
              >
                <Image src={AppStore} width={137} height={40} alt='Download RYDEPRO app on the App Store' role='img' />
              </Link>
              <Link
                href='https://play.google.com' // Replace with actual Google Play link
                aria-label='Get RYDEPRO app on Google Play'
              >
                <Image src={GooglePlay} width={137} height={40} alt='Get RYDEPRO app on Google Play' role='img' />
              </Link>
            </div>
          </div>

          {/* QR Code Section */}
          <div className='flex gap-4 max-[550px]:justify-between max-[550px]:w-full max-[550px]:px-4 items-center text-[#F7F7F7] text-sm sm:text-base md:text-lg text-center font-medium'>
            <p>Scan QR Code</p>
            <Image src={QRCode} width={57} height={57} alt='Scan QR code to download the RYDEPRO app' role='img' />
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadComp = React.memo(Download);
export default DownloadComp;
