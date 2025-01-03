import React, { useEffect, useRef } from 'react';

const SignAs = ({
  isSignedUpClicked,
  setIsSignedUpClicked,
}: {
  isSignedUpClicked: boolean;
  setIsSignedUpClicked: (type: boolean) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsSignedUpClicked(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  // useEffect(() => {
  //   const handleClickOutSide = () => {
  //     const getTop: number | undefined | any =
  //       ref?.current?.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     if (getTop < windowHeight) {
  //       setIsSignedUpClicked(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleClickOutSide);

  //   return () => window.removeEventListener('scroll', handleClickOutSide);
  // }, []);
  return (
    <>
      {isSignedUpClicked && (
        <section
          ref={ref}
          className='md:w-[300px] w-[300px] shadow-md h-fit py-3 px-3 gap-2 rounded-xl bg-white flex flex-col absolute z-40 md:right-20 top-[100px]'
        >
          <button
            title='Sign Up as a Operator'
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white'
          >
            Sign Up as a Operator
          </button>
          <button
            title='Sign Up as a Rider'
            className='py-2 bg-gray-100 rounded-md text-black text-center w-full border cursor-pointer hover:bg-zinc-800 hover:text-white'
          >
            Sign Up as a Rider
          </button>
        </section>
      )}
    </>
  );
};

export default SignAs;
