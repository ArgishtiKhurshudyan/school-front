import React from 'react';
import './contact.scss'
import ContactForm from "../../bootstrap/form/form-contacUs";

const ContactUs = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <ContactForm/>
      </div>

    </div>
  );
};

export default ContactUs;