import Link from 'next/link';
import React, { useEffect, useRef, useCallback, KeyboardEventHandler, ChangeEvent } from 'react';

interface SignAsProps {
  isSignedUpClicked: boolean;
  setIsSignedUpClicked: (type: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
}

const SignAs: React.FC<SignAsProps> = ({ isSignedUpClicked, setIsSignedUpClicked, ref }) => {
  const modalRef = useRef(null);

  // Trapping focus inside the modal
  useEffect(() => {
    if (isSignedUpClicked) {
      const focusableElements = (modalRef.current as any).querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsSignedUpClicked(false);
        }
      };

      // Focusin the first element when the modal opens
      firstElement.focus();

      // Add event listeners
      (modalRef.current as any).addEventListener('keydown', handleTabKey);
      window.addEventListener('keydown', handleEscapeKey);

      // Cleanup event listeners
      return () => {
        if (modalRef.current) {
          (modalRef.current as any).removeEventListener('keydown', handleTabKey);
        }
        window.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isSignedUpClicked, setIsSignedUpClicked]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as any).contains(e.target)) {
        setIsSignedUpClicked(false);
      }
    };

    if (isSignedUpClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSignedUpClicked, setIsSignedUpClicked]);

  return (
    <>
      {isSignedUpClicked && (
        <section
          ref={modalRef}
          role='dialog'
          aria-modal='true'
          aria-labelledby='sign-as-heading'
          id='sign-up-as-modal'
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
