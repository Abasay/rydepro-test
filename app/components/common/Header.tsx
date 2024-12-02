"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/"); // Default active link is Home ("/")
  const [isTablet, setIsTablet] = useState<boolean>(false); // To track if the view is tablet size

  // Handle active link change
  const handleActiveLink = (link: string) => {
    setActiveLink(link); // Update active link
    setIsMenuOpen(false); // Close the menu on mobile or tablet
  };

  // Determine if the device is tablet
  const handleResize = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };

  // Add resize listener
  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResize);
  }

  return (
    <header className="bg-[#F7F7F7] shadow-white-bottom px-8 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-around">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/RYDEPRO_BLACK.png"
              alt="RYDEPRO Logo"
              width={55}
              height={55}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-8 list-none">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Promotions", path: "/promotion" },
              { label: "Service Area", path: "/serviceArea" },
              { label: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`font-[500] hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${
                    activeLink === item.path ? "underline" : ""
                  }`}
                  onClick={() => handleActiveLink(item.path)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Image
              src="/mdi_web.png"
              alt="Language Icon"
              width={20}
              height={20}
            />
            <span className="text-[#0E0E0E]">EN</span>
          </div>

          {/* Tablet View Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="px-4 py-2 text-[#0E0E0E] rounded-md hover:bg-gray-200 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-[#0E0E0E] text-white rounded-md hover:bg-gray-700 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden text-[#0E0E0E]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <div className="flex flex-col gap-1 rounded border border-black-900 p-2">
              <span className="w-6 h-0.5 bg-gray-900"></span>
              <span className="w-6 h-0.5 bg-gray-900"></span>
              <span className="w-6 h-0.5 bg-gray-900"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile View Navigation */}
      {isMenuOpen && !isTablet && (
        <div className="lg:hidden mt-4">
          <nav>
            <ul className="flex flex-col gap-4 justify-center items-center list-none">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Promotions", path: "/promotion" },
                { label: "Service Area", path: "/serviceArea" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${
                      activeLink === item.path ? "underline" : ""
                    }`}
                    onClick={() => handleActiveLink(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-4 mt-4 md:hidden">
            {/* Login and Sign Up */}
            <button className="px-4 py-2 text-[#0E0E0E] rounded-md hover:bg-gray-200 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-[#0E0E0E] text-white rounded-md transition">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Tablet View Modal Navigation */}
      {isMenuOpen && isTablet && (
        <div className=" flex fixed w-[375px] justify-center items-center z-50">
          <div className=" bg-white rounded-lg p-6">
            <ul className="flex flex-col gap-4 text-center">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Promotions", path: "/promotions" },
                { label: "Service Area", path: "/service-area" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${
                      activeLink === item.path ? "underline" : ""
                    }`}
                    onClick={() => handleActiveLink(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
