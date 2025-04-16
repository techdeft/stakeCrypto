import React from 'react';

interface CryptoEvent {
  id: string;
  symbol: string;
  name: string;
  color: string;
}

const events: CryptoEvent[] = [
  { id: '1', symbol: 'ETH', name: 'Ethereum', color: 'bg-[#627EEA]' },
  { id: '2', symbol: 'USDT', name: 'Tether', color: 'bg-[#26A17B]' },
  { id: '3', symbol: 'BTC', name: 'Bitcoin', color: 'bg-[#F7931A]' },
  { id: '4', symbol: 'LTC', name: 'Litecoin', color: 'bg-[#345D9D]' },
  { id: '5', symbol: 'ETH', name: 'Ethereum', color: 'bg-[#627EEA]' },
  { id: '6', symbol: 'BNB', name: 'Binance', color: 'bg-[#F3BA2F]' },
  { id: '7', symbol: 'SOL', name: 'Solana', color: 'bg-[#DC1FFF]' }
];

const EventsCarousel = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-white mb-4">Ongoing Events</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-[100px] cursor-pointer"
            >
              <div className={`${event.color} w-full aspect-square rounded-2xl flex items-center justify-center mb-2 hover:opacity-90 transition-opacity`}>
                <span className="text-white font-bold text-xl">{event.symbol}</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">{event.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#13141A] pointer-events-none" />
      </div>
    </div>
  );
};

export default EventsCarousel; 