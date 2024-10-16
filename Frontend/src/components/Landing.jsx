import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure your Tailwind setup is included in App.css

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#421a1a] to-[#222024] opacity-50"></div>

      {/* Optional Grid Overlay */}
      <div className="absolute inset-0 bg-grid"></div>

      {/* Main Content */}
      <main className="flex items-center justify-center h-full flex-col text-white relative z-10 px-4 md:px-8">
        {/* Title */}
        <h1 className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-black fade-in-up text-center">
          Welcome to Radix Spy!
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg sm:text-xl md:text-2xl mt-5 text-[#2b0c0c] slide-in-text">
          Uniting technology and vigilance to combat radical ideologies on social media.
        </p>

        {/* Button */}
        <button onClick={() => navigate('/signup')} className="mt-8 bg-[#842A2A] hover:bg-[#481b1b] text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl glow-button">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Landing;
