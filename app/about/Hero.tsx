import Image from 'next/image';
import HeroImage from '@/public/usbanner.png'; // Replace with the correct path to the uploaded Hero.png file

const Hero = () => {
  return (
    <section className='hero-header ax:p-6 p-16 relative h-[fit-content] w-full bg-background'>
      {/* Background Image */}
      <div className='absolute inset-0' style={{ width: '1400px' }}>
        <Image
          src={HeroImage}
          alt='Background with American flag'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='opacity-80'
          priority
        />
      </div>

      {/* Text Content */}
      <div className='holders  relative border-l-8 rounded-[4px] gap-7  z-10 flex flex-col items-start justify-center h-full px-8 ax:px-2'>
        <h1 className='text-3xl ax:text-2xl lg:text-5xl font-bold text-white mb-4'>
          Who We Are - Evolving a New Era of On- Demand Transportation
        </h1>
        <p className='inner-hero text-sm sm:text-lg lg:text-xl text-gray-300 max-w-[80%]'>
          At RYDEPRO Inc., we&apos;re changing the way you think about on-demand transportation.
        </p>
      </div>

      {/* Overlay for better text contrast */}
      <div className='absolute inset-0 bg-black opacity-40'></div>
    </section>
  );
};

export default Hero;
