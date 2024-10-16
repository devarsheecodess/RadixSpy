import React from 'react';
import '../App.css';
import Devarshee from '../../public/images/devarshee.png';
import Vignesh from '../../public/images/vignesh.png';
import Saiesh from '../../public/images/saiesh.png';

const Team = () => {
    return (
        <div className="min-h-screen relative">
            <main className="relative flex flex-col items-center min-h-screen pb-10">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#421a1a] to-[#222024] opacity-80"></div>
                
                {/* Title */}
                <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl fade-in-up text-center z-10 mt-16 text-white tracking-wide">Meet Our Team</h1>

                {/* Team Cards */}
                <div className="relative z-20 mt-12 flex flex-wrap justify-center gap-8 slide-in-text">
                    {/* Card 1 */}
                    <div className="h-96 w-72 rounded-xl bg-white shadow-xl flex flex-col items-center p-6 transform hover:scale-105 transition-transform duration-300 ease-out">
                        <img src={Devarshee} className="rounded-full h-48 w-48 object-cover shadow-md" alt="Devarshee Gaunekar" />
                        <h1 className="font-bold text-center mt-6 text-xl">Devarshee Gaunekar</h1>
                        <p className="text-center text-gray-600">MERNstack Developer</p>
                        <div className='flex gap-4 mt-5'>
                            <a href="https://www.linkedin.com/in/devarshee-gaunekar-a06441257/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://instagram.com/devarsheegaunekar" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram text-2xl text-pink-500 hover:text-pink-700 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://github.com/devarsheecodess" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github text-2xl text-gray-800 hover:text-black transition-colors duration-200 ease-in-out"></i>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="h-96 w-72 rounded-xl bg-white shadow-xl flex flex-col items-center p-6 transform hover:scale-105 transition-transform duration-300 ease-out">
                        <img src={Vignesh} className="rounded-full h-48 w-48 object-cover shadow-md" alt="Vignesh Gaunker" />
                        <h1 className="font-bold text-center mt-6 text-xl">Vignesh Gaunker</h1>
                        <p className="text-center text-gray-600">AI-ML Developer</p>
                        <div className='flex gap-4 mt-5'>
                            <a href="https://www.linkedin.com/in/vignesh-gaunker-ab3b15256/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://instagram.com/aka_v.g" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram text-2xl text-pink-500 hover:text-pink-700 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://github.com/Devigget" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github text-2xl text-gray-800 hover:text-black transition-colors duration-200 ease-in-out"></i>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="h-96 w-72 rounded-xl bg-white shadow-xl flex flex-col items-center p-6 transform hover:scale-105 transition-transform duration-300 ease-out">
                        <img src={Saiesh} className="rounded-full h-48 w-48 object-cover shadow-md" alt="Saiesh Priolkar" />
                        <h1 className="font-bold text-center mt-6 text-xl">Saiesh Priolkar</h1>
                        <p className="text-center text-gray-600">Frontend Developer</p>
                        <div className='flex gap-4 mt-5'>
                            <a href="https://www.linkedin.com/in/saiesh-priolkar-8039b3267/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://instagram.com/saieshpriolkar" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram text-2xl text-pink-500 hover:text-pink-700 transition-colors duration-200 ease-in-out"></i>
                            </a>
                            <a href="https://github.com/SaieshPriolkar" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github text-2xl text-gray-800 hover:text-black transition-colors duration-200 ease-in-out"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Team;
