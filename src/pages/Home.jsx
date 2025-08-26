import React from 'react';
import Introduction from '../components/introduction';
import About from '../components/about';
import Timeline from '../components/timeline';
import ProfessionalPortfolio from '../components/ProfessionalPortfolio';
import Portfolio from '../components/portfolio';


export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Timeline />
      <ProfessionalPortfolio />
      <Portfolio />
    </>
  );
}
