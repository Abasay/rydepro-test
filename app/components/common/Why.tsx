import React from "react";
import Image from "next/image";
import qwe from "../../../public/2.png";
import bg from "../../../public/Gradient.png";

const Why: React.FC = () => {
  return (
    <div
      className="whyHolder flex  gap-3 justify-center items-centertext-[#D0D0D0] py-16"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col gap-12 lg:w-1/2 px-6 ">
        {/* Top Section */}
        <div className="space-y-6 lg:text-left cx:text-center">
          <span className="text-xl font-medium">Why Choose Us</span>
          <h1 className="text-6xl df:text-[2rem] cx:text-xl font-light text-white">
            Why Choose Rydepro?
          </h1>
          <p className="leading-7 text-[#D0D0D0] cx:w-full lg:w-4/5">
            Driven Cutting-Edge Technology and Sustainable Innovation;
            Redefining Your Commute.
          </p>
        </div>


         {/* Right Image */}
      <div className="newers  hidden lg:w-1/2 mt-10 lg:mt-0">
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[350px] cx:w-[248px] lg:w-[400px] object-cover"
        />
      </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="space-y-10 flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">Safety First</h3>
              <p className="text-[#D0D0D0] text-sm">
                Real-time monitoring and emergency assistance at your fingertips.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">Fair Pricing</h3>
              <p className="text-[#D0D0D0] text-sm">
                Upfront pricing with transparent rates.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">24/7 Support</h3>
              <p className="text-[#D0D0D0] text-sm">
                In-app support available anytime you need it.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-10 flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">Verified Drivers</h3>
              <p className="text-[#D0D0D0] text-sm">
                Rigorous DOJ background checks & fingerprint verification.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">Diverse Ride Options</h3>
              <p className="text-[#D0D0D0] text-sm">
                Choose from regular, eco, and electric vehicles.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-2xl cx:text-xl">User-Friendly App</h3>
              <p className="text-[#D0D0D0] text-sm">
                Intuitive interface with personalized features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="nows flex items-center justify-center  mt-10 lg:mt-0 df:hidden">
        <Image
          src={qwe}
          alt="Why Choose Us"
          className="w-[302px] h-[543px] cx:w-[248px]  object-cover"
        />
      </div>
    </div>
  );
};

export default Why;
