import React, { useState, useEffect } from 'react';
import './NavBar.css';

const BoatIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z" />
    <path d="M21 14l-3-9H6l-3 9" />
    <path d="M12 2v3" />
    <path d="M8 2v3" />
    <path d="M16 2v3" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Houseboats', href: '#houseboats' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <div className="logo-icon">
              <BoatIcon />
            </div>
            <span className="logo-text">Aqua<span>Haven</span></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn-book">
            Book Now
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.name} style={{ transitionDelay: `${index * 0.1}s` }}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link" 
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ transitionDelay: `${navLinks.length * 0.1}s` }}>
              <a href="#contact" className="mobile-btn-book" onClick={toggleMenu}>
                Book a Houseboat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;