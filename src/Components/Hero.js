import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <div className="image-container">
        {/* https://gteches.com/wp-content/uploads/2023/05/mobile.gif */}
          <img src='https://assets-v2.lottiefiles.com/a/6dbd631c-1172-11ee-8f2d-8bc27150b603/c6S0HrMMPb.gif' alt="" />
        </div>
        <div className="text-container hero-text-container">
            <h1>Design <br/> Transform <br/> Accelerate</h1>
          <p>Mobile and Web App development solution for transforming and innovating businesses.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
