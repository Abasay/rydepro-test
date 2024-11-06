import React from 'react';
import About from '@/components/About';
import { Metadata } from 'next';

// app/about/page.tsx

export const metadata = {
  title: 'About Us | RydePro',
  description:
    'Learn more about RydePro, our mission to provide reliable and flexible ride options, and our commitment to quality service.',
  openGraph: {
    title: 'About Us - RydePro',
    description:
      'Discover the story behind RydePro, our values, and our commitment to high-quality ride services tailored to meet every need.',
    url: 'https://m.katabenterprises.com/about',
    siteName: 'RydePro',
    images: [
      {
        url: '/assets/about/hero.jpg', // Custom image specific to "About Us"
        width: 800,
        height: 600,
        alt: 'About RydePro - Company Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - RydePro',
    description:
      'Meet RydePro: Dedicated to providing quality, convenience, and flexibility in every ride.',
    images: ['/images/about-us-image.png'], // Image for Twitter card
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const AboutPage = () => {
  return (
    <>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'RydePro',
            url: 'https://m.katabenterprises.com',
            logo: 'https://m.katabenterprises.com/assets/logo-rydepro-20214-1@2x.png',
            sameAs: [
              'https://www.facebook.com/rydepro',
              'https://twitter.com/rydepro',
              'https://www.linkedin.com/company/rydepro',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-800-555-5555',
              contactType: 'Customer Service',
              areaServed: 'NG',
              availableLanguage: 'English',
            },
          }),
        }}
      /> */}

      <About />
    </>
  );
};

export default AboutPage;
