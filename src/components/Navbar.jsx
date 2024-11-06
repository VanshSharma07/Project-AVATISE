import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsAnimating(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-purple-500 rounded-tl-2xl rounded-br-2xl relative">
              <div className="absolute top-1 left-1 w-4 h-4 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <a href="#dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              Influencer-creation
              {isDropdownOpen ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-100 transition-colors">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link
            to="/"
            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
          >
            Login
          </Link>
          <a
            href="#dashboard"
            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
          >
            Dashboard
          </a>
          <button
            onClick={toggleDropdown}
            className="w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md flex items-center justify-between"
          >
            Influencer-creation
            {isDropdownOpen ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>
          
          {/* Mobile Buttons */}
          <div className="space-y-2 pt-3">
            <Link to="/login">
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full text-orange-500 border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-100 transition-colors">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown Content */}
      {(isDropdownOpen || isAnimating) && (
        <div
          className={`transform transition-all duration-300 ease-in-out origin-top ${
            isDropdownOpen ? 'dropdown-enter' : 'dropdown-exit'
          }`}
        >
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Home</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Explore the AI-Powered Virtual Influencer and Brand Ads Generator app.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Login/Signup</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Sign up or log in to access the app features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Dashboard</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    View an overview of influencers and campaigns in the dashboard.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Influencer Creation
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Create virtual influencers with ease using our form and real-time preview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;