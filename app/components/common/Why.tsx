import React from "react";
import Image from "next/image";
import qwe from "../../../public/Rectangle1.png";

const Why: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-end text-gray-300 py-10">
      {/* Left Content */}
      <div className="flex flex-col  gap-28 border-gray">
        {/* Top Section */}
        <div className="text-left space-y-6 px-4 flex-grow ">
          <span className="text-xl font-medium">Why Choose Us</span>
          <h1 className="text-6xl font-200 text-white">Why Choose Rydepro</h1>
          <p className="leading-7 text-gray-400">
            Driven Cutting-Edge Technology and Sustainable Innovation;
            Redefining Your Commute.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex  gap-10 px-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-20">
            <div className="space-y-2">
              <h3 className="font-bold text-white">Safety First</h3>
              <p className="w-11/12 text-gray-400">
                Real-time monitoring and emergency assistance at your fingertips
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">Fair Pricing</h3>
              <p className="text-gray-400">Upfront pricing with transparent rates</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">24/7 Support</h3>
              <p className="text-gray-400">
                In-app support available anytime you need it
              </p>
            </div>
          

          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-24">
          <div className="space-y-2">
              <h3 className="font-bold text-white">Verified Drivers</h3>
              <p className="text-gray-400">
                Rigorous DOJ background checks & fingerprint verification
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">Diverse Ride Options</h3>
              <p className="text-gray-400">
                Choose from regular, eco, and electric vehicles
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white">User-Friendly App</h3>
              <p className="text-gray-400">
                Intuitive interface with personalized features
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div>
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Why;
