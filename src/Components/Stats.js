import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <p>20k+<br /><span>Happy Customers</span></p>
      </div>
      <div className="stat">
        <p>5k+<br /><span>Five Star Review</span></p>
      </div>
      <div className="stat">
        <p>100+<br /><span>Award Winner</span></p>
      </div>
      <div className="stat">
        <p>50+<br /><span>Country Using Our Service</span></p>
      </div>
    </div>
  );
}

export default Stats;
