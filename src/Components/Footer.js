import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
      <SocialIcon className='social-link' url="https://twitter.com" />
      <SocialIcon className='social-link' url="https://facebook.com" />
      <SocialIcon className='social-link' url="https://linkedin.com" />
      <SocialIcon className='social-link' url="https://instagram.com" />
      </div>
      <p className="copyright">&copy; 2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
