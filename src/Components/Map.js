import React from 'react'
import "./Map.css";

function Map() {
  return (
    <div className="google-map-code">
    <iframe
    title='Google Maps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.658401184495!2d78.7047!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baabf8946c8af9b%3A0xf5d0ebf013cfc497!2sTrichy!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
    />
</div>
  )
}

export default Map