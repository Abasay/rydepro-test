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
      className="services flex flex-col text-white "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Service Holder */}
      <div
        className="serviceHolder flex flex-col justify-center items-center h-72 gap-5 py-5  text-center"
        style={{
          backgroundImage: `url(${world.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-bold cx:text-[1.5rem]">RYDEPRO is Expanding</h2>
        <p className="text-lg cx:w-[80%]">
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
        <div className="servicesInnerHeader pt-20 flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-semibold uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-4xl font-bold leading-tight cx:text-[1.5rem]">
            Dynamic Scheduling & On-Demand Travels
          </h1>
        </div>

        {/* Notes Section */}
        <div className="servicesInnerNotes items-end flex lg:flex-row lg:justify-evenly  gap-8">
  {/* Note 1 */}
  <div className="servicesNote flex flex-col items-center gap-4 p-4 rounded-lg shadow-lg w-full md:w-1/3">
    <Image
      src={rectangle}
      alt="Multi-Stop"
      className="imgs rounded-lg object-cover w-full h-auto"
    />
    <div className="notesRec flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Multi-Stop
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Over 1,000 vehicles available for any event.
      </p>
    </div>
  </div>

  {/* Notes Group */}
  <div className="servicesNote flex flex-wrap gap-4 p-4 rounded-lg shadow-lg w-full md:w-1/3">
    <div className="notesRec w-full  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Round Trip
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Convenient for round trips without the hassle of booking twice.
      </p>
    </div>
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Multi-Stop Journey
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Great for trips with multiple destinations.
      </p>
    </div>
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Multi-Trip
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Book multiple trips with different vehicles and drop-off locations in one go.
      </p>
    </div>
  </div>

  {/* Note 3 */}
  <div className="servicesNote flex flex-wrap gap-4 p-4 rounded-lg shadow-lg w-full md:w-1/3">
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        On-Demand Rides
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        On-demand rides at your fingertips with RYDEPRO.
      </p>
    </div>
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        One-Way Trip
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Perfect for getting from point A to point B.
      </p>
    </div>
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Hourly Ride
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Ideal for when you need a vehicle for a few hours.
      </p>
    </div>
    <div className="notesRec w-full flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
      <h2 className="text-xl font-semibold text-white text-center md:text-left">
        Clone Trip
      </h2>
      <p className="text-gray-400 text-center md:text-left">
        Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.
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
