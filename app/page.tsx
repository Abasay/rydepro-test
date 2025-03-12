import React from 'react';
import Section1 from '@/components/Home/Sections/Section1';
// import Services from '@/components/Home/Sections/Services';
// import Section2 from '@/components/Home/Sections/Section2';
// import CarsSection from '@/components/Home/Sections/CarsSection';
import Features from '@/components/Home/Sections/Features';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import DownloadComp from '@/components/Home/Sections/Download';

// const Services = React.lazy(
//   () => import('@/components/Home/Sections/Services')
// );

export const metadata: Metadata = {
  title: 'RYDEPRO®: US Veteran-Rideshare App, Airport & City Rides',
  description:
    'Launching in California, expanding globally: DOJ-certified drivers. Choose Economy, Executive, or Luxury rides. Book one-way, round-trip, or hourly.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',

    url: 'https://RYDEPRO.com',
    siteName: 'RYDEPRO',
    images: [
      {
        url: '/images/default-ride-image.png',
        width: 800,
        height: 600,
        alt: 'RYDEPRO®: US Veteran-Rideshare App, Airport & City Rides',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    'RYDEPRO',
    'Chauffeur Services',
    'Airport Transfer',
    'On-Demand Transportation',
    'Luxury Rides',
    'Economy Transportation',
    'International chauffeur service',
    'Worldwide airport transfers',
  ],
};

const Hero = dynamic(() => import('@/components/Home/Hero'), {
  ssr: true,
});
const Services = dynamic(() => import('@/components/Home/Sections/Services'), {
  ssr: true, // Set to false if you want to load it on the client-side
});

const CarsSection = dynamic(() => import('@/components/Home/Sections/CarsSection'));

const Section2 = dynamic(() => import('@/components/Home/Sections/Section2'));

export default function Home() {
  return (
    <>
      <Hero />
      <main className={``}>
        <section className='w-full flex flex-col overflow-x-hidden overflow-y-hidden'>
          <DownloadComp /> <Section1 />
          <Services />
          <Section2 />
          <CarsSection />
          <Features />
        </section>
      </main>
    </>
  );
}
