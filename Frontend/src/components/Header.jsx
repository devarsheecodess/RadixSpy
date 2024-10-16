import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className='flex items-center justify-between bg-[#842A2A] text-white font-bold p-5 md:p-0'>
        <h1 className='text-xl md:text-2xl ml-5'>Radix Spy</h1>
        {/* Hamburger Menu */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='outline-none border-transparent'>
            {/* Font Awesome Icons */}
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '24px' }}></i>
          </button>
        </div>
        {/* Desktop Menu - Visible on larger screens */}
        <ul className='hidden md:flex gap-10 m-7'>
          <Link to={'/'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Home</li></Link>
          <Link to={'/features'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Features</li></Link>
          <Link to={'/team'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Team</li></Link>
          <Link to={'/login'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Login</li></Link>
          <Link to={'/signup'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>SignUp</li></Link>
        </ul>
      </header>

      {/* Mobile Menu - Styled with awesome effects */}
      <ul
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden absolute z-40 w-full text-center opacity-90 h-full bg-[#842A2A]/70 text-white flex flex-col gap-5 p-5 border-t-2 border-[#6b2020] shadow-lg transform transition-transform duration-500 ease-in-out`}
      >
        <Link to={'/'}>
          <li className='bg-[#6b2020] hover:text-white transition duration-300 ease-in-out p-3 rounded-lg opacity-100' onClick={() => setIsOpen(false)}>
            Home
          </li>
        </Link>
        <Link to={'/features'}>
          <li className='bg-[#6b2020] hover:text-white transition duration-300 ease-in-out p-3 rounded-lg opacity-100' onClick={() => setIsOpen(false)}>
            Features
          </li>
        </Link>
        <Link to={'/team'}>
          <li className='bg-[#6b2020] hover:text-white transition duration-300 ease-in-out p-3 rounded-lg opacity-100' onClick={() => setIsOpen(false)}>
            Team
          </li>
        </Link>
        <Link to={'/login'}>
          <li className='bg-[#6b2020] hover:text-white transition duration-300 ease-in-out p-3 rounded-lg opacity-100' onClick={() => setIsOpen(false)}>
            Login
          </li>
        </Link>
        <Link to={'/signup'}>
          <li className='bg-[#6b2020] hover:text-white transition duration-300 ease-in-out p-3 rounded-lg opacity-100' onClick={() => setIsOpen(false)}>
            SignUp
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
