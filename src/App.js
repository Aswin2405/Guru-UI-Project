import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const offsetPosition = targetElement.offsetTop - headerHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div>
     <div id="home" className="section">
     <Header />
     <Hero />
      </div>
     <div id="about" className="section">
        <About />
      </div>
      <div id="services" className="section">
        <Services />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
