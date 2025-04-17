import React from 'react';
import EventHero from '../components/EventHero';
import EventSearch from '../components/EventSearch';
import EventGrid from '../components/EventGrid';
import { EventProvider } from '../context/EventContext';

const Events: React.FC = () => {
  return (
    <EventProvider>
      <div className="space-y-8">
        <EventHero />
        <EventSearch />
        <EventGrid />
      </div>
    </EventProvider>
  );
};

export default Events; 