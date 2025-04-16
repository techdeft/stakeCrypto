import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileSideNav from './MobileSideNav';

const SideNav = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeGradient = "bg-gradient-to-r from-[#18C8FF6E] from-43% to-[#933FFE6E] to-43%";
  const defaultHover = "hover:bg-gray-800/50";

  const MenuItems = () => (
    <div className="flex-1 space-y-1 px-2 py-4">
      {/* Main Navigation */}
      <Link 
        to="/" 
        className={`flex items-center px-4 py-3 rounded-lg ${isActive('/') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
      >
        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Overview
      </Link>
      
      <Link 
        to="/stake" 
        className={`flex items-center px-4 py-3 rounded-lg ${isActive('/stake') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
      >
        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Stake
      </Link>

      <Link 
        to="/p2p" 
        className={`flex items-center px-4 py-3 rounded-lg ${isActive('/p2p') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
      >
        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        P2P
      </Link>

      <Link 
        to="/events" 
        className={`flex items-center px-4 py-3 rounded-lg ${isActive('/events') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
      >
        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Events (2)
      </Link>

      <Link 
        to="/bonus" 
        className={`flex items-center px-4 py-3 rounded-lg ${isActive('/bonus') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
      >
        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Bonus
      </Link>

      {/* Account Section */}
      <div className="mt-8 pt-8 border-t border-gray-800">
        <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          ACCOUNT
        </p>

        <div className="mt-4 space-y-1">
          <Link 
            to="/withdrawal" 
            className={`flex items-center px-4 py-3 rounded-lg ${isActive('/withdrawal') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Withdrawal
          </Link>

          <Link 
            to="/settings" 
            className={`flex items-center px-4 py-3 rounded-lg ${isActive('/settings') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Account Setting
          </Link>

          <Link 
            to="/support" 
            className={`flex items-center px-4 py-3 rounded-lg ${isActive('/support') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Live Support
          </Link>

          <Link 
            to="/insight" 
            className={`flex items-center px-4 py-3 rounded-lg ${isActive('/insight') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Staking Insight
          </Link>

          <Link 
            to="/language" 
            className={`flex items-center px-4 py-3 rounded-lg ${isActive('/language') ? activeGradient + ' text-white' : 'text-gray-400 ' + defaultHover}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            Language
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 h-full w-64 bg-[#1A1B1E] border-r border-gray-800 hidden md:block">
        <nav className="flex flex-col h-full">
          <MenuItems />
        </nav>
      </aside>

      {/* Mobile Footer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1A1B1E] border-t border-gray-800 z-40">
        <nav className="flex justify-around py-3">
          <Link to="/dashboard" className="flex flex-col items-center text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 13h8M4 13v6h8v-6M4 13V7m8 6h8m-8 0v6m0-6V7m8 6v6h-8m8-6V7M4 7h8m8 0h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link to="/markets" className="flex flex-col items-center text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M3 13h2.2M18.8 13H21m-17 0l2.3-7.9c.3-.9 1.1-1.5 2-1.5h7.4c.9 0 1.7.6 2 1.5l2.3 7.9M4 13v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs mt-1">Markets</span>
          </Link>
          <Link to="/wallet" className="flex flex-col items-center text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"/>
            </svg>
            <span className="text-xs mt-1">Wallet</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center text-gray-400"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs mt-1">More</span>
          </button>
        </nav>
      </div>

      {/* Mobile Side Menu */}
      <MobileSideNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default SideNav; 