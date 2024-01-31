import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-social">
          <a href="#/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='moravo'>Himnos Miskitos de la Iglesia Morava de Nicaragua</p>
        <p>Desarrollado por &copy; <span> <Link className='link' to="https://appshammer.com">Apps Hammer</Link> </span>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
