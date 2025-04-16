import React from 'react';
import coinsImage from '../images/coins.png';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[200px] rounded-2xl bg-[#1A1B1E] overflow-hidden mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
      <div className="relative z-10 p-6 flex flex-col h-full justify-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          Stake crypto for<br />
          closing price and earn<br />
          reward
        </h1>
        <button className="mt-4 w-fit px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700">
          Get Started
        </button>
      </div>
      
      {/* Coins Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img 
          src={coinsImage} 
          alt="Floating cryptocurrency coins" 
          className="w-full h-full object-contain object-right-top"
        />
      </div>
    </div>
  );
};

export default HeroBanner; 