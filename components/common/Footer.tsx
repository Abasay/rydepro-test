import Image from 'next/image';
import apple from '@/public/appstore.png';
import play from '@/public/googleplay.png';
import twitter from '@/public/twitter.png';
import facebook from '@/public/facebook.png';
import instagram from '@/public/instagram.png';
import email from '@/public/email.png';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=' bg-[#070707] text-[#F7F7F7] py-12 max-430:text-sm px-16 ex:px-4 flex flex-col gap-8 max-md::px-5 max-md::py-8'>
      {/* Container */}
      <section className='container mx-auto'>
        <div className='flex flex-wrap justify-between gap-5'>
          {/* Left Section */}
          <div className='w-[50%] flex flex-col gap-5 max-md:gap-6 ex:w-full'>
            <p className='leading-7 text-base max-430:text-sm tracking-wider'>
              At RYDEPRO Inc., we go beyond traditional transportation services, harnessing advanced technology to
              redefine on-demand mobility. Join us as we evolve into the new era of on-demand transportation.
            </p>

            {/* Download Links */}
            <div className='flex flex-wrap gap-5 py-2'>
              <Link href='#' aria-label='Download on the App Store'>
                <Image src={apple} alt='Download on the App Store' width={137} height={40} />
              </Link>
              <Link href='#' aria-label='Get it on Google Play'>
                <Image src={play} alt='Get it on Google Play' width={137} height={40} />
              </Link>
            </div>
            <nav className='flex gap-3.5 md:hidden mt-3 mb-3' aria-label='Social media links'>
              <Link href='#' aria-label='Twitter'>
                <Image src={twitter} alt='Twitter' width={24} height={24} />
              </Link>
              <Link href='#' aria-label='Facebook'>
                <Image src={facebook} alt='Facebook' width={24} height={24} />
              </Link>
              <Link href='#' aria-label='Instagram'>
                <Image src={instagram} alt='Instagram' width={24} height={24} />
              </Link>
              <Link href='#' aria-label='Email'>
                <Image src={email} alt='Email' width={24} height={24} />
              </Link>
            </nav>
          </div>

          {/* Right Section */}
          <nav
            className='flex gap-5 font-medium relative text-lg ex:w-full ex:justify-between cx:items-center'
            aria-label='Footer navigation'
          >
            <div className='flex flex-col gap-5 max-430:text-sm '>
              <Link href='/about' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                About Us
              </Link>

              <Link
                href='/service-area'
                className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'
              >
                Service Area
              </Link>
              <span className='text-[#F7F7F7]' aria-hidden='true'>
                &nbsp; {/* Non-breaking space to maintain height */}
              </span>
              <Link href='#' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                Terms
              </Link>
            </div>

            {/* Decorative Separator */}
            <span className='w-[2px] h-[100%] bg-[#3C3C3C]' aria-hidden='true'></span>

            <div className='flex flex-col gap-5 items-end max-430:text-sm'>
              <Link href='#' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                Promotions
              </Link>
              <Link href='#' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                Contact Us
              </Link>
              <Link href='/operators' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                Partner
              </Link>
              <Link href='#' className='text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F7F7F7]'>
                Privacy
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className='flex justify-between  items-center flex-wrap gap-5 py-5 pb-0 max-md:pb-0 max-md:gap-6'>
          {/* Social Links */}
          <nav className='flex gap-5 max-md:hidden' aria-label='Social media links'>
            <Link href='#' aria-label='Twitter'>
              <Image src={twitter} alt='Twitter' width={24} height={24} />
            </Link>
            <Link href='#' aria-label='Facebook'>
              <Image src={facebook} alt='Facebook' width={24} height={24} />
            </Link>
            <Link href='#' aria-label='Instagram'>
              <Image src={instagram} alt='Instagram' width={24} height={24} />
            </Link>
            <Link href='#' aria-label='Email'>
              <Image src={email} alt='Email' width={24} height={24} />
            </Link>
          </nav>

          {/* Copyright */}

          <p className=' flex gap-1 font-normal max-430:text-xs max-md:items-center max-md:justify-center max-md:w-full'>
            <span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='max-430:text-xs'
              >
                <path
                  d='M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188ZM14.0508 12.8742C14.8664 12.5742 15.8883 11.7258 15.8883 10.0805C15.8883 8.41172 14.8219 7.00781 12.5086 7.00781H8.85938C8.75625 7.00781 8.67188 7.09219 8.67188 7.19531V16.8047C8.67188 16.9078 8.75625 16.9922 8.85938 16.9922H10.1367C10.2398 16.9922 10.3242 16.9078 10.3242 16.8047V13.1531H12.4031L14.1516 16.8844C14.182 16.95 14.2477 16.9922 14.3203 16.9922H15.7734C15.8053 16.9925 15.8367 16.9845 15.8645 16.9691C15.8924 16.9537 15.9159 16.9314 15.9326 16.9043C15.9493 16.8772 15.9588 16.8463 15.96 16.8144C15.9613 16.7826 15.9544 16.751 15.9398 16.7227L14.0508 12.8742ZM12.2344 11.8359H10.3242V8.36719H12.2789C13.4039 8.36719 14.175 8.96016 14.175 10.1367C14.175 11.2359 13.4766 11.8359 12.2344 11.8359Z'
                  fill='#F7F7F7'
                />
              </svg>
            </span>
            <span className=' text-sm max-430:text-xs leading-6 tracking-wider text-[#F7F7F7]'>
              2024 Katab Enterprises Inc All Rights Reserved. RYDEPRO®
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
