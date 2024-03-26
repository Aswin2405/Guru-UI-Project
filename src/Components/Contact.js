import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import Map from "./Map"
import Location from './Location';
function Contact() {
  return (
    <>
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <span>We're happy to help you. Email, call or complete the form to solve your problem.</span>
        <p>1234567890</p>
        <p>info@support.com</p>
        <p style={{textDecoration:"underline",cursor:"pointer"}}>Customer Support</p>
        <h1>Customer Support</h1>
        <span>Our support team is available around the clock to address any concerns or queries you may have
        </span>
        <h1>Feedbacks and Suggestions</h1>
        <span>We value your feedback and suggestions and are continuously working to improve. Your input is crucial in shaping the future of our company</span>
      </div>
      <ContactForm />
    </div>
    <div className="map-container">
      <Map />
      <Location />
      </div>
      </>
  );
}

export default Contact;
