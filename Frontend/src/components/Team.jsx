import React from 'react';
import '../App.css';
import Devarshee from '../../public/images/devarshee.png';
import Vignesh from '../../public/images/vignesh.png';
import Saiesh from '../../public/images/saiesh.png';

const Team = () => {
    const teamMembers = [
        {
            name: "Devarshee Gaunekar",
            role: "MERN Stack Developer",
            image: Devarshee,
            social: [
                { icon: "linkedin", url: "https://www.linkedin.com/in/devarshee-gaunekar-a06441257/" },
                { icon: "instagram", url: "https://instagram.com/devarsheegaunekar" },
                { icon: "github", url: "https://github.com/devarsheecodess" }
            ],
            exp: 4
        },
        {
            name: "Vignesh Gaunker",
            role: "AI-ML Developer",
            image: Vignesh,
            social: [
                { icon: "linkedin", url: "https://www.linkedin.com/in/vignesh-gaunker-ab3b15256/" },
                { icon: "instagram", url: "https://instagram.com/aka_v.g" },
                { icon: "github", url: "https://github.com/Devigget" }
            ],
            exp: 4
        },
        {
            name: "Saiesh Priolkar",
            role: "Frontend Developer",
            image: Saiesh,
            social: [
                { icon: "linkedin", url: "https://www.linkedin.com/in/saiesh-priolkar-8039b3267/" },
                { icon: "instagram", url: "https://instagram.com/saieshpriolkar" },
                { icon: "github", url: "https://github.com/SaieshPriolkar" }
            ],
            exp: 4
        }
    ];

    const getSocialIcon = (platform) => {
        switch (platform) {
            case 'linkedin':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                );
            case 'github':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background - Light Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"></div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid opacity-5"></div>

            <main className="relative flex flex-col items-center min-h-screen pb-20 px-4">
                {/* Title */}
                <div className="text-center z-10 mt-24 mb-16">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl fade-in-up text-red-800">Meet Our Team</h1>
                    <p className="text-red-700 mt-4 max-w-xl mx-auto">The brilliant minds behind Radix Spy working to make the digital world safer.</p>
                </div>

                {/* Team Cards */}
                <div className="relative z-20 flex flex-wrap justify-center gap-10 slide-in-text">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative w-80 h-96 perspective-1000"
                        >
                            {/* Card Flip Container */}
                            <div className="relative w-full h-full preserve-3d transition-all duration-700 card-flip">
                                {/* Front Face */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl bg-white shadow-lg flex flex-col items-center p-8 transform-style-3d border border-gray-100">
                                    <div className="relative w-44 h-44 mb-6 glow-effect">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-300 to-red-500 blur-md opacity-40 animate-pulse-slow"></div>
                                        <img
                                            src={member.image}
                                            className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-lg z-10"
                                            alt={member.name}
                                        />
                                    </div>
                                    <h2 className="font-bold text-center text-2xl text-gray-800">{member.name}</h2>
                                    <p className="text-center text-gray-600 font-medium">{member.role}</p>

                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-5 opacity-90">
                                        {member.social.map((platform, idx) => (
                                            <a
                                                key={idx}
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`transform transition-all duration-300 
                                                    ${platform.icon === 'linkedin' ? 'text-blue-600 hover:text-blue-800' :
                                                        platform.icon === 'instagram' ? 'text-pink-600 hover:text-pink-800' :
                                                            'text-gray-800 hover:text-black'} 
                                                    hover:scale-125`}
                                            >
                                                {getSocialIcon(platform.icon)}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Back Face - Light Theme */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg p-8 flex flex-col items-center justify-center transform-style-3d rotate-y-180 text-white">
                                    <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                                    <p className="text-center text-white mb-6">
                                        Passionate {member.role} with expertise in building secure and scalable applications.
                                    </p>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm">Experience</span>
                                            <div className="w-full bg-red-700/50 rounded-full h-2 mt-1">
                                                <div className="bg-white h-2 rounded-full" style={{ width: `${70 + member.exp * 5}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm">Creativity</span>
                                            <div className="w-full bg-red-700/50 rounded-full h-2 mt-1">
                                                <div className="bg-white h-2 rounded-full" style={{ width: `${80 + member.exp * 3}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm">Collaboration</span>
                                            <div className="w-full bg-red-700/50 rounded-full h-2 mt-1">
                                                <div className="bg-white h-2 rounded-full" style={{ width: `${90 - member.exp * 2}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Team;