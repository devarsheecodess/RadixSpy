import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Control = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const cf = confirm('Are you sure you want to logout?');
        if (cf) {
            navigate('/');
            alert('Logged out successfully!');
        }
    }

    return (
        <div>
            <section className='bg-[#842A2A] p-7 flex items-center flex-col min-h-screen'>
                <div className='flex justify-between items-center w-full mb-12'>
                    <h1 className='font-bold text-3xl text-white'>Radix Spy</h1>
                    <Link to={'/alerts'}><li className='text-white bg-transparent list-none border-none cursor-pointer text-2xl hover:text-gray-400'><i class="fa-solid fa-bell"></i></li></Link>
                </div>
                <menu>
                    <ul className='flex justify-center items-center flex-col gap-6'>
                        <Link to={'/home'}>
                            <li className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>Home</li>
                        </Link>
                        <Link to={'/post'}>
                            <li className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>Post</li>
                        </Link>
                        <Link to={'/video'}>
                            <li className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>Video</li>
                        </Link>
                        <Link to={'/trace-accounts'}>
                            <li className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>Trace Accounts</li>
                        </Link>
                        <Link to={'/history'}>
                            <li className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>History</li>
                        </Link>
                        <li onClick={handleLogout} className='p-5 text-white w-52 flex justify-center items-center cursor-pointer bg-[#6b2020] rounded-lg shadow-lg hover:bg-[#591a1a] transition-all duration-200'>Logout</li>
                    </ul>
                </menu>
            </section>
        </div>
    )
}

export default Control;
