import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_item">
      <a href="https://github.com/sonpalparmar">
      <li>
        <FaGithub size={20}/> {/* GitHub icon */}
      </li>
      </a>

      <a href="https://www.linkedin.com/in/sonpalparmar/">
      <li>
        <FaLinkedin size={20}/> {/* LinkedIn icon */}       
      </li>
      </a>

      <a href="https://www.hackerrank.com/12217639_sonpal">
      <li>
        <FaHackerrank size={20}/> {/* HackerRank icon */}
      </li>
      </a>
      <div> | Developed by ❤️ Sonpal Parmar</div>
      </div>
    </div>
  );
};

export default Footer;
