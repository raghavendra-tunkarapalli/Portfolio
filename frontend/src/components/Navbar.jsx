import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <NavLink to="/" className="navbar-brand-link" onClick={closeMenu}>
        <h2 className="navbar-title">Tunkarapalli Raghavendra</h2>
      </NavLink>
      <div 
        className="hamburger" 
        id="hamburger" 
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation"
      >
        &#9776;
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="nav-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
