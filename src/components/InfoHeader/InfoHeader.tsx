
import React from "react";
import './InfoHeader.scss';

//import Instagram from '../../img/icons/instagram.png';
//import Linkedin from '../../img/icons/Linkedin.png';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoHeader = () => {

return (

<div className="info-bar">
  <div className="container info-bar__content">
    <div className="info-bar__left">
      <span>Tél: +33 6 64 96 16 79</span>
      <span>Email: misha0202-15@hotmail.com</span>
      <span>Paris, France</span>
    </div>
    <div className="info-bar__right">
      <a href="https://github.com/votreprofil" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://instagram.com/votreprofil" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
</div>





)



}

export default InfoHeader;