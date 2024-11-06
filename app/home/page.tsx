import React from 'react';
import Section1 from '@/components/Home/Sections/Section1';
// import Services from '@/components/Home/Sections/Services';
// import Section2 from '@/components/Home/Sections/Section2';
// import CarsSection from '@/components/Home/Sections/CarsSection';
import Features from '@/components/Home/Sections/Features';
import dynamic from 'next/dynamic';

// const Services = React.lazy(
//   () => import('@/components/Home/Sections/Services')
// );

const Hero = dynamic(() => import('@/components/Home/Hero'), {
  ssr: true,
});
const Services = dynamic(() => import('@/components/Home/Sections/Services'), {
  ssr: true, // Set to false if you want to load it on the client-side
});

const CarsSection = dynamic(
  () => import('@/components/Home/Sections/CarsSection')
);

const Section2 = dynamic(() => import('@/components/Home/Sections/Section2'));

export default function Home() {
  return (
    <>
      <Hero />
      <main className={``}>
        <section className='w-full flex flex-col overflow-x-hidden overflow-y-hidden'>
          <Section1 />
          <Services />
          <Section2 />
          <CarsSection />
          <Features />
        </section>
      </main>
    </>
  );
}
