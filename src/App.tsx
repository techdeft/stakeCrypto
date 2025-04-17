import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Bonus from './pages/Bonus';
import Withdrawal from './pages/Withdrawal';
import Stake from './pages/Stake';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#13141A]">
        <Navbar />
        <SideNav />
        <main className="md:pl-64 pt-16 pb-20 md:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/bonus" element={<Bonus />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              <Route path="/stake" element={<Stake />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App; 