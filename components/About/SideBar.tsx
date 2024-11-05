import React, { use, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { usePageContext } from '@/contexts/PageContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@/styles/stylish.module.css';

const SideBarComponent = () => {
  const {
    options,
    dispatch,
    setDisplayMission,
    isBarClicked,
    setIsBarClicked,
    textAnimate,
    setTextAnimate,
    visibleSubIds,
    setVisibleSubIds,
  } = usePageContext();

  const router = useRouter();
  const [scrollTo, setScrollTo] = useState('9');
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    // Get the full URL and extract the hash
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setScrollTo(hash.substring(1));
      } else {
        setScrollTo('9');
      }
    };

    // Handle hash on mount
    handleHashChange();

    // Optionally, listen to hash changes
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  const handleClick = (id: number, firstSubId: any) => {
    dispatch({ type: 'toggle_click', id });

    if (visibleSubIds.includes(firstSubId)) {
      return;
    }
    setVisibleSubIds([...visibleSubIds, firstSubId]);
  };
  return (
    <section
      className={clsx(
        // structure,
        ' transition duration-500 md:w-0 ',

        'w-full md:w-[350px] z-10 visible transition duration-500',
        'lg:h-[inherit] lg:flex lg:flex-col gap-2 lg:w-[500px] pb-10',
        'max-md:absolute top-5 left-0 max-md:border max-md:bg-[#FCFCFC] max-md:px-8 max-md:max-w-[250px] max-md:rounded-tr-[8px] max-md:rounded-br-[8px] max-md:shadow-md  max-md:transition-all max-md:duration-500 max-md:z-10 max-md:visible max-md:gap-2 max-md:flex max-md:flex-col max-md:pb-10 lg:min-h-[100vh]',
        `${toggle ? `h-[56px] w-[230px] overflow-hidden` : 'h-auto '}`
      )}
      id={`about${scrollTo}`}
    >
      <h2 className='font-[400] max-md:hidden mb-4 tracking-wide text-[32px] leading-10 text-black'>
        Introduction
      </h2>

      <h2
        className=' hidden max-md:flex w-full  gap-5 items-center p-2 pt-3 cursor-pointer'
        onClick={() => setToggle(!toggle)}
      >
        <span className=' font-[400] text-xl leading-6 tracking-widest'>
          Introduction
        </span>
        <span className=' text-2xl'>
          {toggle ? (
            <svg
              width='22'
              height='24'
              viewBox='0 0 22 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className=' text-3xl '
            >
              <rect
                x='0.875'
                y='1.875'
                width='20.25'
                height='20.25'
                rx='2.125'
                stroke='#D5D5D5'
                strokeWidth='0.25'
              />
              <path
                d='M7.35983 10.2348C7.50628 10.0884 7.74372 10.0884 7.89017 10.2348L11 13.3447L14.1098 10.2348C14.2563 10.0884 14.4937 10.0884 14.6402 10.2348C14.7866 10.3813 14.7866 10.6187 14.6402 10.7652L11.2652 14.1402C11.1187 14.2866 10.8813 14.2866 10.7348 14.1402L7.35983 10.7652C7.21339 10.6187 7.21339 10.3813 7.35983 10.2348Z'
                fill='#111111'
              />
            </svg>
          ) : (
            <svg
              width='22'
              height='24'
              viewBox='0 0 22 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.875'
                y='1.875'
                width='20.25'
                height='20.25'
                rx='2.125'
                stroke='#D5D5D5'
                strokeWidth='0.25'
              />
              <path
                d='M7.35983 13.7652C7.50628 13.9116 7.74372 13.9116 7.89017 13.7652L11 10.6553L14.1098 13.7652C14.2563 13.9116 14.4937 13.9116 14.6402 13.7652C14.7866 13.6187 14.7866 13.3813 14.6402 13.2348L11.2652 9.85984C11.1187 9.71339 10.8813 9.71339 10.7348 9.85984L7.35983 13.2348C7.21339 13.3813 7.21339 13.6187 7.35983 13.7652Z'
                fill='#111111'
              />
            </svg>
          )}
        </span>
      </h2>
      <div className={`flex flex-col tracking-wide gap-5 ${toggle && ''}`}>
        {/**Mapping the data right here */}
        {options.map(
          (
            item: { id: any; title: any; isClicked: any; subTitle: any },
            idx: any
          ) => {
            const { id, title, isClicked, subTitle } = item;
            return (
              <>
                <div
                  onClick={() => {
                    handleClick(id, subTitle[0].sub_id);
                    const firstSubId = subTitle[0].sub_id;
                    setScrollTo(subTitle[0].sub_id);
                    setDisplayMission(false);

                    setToggle(!toggle);
                    // dispatch({
                    //     type: 'handle_option',
                    //     id,
                    //     firstSubId,
                    // });
                    router.push(`#about${subTitle[0].sub_id}`);
                  }}
                  key={id}
                  id={id}
                  className='flex flex-col py-2'
                >
                  <div
                    className='flex justify-between gap-3 items-center text-base cursor-pointer'
                    title={title}
                  >
                    <span className='font-medium text-[18px] flex gap-1 max-md:text-sm leading-6'>
                      {/* <span className=' hidden max-md:flex'>
                                            {idx + 1}.
                                        </span> */}
                      <span>{title}</span>
                    </span>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      width={10}
                      height={10}
                      className={clsx(
                        isClicked ? 'rotate-180' : 'rotate-0',
                        'transition duration-500'
                      )}
                    />
                  </div>
                </div>
                {/** */}
                {isClicked && (
                  <div className='min-h-fit -mt-2 flex flex-col gap-3'>
                    {subTitle.map(
                      (sub_item: {
                        sub_id: any;
                        title: any;
                        isClicked: any;
                      }) => {
                        const { sub_id, title, isClicked } = sub_item;

                        return (
                          <p
                            onClick={(event) => {
                              setDisplayMission(false);
                              dispatch({
                                type: 'handle_option',
                                id,
                                sub_id,
                              });
                              setToggle(!toggle);

                              setIsBarClicked(false);
                              setTextAnimate(sub_id);
                              event?.preventDefault();
                              window.document
                                .getElementById(`${sub_id}`)
                                ?.scrollIntoView({
                                  behavior: 'smooth',
                                });
                              setVisibleSubIds([...visibleSubIds, sub_id]);
                              setScrollTo(sub_id);

                              router.push(`#about${sub_id}`);
                              //console.log(options);
                            }}
                            title={title}
                            key={id}
                            className={clsx(
                              'text-[#5E5E5E] font-[400] w-fit cursor-pointer py-0.5 text-[16px] leading-6 border-b-black',
                              isClicked ? 'border-b-2' : '',
                              `${styles['slide-in']}`,
                              `relative after:content-[''] after:absolute after:left-0 after:bottom-0 ${
                                isClicked ? 'after:h-[0px]' : 'after:h-[2px]'
                              } after:bg-black after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:after:animate-[draw-line_0.5s_ease-out]`
                            )}
                          >
                            {title}
                          </p>
                        );
                      }
                    )}
                  </div>
                )}
              </>
            );
          }
        )}
      </div>
      {/* <FontAwesomeIcon
        icon={faClose}
        width={40}
        height={40}
        className='absolute right-4 top-6 w-[25px] h-[25px] lg:hidden'
        onClick={() => {
          setIsBarClicked(false);
        }}
      /> */}
    </section>
  );
};

const SideBar = React.memo(SideBarComponent);
export default SideBar;
