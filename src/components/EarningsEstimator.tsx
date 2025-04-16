import React, { useState } from 'react';

const EarningsEstimator = () => {
  const [amount, setAmount] = useState('50');
  const [token, setToken] = useState('SOL');
  const apy = 4; // APY shown in the image

  const calculateEarnings = (amount: string) => {
    const value = parseFloat(amount);
    if (isNaN(value)) return { daily: 0, monthly: 0, annual: 0 };
    
    const annual = (value * apy) / 100;
    const monthly = annual / 12;
    const daily = annual / 365;

    return {
      daily: daily.toFixed(6),
      monthly: monthly.toFixed(6),
      annual: annual.toFixed(3)
    };
  };

  const earnings = calculateEarnings(amount);

  return (
    <div className="mb-8 bg-[#1A1B1E] rounded-2xl p-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-bold text-white mb-2">Earning Estimator</h2>
        <p className="text-lg text-gray-400">Flexible earning from current APR</p>
      </div>

      {/* Calculator Section */}
      <div className="space-y-4 max-w-md mx-auto">
        {/* Token Selection */}
        <div className="relative">
          <div className="flex items-center justify-between h-[46px] px-4 bg-[#13141A] rounded-2xl border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl text-purple-500 font-medium">{token}</span>
            </div>
            <span className="text-xl text-purple-500">%{apy}</span>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="relative">
          <div className="flex items-center justify-between h-[46px] px-4 bg-[#13141A] rounded-2xl border border-gray-800">
            <span className="text-xl text-purple-500">{amount}</span>
            <div className="flex flex-col gap-1">
              <button className="text-gray-400 hover:text-white">▲</button>
              <button className="text-gray-400 hover:text-white">▼</button>
            </div>
          </div>
        </div>

        {/* Earnings Display */}
        <div className="space-y-4 mt-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Daily Earning</span>
            <span className="text-blue-500">+{earnings.daily} {token}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Monthly Earning</span>
            <span className="text-blue-500">+{earnings.monthly} {token}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Annual Earning</span>
            <span className="text-blue-500">+{earnings.annual} {token}</span>
          </div>
        </div>

        {/* Earn Now Button */}
        <div className="pt-6">
          <button className="w-full h-[56px] rounded-2xl text-white font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
            Earn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsEstimator; 