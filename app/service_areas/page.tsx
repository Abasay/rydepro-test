import Services from '@/components/Services';
import { Metadata } from 'next';
import React from 'react';

// app/service-areas/page.tsx

export const metadata = {
  title: 'Service Areas - RydePro',
  description:
    'Discover the areas covered by RydePro. We provide reliable ride services across multiple locations, including California, Orange County and beyond.',
  openGraph: {
    title: 'Service Areas - RydePro',
    description:
      'Explore RydePro’s service areas, from Orange County to LA and more, where you can count on us for quality ride services.',
    url: 'https://m.katabenterprises.com/services',
    siteName: 'RydePro',
    images: [
      {
        url: '/images/service-areas-cover.png', // Custom image for Service Areas
        width: 800,
        height: 600,
        alt: 'RydePro Service Areas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas - RydePro',
    description:
      'Find out where RydePro operates. Our reliable ride services cover Ibadan, Lagos, and more locations.',
    images: ['/images/service-areas-cover.png'], // Twitter-specific image
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const ServicesPage = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Service Areas',
            serviceType: 'Ride Service',
            provider: {
              '@type': 'Organization',
              name: 'RydePro',
              url: 'https://m.katabenterprises.com',
              logo: 'https://m.katabenterprises.com/images/logo.png',
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'California',
                },
                {
                  '@type': 'Place',
                  name: 'Orange County',
                },
                {
                  '@type': 'Place',
                  name: 'Los Angeles',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-555-5555',
                contactType: 'Customer Service',
                areaServed: 'NG',
                availableLanguage: 'English',
              },
            },
          }),
        }}
      />
      <Services />
    </>
  );
};

export default ServicesPage;
