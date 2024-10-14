import React, { useEffect, useState } from 'react';
const Video = () => {
  const [videoUrl, setVideoUrl] = useState(''); // State to hold the video URL
  const [videoSrc, setVideoSrc] = useState(null); // State to hold the URL for the video player

  useEffect(() => {
    // Dynamically add Font Awesome CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    link.integrity = 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Run only once on mount

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value); // Update the video URL state
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    setVideoSrc(videoUrl); // Set the video source to the entered URL
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center mb-8">
        <span className='text-red-900 text-5xl font-bold ml-3'>Analyze Video</span>
      </div>
      <div className="w-[820px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg shadow-lg mt-5">
        <div className="bg-[#D19FA5] w-full h-auto px-4 py-2 flex flex-col items-center rounded-lg">
          <div className="flex items-center w-full mb-4">
            <i className="fas fa-video text-red-900 mr-2"></i> {/* Video Icon */}
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
            <button type="submit" className="bg-red-900 text-white p-2 rounded hover:bg-red-700 transition">
              Load Video
            </button>
          </form>
          {videoSrc && (
            <video className="w-full h-auto mt-4" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
      <div className='flex items-center justify-center flex-col w-full min-h-screen'>
        <h1 className='font-bold text-red-950 text-4xl mb-8 fade-in-up'>Analyse Videos</h1>
      </div>
    </div>
  );
}

export default Video;