import React from 'react';

interface StakingToken {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  percentage: string;
  trend: 'up' | 'down';
}

const popularTokens: StakingToken[] = [
  { id: '1', symbol: 'ALGO', name: 'Algorand', icon: '🔷', percentage: '+8.12%', trend: 'up' },
  { id: '2', symbol: 'BNB', name: 'Binance', icon: '🟡', percentage: '+7.55%', trend: 'up' },
  { id: '3', symbol: 'SOL', name: 'Solana', icon: '🟣', percentage: '+6.89%', trend: 'up' },
  { id: '4', symbol: 'NEAR', name: 'Near', icon: '⚫', percentage: '+5.67%', trend: 'up' }
];

const tokens: StakingToken[] = [
  { id: '5', symbol: 'MATIC', name: 'Polygon', icon: '🟣', percentage: '+4.23%', trend: 'up' },
  { id: '6', symbol: 'ATOM', name: 'Cosmos', icon: '⚛️', percentage: '+3.89%', trend: 'up' },
  { id: '7', symbol: 'DOT', name: 'Polkadot', icon: '⚪', percentage: '+3.45%', trend: 'up' },
  { id: '8', symbol: 'ADA', name: 'Cardano', icon: '🔵', percentage: '+3.12%', trend: 'up' },
  { id: '9', symbol: 'XRP', name: 'Ripple', icon: '⚪', percentage: '+2.98%', trend: 'up' },
  { id: '10', symbol: 'AVAX', name: 'Avalanche', icon: '🔴', percentage: '+2.76%', trend: 'up' },
  { id: '11', symbol: 'FTM', name: 'Fantom', icon: '👻', percentage: '+2.54%', trend: 'up' },
  { id: '12', symbol: 'LINK', name: 'Chainlink', icon: '🔗', percentage: '+2.34%', trend: 'up' }
];

const StakingOptions = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-[20px] md:text-[32px] font-bold text-white text-center">
          Over 50+ Staking Option in wallet
        </h2>
      </div>

      {/* Popular Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {popularTokens.map((token) => (
          <div
            key={token.id}
            className="bg-[#1A1B1E] rounded-xl p-4 cursor-pointer hover:bg-[#1E1F23] transition-colors"
          >
            <div className="text-2xl mb-2">{token.icon}</div>
            <div className="text-sm font-medium text-white mb-1">{token.symbol}</div>
            <div className="text-xs text-gray-400">{token.name}</div>
          </div>
        ))}
      </div>

      {/* Other Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="bg-[#1A1B1E] rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-[#1E1F23] transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{token.icon}</span>
              <div>
                <div className="text-sm font-medium text-white">{token.symbol}</div>
                <div className="text-xs text-gray-400">{token.name}</div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-500">{token.percentage}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="w-[365px] h-[56px] rounded-lg text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          Earn Now
        </button>
      </div>
    </div>
  );
};

export default StakingOptions; 