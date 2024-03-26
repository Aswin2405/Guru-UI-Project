import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710907200&semt=sph' alt="logo" className="logo" />
      </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#services" className="nav-item">Services</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
    </header>
  );
};

export default Header;
