import React from 'react';
import AboutSection from './Section';
import Hero from './Hero';

const About = () => {
  return (
    <main className={'min-h-fit  flex flex-col w-full '}>
      {/* <Hero Section /> */}
      <Hero />
      <AboutSection />
    </main>
  );
};

export default About;
