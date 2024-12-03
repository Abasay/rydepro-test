'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chat from '@/public/chat.jpeg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('/'); // Default active link is Home ("/")
  const [isTablet, setIsTablet] = useState<boolean>(false); // To track if the view is tablet size
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to show/hide the SignUp/Login popup
  const [isContactPopupVisible, setIsContactPopupVisible] = useState(false); // State to show/hide Contact popup
  const [isSignUp, setIsSignUp] = useState(true); // To toggle between Sign Up and Login

  // References for popups
  const popupRef = useRef<HTMLDivElement | null>(null);
  const contactPopupRef = useRef<HTMLDivElement | null>(null);

  // Handle active link change
  const handleActiveLink = (link: string) => {
    setActiveLink(link); // Update active link
    setIsMenuOpen(false); // Close the menu on mobile or tablet
    if (link === '/contact') {
      setIsContactPopupVisible(true); // Show contact popup when "Contact Us" is clicked
    }
  };

  // Toggle the SignUp/Login popup visibility
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
    if (typeof window !== 'undefined') {
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
    }
    if (isTablet) {
      console.log('Tablet View');
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Close popups if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupVisible(false); // Close SignUp/Login popup
      }

      if (
        contactPopupRef.current &&
        !contactPopupRef.current.contains(event.target as Node)
      ) {
        setIsContactPopupVisible(false); // Close Contact popup
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='bg-[#F7F7F7] shadow-white-bottom cx:px-6 px-20 py-4 sticky top-0 z-20'>
      <div className='flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex-shrink-0'>
          <Link href='/'>
            <Image
              src='/RYDEPRO_BLACK.png'
              alt='RYDEPRO Logo'
              width={55}
              height={55}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex gap-4 items-center'>
          <ul className='flex gap-8 list-none justify-center items-center'>
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Promotions', path: '/promotion' },
              { label: 'Service Area', path: '/serviceArea' },
              { label: 'Contact Us', path: '#' },
            ].map((item) => (
              <li key={item.label}>
                {' '}
                {/* Add a `key` prop here */}
                <Link
                  href={item.path || '#'}
                  className={`font-[500] hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${
                    activeLink === item.path
                      ? 'border-b-4 rounded-[4px] border-[#0E0E0E] pb-1'
                      : 'text-[#3C3C3C]'
                  }`}
                  onClick={(e) => {
                    if (item.label === 'Contact Us') {
                      e.preventDefault(); // Prevent default navigation
                      handleActiveLink('/contact'); // Trigger the popup
                    } else {
                      handleActiveLink(item.path || '#');
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center'>
          {/* Language Selector */}
          <div className='flex items-center gap-2'>
            <Image
              src='/mdi_web.png'
              alt='Language Icon'
              width={20}
              height={20}
            />
            <div className='flex items-center justify-center px-1 py-3 gap-2'>
              <span className='text-[#0E0E0E]'>EN</span>
              <Image src='/Shape.png' alt='Lang' width={10} height={5} />
            </div>
          </div>

          {/* Tablet View Buttons */}
          <div className='hidden md:flex gap-2 items-center'>
            <button
              className='px-4 py-2 text-[#0E0E0E] rounded-md hover:bg-gray-200 transition'
              onClick={() => togglePopup(false)}
            >
              Login
            </button>
            <button
              className='px-4 py-2 bg-[#0E0E0E] text-white rounded-md hover:bg-gray-700 transition'
              onClick={() => togglePopup(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className='lg:hidden text-[#0E0E0E]'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='sr-only'>Open Menu</span>
            <div className='flex flex-col gap-1 rounded border border-black-900 p-2'>
              <span className='w-6 h-0.5 bg-gray-900'></span>
              <span className='w-6 h-0.5 bg-gray-900'></span>
              <span className='w-6 h-0.5 bg-gray-900'></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='lg:hidden flex flex-col justify-center items-center bg-white absolute top-20 right-0 w-full p-4 shadow-md'>
          <ul className='flex flex-col gap-4 items-center'>
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Promotions', path: '/promotion' },
              { label: 'Service Area', path: '/serviceArea' },
              { label: 'Contact Us', path: '#' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.path || '#'}
                  className={`font-[500] hover:text-gray-700 text-[1.1rem] text-[#0E0E0E] transition ${
                    activeLink === item.path
                      ? 'border-b-4 rounded-[4px] border-[#0E0E0E] pb-1'
                      : 'text-[#3C3C3C]'
                  }`}
                  onClick={(e) => {
                    if (item.label === 'Contact Us') {
                      e.preventDefault(); // Prevent default navigation
                      handleActiveLink('/contact'); // Trigger the popup
                    } else {
                      handleActiveLink(item.path || '#');
                    }
                    setIsMenuOpen(false); // Close the menu after clicking a link
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Tablet View Buttons */}
          <div className='hidden flex w-[inherit] flex-col gap-2 items-center la:flex'>
            <button
              className='px-4 py-2 w-[inherit] text-[#0E0E0E] rounded-md hover:bg-gray-200 transition'
              onClick={() => togglePopup(false)}
            >
              Login
            </button>
            <button
              className='px-4 py-2 w-[inherit]  bg-[#0E0E0E] text-white rounded-md hover:bg-gray-700 transition'
              onClick={() => togglePopup(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Popups (Contact Us, Sign Up, Login) */}
      {isContactPopupVisible && (
        <div
          ref={contactPopupRef}
          className='fixed bottom-[30px] right-12 bg-white shadow-lg p-2 rounded-lg z-30'
          style={{ width: '350px', height: '400px' }}
        >
          {/* Popup content here */}
          <div className='h-full border rounded-lg shadow-md bg-white flex flex-col'>
            {/* Header */}
            <div className='bg-[#FEFEFE] flex items-center p-4 border-b'>
              <Image
                src='/profile.png'
                alt='User Avatar'
                className='w-8 h-8 rounded-full mr-2'
                width={40}
                height={40}
              />
              <div className='font-[500] text-[14px] text-[#272727]'>
                RYDEPRO Support
              </div>
            </div>

            {/* Chat Area */}
            <div
              className='flex-1 p-4 overflow-y-auto'
              style={{
                backgroundImage: `url(${chat.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Message */}
              <div className='mb-4'>
                <div className='bg-[#FCFCFC] rounded-lg p-3 text-sm w-fit text-[#3C3C3C]'>
                  Sorry, something went wrong!
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className='flex items-center p-4 border-t bg-white'>
              <input
                type='text'
                placeholder='Type a message'
                className='flex-1 border rounded-[4px] p-2 text-sm focus:outline-none focus:ring bg-[#F5F5F5] text-[#FEFEFE]'
              />
              <button className='ml-2 bg-[#0E0E0E] text-white p-2 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 12.75l6-6m0 0l6 6m-6-6v12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && (
        <div
          ref={popupRef}
          className='fixed top-[90px] right-[110px] bg-white shadow-lg p-4 rounded-lg z-30'
          style={{ width: '350px', height: 'auto' }}
        >
          {/* Popup content for SignUp/Login */}
          <div className='flex flex-col gap-2'>
            {isSignUp ? (
              <>
                <button
                  className='px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md'
                  onClick={() => alert('Sign Up as Operator Clicked')}
                >
                  Sign Up as an Operator
                </button>
                <button
                  className='px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md'
                  onClick={() => alert('Sign Up as Rider Clicked')}
                >
                  Sign Up as a Rider
                </button>
              </>
            ) : (
              <>
                <button
                  className='px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md'
                  onClick={() => alert('Login as Operator Clicked')}
                >
                  Login as an Operator
                </button>
                <button
                  className='px-4 py-2 bg-[#F5F5F5] text-[#0E0E0E] rounded-md'
                  onClick={() => alert('Login as Rider Clicked')}
                >
                  Login as a Rider
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
