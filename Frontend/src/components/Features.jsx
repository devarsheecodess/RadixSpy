import React from 'react';
import '../App.css';

const Features = () => {
    return (
        <div className="min-h-screen relative">
            {/* Background - Light Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"></div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid opacity-5"></div>

            <main className='relative flex items-center justify-center flex-col mx-6 md:mx-20 text-wrap z-10 py-10'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl fade-in-up text-center mb-8 text-red-800 mt-10'>
                    RadixSpy
                </h1>

                <p className='text-lg slide-in-text text-gray-700 max-w-4xl mx-auto'>
                    Radix Spy is a cutting-edge AI-powered tool developed to monitor and detect radical and extremist content on popular social media platforms such as Instagram, Facebook, and X (Twitter). It leverages advanced natural language processing (NLP) techniques and machine learning algorithms to perform real-time analysis of videos and user activity, enabling authorities to take timely action. The tool continuously scans and monitors profiles, analyzing posts for harmful content. Additionally, it detects video deepfakes, which are often used to spread false or misleading narratives. With robust features such as web scraping, API integration, and a comprehensive admin dashboard, Radix Spy empowers authorities to efficiently combat the spread of radical content online.
                </p>

                <section className="text-gray-700 body-font z-10 w-full">
                    <div className="container px-5 py-16 mx-auto">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-red-800 mb-16 relative inline-block mx-auto">
                            Features
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
                        </h1>

                        <div className="flex flex-wrap -mx-4">
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-t-4 border-red-500">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                                        <i className="fa-solid fa-hashtag text-xl"></i>
                                    </div>
                                    <h2 className="text-red-800 text-xl font-semibold mb-3">Analyse Posts</h2>
                                    <p className="leading-relaxed text-gray-600">
                                        This feature of Radix Spy is designed to provide real-time insights into social media content, helping authorities detect and analyze harmful, radical, or extremist narratives across platforms like Instagram, Facebook, X (Twitter), and YouTube. This powerful feature scans posts, videos, and other user-generated content for keywords, phrases, and patterns that may indicate radicalization or violations of community guidelines.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3 w-full">
                                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-t-4 border-red-500">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                                        <i className="fa-solid fa-video text-xl"></i>
                                    </div>
                                    <h2 className="text-red-800 text-xl font-semibold mb-3">Analyse Videos</h2>
                                    <p className="leading-relaxed text-gray-600">
                                        This feature scans videos linked to specific user profiles or from individual video URLs. In addition to detecting radical content, It is equipped with advanced deepfake detection technology to identify manipulated or synthetic media that could be used to spread misinformation or harmful ideologies.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3 w-full">
                                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-t-4 border-red-500">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                                        <i className="fa-solid fa-users text-xl"></i>
                                    </div>
                                    <h2 className="text-red-800 text-xl font-semibold mb-3">Spy Accounts</h2>
                                    <p className="leading-relaxed text-gray-600">
                                        Once an account is flagged for monitoring, this feature keeps a close watch on the user's posts, interactions, and network connections. It provides comprehensive surveillance capabilities while respecting privacy laws and regulations applicable in the jurisdiction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Features;