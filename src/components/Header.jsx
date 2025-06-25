import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand custom-brand" href="#home">ROHIT</a>
        {/* Animated Hamburger Button */}
        <button 
          className={`navbar-toggler ${menuOpen ? "open" : ""}`} 
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto custom-nav-links">
            {["Home", "About", "Qualification", "Skills", "Projects", "Contact"].map((item, index) => (
              <li className="nav-item" key={item} style={{ animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s both` }}>
                <a className="nav-link custom-link" href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
