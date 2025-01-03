'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import arrowDownIcon from '@/public/assets/svgs/arrowDown.svg';
import logo from '@/public/assets/svgs/logo_black.svg';
import Link from 'next/link';
import { headerdata } from './headerdata';
// import Button from '@/components/AboutUs/button';
import Button from './Button';
import PageButton from './PageButton';
import { Hamburger, CancelIcon } from '@/components/icons/icons';
import globe from '@/public/assets/svgs/globe.svg';
import { usePathname,  } from 'next/navigation';
import SignAs from './SignupOptions';

interface HeaderComponentProps {
  className?: string;
}

const HeaderComponent = () => {
  /**active pages */
  const [currentPage, setCurrentPage] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const pathName = usePathname();
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
      >
        {/**image / logo section */}
        <Link onClick={() => {}} className='' href='/'>
          <Image
            src={logo}
            width={logo_width.width}
            height={logo_width.height}
            className={`${logo_width.class}`}
            alt=''
          />
        </Link>
        {/**routing links section */}
       <ul
  className="hidden list-none lg:flex lg:items-center md:gap-8"
  role="navigation"
  aria-label="Main navigation"
>
  {headerdata.map((item) => {
    const { id, name, link } = item;
    const isActive = currentPage === link;

    return (
      <li key={id}>
        <Link
          href={link}
          className={`
            relative text-header leading-6 py-1 transition-all duration-300 ease-in-out
            ${
              isActive
                ? 'text-header-active'
                : ' hover:text-textPrimary'
            }
            hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black
          `}
          aria-current={isActive ? 'page' : undefined}
          tabIndex={0}
          onClick={() => name === 'Contact Us' && setIsClicked(!isClicked)}
        >
          <span>{name}</span>
          {isActive && (
            <div
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0E0E0E] transition-all duration-300 ease-in-out"
              aria-hidden="true"
            ></div>
          )}
        </Link>
      </li>
    );
  })}
</ul>
        {/**sign up or login section */}
        <div className={`flex items-center gap-2`}>
          <Link href={''} title='' className='flex gap-2 items-center'>
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
              EN <Image src={arrowDownIcon} alt='' width={15} height={15} />
            </span>
          </Link>
          <Button
            value='Login'
            className='hover:bg-gray-200 rounded-md px-[24px] py-[8px] text-md hidden md:flex'
          />
          <Button
            onClick={() => {
              setIsSignedUpClicked((prev) => !prev);
            }}
            value='Sign up'
            className='bg-[#0E0E0E] text-white rounded-md px-[24px] py-[8px] text-md hidden md:flex'
          />
          {/**bars conditional icon rendering */}
          <div
            className='lg:hidden border rounded-md py-3 px-1'
            onClick={() => {
              //setIsBarClicked(!isBarClicked);
              handleIsBarClicked();
            }}
          >
            <Hamburger className='w-[30px]' />
          </div>
        </div>
      </nav>
      {toggle.isBarClicked && (
        <nav
          className={`md:px-5 lg:hidden md:absolute absolute right-0 md:right-[10%] rounded-b-lg z-20  w-full md:w-[400px] top-20 px-4 py-7 flex flex-col gap-8 transition-opacity ${
            toggle.overlayVisible ? 'opacity-100' : 'opacity-0'
          } duration-500 ease-in-out bg-white`}
        >
          <div className='flex flex-col items-center gap-5 '>
            {headerdata.map((item) => {
              const { id, name, link } = item;
              return (
                <Link
                  className={`transition delay-0 relative duration-300 decoration-neutral text-base leading-6 py-1 hover:text-textPrimary hover:transition-all hover:ease-in-out hover:border-b-2 hover:border-black ${
                    currentPage === link
                      ? ' text-textPrimary'
                      : 'text-textSecondary'
                  }`}
                  key={id}
                  title={name}
                  href={link}
                  onClick={() => {
                    {
                      name === 'Contact Us' && setIsClicked(!isClicked);
                    }
                    setToggle({
                      ...toggle,
                      isBarClicked: false,
                    });
                  }}
                >
                  <span>{name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#0E0E0E] transition-all duration-300 ease-in-out ${
                      currentPage === link ? 'w-full' : 'hover:w-full'
                    }`}
                  ></div>
                </Link>
              );
            })}
          </div>
          <div className='flex flex-col-reverse md:hidden gap-3'>
            <PageButton
              onCLick={() => {
                setIsSignedUpClicked(false);
              }}
              className='px-4 py-2 w-full lg:grid rounded-lg bg-neutral-800 text-blue-50'
              text='Sign Up'
            />
            <PageButton
              onCLick={() => {
              
              }}
              className='px-4 w-full lg:grid py-2 font-medium bg-gray-100 border text-base text-black rounded-lg'
              text='Login'
            />
          </div>
        </nav>
      )}
      {
        isSignedUpClicked && <SignAs
        setIsSignedUpClicked={setIsSignedUpClicked}
        isSignedUpClicked={isSignedUpClicked}
      />
      }
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
