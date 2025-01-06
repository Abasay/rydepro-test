'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import arrowDownIcon from '@/public/assets/svgs/arrowDown.svg';
import logo from '@/public/assets/svgs/logo_black.svg';
import Link from 'next/link';
import { headerdata } from './headerdata';
// import Button from '@/components/AboutUs/button';
import Button from './Button';
import PageButton from './PageButton';
import { Hamburger, CancelIcon } from '@/components/icons/icons';
import globe from '@/public/assets/svgs/globe.svg';
import { usePathname } from 'next/navigation';
import SignAs from './SignupOptions';

interface HeaderComponentProps {
  className?: string;
}

const HeaderComponent = () => {
  /**active pages */
  const [currentPage, setCurrentPage] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const pathName = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  /**handling or setting pages to display */

  const [toggle, setToggle] = useState<{
    icon: any;
    isBarClicked: boolean;
    overlayVisible: boolean;
  }>({
    icon: <Hamburger />,
    isBarClicked: false,
    overlayVisible: false,
  });
  const handleIsBarClicked = () => {
    if (toggle.isBarClicked) {
      setToggle((prev) => {
        return {
          ...prev,
          isBarClicked: false,
          overlayVisible: false,
          icon: <Hamburger />,
        };
      });
    } else {
      setToggle((prev) => {
        return {
          ...prev,
          isBarClicked: true,
          overlayVisible: true,
          icon: <CancelIcon />,
        };
      });
    }
  };
  const [isSignedUpClicked, setIsSignedUpClicked] = useState<boolean>(false);

  // Move focus to the nav when it opens
  useEffect(() => {
    if (toggle.isBarClicked) {
      const nav = document.getElementById('hamburger-menu');
      if (nav) {
        const firstFocusableElement = nav.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        (firstFocusableElement as HTMLElement)?.focus();
      }
    }
  }, [toggle]);

  // Trap focus inside the nav
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const innerWidth = window.innerWidth;
      if (toggle.isBarClicked) {
        const nav = document.getElementById('hamburger-menu');
        if (nav) {
          console.log('nav', nav);
          const focusableElements =
            innerWidth < 768
              ? nav.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])') // Get all focusable elements in the nav when the auth buttons are inside
              : nav.querySelectorAll('a, [tabindex]:not([tabindex="-1"])'); // Get all focusable elements in the nav when the auth buttons are not inside

          const firstFocusableElement = focusableElements[0];
          const lastFocusableElement = focusableElements[focusableElements.length - 1];

          if (event.key === 'Tab') {
            console.log('event', event);
            if (event.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                (lastFocusableElement as HTMLElement).focus();
                event.preventDefault();
              }
            } else {
              console.log('lastFocusableElement', lastFocusableElement);

              console.log('document.activeElement', document.activeElement);
              if (document.activeElement === lastFocusableElement) {
                (firstFocusableElement as HTMLElement).focus();
                event.preventDefault();
              }
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle.isBarClicked]);

  // Close the nav on Esc
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && toggle.isBarClicked) {
        setToggle({
          ...toggle,
          isBarClicked: false,
        });
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [toggle.isBarClicked, toggle]);

  // Restore focus when the nav closes
  useEffect(() => {
    if (!toggle.isBarClicked) {
      const openButton = document.getElementById('open-nav-button'); // Add an ID to the button that opens the nav
      openButton?.focus();
    }
  }, [toggle.isBarClicked]);

  useEffect(() => {
    setCurrentPage(pathName);
  }, [pathName]);

  return (
    <header
      className={`w-full font-satoshi shadow flex py-4 lg:h-[80px] h-auto flex-col px-5 md:px-2 lg:px-20 justify-center items-center bg-[#F7F7F7] sticky top-0 z-50`}
      style={{ boxShadow: '0px 4px 8px 0px #CFD7E2A3' }}
    >
      <nav
        className={`container md:pl-5 lg:pl-0 flex justify-between items-center`}
        role='navigation'
        aria-label='Main navigation'
      >
        {/**image / logo section */}
        <Link
          href='/'
          className='focus:outline-none focus:ring-2 focus:ring-[#0E0E0E] focus:ring-offset-2'
          aria-label='Home' // Provide a descriptive label for the link
        >
          <Image
            src={logo}
            width={logo_width.width}
            height={logo_width.height}
            className={`${logo_width.class}`}
            alt='Rydepro Homepage' // Provide meaningful alt text
            title='Rydepro Logo' // Provide a descriptive title for the image
          />
        </Link>
        {/**routing links section */}
        <ul className='hidden list-none lg:flex lg:items-center md:gap-8'>
          {headerdata.map((item) => {
            const { id, name, link } = item;
            const isActive = currentPage === link;

            return (
              <li key={id}>
                <Link
                  href={link}
                  className={`
            relative text-header leading-6 py-1 transition-all duration-300 ease-in-out
            ${isActive ? 'text-header-active' : ' hover:text-textPrimary'}
            hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black
          `}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={0}
                  onClick={() => name === 'Contact Us' && setIsClicked(!isClicked)}
                >
                  <span>{name}</span>
                  {isActive && (
                    <div
                      className='absolute bottom-0 left-0 h-[2px] w-full bg-[#0E0E0E] transition-all duration-300 ease-in-out'
                      aria-hidden='true'
                    ></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {/**sign up or login section */}
        <div className={`flex items-center gap-2`}>
          <Link href={'/language'} title='' className='flex gap-2 items-center'>
            <Image
              src={globe}
              width={20}
              height={20}
              className='md:w-[20px] md:h-[20px] w-[24px] h-[24px]'
              alt='globe'
              priority
              // placeholder='blur'
            />
            <span className='text-[#212121] text-base font-medium flex gap-1 items-center'>
              EN <Image src={arrowDownIcon} alt='Icon' width={15} height={15} aria-hidden='true' />
            </span>
          </Link>
          <Button
            value='Login'
            title='Login Button'
            className='hover:bg-gray-200 rounded-md px-[24px] py-[8px] text-md hidden md:flex focus:ring-[#0E0E0E] focus:ring-offset-2'
          />
          <Button
            onClick={() => {
              setIsSignedUpClicked((prev) => !prev);
            }}
            value='Sign up'
            className='bg-[#0E0E0E] text-white rounded-md px-[24px] py-[8px] text-md hidden md:flex focus:ring-[#0E0E0E] focus:ring-offset-2'
          />
          {/**bars conditional icon rendering */}
          <button
            className='lg:hidden border rounded-md py-3 px-1 focus:outline-none focus:ring-2 focus:ring-[#0E0E0E] focus:ring-offset-2'
            aria-label={toggle.isBarClicked ? 'Close menu' : 'Open menu'} // Dynamic label based on state
            aria-expanded={toggle.isBarClicked} // Indicates whether the menu is open or closed
            onClick={() => {
              handleIsBarClicked(); // Toggle menu state
            }}
          >
            {
              toggle.isBarClicked ? (
                <CancelIcon className='w-[30px]' aria-hidden='true' /> /* Hide icon from screen readers */
              ) : (
                <Hamburger className='w-[30px]' aria-hidden='true' />
              ) // Hide icon from screen readers
            }
          </button>
        </div>
      </nav>
      <>
        {toggle.isBarClicked && (
          <nav
            className={`md:px-5 lg:hidden md:absolute absolute right-0 md:right-[10%] rounded-b-lg z-20 w-full md:w-[400px] top-20 px-4 py-7 flex flex-col gap-8 transition-opacity ${
              toggle.overlayVisible ? 'opacity-100' : 'opacity-0'
            } duration-500 ease-in-out bg-[#FCFCFC]`}
            id='hamburger-menu'
          >
            <ul
              className='flex flex-col list-none items-center gap-6'
              role='navigation'
              aria-label='Hamburger navigation'
            >
              {headerdata.map((item) => {
                const { id, name, link } = item;
                return (
                  <li key={id}>
                    <Link
                      className={`transition delay-0 relative duration-300 focus:ring-[#0E0E0E] focus:ring-offset-2 decoration-neutral text-base leading-6 py-1 hover:text-textPrimary hover:transition-all hover:ease-in-out hover:border-b-2 hover:border-black ${
                        currentPage === link ? 'text-header-active border-b-2 border-[#0E0E0E]' : 'text-header'
                      }`}
                      title={name}
                      href={link}
                      onClick={() => {
                        if (name === 'Contact Us') {
                          setIsClicked(!isClicked);
                        }
                        setToggle({
                          ...toggle,
                          isBarClicked: false,
                        });
                      }}
                    >
                      <span>{name}</span>
                      {/* <div
                        className={`absolute bottom-0 left-0 h-[4px] bg-[#0E0E0E]  transition-all duration-300 ease-in-out ${
                          currentPage === link ? 'w-full' : 'hover:w-full'
                        }`}
                        aria-hidden='true'
                      ></div> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className='flex flex-col md:hidden gap-2' ref={ref}>
              <PageButton
                onClick={() => {}}
                className='px-4 w-full lg:grid py-2 font-medium hover:bg-[#0E0E0E] hover:text-[#FAF6F6]  bg-[#F5F5F5] border border-[#D0D0D0] text-base text-[#0E0E0E] rounded-lg focus:ring-[#0E0E0E] focus:ring-offset-2'
                text='Login'
              />
              <PageButton
                onClick={() => {
                  if (isSignedUpClicked) {
                    setIsSignedUpClicked(false);
                  }
                }}
                className='px-4 py-2 w-full lg:grid rounded-lg bg-[#0E0E0E] text-[#FAF6F6] hover:bg-[#F5F5F5] hover:text-[#0E0E0E] focus:ring-[#0E0E0E] focus:ring-offset-2'
                text='Sign Up'
              />
            </div>
          </nav>
        )}
      </>
      {isSignedUpClicked && (
        <SignAs setIsSignedUpClicked={setIsSignedUpClicked} isSignedUpClicked={isSignedUpClicked} ref={ref} />
      )}
    </header>
  );
};

// const Header = React.memo(HeaderComponent);
const logo_width = {
  width: 100,
  height: 100,
  class: 'w-[68px] h-[50px]',
};

export default HeaderComponent;
