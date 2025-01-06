import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usePageContext } from '@/contexts/PageContext';
import { useRouter } from 'next/navigation';
import styles from '@/styles/stylish.module.css';

interface SideBarProps {
  actives: {
    title: string;
    [key: string]: string | string[]; // Dynamic keys with string or string arrays
  };
  setActives: (type: {
    title: string;
    [key: string]: string | string[]; // Dynamic keys with string or string arrays
  }) => void;
}

interface Option {
  id: string;
  title: string;
  titleText: string;
  isClicked: boolean;
  subTitle: SubTitle[];
}

interface SubTitle {
  sub_id: string;
  title: string;
  isClicked: boolean;
}

const SideBarComponent: React.FC<SideBarProps> = ({ actives, setActives }) => {
  const { options } = usePageContext();
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    console.log(actives);
  }, [actives]);

  return (
    <section
      className={clsx(
        ' transition duration-500 md:w-0 ',
        'w-full md:w-[350px] z-10 visible  transition duration-500',
        'lg:h-[inherit] lg:flex lg:flex-col gap-2 lg:w-[500px] pb-10',
        'max-md:absolute top-5 left-0 max-md:border max-md:bg-[#FCFCFC] max-md:px-5 max-md:max-w-[250px] max-md:rounded-tr-[8px] max-md:rounded-br-[8px] max-md:shadow-md  max-md:transition-all max-md:duration-500 max-md:z-10 max-md:visible max-md:gap-2 max-md:flex max-md:flex-col max-md:pb-10 lg:min-h-fit',
        `${toggle ? `max-md:h-[56px] w-[190px] overflow-hidden` : 'h-auto '}`
      )}
      aria-label='Sidebar navigation'
    >
      {/* Heading for Desktop */}
      <h2 className='font-medium max-md:hidden mb-4 tracking-wide text-[32px] leading-10 text-[#000000]'>
        Introduction
      </h2>

      {/* Toggle Button for Mobile */}
      <button
        className='hidden max-md:flex w-full justify-between gap-5 items-center p-2 pr-0 pl-0 pt-3 cursor-pointer text-[#000000]'
        onClick={() => setToggle(!toggle)}
        aria-expanded={!toggle} // Indicates whether the sidebar is expanded
        aria-label={toggle ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <h2 className='font-medium text-base leading-6 tracking-widest'>Introduction</h2>
        <span className='text-2xl'>
          {toggle ? (
            <svg
              width='22'
              height='24'
              viewBox='0 0 22 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true' // Hide the icon from screen readers
            >
              <rect x='0.875' y='1.875' width='20.25' height='20.25' rx='2.125' stroke='#D5D5D5' strokeWidth='0.25' />
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
              aria-hidden='true'
            >
              <rect x='0.875' y='1.875' width='20.25' height='20.25' rx='2.125' stroke='#D5D5D5' strokeWidth='0.25' />
              <path
                d='M7.35983 13.7652C7.50628 13.9116 7.74372 13.9116 7.89017 13.7652L11 10.6553L14.1098 13.7652C14.2563 13.9116 14.4937 13.9116 14.6402 13.7652C14.7866 13.6187 14.7866 13.3813 14.6402 13.2348L11.2652 9.85984C11.1187 9.71339 10.8813 9.71339 10.7348 9.85984L7.35983 13.2348C7.21339 13.3813 7.21339 13.6187 7.35983 13.7652Z'
                fill='#111111'
              />
            </svg>
          )}
        </span>
      </button>

      {/* Sidebar Content */}
      <div className={`flex flex-col tracking-wide gap-14 max-md:gap-6 max-md:mt-4 mt-10 `}>
        {options.map((item: Option, idx: number) => {
          const { id, title, subTitle, titleText } = item;
          return (
            <div key={id} id={id} className='flex flex-col'>
              {/* Section Heading */}
              <button
                className='flex justify-between gap-3 items-start text-base cursor-pointer'
                onClick={() => {
                  !actives[title]
                    ? setActives({
                        title: title,
                        [title]: [subTitle[0].title],
                      })
                    : setActives({
                        title: '',
                        [title]: '',
                      });
                  const contentSection = document.getElementById('about-section');
                  setToggle(!toggle);

                  if (contentSection) {
                    contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    console.log(contentSection);

                    router.push(`#about-section`);
                  }
                }}
                aria-expanded={!!actives[title]} // Indicates whether the section is expanded
                aria-label={actives[title] ? `Collapse ${title}` : `Expand ${title}`}
              >
                <span className='font-medium justify-start text-start w-full  text-[#111111] text-[18px]   gap-1 items-start max-md:text-sm leading-6'>
                  <span>{titleText ? titleText : title}</span>
                </span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  width={10}
                  height={10}
                  className={clsx(actives[title] ? 'rotate-180' : 'rotate-0', 'transition duration-500')}
                  aria-hidden='true' // Hide the icon from screen readers
                />
              </button>

              {/* Subtitle List */}
              {actives[title] && (
                <div className='min-h-fit flex flex-col gap-9 mt-9'>
                  {subTitle.map((sub_item: SubTitle, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActives({
                          ...actives,
                          [title]: Array.isArray(actives[title])
                            ? [...actives[title].filter((item: string) => item !== sub_item.title), sub_item.title]
                            : [sub_item.title],
                        });

                        setToggle(!toggle);
                      }}
                      className={clsx(
                        'text-[#5E5E5E] font-normal text-start w-fit cursor-pointer py-0.5 text-[16px] leading-6 border-b-black',
                        actives[title].includes(sub_item.title) ? 'border-b ' : '',
                        `${styles['slide-in']}`,
                        `relative after:content-[''] after:absolute after:left-0 after:bottom-0 ${
                          actives[title].includes(sub_item.title) ? 'after:h-[0px]' : 'after:h-[2px]'
                        } after:bg-black after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:after:animate-[draw-line_0.5s_ease-out]`
                      )}
                      aria-label={`Select ${sub_item.title}`}
                    >
                      {sub_item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const SideBar = React.memo(SideBarComponent);
export default SideBar;
