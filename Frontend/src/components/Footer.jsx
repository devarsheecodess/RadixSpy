import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-50 to-red-100 relative border-t border-red-200">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-red-600 transition duration-300 flex items-center"
            >
              Radix<span className="text-red-600">Spy</span>
            </a>
            <p className="text-gray-600 text-sm max-w-xs mt-1">
              Advanced technology for detecting radical content across social media.
            </p>
          </div>

          {/* Right Section - Follow Us */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              {[
                { name: 'Devarshee', url: 'https://www.linkedin.com/in/devarshee-gaunekar-a06441257/' },
                { name: 'Saiesh', url: 'https://www.linkedin.com/in/saiesh-priolkar-8039b3267/' },
                { name: 'Vignesh', url: 'https://www.linkedin.com/in/vignesh-gaunker-ab3b15256/' }
              ].map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    {/* LinkedIn Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-200 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-600">
            © {new Date().getFullYear()} RadixSpy™. All rights reserved.
          </p>
          <p className="text-gray-600 mt-1 md:mt-0">
            Made with <span className="text-red-500">❤️</span> By Glitch Busters
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;