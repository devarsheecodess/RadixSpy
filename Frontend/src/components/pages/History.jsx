import React from 'react';

const History = () => {
  return (
    <div className="relative flex items-center justify-center flex-col w-full min-h-screen text-red-950 p-4 md:p-6">
      {/* Title */}
      <h1 className="font-bold text-red-950 text-3xl md:text-4xl lg:text-4xl fade-in-up text-center mb-10">
        History
      </h1>

      {/* Scrollable History Container */}
      <div className="relative z-20 w-full max-w-4xl p-8 bg-[#D19FA5] bg-opacity-80 rounded-xl shadow-lg backdrop-blur-md h-[500px] overflow-y-scroll entry-animation mt-[-20px]">
        {/* History Entries */}
        <div className="space-y-6">
          {/* History Item */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Account Tracked</h2>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You tracked the account <a href="https://example.com/user1" className="text-blue-600 underline">User1</a>.
            </p>
          </div>

          {/* Another History Item */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Post Analyzed</h2>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You analyzed the post <a href="https://example.com/post123" className="text-blue-600 underline">"Amazing Post Title"</a>.
            </p>
          </div>

          {/* Another History Item */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Video Reviewed</h2>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You reviewed the video <a href="https://example.com/video456" className="text-blue-600 underline">"How to Analyze Data"</a>.
            </p>
          </div>

          {/* More History Items */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Account Tracked</h2>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You tracked the account <a href="https://example.com/user2" className="text-blue-600 underline">User2</a>.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Post Analyzed</h2>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You analyzed the post <a href="https://example.com/post789" className="text-blue-600 underline">"Another Interesting Post"</a>.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-[#421a1a]">Video Reviewed</h2>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
            <p className="text-gray-600 mt-2">
              You reviewed the video <a href="https://example.com/video123" className="text-blue-600 underline">"Exploring AI Techniques"</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
