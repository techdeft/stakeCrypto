import React, { useState } from 'react';

interface TimeOption {
  label: string;
  value: string;
}

const timeOptions: TimeOption[] = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  const period = hour < 12 ? 'AM' : 'PM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return {
    label: `${displayHour}:${minute} ${period}`,
    value: `${hour.toString().padStart(2, '0')}:${minute}`
  };
});

const Stake: React.FC = () => {
  const [actualPrice, setActualPrice] = useState('0.02000000');
  const [predictPrice, setPredictPrice] = useState('0.02000000');
  const [entryTime, setEntryTime] = useState('2:30 AM');
  const [closingTime, setClosingTime] = useState('2:30 AM');

  const handlePredictPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPredictPrice(e.target.value);
  };

  const handleEntryTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntryTime(e.target.value);
  };

  const handleClosingTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClosingTime(e.target.value);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto space-y-6 p-4">
        {/* Actual Price */}
        <div className="space-y-2">
          <label className="block text-gray-400 text-sm">Actual Price</label>
          <div className="bg-[#1A1B1E] h-[56px] rounded-xl px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#F7931A] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">₿</span>
              </div>
              <span className="text-white font-medium">BTC</span>
            </div>
            <span className="text-white font-medium">{actualPrice}</span>
          </div>
        </div>

        {/* Predict Price */}
        <div className="space-y-2">
          <label className="block text-gray-400 text-sm">Predict Price</label>
          <div className="bg-[#1A1B1E] h-[56px] rounded-xl px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#F7931A] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">₿</span>
              </div>
              <span className="text-white font-medium">BTC</span>
            </div>
            <input
              type="text"
              value={predictPrice}
              onChange={handlePredictPriceChange}
              className="w-32 text-right bg-transparent text-white font-medium focus:outline-none"
              placeholder="0.00000000"
            />
          </div>
        </div>

        {/* Time Selection */}
        <div className="flex space-x-4">
          {/* Entry Time */}
          <div className="flex-1 space-y-2">
            <label className="block text-gray-400 text-sm">Entry Time</label>
            <input
              type="time"
              value={entryTime}
              onChange={handleEntryTimeChange}
              className="w-full h-[56px] px-4 text-white bg-[#1A1B1E] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Closing Time */}
          <div className="flex-1 space-y-2">
            <label className="block text-gray-400 text-sm">Closing Time</label>
            <input
              type="time"
              value={closingTime}
              onChange={handleClosingTimeChange}
              className="w-full h-[56px] px-4 text-white bg-[#1A1B1E] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Stake Button */}
        <button className="w-full h-[56px] rounded-xl text-white font-medium text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors">
          Stake Crypto
        </button>
      </div>
    </div>
  );
};

export default Stake; 