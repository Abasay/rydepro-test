'use client';
import React, { useEffect, useState } from 'react';
import Component from './component';

const Time = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('December 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, '0'),
        minutes: Math.floor((difference / (1000 * 60)) % 60)
          .toString()
          .padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='flex justify-center gap-4 md:gap-8 flex-wrap'>
      {/** Days */}
      <div className='flex flex-col flex-wrap w-fit mt-2'>
        <div className='flex flex-wrap gap-1'>
          <Component days={timeLeft.days[0]} />
          <Component days={timeLeft.days[1]} />
        </div>
        <span className='text-sm text-white'>Days</span>
      </div>
      {/** Hours */}
      <div className='flex flex-col mt-2 flex-wrap w-fit'>
        <div className='flex flex-wrap gap-1'>
          <Component hours={timeLeft.hours[0]} />
          <Component hours={timeLeft.hours[1]} />
        </div>
        <span className='text-sm text-white'>Hours</span>
      </div>
      {/** Minutes */}
      <div className='flex flex-col flex-wrap mt-2 w-fit'>
        <div className='flex flex-wrap gap-1'>
          <Component minutes={timeLeft.minutes[0]} />
          <Component minutes={timeLeft.minutes[1]} />
        </div>
        <span className='text-sm text-white'>Mins</span>
      </div>
    </section>
  );
};

export default Time;
