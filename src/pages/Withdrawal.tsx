import React, { useState } from 'react';

interface CryptoOption {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
  color: string;
}

const cryptoOptions: CryptoOption[] = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', balance: '0.00000000', color: 'bg-[#F7931A]' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', balance: '0.00000000', color: 'bg-[#627EEA]' },
  { symbol: 'USDT', name: 'Tether', icon: '₮', balance: '0.00000000', color: 'bg-[#26A17B]' },
  { symbol: 'BNB', name: 'Binance', icon: 'B', balance: '0.00000000', color: 'bg-[#F3BA2F]' },
  { symbol: 'SOL', name: 'Solana', icon: 'S', balance: '0.00000000', color: 'bg-[#DC1FFF]' },
];

const Withdrawal: React.FC = () => {
  const [withdrawalType, setWithdrawalType] = useState<'faucet' | 'direct'>('faucet');
  const [amount, setAmount] = useState('0.02000000');
  const [address, setAddress] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fee = '0.003';
  const youReceive = '0.017';

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const setMaxAmount = () => {
    setAmount(selectedCrypto.balance);
  };

  const setMinAmount = () => {
    setAmount('0.02000000');
  };

  const handleCryptoSelect = (crypto: CryptoOption) => {
    setSelectedCrypto(crypto);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.32))] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-4 md:space-y-6">
        {/* Crypto Selector */}
        <div className="relative">
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#1A1B1E] h-[56px] rounded-xl px-4 flex items-center justify-between cursor-pointer hover:bg-[#1E1F23] transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 ${selectedCrypto.color} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm md:text-base font-medium">{selectedCrypto.icon}</span>
              </div>
              <span className="text-white text-sm md:text-base font-medium">{selectedCrypto.symbol}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm md:text-base">{selectedCrypto.balance}</span>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute w-full mt-2 bg-[#1A1B1E] rounded-xl overflow-hidden shadow-lg z-50">
              {cryptoOptions.map((crypto) => (
                <div
                  key={crypto.symbol}
                  onClick={() => handleCryptoSelect(crypto)}
                  className="h-[56px] px-4 flex items-center justify-between cursor-pointer hover:bg-[#1E1F23] transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-sm md:text-base font-medium">{crypto.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm md:text-base font-medium">{crypto.symbol}</span>
                      <span className="text-gray-400 text-xs">{crypto.name}</span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{crypto.balance}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Withdrawal Type Toggle */}
        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
          <span>FAUCETPAY (LESS FEES)</span>
          <label className="relative inline-flex items-center cursor-pointer mx-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={withdrawalType === 'direct'}
              onChange={() => setWithdrawalType(withdrawalType === 'faucet' ? 'direct' : 'faucet')}
            />
            <div className="w-9 md:w-11 h-5 md:h-6 bg-[#1A1B1E] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all"></div>
          </label>
          <span>DIRECT WITHDRAWAL</span>
        </div>

        {/* Withdrawal Address */}
        <div>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Withdrawal Address"
            className="w-full h-[56px] px-4 text-sm md:text-base rounded-xl bg-[#1A1B1E] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Amount Input */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Withdrawal Amount"
              className="w-full h-[56px] px-4 text-sm md:text-base rounded-xl bg-[#1A1B1E] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            onClick={setMaxAmount}
            className="h-[56px] px-8 text-sm md:text-base rounded-xl bg-[#1A1B1E] text-white font-medium hover:bg-[#1E1F23] transition-colors"
          >
            ALL
          </button>
        </div>

        {/* Fee and You Receive */}
        <div className="flex justify-between text-gray-400 text-xs md:text-sm">
          <span>Fee: {fee} {selectedCrypto.symbol}</span>
          <span>You Receive: {youReceive} {selectedCrypto.symbol}</span>
        </div>

        {/* Submit Button */}
        <button className="w-full h-[56px] text-sm md:text-base rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors">
          PLACE WITHDRAWAL
        </button>
      </div>
    </div>
  );
};

export default Withdrawal; 