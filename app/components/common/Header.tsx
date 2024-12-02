"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/"); // Default active link is Home ("/")
  const [isTablet, setIsTablet] = useState<boolean>(false); // To track if the view is tablet size
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to show/hide the popup
  const [isSignUp, setIsSignUp] = useState(true); // To toggle between Sign Up and Login

  // Reference to the popup element
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Handle active link change
  const handleActiveLink = (link: string) => {
    setActiveLink(link); // Update active link
    setIsMenuOpen(false); // Close the menu on mobile or tablet
  };

  // Toggle the popup visibility when the Sign Up or Login button is clicked
  const togglePopup = (isSignUpButton: boolean) => {
    setIsSignUp(isSignUpButton); // Set the state for Sign Up or Login
    setIsPopupVisible(!isPopupVisible); // Toggle popup visibility
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Clean up resize listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Close the popup if click is outside the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupVisible(false); // Close the popup if click is outside
      }
    };

    // Add event listener to handle clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#F7F7F7] shadow-white-bottom px-20 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
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
        <nav className="hidden lg:flex gap-4 items-center">
          <ul className="flex gap-8 list-none">
            {[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }, { label: "Promotions", path: "/promotion" }, { label: "Service Area", path: "/serviceArea" }, { label: "Contact Us", path: "/contact" }].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`font-[500] hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${activeLink === item.path ? "border-b-4 rounded-[4px] border-[#0E0E0E] pb-1" : "text-[#3C3C3C]"}`}
                  onClick={() => handleActiveLink(item.path)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Image src="/mdi_web.png" alt="Language Icon" width={20} height={20} />
            <div className="flex items-center justify-center px-1 py-3 gap-2">
              <span className="text-[#0E0E0E]">EN</span>
              <Image src="/Shape.png" alt="Lang" width={10} height={5} />
            </div>
          </div>

          {/* Tablet View Buttons */}
          <div className="hidden md:flex gap-2 items-center">
            <button
              className="px-4 py-2 text-[#0E0E0E] rounded-md hover:bg-gray-200 transition"
              onClick={() => togglePopup(false)} // Login button click
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-[#0E0E0E] text-white rounded-md hover:bg-gray-700 transition"
              onClick={() => togglePopup(true)} // Sign Up button click
            >
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

      {/* Popup for Sign Up or Login */}
      {isPopupVisible && (
        <div
          ref={popupRef} // Set the reference to the popup
          className="fixed top-[90px] la:top-[180px] la:right-[180px] right-12 bg-white shadow-lg p-4 rounded-lg z-30"
          style={{ width: "300px" }}
        >
          <div className="flex flex-col gap-2">
            {/* Conditionally render the content based on Sign Up or Login */}
            {isSignUp ? (
              <>
                <button
                  className="px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md"
                  onClick={() => alert("Sign Up as Operator Clicked")}
                >
                  Sign Up as an Operator
                </button>
                <button
                  className="px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md"
                  onClick={() => alert("Sign Up as Rider Clicked")}
                >
                  Sign Up as a Rider
                </button>
              
              </>
            ) : (
              <>
                <button
                  className="px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E]  rounded-md"
                  onClick={() => alert("Login as Operator Clicked")}
                >
                  Login as an Operator
                </button>
                <button
                  className="px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E]  rounded-md"
                  onClick={() => alert("Login as Rider Clicked")}
                >
                  Login as a Rider
                </button>
            
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile View Navigation */}
      {isMenuOpen && !isTablet && (
        <div className="lg:hidden mt-4">
          <nav>
            <ul className="flex flex-col gap-4 justify-center items-center list-none">
              {[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }, { label: "Promotions", path: "/promotion" }, { label: "Service Area", path: "/serviceArea" }, { label: "Contact Us", path: "/contact" }].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-[500] text-[#0E0E0E] text-[1.2rem]`}
                    onClick={() => handleActiveLink(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col gap-2  w-full md:hidden ">
                {/* Show Login and Sign Up buttons in mobile dropdown */}
                <button
                className="px-4 py-2 text-[16px] text-[#0E0E0E] bg-[#F5F5F5] border border-[#D0D0D0] rounded-md hover:bg-gray-200 transition"
                onClick={() => togglePopup(false)} // Login button click
              >
                Login
                </button>
                <button
                  className="px-6 text-[16px] py-2 bg-[#0E0E0E] text-white rounded-md hover:bg-gray-700 transition"
                  onClick={() => togglePopup(true)} // Sign Up button click
                >
                  Sign Up
                </button>
              </div>
            </ul>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
