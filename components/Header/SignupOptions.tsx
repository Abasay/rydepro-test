import { useGeneralWebContext } from '@/contexts/GeneralContext';
import { useSignUpContext } from '@/contexts/signupContext';
// import { useProfileStore } from '@/stores/dashboard/profile-store';
import React, { useEffect, useRef } from 'react';

interface SignAsProps {
  isAuthClicked: boolean;
  setIsAuthClicked: (type: boolean) => void;
  ref: React.RefObject<HTMLDivElement | null>;
  type: string;
}

const SignAs: React.FC<SignAsProps> = ({ isAuthClicked, setIsAuthClicked, type }) => {
  const modalRef = useRef(null);

  const [authTesxt, setAuthText] = React.useState('');
  // const { toggleAuthModal } = useProfileStore();
  // const { setAuthFlow } = useSignUpContext();

  // const { setAccountType } = useSignUpContext();
  const { setAccountType } = useGeneralWebContext();

  useEffect(() => {
    if (type === 'login') {
      setAuthText('Log In As');
    } else {
      setAuthText('Sign Up As');
    }
  }, [type]);

  // Trapping focus inside the modal

  useEffect(() => {
    if (isAuthClicked) {
      const focusableElements = modalRef.current
        ? (modalRef.current as HTMLElement).querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        : [];
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            (lastElement as HTMLElement).focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsAuthClicked(false);
        }
      };

      // Focusin the first element when the modal opens
      firstElement.focus();

      // Add event listeners
      if (modalRef.current) {
        (modalRef.current as HTMLDivElement).addEventListener('keydown', handleTabKey);
      }
      window.addEventListener('keydown', handleEscapeKey);

      // Cleanup event listeners
      return () => {
        if (modalRef.current) {
          (modalRef.current as HTMLDivElement).removeEventListener('keydown', handleTabKey);
        }
        window.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isAuthClicked, setIsAuthClicked]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as HTMLDivElement).contains(e.target as Node)) {
        setIsAuthClicked(false);
      }
    };

    if (isAuthClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAuthClicked, setIsAuthClicked]);

  return (
    <>
      {isAuthClicked && (
        <section
          ref={modalRef}
          role='dialog'
          aria-modal='true'
          aria-labelledby='sign-as-heading'
          id='auth-as-modal'
          className='md:w-[300px] w-[300px] shadow-md h-fit py-3 px-3 gap-2 rounded-xl bg-white flex flex-col absolute z-40 md:right-20 top-[100px]'
        >
          <h2 id='sign-as-heading' className='sr-only'>
            {authTesxt} As
          </h2>
          <button
            // href={' /operator'}
            title={`${authTesxt} an individual`}
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            aria-label={`${authTesxt} an individual`}
            onClick={() => {
              setAccountType('Individual');
              // toggleAuthModal();
              // if (type !== 'login') {
              //   setAuthFlow({ isSignUp: true, isSignIn: false, isForgotPassword: false, landing: false });
              // } else {
              //   setAuthFlow({ isSignUp: false, isSignIn: false, isForgotPassword: false, landing: true });
              // }
              setIsAuthClicked(false);
            }} // Close modal on click
          >
            {authTesxt} an Individual
          </button>
          <button
            // href={'/signup'}
            title={`${authTesxt} an organization`}
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            aria-label={`${authTesxt} an organization`}
            onClick={() => {
              setAccountType('Organization');
              // toggleAuthModal();
              setIsAuthClicked(false);
            }} // Close modal on click
          >
            {authTesxt} an Organization
          </button>
        </section>
      )}
    </>
  );
};

export default SignAs;
