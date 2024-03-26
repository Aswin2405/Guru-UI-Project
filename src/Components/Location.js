import React from 'react'
import "./Location.css";

function Location() {
  return (
    <div className='location-container'>
        <h3>Our Location</h3>
        <h1>Connecting Near and Far</h1>
        <p>HeadQuarters</p>
        <span style={{fontSize:"18px",color:"#777"}}>
            123 <br />
            Tiruchirappalli, TamilNadu <br />
            India
        </span>
    </div>
  )
}

export default Location