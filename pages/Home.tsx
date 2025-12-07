
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Welcome to Our SPA
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            This is a modern Single Page Application built with React, TypeScript, and Tailwind CSS. Explore our pages using the navigation above.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/about" 
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img 
            src="https://picsum.photos/600/400?random=1" 
            alt="Abstract" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
