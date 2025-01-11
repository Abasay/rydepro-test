import React from 'react';
import ServiceArea from '@/components/ServiceArea';

export const metadata = {
  title: 'Service Area | Rydepro',
  description:
    'Discover the areas covered by RydePro. We provide reliable ride services across multiple locations, including California, Chicago, Orange County and beyond.',
  openGraph: {
    title: 'Service Area - RydePro',
    description:
      'Explore RydePro’s service areas, from Orange County to LA and more, where you can count on us for quality ride services.',
    url: 'https://m.katabenterprises.com/service-area',
    siteName: 'RydePro',
    images: [
      {
        // url: '/images/service-areas-cover.png', // Custom image for Service Area Page
        width: 800,
        height: 600,
        alt: 'RydePro Service Area',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Area - RydePro',
    description:
      'Find out where RydePro operates. Our reliable ride services cover Chicago, California, and more locations.',
    images: ['/images/service-areas-cover.png'], // Twitter-specific image
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const ServicePage = () => {
  return (
    <>
      <ServiceArea />
    </>
  );
};

export default ServicePage;
