import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Overview */}
        <div className="footer-column">
          <h2 className="footer-title">Oman Enterprises</h2>
          <p className="footer-text">
            Empowering businesses through innovative solutions in staffing,
            consulting, imports, IT, and corporate gifting. Trusted across
            India and globally connected.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Contact Us</h3>
          <ul className="footer-contact">
            <li><FaPhoneAlt /><span>+91 9320716786</span></li>
            <li><FaEnvelope /><span>contact@omanenterprises.in</span></li>
            <li><FaMapMarkerAlt /><span>Kolkata & Noida, India</span></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Stay Connected</h3>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Oman Enterprises. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
