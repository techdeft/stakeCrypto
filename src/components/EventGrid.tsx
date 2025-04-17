import React from 'react';
import { useEventContext } from '../context/EventContext';

interface EventCard {
  id: string;
  symbol: string;
  name: string;
  apr: string;
  logo: string;
}

const eventCards: EventCard[] = [
  { id: '1', symbol: 'SOL', name: 'Sol Event Pool', apr: '33.2%', logo: '/crypto/solana.svg' },
  { id: '2', symbol: 'USDT', name: 'Tether Event Pool', apr: '33.2%', logo: '/crypto/tether.svg' },
  { id: '3', symbol: 'BTC', name: 'BTC Event Pool', apr: '33.2%', logo: '/crypto/bitcoin.svg' },
  { id: '4', symbol: 'LTC', name: 'Lite Event Pool', apr: '33.2%', logo: '/crypto/litecoin.svg' },
  { id: '5', symbol: 'ETH', name: 'ETH Event Pool', apr: '33.2%', logo: '/crypto/ethereum.svg' },
  { id: '6', symbol: 'BNB', name: 'Binance Event Pool', apr: '33.2%', logo: '/crypto/binance.svg' },
  { id: '7', symbol: 'XRP', name: 'XRP Event Pool', apr: '33.2%', logo: '/crypto/xrp.svg' },
  { id: '8', symbol: 'USDC', name: 'USD Coin Event Pool', apr: '33.2%', logo: '/crypto/usdc.svg' },
  { id: '9', symbol: 'TRX', name: 'Tron Event Pool', apr: '33.2%', logo: '/crypto/tron.svg' },
  { id: '10', symbol: 'DOGE', name: 'Doge Event Pool', apr: '33.2%', logo: '/crypto/doge.svg' },
  { id: '11', symbol: 'XRP', name: 'XRP Event Pool', apr: '33.2%', logo: '/crypto/xrp.svg' },
  { id: '12', symbol: 'XTZ', name: 'XTZ Event Pool', apr: '33.2%', logo: '/crypto/tezos.svg' }
];

const EventGrid: React.FC = () => {
  const { searchQuery } = useEventContext();

  const filteredCards = eventCards.filter(card => {
    const searchLower = searchQuery.toLowerCase();
    return (
      card.name.toLowerCase().includes(searchLower) ||
      card.symbol.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium text-white">Ongoing Events</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-[#1A1B1E] rounded-xl p-4 cursor-pointer hover:bg-[#1E1F23] transition-colors"
          >
            <div className="relative">
              <div className="absolute top-0 right-0">
                <span className="text-xs text-green-400">APR {card.apr}</span>
              </div>
              <div className="w-12 h-12 mx-auto mb-3">
                <img
                  src={card.logo}
                  alt={`${card.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-white mb-1">{card.symbol}</div>
                <div className="text-xs text-gray-400">{card.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid; 