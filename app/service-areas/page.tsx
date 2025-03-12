import Services from '@/components/Services';
import { GetServerSideProps, Metadata } from 'next';
import Head from 'next/head';
import { headers } from 'next/headers';
import React from 'react';

// app/service-areas/page.tsx

// export const metadata: Metadata = {
//   title: 'Service Areas',
//   description:
//     'Discover the areas covered by RYDEPRO. We provide reliable ride services across multiple locations, including California, Orange County and beyond.',
//   openGraph: {
//     title: 'Service Areas - RYDEPRO',
//     description:
//       'Explore RYDEPRO’s service areas, from Orange County to LA and more, where you can count on us for quality ride services.',
//     url: 'https://rydepro.com/service-areas',
//     siteName: 'RydePro',
//     images: [
//       {
//         url: '/images/service-areas-cover.png', // Custom image for Service Areas
//         width: 800,
//         height: 600,
//         alt: 'RydePro Service Areas',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Service Areas - RydePro',
//     description: 'Find out where RydePro operates. Our reliable ride services cover Ibadan, Lagos, and more locations.',
//     images: ['/images/service-areas-cover.png'], // Twitter-specific image
//   },
//   icons: {
//     icon: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//   },
// };

export async function generateMetadata() {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for') || '0.0.0.0';

  let country = 'UNKNOWN';
  try {
    const geoResponse = await fetch(`https://ipapi.co/${forwardedFor}/json`);
    const data = await geoResponse.json();
    country = data.country_code || 'UNKNOWN';
  } catch (error) {
    console.error('Geo lookup failed', error);
  }

  let title = 'Service Areas';
  let description = 'Find a ride with RYDEPRO, no matter where you are!';

  if (country.toLowerCase() === 'ng') {
    title = 'RYDEPRO - Book Rides in Nigeria';
    description = 'Reliable ride-hailing service in Lagos, Ibadan, and across Nigeria.';
  } else if (country.toLowerCase() === 'us') {
    title = 'RYDEPRO - Book Rides in the USA';
    description = 'Get a ride anywhere in California, New York, and across the USA.';
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://rydepro.com/service-areas`,
      siteName: 'RYDEPRO',
      images: [
        {
          url: '/images/service-areas-cover.png',
          width: 800,
          height: 600,
          alt: 'RYDEPRO Service Areas',
        },
      ],
      locale: country === 'NG' ? 'en-NG' : 'en-US',
      type: 'website',
    },
  };
}

const ServicesPage = () => {
  return (
    <>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Service Areas',
            serviceType: 'Ride Service',
            provider: {
              '@type': 'Organization',
              name: 'RYDEPRO',
              url: 'https://RYDEPRO.com/service-areas',
              logo: 'https://RYDEPRO.com/images/logo.png',
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
      /> */}

      <Services />
    </>
  );
};

export default ServicesPage;
