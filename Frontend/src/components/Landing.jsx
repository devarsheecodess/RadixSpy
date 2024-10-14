import React from 'react';
import '../App.css'; // Ensure your Tailwind setup is included in App.css

const Landing = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#421a1a] to-[#222024] opacity-50"></div>
      <div className="absolute inset-0 bg-grid"></div>
      <main className='flex items-center justify-center h-full flex-col text-white relative z-10'>
        <h1 className='font-bold text-5xl md:text-6xl fade-in-up text-black'>Welcome to Radix Spy!</h1>
        <p className='slide-in-text text-lg mt-5 md:text-xl text-[#2b0c0c]'>Uniting technology and vigilance to combat radical ideologies on social media.</p>
        <button className='mt-8 bg-[#842A2A] hover:bg-[#481b1b] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:shadow-xl glow-button'>
          Get Started
        </button>
      </main>
    </div>
  );
}

export default Landing;
