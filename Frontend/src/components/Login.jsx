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

    return (
        <div className="relative h-screen overflow-hidden bg-gray-50">
            <button
                onClick={() => navigate('/')}
                className="absolute z-40 top-4 left-4 w-10 p-2 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none cursor-pointer shadow-md"
                title="Home"
            >
                <i className="fas fa-home text-white"></i>
            </button>

            {/* Light background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-70"></div>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
                <a href="#" className="slide-in-text flex items-center mb-6 text-3xl font-bold text-red-700">
                    RadixSpy
                </a>
                <div className="w-full fade-in-up bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Your username</label>
                                <input
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition-all duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute outline-none right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        title={showPassword ? "Hide password" : "Show password"}
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
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 accent-red-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-600">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-red-700 hover:text-red-800 hover:underline transition-colors">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Sign in
                            </button>

                            <p className="text-sm font-light text-gray-600">
                                Don't have an account yet? <Link to='/signup'><span className="font-medium text-red-700 hover:text-red-800 hover:underline transition-colors">Sign up</span></Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Version tag */}
                <div className="mt-6 text-xs text-gray-500">
                    Version 1.0.0
                </div>
            </div>
        </div>
    );
}

export default Login;