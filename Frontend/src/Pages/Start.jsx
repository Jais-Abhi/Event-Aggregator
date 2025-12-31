import React, { useState } from "react";
import { Link } from "react-router-dom";


const Start = () => {
  return (
    <div className="flex flex-col h-[80vh]">
      <main className="flex-grow flex">
        <div className="w-full flex">
            <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex flex-col justify-center items-center px-16 py-12">
              <div className="w-full max-w-md">
                <h1 className="text-5xl font-bold mb-6">Event Aggregator</h1>
                <p className="mb-10 text-lg leading-relaxed">Discover and organize college events in one place. Join as a student or register your institution to host events.</p>
                <div className="space-y-4">
                  <Link
                    to="/student/registration"
                    className="block w-full text-center bg-white text-indigo-600 py-4 px-6 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition duration-200 shadow-lg"
                  >
                    Register as Student
                  </Link>
                  <Link
                    to="/college/registration"
                    className="block w-full text-center bg-transparent border-2 border-white text-white py-4 px-6 rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition duration-200"
                  >
                    Organize Your Event — College/University
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/2 bg-white flex flex-col justify-center items-center px-16 py-12">
              <div className="w-full max-w-md">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Login</h2>
                <p className="text-lg text-gray-600 mb-10">Already registered? Choose a login option below.</p>
                <div className="space-y-4">
                  <Link
                    to="/student/login"
                    className="block w-full text-center bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition duration-200 shadow-lg"
                  >
                    Login as Student
                  </Link>
                  <Link
                    to="/college/login"
                    className="block w-full text-center bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-black transform hover:scale-105 transition duration-200 shadow-lg"
                  >
                    Login as College/University
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Start;