import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "glitchbusters" || password === "123456") {
            alert("Logged in Successfully!");
            navigate("/home");
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="relative h-screen overflow-hidden">
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
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Your username</label>
                                <input
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    name="username"
                                    id="username"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-[#842A2A] focus:border-[#842A2A] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <div className="relative"> {/* Added relative positioning to the parent div */}
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        id="password"
                                        className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-[#842A2A] focus:border-[#842A2A] block w-full p-2.5"
                                        required
                                    />
                                    <button
                                        type="button" // Change to button type
                                        onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                                        className="absolute outline-none right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white" // Positioned and styled button
                                        title={showPassword ? "Hide password" : "Show password"} // Accessibility
                                    >
                                        {showPassword ? (
                                            <i className="fa-regular fa-eye-slash"></i>
                                        ) : (
                                            <i className="fa-regular fa-eye"></i>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-[#842A2A]"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-400">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-[#842A2A] hover:underline">Forgot password?</a>
                            </div>
                            <Link></Link>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full text-white bg-[#842A2A] hover:bg-[#481b1b] focus:ring-4 focus:outline-none focus:ring-[#842A2A] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Don’t have an account yet? <Link to={'/signup'}> <a href="#" className="font-medium text-[#842A2A] hover:underline">Sign up</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
