import Image from "next/image";
import HeroImage from "@/public/usbanner.png"; // Replace with the correct path to the uploaded Hero.png file

const Hero = () => {
  return (
    <section className="hero-header ax:p-6 p-16 relative h-[fit-content] w-full bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Background with American flag"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="holders  relative border-l-8 rounded-[4px] gap-4  z-10 flex flex-col items-start justify-center h-full px-8 ax:px-2">
        <h1 className="text-[32px] ax:text-2xl  font-[500] text-white mb-4">
         <b className="text-[32px]">RYDEPRO:</b>  Expanding Our Horizons
        </h1>
        <p className="inner-hero text-[16px] sm:text-lg lg:text-xl text-[#F5F5F5] max-w-[80%]">
          We are excited to announce that RYDEPRO, your premier choice for
          premium to luxury passenger transportation, is expanding its services
          to new and exciting destinations.
        </p>
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;
