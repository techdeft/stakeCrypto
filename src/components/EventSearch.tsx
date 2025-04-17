import React from 'react';
import { useEventContext } from '../context/EventContext';

const EventSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useEventContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Event Pool"
          className="w-full h-12 px-4 rounded-xl bg-[#1A1B1E] border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EventSearch; 