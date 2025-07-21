// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import "./contactpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { sendContactForm } from "../../firebase/sendContactForm.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendContactForm(formData);
    if (result.success) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left glass" data-aos="fade-right">
          <h2>Let’s Talk</h2>
          <p>We’re here to help and answer any questions you might have.</p>
          <div className="contact-detail">
            <h4>Email</h4>
            <p>contact@omanenterprises.in</p>
            <h4>Phone</h4>
            <p>+91 9320716786</p>
            <h4>Address</h4>
            <p>Kolkata HQ – 123 Business Avenue, Sector V, Kolkata</p>
          </div>
          <div className="contact-map">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <form className="contact-right glass" onSubmit={handleSubmit} data-aos="fade-left">
          <h2>Contact Form</h2>
          <div className="input-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
            <label>Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
            <label>Email Address</label>
          </div>
          <div className="input-group">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
            <label>Phone Number</label>
          </div>
          <div className="input-group">
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required placeholder=" "></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit" className="submit-btn">
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
