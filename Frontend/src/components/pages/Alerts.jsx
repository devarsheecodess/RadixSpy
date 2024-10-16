import React, { useState } from 'react';

const alerts = [
  {
    id: 1,
    message: 'User @john_doe posted content that violates community guidelines.',
    timestamp: '2 minutes ago',
  },
  {
    id: 2,
    message: 'User @sarah123 shared a post with extremist views.',
    timestamp: '15 minutes ago',
  },
  {
    id: 3,
    message: 'User @radical_user has been flagged for suspicious activity.',
    timestamp: '30 minutes ago',
  },
  {
    id: 4,
    message: 'User @example_user posted content that violates community guidelines.',
    timestamp: '1 minute ago',
  },
  {
    id: 5,
    message: 'User @test_user shared a post with extremist views.',
    timestamp: '45 minutes ago',
  }
];

const surveillanceUsers = [
  { id: 1, username: '@john_doe' },
  { id: 2, username: '@sarah123' },
  { id: 3, username: '@radical_user' },
  { id: 4, username: '@example_user' },
  { id: 5, username: '@test_user' },
];

const Alerts = () => {
  const [view, setView] = useState('notifications');

  return (
    <div className='flex items-center lg:justify-center flex-col w-full min-h-screen p-4 md:p-6 mt-[-30px]'> {/* Adjusted the margin-top here */}
      <h1 className='font-extrabold text-red-950 text-3xl md:text-4xl mb-4 md:mb-6 fade-in-up rounded-md p-2'>
        Alerts
      </h1>
      
      <div className='mb-4 slide-in-text'>
        <button 
          className={`mr-2 px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold transition duration-300 ${view === 'notifications' ? 'bg-[#591a1a] text-white shadow-lg transform scale-105' : 'bg-white text-[#591a1a] border-2 border-[#591a1a] hover:bg-[#591a1a] hover:text-white'}`} 
          onClick={() => setView('notifications')}
        >
          Notifications
        </button>
        <button 
          className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold transition duration-300 ${view === 'surveillance' ? 'bg-[#591a1a] text-white shadow-lg transform scale-105' : 'bg-white text-[#591a1a] border-2 border-[#591a1a] hover:bg-[#591a1a] hover:text-white'}`} 
          onClick={() => setView('surveillance')}
        >
          Under Surveillance
        </button>
      </div>

      <div className='w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden entry-animation'>
        <div className='max-h-80 overflow-y-auto'>
          {view === 'notifications' ? (
            alerts.map((alert) => (
              <div key={alert.id} className='flex flex-col p-3 md:p-4 border-b last:border-b-0 hover:bg-gray-50 transition duration-200'>
                <span className='font-semibold text-red-700 text-sm md:text-base'>{alert.message}</span>
                <div className='text-gray-500 text-xs md:text-sm italic'>{alert.timestamp}</div>
              </div>
            ))
          ) : (
            surveillanceUsers.map((user) => (
              <div key={user.id} className='flex flex-col p-3 md:p-4 border-b last:border-b-0 hover:bg-gray-50 transition duration-200'>
                <span className='font-semibold text-red-700 text-sm md:text-base'>{user.username}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
