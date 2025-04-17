import React from 'react';
import HeroBanner from '../components/HeroBanner';
import EventsCarousel from '../components/EventsCarousel';
import StakingOptions from '../components/StakingOptions';
import EarningsEstimator from '../components/EarningsEstimator';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#13141A]">
      <HeroBanner />
      <HowItWorks />
      <EventsCarousel />
      <StakingOptions />
      <EarningsEstimator />
      <Features />
    </div>
  );
};

export default Home; 