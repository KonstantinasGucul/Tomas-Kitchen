'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 120;

      const sections = document.querySelectorAll('section[id], main[id]');
      let current = '';

      sections.forEach((section) => {
        const top = section.offsetTop - buffer;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          current = id;
        }
      });

      setActiveSection(current || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, key) => {
    e.preventDefault();
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-1"
          aria-label="Home"
        >
          <span className="text-lg font-semibold text-amber-500 drop-shadow-md">
            Toma's
          </span>
          <span className="text-lg font-semibold text-white drop-shadow-md">
            Kitchen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-sm font-light tracking-wide">
          {['home', 'menu', 'about'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(e) => handleNavClick(e, key)}
              className={`${
                activeSection === key ? 'text-amber-500' : 'text-white/80'
              } hover:text-amber-700 transition-all duration-300 ease-in-out cursor-pointer capitalize`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>

        {/* Desktop Order Button */}
        <div className="hidden md:flex">
          <button
            onClick={onOpenOrder}
            aria-label="Order now"
            className="px-5 py-2 text-sm font-medium bg-amber-700 hover:bg-amber-500 text-white rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer"
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
          {['home', 'menu', 'about'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(e) => handleNavClick(e, key)}
              className={`block ${
                activeSection === key ? 'text-amber-400' : 'text-white/80'
              } hover:text-amber-300 transition-all duration-300 ease-in-out cursor-pointer capitalize`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}

          <button
            onClick={onOpenOrder}
            aria-label="Order now"
            className="w-full mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-400 text-white rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer"
          >
            Order
          </button>
        </div>
      )}
    </header>
  );
}
