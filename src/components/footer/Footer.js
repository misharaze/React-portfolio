
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
//import twitter from "./../../img/icons/twitter.svg";
import Linkedin  from "./../../img/icons/Linkedin.png";
//import Github from "./../../img/icons/Github.png";

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Web-dev</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Page principal</a></li>
            <li><a href="/projects">Мes projets</a></li>
            <li><a href="/skills">Compétences </a></li>
            <li><a href="/price">Prix</a></li>
            <li><a href="/contacts">Contact</a></li>
            <li><a href="/Faq">Faq</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://github.com/misharaze" target="_blank" rel="noopener noreferrer">GitHub
 


          </a>
          
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn
          <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/devellopeurwebmobile" target="_blank" rel="noopener noreferrer">Instagram
          <img src={instagram} alt="" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 tout droit réserver. Fait avec passions .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

