import Link from 'next/link';
import React, { useEffect, useRef, useCallback } from 'react';

interface SignAsProps {
  isSignedUpClicked: boolean;
  setIsSignedUpClicked: (type: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
}

const SignAs: React.FC<SignAsProps> = ({ isSignedUpClicked, setIsSignedUpClicked, ref }) => {

  // Handle clicks outside the component
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsSignedUpClicked(false);
    }
  }, [setIsSignedUpClicked, ref]);

  // Handle Escape key to close the modal
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsSignedUpClicked(false);
    }
  }, [setIsSignedUpClicked]);

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  // Focus trap for keyboard navigation
  useEffect(() => {
    if (isSignedUpClicked && ref.current) {
      const focusableElements = ref.current.querySelectorAll('button');
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus(); // Focus the first button
      }
    }
  }, [isSignedUpClicked, ref]);

  return (
    <>
      {isSignedUpClicked && (
        <section
          // ref={ref}
          role='dialog' 
          aria-modal='true'
          aria-labelledby='sign-as-heading' 
          className='md:w-[300px] w-[300px] shadow-md h-fit py-3 px-3 gap-2 rounded-xl bg-white flex flex-col absolute z-40 md:right-20 top-[100px]'
        >
          <h2 id='sign-as-heading' className='sr-only'>
            Sign Up As
          </h2>
          <Link
          href={'/onboarding/operator'}
            title='Sign Up as a Operator'
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            aria-label='Sign Up as a Operator'
            onClick={() => setIsSignedUpClicked(false)} // Close modal on click
          >
            Sign Up as a Operator
          </Link>
          <Link
            href={'/onboarding/'}
            title='Sign Up as a Rider'
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            aria-label='Sign Up as a Rider'
            onClick={() => setIsSignedUpClicked(false)} // Close modal on click
          >
            Sign Up as a Rider
          </Link>
        </section>
      )}
    </>
  );
};

export default SignAs;