
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', text: 'Services' },
    { href: '#process', text: 'Process' },
    { href: '#clients', text: 'Who We Help' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-800">Sloe Media</a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-cyan-600 transition">
              {link.text}
            </a>
          ))}
          <a href="#contact" className="bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-cyan-700 transition">
            Book a Call
          </a>
        </div>
        <button id="mobile-menu-button" className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="block py-2 text-slate-600 hover:text-cyan-600 transition" onClick={() => setIsMenuOpen(false)}>
            {link.text}
          </a>
        ))}
        <a href="#contact" className="block mt-2 bg-cyan-600 text-white text-center px-4 py-2 rounded-lg shadow-md hover:bg-cyan-700 transition" onClick={() => setIsMenuOpen(false)}>
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Header;
