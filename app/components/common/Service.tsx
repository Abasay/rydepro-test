import React from "react";
import Image from "next/image"; // Use Next.js' Image component for optimization
import rectangle from "../../../public/Rectangle.png";
import bg from "../../../public/bgs.png";
import world from "../../../public/world.png";

const Services: React.FC = () => {
  return (
    <section
      className="services bg-cover bg-center bg-no-repeat text-white py-10 px-5"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Service Holder */}
      <div
        className="serviceHolder flex flex-col items-center justify-center gap-5 py-10 px-5 text-center"
        style={{ backgroundImage: `url(${world.src})`, backgroundSize: "cover" }}
      >
        <h2 className="text-3xl font-bold">RYDEPRO is Expanding</h2>
        <div className="services__list">
          <span className="text-lg">
            Starting in California, rolling out across U.S. cities, and soon, the world. Get ready!
          </span>
        </div>
      </div>

      {/* Services Inner */}
      <div className="servicesInner flex flex-col gap-6  p-5">
        {/* Header */}
        <div className="servicesInnerHeader flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-semibold uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-4xl font-bold">Dynamic Scheduling & On-Demand Travels</h1>
        </div>

        {/* Notes Section */}
        <div className="servicesInnerNotes flex justify-around gap-5">
          {/* Note 1 */}
          <div className="servicesNote flex flex-col gap-5  p-5">
            <Image
              src={rectangle}
              alt="Multi-Stop"
              className="w-full max-w-xs mx-auto"
            />
            <div className="notesRec border-t-2  pt-3">
              <h2 className="text-2xl font-semibold">Multi-Stop</h2>
              <span>Over 1,000 vehicles available for any event</span>
            </div>
          </div>

          {/* Note 2 */}
          <div className="servicesNote flex flex-col gap-5 p-5">
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">Round Trip</h2>
              <span>Convenient for round trips without the hassle of booking twice.</span>
            </div>
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">Multi-Stop Journey</h2>
              <span>Great for trips with multiple destinations.</span>
            </div>
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">Multi-Trip</h2>
              <span>Book multiple trips with different vehicles and drop-off locations in one go.</span>
            </div>
          </div>

          {/* Note 3 */}
          <div className="servicesNote flex flex-col gap-5 p-5">
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">On-Demand Rides</h2>
              <span>On-demand rides at your fingertips with RYDEPRO.</span>
            </div>
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">One-Way Trip</h2>
              <span>Perfect for getting from point A to point B.</span>
            </div>
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">Hourly Ride</h2>
              <span>Ideal for when you need a vehicle for a few hours.</span>
            </div>
            <div className="notesRec border-t-2 border-white pt-3">
              <h2 className="text-2xl font-semibold">Clone Trip</h2>
              <span>
                Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
