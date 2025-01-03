import React from "react";
import Image from "next/image"; // Next.js Image for optimization
import rectangle from "@/public/3.png";
import bg from "@/public/multiple.webp";
import world from "@/public/world.png";
import Why from "./Why";
import InnovativeFeatures from "./InnovativeFeatures";
import Fleet from "./Fleet";

const Services: React.FC = () => {
  return (
    <section
      className="services flex flex-col"
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
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <h2 className="text-3xl font-bold cx:text-[1.5rem]">RYDEPRO is Expanding</h2>
          <p className="text-lg cx:w-[80%]">
            Starting in California, rolling out across U.S. cities, and soon, the
            world. Get ready!
          </p>
        </div>
      </div>

      {/* Services Inner */}
      <div className="px-24 py-16 flex flex-col gap-10 ex:items-start ex:px-5 border">
        {/* Header */}
        <div className="servicesInnerHeader flex flex-col items-center gap-2 text-center">
          <span className="text-[16PX] font-[400] uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-[2.5rem] font-[500] leading-tight cx:text-[1.5rem]">
            Dynamic Scheduling & On-Demand Travels
          </h1>
        </div>

        {/* Notes Section */}
        <div className="flex ex:gap-12 flex-col items-end justify-center ex:just  gap-[3rem]">
          {/* Note 1 */}
          <div className="servicesNote  flex ex:flex-col-reverse justify-between gap-[1.7rem] ">
            <div className="w-[clamp(276px,50vw,2822px)] h-[clamp(440px,10vh,450px)] ex:w-full">
              <Image
                src={rectangle}
                alt="Multi-Stop"
                objectFit="contain"
                className="fixed-dimensions"
              />
            </div>

              <div className=" flex flex-col gap-16">
                <div className="first flex justify-end gap-16">
                    <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                      <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      On-Demanding Rides
                      </h2>
                      <p className="text-[#D0D0D0] text-center">
                      On-demand rides at your fingertips with RYDEPRO.
                      </p>
                    </div>
                    <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 pb-8 ">
                      <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                        Round Trip
                      </h2>
                      <p className="text-[#D0D0D0] text-center md:text-left">
                      Convenient for round trips without the hassle of booking twice.
                      </p>
                    </div>
                </div>

                <div className="second flex gap-[24px]">
                  <div className="notesRec ex:hidden flex flex-col gap-4 border-t border-image-gradient-border pt-3 pb-8 ">
                      <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                        Round Trip
                      </h2>
                      <p className="text-[#D0D0D0] text-center md:text-left">
                      Convenient for round trips without the hassle of booking twice.
                      </p>
                    </div>

                    <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      One-Way Trip
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Perfect for getting from point A to point B.
                    </p>
                    </div>
                    <div className="notesRec hidden ex:flex flex flex-col gap-4 border-t border-image-gradient-border pt-3 pb-8 ">
                    <h2 className="text-[24px] font-semibold text-white text-center md:text-left">
                      Multi-Stop Journey
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Great for trips with multiple destinations.
                    </p>
                  </div>
                </div>

                <div className="third ex:hidden flex gap-[24px]">
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 pb-8 ">
                    <h2 className="text-[24px] font-semibold text-white text-center md:text-left">
                      Multi-Stop Journey
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Great for trips with multiple destinations.
                    </p>
                  </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-xl font-semibold text-[#FCFCFC] text-center md:text-left">
                    Hourly Ride
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Ideal for when you need a vehicle for a few hours.
                    </p>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="flex ex:flex-col  gap-3 justify-center">
              <div className="hidden ex:flex ex:gap-6 ">
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-xl font-semibold text-[#FCFCFC] text-center md:text-left">
                    Hourly Ride
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Ideal for when you need a vehicle for a few hours.
                    </p>
                  </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Multi-Stop
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                      Over 1,000 vehicles available for any event.
                    </p>
                  </div>
              </div>
              <div className="hidden ex:flex ex:gap-6 ">
              <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Multi-Trip Booking
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Book multiple trips with different vehicles and drop-off locations in one go.
                    </p>
                  </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3 ">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Clone Trip
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.
                    </p>
                  </div>
              </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3  ex:hidden">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Multi-Stop
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                      Over 1,000 vehicles available for any event.
                    </p>
                  </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3  ex:hidden">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Multi-Trip Booking
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
                    Book multiple trips with different vehicles and drop-off locations in one go.
                    </p>
                  </div>
                  <div className="notesRec flex flex-col gap-4 border-t border-image-gradient-border pt-3  ex:hidden">
                    <h2 className="text-[24px] font-semibold text-[#FCFCFC] text-center md:text-left">
                      Clone Trip
                    </h2>
                    <p className="text-[#D0D0D0] text-center md:text-left">
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
