import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#00FF7F" strokeWidth="2" fill="none"/>
                <path d="M8 12h8" stroke="#00FF7F" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8v8" stroke="#00FF7F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-do">DO</span>
              <span className="logo-deal">DEAL</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link active">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#cases" className="nav-link">Cases</a></li>
              <li><a href="#latest" className="nav-link">Latest</a></li>
              <li><a href="#connect" className="nav-link">Connect us</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <a href="#contact" className="btn-primary">Get In Touch</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
