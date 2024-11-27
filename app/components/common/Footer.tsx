import Image from "next/image";
import apple from "../../../public/appstore.png";
import play from "../../../public/googleplay.png";
import twitter from "../../../public/twitter.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import email from "../../../public/email.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-16 flex flex-col gap-8 fd:px-4 fd:py-4">
      {/* Container */}
      <div className="flex flex-wrap justify-between gap-5">
        {/* Left Section */}
        <div className="w-[50%] flex flex-col gap-5 ms:w-full">
          <div className="leading-7 text-sm">
            <p>
              At RYDEPRO Inc., we go beyond traditional transportation services,
              harnessing advanced technology to redefine on-demand mobility.
              Join us as we evolve into the new era of on-demand transportation.
            </p>
          </div>

          {/* Download Links */}
          <div className="flex flex-wrap gap-5 py-2">
            <a href="#">
              <Image src={apple} alt="Apple logo" width={137} height={40} />
            </a>
            <a href="#">
              <Image src={play} alt="Google Logo" width={137} height={40} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-5 pl-5">
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Service Area
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms
            </a>
          </div>
          <div className="flex flex-col gap-5 pl-5 border-l border-gray-500">
            <a href="#" className="text-gray-400 hover:text-white">
              Promotions
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Partner
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center flex-wrap gap-5 py-5">
        {/* Social Links */}
        <div className="flex gap-5">
          <a href="#">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </a>
          <a href="#">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </a>
          <a href="#">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </a>
          <a href="#">
            <Image src={email} alt="Email" width={24} height={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2024 Katab Enterprises Inc. All Rights Reserved. RYDEPRO
        </p>
      </div>
    </footer>
  );
};

export default Footer;
