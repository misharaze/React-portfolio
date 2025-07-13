import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Web-Dev</div>

      {/* Бургер иконка */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Десктоп-меню */}
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink to="/" className="nav-list__link" onClick={closeMenu}>Menu principal</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/projects" className="nav-list__link" onClick={closeMenu}>Mes projets</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/Skills" className="nav-list__link" onClick={closeMenu}>Mes compétences</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/price" className="nav-list__link" onClick={closeMenu}>Prix</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/faq" className="nav-list__link" onClick={closeMenu}>Faq</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/contact" className="nav-list__link" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__close" onClick={closeMenu}>&times;</div>
          <ul className="mobile-menu__list">
            <li><NavLink to="/" className="mobile-menu__link" onClick={closeMenu}>Menu principal</NavLink></li>
            <li><NavLink to="/projects" className="mobile-menu__link" onClick={closeMenu}>Mes projets</NavLink></li>
            <li><NavLink to="/Skills" className="mobile-menu__link" onClick={closeMenu}>Mes compétences</NavLink></li>
            <li><NavLink to="/price" className="mobile-menu__link" onClick={closeMenu}>Prix</NavLink></li>
            <li><NavLink to="/faq" className="mobile-menu__link" onClick={closeMenu}>Faq</NavLink></li>
            <li><NavLink to="/contact" className="mobile-menu__link" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;