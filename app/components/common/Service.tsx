import React from "react";
import Image from "next/image"; // Next.js Image for optimization
import rectangle from "../../../public/Rectangle.png";
import bg from "../../../public/bgs.png";
import world from "../../../public/world.png";
import Why from "./Why";

const Services: React.FC = () => {
  return (
    <section
      className="services flex flex-col gap-20 text-white py-10 px-5"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Service Holder */}
      <div
        className="serviceHolder flex flex-col items-center gap-5 py-10 px-5 text-center"
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
      <div className="servicesInner flex flex-col gap-10">
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
        <div className="servicesInnerNotes flex flex-wrap justify-evenly gap-8">
          {/* Note 1 */}
          <div className="servicesNote flex flex-col items-center gap-4 p-4 rounded-lg shadow-lg max-w-sm">
            <Image
              src={rectangle}
              alt="Multi-Stop"
              className="rounded-lg object-cover w-full h-auto"
            />
            <div className="notesRec flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Multi-Stop</h2>
              <p className="text-gray-400">Over 1,000 vehicles available for any event.</p>
            </div>
          </div>

          {/* Note 2 */}
          <div className="servicesNote flex flex-col gap-5 p-4 rounded-lg shadow-lg max-w-sm">
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Round Trip</h2>
              <p className="text-gray-400">
                Convenient for round trips without the hassle of booking twice.
              </p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Multi-Stop Journey</h2>
              <p className="text-gray-400">Great for trips with multiple destinations.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Multi-Trip</h2>
              <p className="text-gray-400">
                Book multiple trips with different vehicles and drop-off
                locations in one go.
              </p>
            </div>
          </div>

          {/* Note 3 */}
          <div className="servicesNote flex flex-col gap-5 p-4 rounded-lg shadow-lg max-w-sm">
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">On-Demand Rides</h2>
              <p className="text-gray-400">On-demand rides at your fingertips with RYDEPRO.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">One-Way Trip</h2>
              <p className="text-gray-400">Perfect for getting from point A to point B.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Hourly Ride</h2>
              <p className="text-gray-400">Ideal for when you need a vehicle for a few hours.</p>
            </div>
            <div className="notesRec  flex flex-col gap-4 border-t-2 border-gray-600 pt-3">
              <h2 className="text-2xl font-semibold">Clone Trip</h2>
              <p className="text-gray-400">
                Duplicate a trip with the same or similar vehicle, choosing the
                same or a different drop-off location.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <Why />
    </section>
  );
};

export default Services;
