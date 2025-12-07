
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { AppContextProvider } from './context/AppContext';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
              <p>&copy; 2025 React SPA. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </HashRouter>
    </AppContextProvider>
  );
};

export default App;
