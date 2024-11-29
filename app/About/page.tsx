import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative w-full h-64 bg-black text-white">
        <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <h1 className="text-2xl md:text-4xl font-semibold">Who We Are - Evolving a New Era of On-Demand Transportation</h1>
            <p className="text-md md:text-lg">At RYDEPRO Inc., we're changing the way you think about on-demand transportation</p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-8 md:flex md:space-x-8">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/4">
          <ul className="space-y-4">
            <li className="text-lg font-semibold">Introduction</li>
            <li className="text-lg font-semibold">Who We Are</li>
            <li>Superior Service Accessibility</li>
            <li>Diverse and Well Maintained Fleet</li>
            <li>Customer Value and Engagement</li>
            <li>Innovation and Technology</li>
            <li>Market Strategy and Expansion</li>
            <li>Sustainability and Security</li>
            <li>Safety and Compliance</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="md:w-3/4 space-y-8">
          {/* Mission Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <Image
                src="/path-to-your-vob-logo.png" // Replace with actual path to VOB logo
                alt="Veteran Owned Business"
                width={120}
                height={120}
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Our Mission is Simple</h2>
            <p className="text-center text-black-700">
              To create a seamless, efficient, and sustainable transportation experience tailored to your needs.
            </p>
            <p className="text-center text-black-700">
              Leveraging the latest technology and innovative solutions, we bring you the future of mobility.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 space-y-4 md:space-y-0 md:flex md:justify-between">
          <div>
            <p>At RYDEPRO Inc., we go beyond traditional transportation services, harnessing advanced technology to redefine on-demand mobility.</p>
            <p>Join us as we evolve into the new era of on-demand transportation.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
              <a className="text-white">About Us</a>
            </Link>
            <Link href="#">
              <a className="text-white">Service Area</a>
            </Link>
            <Link href="#">
              <a className="text-white">Terms</a>
            </Link>
            <Link href="#">
              <a className="text-white">Promotions</a>
            </Link>
            <Link href="#">
              <a className="text-white">Contact Us</a>
            </Link>
            <Link href="#">
              <a className="text-white">Partner</a>
            </Link>
            <Link href="#">
              <a className="text-white">Privacy</a>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
              <a className="text-white">
                <Image src="/path-to-app-store-badge.png" alt="App Store" width={120} height={40} />
              </a>
            </Link>
            <Link href="#">
              <a className="text-white">
                <Image src="/path-to-google-play-badge.png" alt="Google Play" width={120} height={40} />
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Katab Enterprises Inc. All Rights Reserved. RYDEPRO®</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
