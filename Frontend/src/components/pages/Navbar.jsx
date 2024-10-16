import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        const cf = confirm("Are you sure you want to logout?");
        if (cf) {
            navigate('/');
        }
    }

    return (
        <div>
            <header className='p-5 bg-[#842A2A] flex justify-between items-center text-white lg:hidden mb-10'>
                <h1 className='font-bold text-xl'>Radix Spy</h1>
                <div className='flex gap-5 items-center relative'>
                    <i className="fa-solid fa-right-from-bracket text-xl cursor-pointer" onClick={handleLogout}></i>
                    <Link to={'/alerts'}>
                        <i className="fa-solid fa-bell text-xl cursor-pointer"></i>
                    </Link>
                    <i className="fa-solid fa-bars text-xl cursor-pointer" onClick={handleMenu}></i>
                </div>
            </header>
            {isOpen && (
                <div className='absolute top-[68px] left-0 right-0 h-full text-center lg:hidden bg-[#842A2A]/60 p-5 flex flex-col items-center z-50'>
                    <ul className='flex flex-col gap-6 text-white text-lg w-full'>
                        <Link to={'/home'}>
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer bg-[#6b2020] p-3 rounded-lg'>Home</li>
                        </Link>
                        <Link to={'/post'}>
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer bg-[#6b2020] p-3 rounded-lg'>Post</li>
                        </Link>
                        <Link to={'/video'}>
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer bg-[#6b2020] p-3 rounded-lg'>Video</li>
                        </Link>
                        <Link to={'/trace-accounts'}>
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer bg-[#6b2020] p-3 rounded-lg'>Track Accounts</li>
                        </Link>
                        <Link to={'/history'}>
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer bg-[#6b2020] p-3 rounded-lg'>History</li>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
