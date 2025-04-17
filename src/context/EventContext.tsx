import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EventContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <EventContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
}; 