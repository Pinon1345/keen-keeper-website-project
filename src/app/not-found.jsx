"use client";
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>

            <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-30 -left-30 w-75 h-75 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-30 -right-30 w-75 h-75 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

                <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-4xl p-10 text-center relative z-10 mt-6 mb-6">

                    {/* 404 Number */}
                    <h1 className="text-[120px] md:text-[150px] font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 leading-none">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed max-w-lg mx-auto">
                        Sorry, the page you are looking for does not exist or has been moved.
                        Please check the URL or return to the homepage.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                        <Link
                            href="/"
                            className="px-7 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition-all duration-300 shadow-lg hover:scale-105"
                        >
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-7 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            Go Back
                        </button>
                    </div>

                    {/* Bottom Text */}
                    <p className="text-sm text-gray-400 mt-10">
                        Error Code: 404 • Resource Not Found
                    </p>
                </div>
            </div>

        </div>
    );
};

export default NotFoundPage;