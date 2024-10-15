import React from 'react'

const Post = () => {
  return (
    <div className="flex items-center py-20 flex-col w-full min-h-screen">
      <div className="flex items-center mb-8">
        <h1 className='font-bold text-red-950 text-4xl mb-8 fade-in-up'>Analyse Post</h1>
      </div>
      <div className="w-[820px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg shadow-lg mt-5 entry-animation">
        <div className="bg-[#D19FA5] w-full h-auto px-8 py-5 flex flex-col items-center rounded-lg">
          <div className="flex items-center w-full mb-4">
            <i className="fas fa-video text-red-900 mr-2"></i> {/* Video Icon */}
            <span className="text-red-900 font-bold">Enter the post URL</span>
          </div>
          <form className="w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="Paste your post URL here"
              className="mt-4 mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="p-4 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200 outline-none">
              Analyse
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post