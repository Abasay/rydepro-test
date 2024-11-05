import React from 'react';
import AboutSection from './Section';
import Hero from './Hero';

const About = () => {
  return (
    <section className={'min-h-screen flex flex-col w-full '}>
      {/* <Hero className={clsx(page_padding)} /> */}
      <Hero />
      <AboutSection />
    </section>
  );
};

export default About;
