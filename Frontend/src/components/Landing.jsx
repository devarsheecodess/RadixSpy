import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure your Tailwind setup is included in App.css

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      {/* Main Content */}
      <main className="mt-16 pb-20 flex items-center justify-center h-full flex-col text-gray-900 relative z-10 px-4 md:px-8 container mx-auto">
        {/* Title */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 fade-in-up text-center mb-4">
          Welcome to <span className="text-red-700">Radix Spy</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg sm:text-xl md:text-2xl mt-5 text-red-700 slide-in-text max-w-3xl mx-auto opacity-90">
          Uniting technology and vigilance to combat radical ideologies on social media.
        </p>

        {/* Description */}
        <p className="text-center text-md sm:text-lg mt-6 text-gray-600 max-w-2xl mx-auto fade-in-up animation-delay-500">
          Our advanced AI algorithms monitor and identify potential threats across platforms,
          providing real-time insights and actionable intelligence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => navigate('/signup')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/features')}
            className="bg-white border-2 border-red-400 text-red-600 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 hover:bg-red-50 hover:shadow-lg transform hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-4xl mx-auto">
          {[
            { number: '95%', label: 'Detection Accuracy', icon: '⚡' },
            { number: '24/7', label: 'Monitoring', icon: '🔍' },
            { number: '100+', label: 'Platforms Covered', icon: '🌐' }
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white backdrop-blur-sm rounded-lg border border-red-100 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="text-3xl font-bold text-gray-900">{stat.number}</span>
              <span className="text-red-600 mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Landing;