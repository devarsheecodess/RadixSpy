import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created successfully!");
        navigate("/home");
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Home Icon Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute z-40 top-4 left-4 w-10 p-2 bg-[#3c0c0c] rounded-full hover:bg-[#842A2A] focus:outline-none cursor-pointer"
                title="Home"
            >
                <i className="fas fa-home text-white"></i>
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-[#421a1a] to-[#222024] opacity-50"></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[#3c0c0c] fade-in-up">
                    RadixSpy
                </a>
                <div className="slide-in-text w-full bg-[#333333] rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Your username</label>
                                <input
                                    type="username"
                                    onChange={(e) => setusername(e.target.value)}
                                    name="username"
                                    id="username"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-[#842A2A] focus:border-[#842A2A] block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-[#842A2A] focus:border-[#842A2A] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                <input
                                    type="password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-[#842A2A] focus:border-[#842A2A] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-[#842A2A]"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-400">I accept the <a className="font-medium text-[#842A2A] hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#842A2A] hover:bg-[#481b1b] focus:ring-4 focus:outline-none focus:ring-[#842A2A] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-[#842A2A] hover:underline">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
