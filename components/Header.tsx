
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const { appName } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "bg-gray-900 dark:bg-gray-700 text-white";
  const inactiveLinkClasses = "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white";
  
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              {appName}
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
              <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
