import React, { useState } from 'react';
import { Menu, X, Search, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 text-white p-2 rounded-lg">
              <BookOpen size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">
                Fatwa<span className="text-emerald-600">Bayaan</span>
              </h1>
              <p className="text-xs text-gray-600">Islamic Guidance Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-emerald-700 hover:text-emerald-600">
              Home
            </a>
            <a href="#about" className="font-medium text-gray-700 hover:text-emerald-600">
              About
            </a>
            <a href="#fatwas" className="font-medium text-gray-700 hover:text-emerald-600">
              Fatwas
            </a>
            <a href="#ask" className="font-medium text-gray-700 hover:text-emerald-600">
              Ask a Question
            </a>
            <a href="#scholars" className="font-medium text-gray-700 hover:text-emerald-600">
              Scholars
            </a>

            <div className="relative">
              <input
                type="text"
                placeholder="Search fatwas..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-medium text-emerald-700">
                Home
              </a>
              <a href="#about" className="font-medium text-gray-700">
                About
              </a>
              <a href="#fatwas" className="font-medium text-gray-700">
                Fatwas
              </a>
              <a href="#ask" className="font-medium text-gray-700">
                Ask a Question
              </a>
              <a href="#scholars" className="font-medium text-gray-700">
                Scholars
              </a>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search fatwas..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>

              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;