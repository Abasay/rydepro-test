import React from "react";
import Image from "next/image";
import qwe from "../../../public/2.png";
import bg from "../../../public/Gradient.png";

const Why: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-end text-gray-300 pb-20"
    style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      {/* Left Content */}
      <div className="flex flex-col  gap-28 df:gap-10 border-gray">
        {/* Top Section */}
        <div className="text-left space-y-6 px-4 flex-grow df:flex df:flex-col df:items-center df:text-center">
          <span className="text-xl font-medium">Why Choose Us</span>
          <h1 className="text-6xl font-200 text-white df:text-[1.9rem] df:font-bold">Why Choose Rydepro ?</h1>
          <p className="leading-7 text-gray-400 ms:w-[50%] ax:w-[100%]">
            Driven Cutting-Edge Technology and Sustainable Innovation;
            Redefining Your Commute.
          </p>
        </div>

        <div className="flex items-center justify-center  relative df:visible">
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[350px] object-cover top-0 df:w-[248px]"
        />
      </div>

        {/* Bottom Section */}
        <div className="flex  gap-10 px-4">
          {/* Column 1 */}
          <div className="flex flex-col justify-between gap-11">
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">Safety First</h3>
              <p className="w-11/12 text-gray-400 ms:text-[0.8rem]">
              Real-time monitoring and emergency assistance at your fingertips.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">Fair Pricing</h3>
              <p className="text-gray-400 ms:text-[0.8rem]">Upfront pricing with  transparent rates</p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">24/7 Support</h3>
              <p className="text-gray-400 ms:text-[0.8rem]">
                In-app support available anytime you need it
              </p>
            </div>
          

          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-between">
          <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">Verified Drivers</h3>
              <p className="text-gray-400 ms:text-[0.8rem]">
                Rigorous DOJ background checks & fingerprint verification
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">Diverse Ride Options</h3>
              <p className="text-gray-400 ms:text-[0.8rem]">
                Choose from regular, eco, and electric vehicles
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem]">User-Friendly App</h3>
              <p className="text-gray-400 ms:text-[0.8rem]">
                Intuitive interface with personalized features
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="flex items-end  relative df:hidden">
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[350px] object-cover top-0"
        />
      </div>
    </div>
  );
};

export default Why;
