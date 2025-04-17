import React from 'react';

const Bonus: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">
          Invite a Friend to Stakecrypto
        </h1>
        <p className="text-gray-400">
          You and your friend will receive bonuses
        </p>
      </div>

      {/* Referral Card */}
      <div className="bg-white rounded-2xl p-6 flex items-center space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <div>
          <h3 className="text-black font-medium">Invite a friend</h3>
          <p className="text-purple-500">+0.1 for you and your friend</p>
        </div>
      </div>

      {/* Become a Referral Button */}
      <button className="w-full h-12 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors">
        Become a referral
      </button>

      {/* Friends List Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-medium">List of your friends</h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Empty State */}
        <div className="bg-[#1A1B1E] rounded-xl p-6 text-center text-gray-500">
          You haven't invited anyone yet
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="flex-1 h-12 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Invite friend</span>
          </button>
          <button className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bonus; 