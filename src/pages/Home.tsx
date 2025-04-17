import React from 'react';
import HeroBanner from '../components/HeroBanner';
import EventsCarousel from '../components/EventsCarousel';
import StakingOptions from '../components/StakingOptions';
import EarningsEstimator from '../components/EarningsEstimator';
import HowItWorks from '../components/HowItWorks';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroBanner />
      <EventsCarousel />
      <StakingOptions />
      <EarningsEstimator />
      <HowItWorks />
    </div>
  );
};

export default Home; 