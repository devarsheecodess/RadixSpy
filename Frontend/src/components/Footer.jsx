import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#842A2A] p-6 shadow-md">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold text-white flex flex-col">
            <a href="/" className="hover:underline text-white">RadixSpy™</a>
          </span>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-lg font-semibold text-white mb-3">Follow Us</span>
          <ul className="flex space-x-4 sm:space-x-6 text-sm font-medium text-gray-600">
            <li>
              <a
                href="https://www.linkedin.com/in/devarshee-gaunekar-a06441257/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition text-white hover:text-red-500"
              >
                Devarshee
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saiesh-priolkar-8039b3267/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition text-white hover:text-red-500"
              >
                Saiesh
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vignesh-gaunker-ab3b15256/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition text-white hover:text-red-500"
              >
                Vignesh
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-3 text-white text-sm sm:text-base">
        Made with ❤️ in India
      </p>
    </footer>
  );
};

export default Footer;
