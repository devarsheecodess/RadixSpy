import React, { useState } from 'react';

const Video = () => {
  const [videoUrl, setVideoUrl] = useState(''); // State to hold the video URL
  const [videoSrc, setVideoSrc] = useState(null); // State to hold the URL for the video player

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value); // Update the video URL state
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    setVideoSrc(videoUrl); // Set the video source to the entered URL
  };

  return (
    <div className="flex items-center py-20 flex-col w-full min-h-screen px-4">
      <div className="flex items-center mb-8">
        <h1 className='font-bold text-red-950 text-3xl md:text-4xl lg:text-4xl mb-6 fade-in-up text-center'>Analyse Videos</h1>
      </div>
      <div className="w-full max-w-[820px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg shadow-lg mt-5 entry-animation">
        <div className="bg-[#D19FA5] w-full h-auto px-8 py-5 flex flex-col items-center rounded-lg">
          <div className="flex items-center w-full mb-4">
            <i className="fas fa-link text-red-900 mr-2"></i> {/* Video Icon */}
            <span className="text-red-900 font-bold">Enter the video URL</span>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              value={videoUrl}
              onChange={handleUrlChange}
              placeholder="Paste your video URL here"
              className="mt-4 mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="p-4 text-white w-full max-w-xs flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200 outline-none">
              Analyse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Video;
