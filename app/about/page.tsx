import React from 'react';
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Hero from "./Hero"

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SideBar Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Introduction</h3>
            <ul className="space-y-4">
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Who we are</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Superior Service Accessibility</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Diverse and Well-Maintained Fleet</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Customer Value and Engagement</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Innovation and Technology</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Market Strategy and Expansion</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Sustainability and Security</h4>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium">Safety and Compliance</h4>
              </li>
            </ul>
          </div>

          {/* Our Mission Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <img
                src="/voblogo.jpg"
                alt="Veteran Owned Business"
                className="w-48 h-48"
              />
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-2xl font-bold mb-4">Our Mission is Simple</h4>
              <p className="text-gray-700 leading-relaxed">
                To create a seamless, efficient, and sustainable transportation experience tailored to your needs.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Leveraging the latest technology and innovative solutions, we bring you the future of mobility.
              </p>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default About;
