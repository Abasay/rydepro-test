import React from "react";
import Image from "next/image";
import qwe from "../../../public/2.png";
import bg from "../../../public/Gradient.png";

const Why: React.FC = () => {
  return (
    <div className="flex items-center cx:py-20 text-gray-300 p-0 border"
    style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      {/* Left Content */}
      <div className="flex flex-col  gap-28 df:gap-10 border">
        {/* Top Section */}
        <div className="border text-left space-y-6 px-4 flex-grow cx:flex cx:flex-col cx:justify-center cx:items-center">
          <span className="text-xl font-medium ">Why Choose Us</span>
          <h1 className="text-6xl cx:text-[1.5rem] font-200 text-white cx:font-bold">Why Choose Rydepro ?</h1>
          <p className="leading-7 text-gray-400 cx:text-center cx:w-[70%] border">
            Driven Cutting-Edge Technology and Sustainable Innovation;
            Redefining Your Commute.
          </p>
        </div>

        <div className="flex items-center justify-center lg:hidden  relative cx:visible">
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
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">Safety First</h3>
              <p className="w-11/12 text-gray-400 ms:text-[0.8rem] df:text-[0.7]">
              Real-time monitoring and emergency assistance at your fingertips.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">Fair Pricing</h3>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.7]">Upfront pricing with  transparent rates</p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">24/7 Support</h3>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.7]">
                In-app support available anytime you need it
              </p>
            </div>
          

          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-between">
          <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">Verified Drivers</h3>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.7]">
                Rigorous DOJ background checks & fingerprint verification
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">Diverse Ride Options</h3>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.7]">
                Choose from regular, eco, and electric vehicles
              </p>
            </div>
            <div className="space-y-2">
              <h3 className=" text-white text-[2rem] ms:text-[1rem] df:text-[1rem]">User-Friendly App</h3>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.7]">
                Intuitive interface with personalized features
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="flex items-end  relative cx:hidden lg:visible">
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[350px] object-cover top-0 df:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Why;
