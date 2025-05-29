import React, { useState, useEffect } from 'react';
import { NavLink } from '../types.js';
import { MenuIcon } from './icons/MenuIcon.js';
import { CloseIcon } from './icons/CloseIcon.js';
import { USER_PROFILE } from '../constants.js';

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      let currentSection = '#home';
      // Prioritize #home if at the very top
      if (scrollPosition < 50) {
        currentSection = '#home';
      } else {
        navLinks.forEach(link => {
          const section = document.querySelector(link.href) as HTMLElement;
          if (section) {
            // Check if section is in viewport, consider header height
            const sectionTop = section.offsetTop - 80; // Adjusted for header height (approx 80px or 5rem)
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentSection = link.href;
            }
          }
        });
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveLink(href);
  };
  
  const headerBgClass = isScrolled || isOpen ? 'bg-slate-800 shadow-lg' : 'bg-transparent';
  const baseTextColor = 'text-slate-200 hover:text-sky-400';
  const heroTextColor = 'text-slate-100 hover:text-white';
  const textColorClass = isScrolled || isOpen ? baseTextColor : `${heroTextColor} md:${baseTextColor}`;
  
  const logoColorClass = isScrolled || isOpen ? 'text-sky-400' : 'text-white md:text-sky-400';
  const logoBaseNameColorClass = isScrolled || isOpen ? 'text-slate-100' : 'text-white md:text-slate-100';


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBgClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={() => handleLinkClick('#home')} className={`text-2xl font-bold transition-colors duration-300 group`}>
              <span className={logoBaseNameColorClass}>{USER_PROFILE.name.split(' ')[0]}</span>
              <span className={logoColorClass}>.</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textColorClass} ${
                  activeLink === link.href 
                    ? (isScrolled || isOpen ? 'text-sky-400 underline underline-offset-4 decoration-sky-400/70' 
                                          : 'text-white underline underline-offset-4 decoration-white/70 md:text-sky-400 md:decoration-sky-400/70') 
                    : ''
                }`}
                aria-current={activeLink === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors duration-200 ${
                 isScrolled || isOpen ? 'text-slate-200 hover:text-sky-400' : 'text-slate-100 hover:text-white'
              }`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg border-t border-slate-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)} 
                className={`block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-700 hover:text-sky-400 transition-colors duration-200 ${
                  activeLink === link.href ? 'bg-slate-700 text-sky-400' : ''
                }`}
                aria-current={activeLink === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;