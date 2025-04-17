import React from 'react';
import icons from '../images/icons.png';

const EventHero: React.FC = () => {
  return (
    <div className="relative w-full h-[200px] rounded-2xl bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden bg-[#1C1C22]">
      <div className="relative z-10 p-8 flex flex-col h-full justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Stake
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Refer and earn with stakecrypto
        </p>
        <button className="w-fit px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700">
          How to stake
        </button>
      </div>
      
      {/* 3D Icons - Hidden on mobile, visible on md and up */}
      <div className="absolute top-4 right-4 hidden md:block">
        <img src={icons} alt="Stake features" className="w-[323px] h-[261px] object-contain" />
      </div>
    </div>
  );
};

export default EventHero; 