import React from 'react';

import About from '@/components/About';

export const metadata = {
  title: 'About Us | RydePro',
  description:
    'Learn more about RydePro, our mission to provide reliable and flexible ride options, and our commitment to quality service.',
  openGraph: {
    title: 'About Us - RydePro',
    description:
      'Discover the story behind RydePro, our values, and our commitment to high-quality ride services tailored to meet every need.',
    url: '', //The Website URL
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
    description: 'Meet RydePro: Dedicated to providing quality, convenience, and flexibility in every ride.',
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
      <About />
    </>
  );
};

export default AboutPage;
