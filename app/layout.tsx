import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PageContext } from '@/contexts/PageContext';
import ConditionalFooter from '@/components/ConditionalFooter';
import ConditionalHeader from '@/components/ConditionalHeader';
import { GeneralWebProvider } from '@/contexts/GeneralContext';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

// app/layout.tsx

// const satoshi = localFont({
//   src: [
//     {
//       path: '../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff',
//       weight: '300',
//       style: 'light',
//     },
//     // {
//     //   path: '/public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff',
//     //   weight: '400',
//     //   style: 'normal',
//     // },

//     {
//       path: '/public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff',
//       weight: '500',
//       style: 'medium',
//     },
//     {
//       path: '/public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-SemiBold.woff',
//       weight: '600',
//       style: 'semibold',
//     },
//     {
//       path: '/public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
//   display: 'swap',
//   preload: true,
// });

import { DefaultSeo } from 'next-seo';

export const metadata: Metadata = {
  title: {
    default: 'RYDEPRO®: US Veteran-Rideshare App, Airport & City Rides',
    template: '%s - RYDEPRO®: US Veteran-Rideshare App, Airport & City Rides',
  },
  metadataBase: new URL('https://rydepro.com'),
  description:
    'Launching in California, expanding globally: DOJ-certified drivers. Choose Economy, Executive, or Luxury rides. Book one-way, round-trip, or hourly.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rydepro.com',
    siteName: 'RYDEPRO',
  },
  manifest: '/site.webmanifest',
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return (

  //   <html lang='en'>
  //     {/* <script type='application/ld+json'>
  //       {JSON.stringify({
  //         '@context': 'http://schema.org',
  //         '@type': 'WebSite',
  //         name: 'RydePro',
  //         url: 'https://rydepro.com',
  //         description:
  //           'Experience Economy to luxury with our on-demand chauffeur services, seamless airport transfers, and worldwide rideshare options.',
  //         potentialAction: {
  //           '@type': 'SearchAction',
  //           target:
  //             'https://rydepro.com/search?q={search_term_string}',
  //           'query-input': 'required name=search_term_string',
  //         },
  //         inLanguage: 'en-US',
  //       })}
  //     </script> */}

  //     <body className={`font-satoshi overflow-x-hidden text-zinc-800 bg-white`}>
  //       <PageContext>
  //         <Header />

  //         {children}

  //         <div className=' mx-auto bg-[#070707] flex justify-center items-center w-full m'>
  //           <Footer />
  //         </div>
  //       </PageContext>

  //       {/* <Toaster /> */}
  //     </body>
  //     {/* <ConsentCookies /> */}
  //   </html>
  // );

  return (
    <GeneralWebProvider>
      <PageContext>
        <html lang='en'>
          <body className={` font-satoshi overflow-x-hidden text-zinc-800 bg-white`}>
            <ConditionalHeader />
            {children}
            <div className=' mx-auto bg-[#070707]  flex justify-center items-center w-full m'>
              <ConditionalFooter />
            </div>

            {/* <Toaster /> */}
          </body>
          {/* <ConsentCookies /> */}
        </html>
      </PageContext>
    </GeneralWebProvider>
  );
}
