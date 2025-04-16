import React from 'react';

const Features = () => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Stake Feature */}
        <div className="bg-[#1A1B1E] rounded-2xl p-6 cursor-pointer hover:bg-[#1E1F23] transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-blue-500">Stake</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">
            Predict any Cryptocurrency Closing Price Easily
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Participate in our daily price prediction game for cryptocurrencies like BTC, ETH, SOL and LTC. If your prediction is matching the closing price, you'll earn rewards in SOL.
          </p>
          <button className="text-sm text-blue-500 hover:text-blue-400">
            Let's Stake →
          </button>
        </div>

        {/* P2P Feature */}
        <div className="bg-[#1A1B1E] rounded-2xl p-6 cursor-pointer hover:bg-[#1E1F23] transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-purple-500">P2P</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">
            Peer to Peer Cryptocurrency Marketplace
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Trade P2P in a decentralized manner where you can share your crypto with other users while staying protected with our escrow service. Get low fees and high profit margins.
          </p>
          <button className="text-sm text-purple-500 hover:text-purple-400">
            Start Trading →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features; 