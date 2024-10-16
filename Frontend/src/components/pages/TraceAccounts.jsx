import React from 'react';

const TraceAccounts = () => {
  return (
    <div className="flex items-center py-10 md:py-20 flex-col w-full min-h-screen p-4 md:p-0">
      <div className="flex items-center mb-6 md:mb-8">
        <h1 className="font-bold text-red-950 text-3xl md:text-4xl lg:text-4xl mb-6 fade-in-up text-center">
          Track Account
        </h1>
      </div>
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg shadow-lg mt-4 md:mt-5 entry-animation">
        <div className="bg-[#D19FA5] w-full h-auto px-6 md:px-8 py-4 md:py-5 flex flex-col items-center rounded-lg">
          <div className="flex items-center w-full mb-3 md:mb-4">
            <i className="fas fa-users text-red-900 mr-2"></i> {/* Account Icon */}
            <span className="text-red-900 font-bold">Enter the account URL</span>
          </div>
          <form className="w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="Paste your account URL here"
              className="mt-3 md:mt-4 mb-3 md:mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="p-3 md:p-4 text-white w-40 md:w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200 outline-none"
            >
              Analyse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TraceAccounts;
