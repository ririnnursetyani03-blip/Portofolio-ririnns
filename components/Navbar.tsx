
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Tentang', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-indigo-50 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Portofolio</div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-indigo-600 transition-colors font-semibold text-sm tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#footer"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-indigo-200 text-white"
        >
          Hubungi Saya
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
