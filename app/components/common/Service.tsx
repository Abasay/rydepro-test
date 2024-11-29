import React from "react";
import Image from "next/image"; // Next.js Image for optimization
import rectangle from "../../../public/3.png";
import bg from "../../../public/multiple.webp";
import world from "../../../public/world.png";
import Why from "./Why";
import InnovativeFeatures from "./InnovativeFeatures";
import Fleet from "./Fleet";

const Services: React.FC = () => {
  return (
    <section
      className="services flex flex-col text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Service Holder */}
      <div
        className="serviceHolder border flex flex-col justify-center items-center h-72 gap-5 py-5  text-center"
        style={{
          backgroundImage: `url(${world.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-bold">RYDEPRO is Expanding</h2>
        <p className="text-lg">
          Starting in California, rolling out across U.S. cities, and soon, the
          world. Get ready!
        </p>
      </div>

      {/* Services Inner */}
      <div className="servicesInner flex flex-col gap-10"
      
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        {/* Header */}
        <div className="servicesInnerHeader flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-semibold uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Dynamic Scheduling & On-Demand Travels
          </h1>
        </div>

        {/* Notes Section */}
        <div className="servicesInnerNotes flex justify-evenly items-end gap-8 border">
          {/* Note 1 */}
          <div className="servicesNote border flex flex-col items-center gap-4 p-4 rounded-lg shadow-lg max-w-sm">
            <Image
              src={rectangle}
              alt="Multi-Stop"
              className="rounded-lg object-cover w-full h-auto df:w-[500px]"
            />
            <div className="notesRec flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">Multi-Stop</h2>
              <p className=" text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">Over 1,000 vehicles available for any event.</p>
            </div>
          </div>

          {/* Note 2 */}
          <div className="servicesNote flex flex-col gap-2 p-4 rounded-lg shadow-lg max-w-sm border">
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">Round Trip</h2>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">
                Convenient for round trips without the hassle of booking twice.
              </p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">Multi-Stop Journey</h2>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">Great for trips with multiple destinations.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">Multi-Trip</h2>
              <p className="text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">
                Book multiple trips with different vehicles and drop-off
                locations in one go.
              </p>
            </div>
          </div>

          {/* Note 3 */}
          <div className="servicesNote border flex flex-col gap-2 p-4 rounded-lg shadow-lg max-w-sm">
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">On-Demand Rides</h2>
              <p className="text-gray-400 text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">On-demand rides at your fingertips with RYDEPRO.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold text-white text-[2rem] ms:text-[1rem] df:text-[1.3rem]">One-Way Trip</h2>
              <p className="text-gray-400 text-gray-400 ms:text-[0.8rem] df:text-[0.9rem]">Perfect for getting from point A to point B.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold df:text-[1.3rem]">Hourly Ride</h2>
              <p className="text-gray-400 df:text-[0.9rem]">Ideal for when you need a vehicle for a few hours.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold df:text-[1.3rem]">Clone Trip</h2>
              <p className="text-gray-400 df:text-[0.9rem]">
                Duplicate a trip with the same or similar vehicle, choosing the
                same or a different drop-off location.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <Why />

      {/* the fleet section  */}
      <Fleet/>
      {/* innovation Features Section  */}
      <InnovativeFeatures/>
    </section>
  );
};

export default Services;
