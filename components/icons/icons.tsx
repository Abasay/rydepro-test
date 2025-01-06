import React from 'react';
export function Hamburger({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={className}
        width='15'
        height='15'
        viewBox='0 0 12 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='menu line horizontal'>
          <path
            id='Vector 2465 (Stroke)'
            opacity='0.4'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H11C11.4142 0.25 11.75 0.585786 11.75 1C11.75 1.41421 11.4142 1.75 11 1.75H1C0.585786 1.75 0.25 1.41421 0.25 1Z'
            fill='#131316'
          />
          <path
            id='Vector 2466 (Stroke)'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.25 5C0.25 4.58579 0.585786 4.25 1 4.25H11C11.4142 4.25 11.75 4.58579 11.75 5C11.75 5.41421 11.4142 5.75 11 5.75H1C0.585786 5.75 0.25 5.41421 0.25 5Z'
            fill='#131316'
          />
          <path
            id='Vector 2467 (Stroke)'
            opacity='0.4'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z'
            fill='#131316'
          />
        </g>
      </svg>
    </>
  );
}

export function CancelIcon({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width='11'
        height='10'
        viewBox='0 0 11 10'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.13221 9.77342C9.4251 10.0663 9.89997 10.0663 10.1929 9.77342C10.4858 9.48053 10.4858 9.00566 10.1929 8.71276L6.48057 5.00047L10.1929 1.28819C10.4858 0.995293 10.4858 0.52042 10.1929 0.227527C9.89996 -0.0653667 9.42509 -0.0653667 9.1322 0.227527L5.41991 3.93981L1.70759 0.227483C1.41469 -0.065411 0.939818 -0.0654107 0.646925 0.227483C0.354032 0.520376 0.354031 0.995249 0.646925 1.28814L4.35925 5.00047L0.646916 8.71281C0.354023 9.0057 0.354023 9.48057 0.646916 9.77347C0.939809 10.0664 1.41468 10.0664 1.70758 9.77347L5.41991 6.06113L9.13221 9.77342Z'
          fill='#131316'
        />
      </svg>
    </>
  );
}
