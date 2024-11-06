import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PageContext } from '@/contexts/PageContext';

// const inter = Inter({ subsets: ['latin'] });

// app/layout.tsx

export const metadata: Metadata = {
  title: {
    default:
      'RydePro - Global Rideshare & Chauffeur Services & Airport Transfer & On-Demand Transportation',
    template:
      '%s - Global Rideshare & Chauffeur Services & Airport Transfer & On-Demand Transportation',
  },
  description:
    'Experience premium to luxury with our on-demand chauffeur services, seamless airport transfers, and worldwide rideshare options.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://m.katabenterprises.com',
    siteName: 'RydePro',
    images: [
      {
        url: '/images/default-ride-image.png',
        width: 800,
        height: 600,
        alt: 'RydePro - Global Rideshare & Chauffeur Services & Airport Transfer & On-Demand Transportation',
      },
    ],
  },
  keywords: [
    'Rideshare',
    'Chauffeur Services',
    'Airport Transfer',
    'On-Demand Transportation',
    'Luxury Rides',
    'Premium Transportation',
    'International chauffeur service',
    'Worldwide airport transfers',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: 'RydePro',
          url: 'https://m.katabenterprises.com',
          description:
            'Experience premium to luxury with our on-demand chauffeur services, seamless airport transfers, and worldwide rideshare options.',
          potentialAction: {
            '@type': 'SearchAction',
            target:
              'https://m.katabenterprises.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
          inLanguage: 'en-US',
        })}
      </script> */}

      <body className={`font-satoshi overflow-x-hidden text-zinc-800 bg-white`}>
        <PageContext>
          <Header />

          {children}

          <div className=' mx-auto bg-[#070707] flex justify-center items-center w-full m'>
            <Footer />
          </div>
        </PageContext>

        {/* <Toaster /> */}
      </body>
      {/* <ConsentCookies /> */}
    </html>
  );
}
