import React from 'react'
import '../App.css'

const Features = () => {
    return (
        <div>
            <main className='flex items-center justify-center mt-10 flex-col ml-20 mr-20 text-wrap'>
                <h1 className='font-bold text-3xl fade-in-up mb-5 underline'>RadixSpy</h1>
                <p className='text-lg slide-in-text'>
                    Radix Spy is a cutting-edge AI-powered tool developed to monitor and detect radical and extremist content on popular social media platforms such as Instagram, Facebook, and X (Twitter). It leverages advanced natural language processing (NLP) techniques and machine learning algorithms to perform real-time analysis of videos and user activity, enabling authorities to take timely action. The tool continuously scans and monitors profiles, analyzing posts for harmful content. Additionally, it detects video deepfakes, which are often used to spread false or misleading narratives. With robust features such as web scraping, API integration, and a comprehensive admin dashboard, Radix Spy empowers authorities to efficiently combat the spread of radical content online.
                </p>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-20 underline fade-in-up">Features</h1>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-4 md:w-1/3 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                                    <i className="fa-solid fa-hashtag"></i>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Analyse Posts</h2>
                                    <p className="leading-relaxed text-base">This feature of Radix Spy is designed to provide real-time insights into social media content, helping authorities detect and analyze harmful, radical, or extremist narratives across platforms like Instagram, Facebook, X (Twitter), and YouTube. This powerful feature scans posts, videos, and other user-generated content for keywords, phrases, and patterns that may indicate radicalization or violations of community guidelines</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                                    <i class="fa-solid fa-video"></i>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Analyse videos</h2>
                                    <p className="leading-relaxed text-base">This feature scans videos linked to specific user profiles or from individual video URLs.
                                    In addition to detecting radical content, It is equipped with advanced deepfake detection technology. As AI-generated deepfake videos become more widespread, they are often used to spread false or misleading information. This feature ensures that these manipulated videos are identified quickly, allowing authorities to take action against misinformation and the exploitation of deepfakes.</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                                    <i class="fa-solid fa-users"></i>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Spy Accounts</h2>
                                    <p className="leading-relaxed text-base">Once an account is flagged for monitoring, #TraceAccounts keeps a close watch on the user's posts, videos, and interactions. Using Natural Language Processing (NLP) and machine learning algorithms, the feature scans for suspicious keywords, phrases, and patterns that may indicate radicalization. When such content is posted, #TraceAccounts generates immediate alerts to notify authorities, enabling quick intervention before the content can spread widely.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Features
