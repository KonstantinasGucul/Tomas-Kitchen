'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-1" aria-label="Home">
          <span className="text-lg font-semibold text-amber-400 drop-shadow-md">
            Tomas
          </span>
          <span className="text-lg font-semibold text-white drop-shadow-md">
            Food Wagon
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-sm font-light tracking-wide">
          {['Home', 'Menu', 'About', 'Contact'].map((text) => (
            <a
              key={text}
              href={`/${text === 'Home' ? '' : text.toLowerCase()}`}
              className="text-white/80 hover:text-amber-300 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Desktop Order Button */}
        <div className="hidden md:flex">
          <button
            aria-label="Order now"
            className="px-5 py-2 text-sm font-medium bg-amber-700 hover:bg-amber-800 text-white rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer"
          >
            Order
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-amber-300 transition-all duration-300 ease-in-out cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 px-6 pb-4 pt-2 space-y-2 text-sm transition-all duration-300 ease-in-out">
          {['Home', 'Menu', 'About', 'Contact'].map((text) => (
            <a
              key={text}
              href={`/${text === 'Home' ? '' : text.toLowerCase()}`}
              className="block text-white/80 hover:text-amber-300 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </a>
          ))}
          <button
            aria-label="Order now"
            className="w-full mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer"
          >
            Order
          </button>
        </div>
      )}
    </header>
  );
}
