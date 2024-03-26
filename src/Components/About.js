import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const [animateImage, setAnimateImage] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setAnimateImage(true);
    }
  }, [inView]);

  return (
    <div className="about-container" ref={ref}>
      <div className="about-content">
        <div className="text-container">
          <span>WE ARE FOCUSED ON ONE THING - YOUR LONG-TERM SUCCESS</span>
          <h2>We are committed to our customer's success from start to finish. Our input helps make their solutions</h2>
          <p>We offer affordable services to reach your targeted spectators and carve out your valuable information focusing on retaining your business customers. Our service includes Web application development, Website designing, Corporate profiles and presentations, E-commerce solutions, Application development, maintenance, and re-engineering, digital solutions, Search Engine Optimization, and graphics design.</p>
        </div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: animateImage ? 1 : 0, x: animateImage ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <img src="https://assets-global.website-files.com/6209ea9aee1f965d7fce7c19/63a030846e97eecf766e1948_Clappia%20-%20No-Code%20Platform%20-%20No-Code%20Low-Code%20changing%20the%20way%20we%20do%20business%20-%20Thumbnail.png" alt='about' />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
