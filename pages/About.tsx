
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        About This Application
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        This project demonstrates a simple but robust Single Page Application (SPA). It showcases seamless navigation without page reloads, a key feature of modern web apps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">React & TypeScript</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Built with React 18 for a component-based architecture and TypeScript for robust type-safety.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">React Router</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Utilizes `HashRouter` for client-side routing, enabling navigation between pages without full reloads.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">State Management</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Employs React's Context API to manage and share global state across different components.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Styled with the utility-first framework Tailwind CSS for a clean, modern, and responsive design.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smooth Transitions</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Designed for a smooth user experience with fast navigation and subtle animations.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsive Design</h3>
          <p className="text-gray-600 dark:text-gray-400">
            The application is fully responsive and provides an optimal viewing experience on all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
