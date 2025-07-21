// src/pages/Home.jsx

import React, { useEffect, useState } from "react";
import "./homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { sendContactForm } from "../../firebase/sendContactForm.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { title: "Staffing & Recruitment", icon: "🧑‍💼" },
  { title: "Business Consulting", icon: "📈" },
  { title: "Semiconductor Imports", icon: "🔌" },
  { title: "IT & Digital Marketing", icon: "💻" },
  { title: "E-commerce & B2B Supply", icon: "🛒" },
  { title: "Corporate Gifting", icon: "🎁" },
  { title: "Apparel Trading", icon: "👕" },
  { title: "Backpack Customization", icon: "🎒" },
];

const heroImages = [
  {
    image: "/image1.webp",
    title: "Empowering Business. Driving Growth.",
    subtitle: "Strategic services in staffing, digital, imports & beyond.",
  },
  {
    image: "/image2.webp",
    title: "Your Partner in Global Sourcing",
    subtitle: "From concept to execution, we’re with you every step.",
  },
  {
    image: "/image3.jpg",
    title: "Innovate. Scale. Succeed.",
    subtitle: "Tailored business solutions for the modern era.",
  },
];

const industryData = [
  {
    title: "Corporate Gifting",
    description: "Bulk gifting solutions with customized branding for offices and partners.",
    icon: "🎁",
  },
  {
    title: "Clothing & Apparel",
    description: "Uniforms, custom t-shirts, and fabric supply for institutions and corporates.",
    icon: "👕",
  },
  {
    title: "Semiconductor Imports",
    description: "Supplying critical components for IT, electronics, and manufacturing sectors.",
    icon: "🔌",
  },
  {
    title: "IT & Marketing",
    description: "Web development, SEO, digital campaigns, and data-driven growth solutions.",
    icon: "💻",
  },
  {
    title: "E-commerce & Wholesale",
    description: "Bulk product sourcing and B2B distribution through digital platforms.",
    icon: "🛒",
  },
  {
    title: "Backpack Customization",
    description: "Branded backpacks and office bags for schools, events, and employees.",
    icon: "🎒",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [homeForm, setHomeForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleHomeChange = (e) => {
    setHomeForm({ ...homeForm, [e.target.name]: e.target.value });
  };

  const handleHomeSubmit = async (e) => {
    e.preventDefault();
    const result = await sendContactForm(homeForm);
    if (result.success) {
      alert("✅ Message sent successfully!");
      setHomeForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="hero-swiper"
        >
          {heroImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="overlay">
                  <div className="hero-text" data-aos="fade-up">
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <Link to="/contact" className="btn-primary">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro Section */}
      <section className="intro" data-aos="fade-up">
        <div className="intro-content">
          <h2 className="in">About Oman Enterprises</h2>
          <p>
            We are a growth-focused consultancy providing tailored solutions in
            recruitment, IT, marketing, manufacturing, and global sourcing. Our
            presence spans Kolkata, Noida, and strategic partners across Asia
            and the US.
          </p>
          <Link to="/about" className="btn-outline">
            More About Us
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" data-aos="fade-up">
        <h2 className="section-title">Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i} data-aos="zoom-in">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
        <Link to="/services" className="btn-outline">
          Explore All Services
        </Link>
      </section>

      {/* Industries Section */}
      <section className="industries" data-aos="fade-up">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="page-subtitle" data-aos="fade-up">
          Oman Enterprises delivers impactful solutions across industries. Here's where we shine:
        </p>
        <div className="industries-grid">
          {industryData.map((industry, idx) => (
            <div
              className="industry-card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="quick-contact" data-aos="fade-up">
        <h2 className="section-title">Let’s Collaborate</h2>
        <p className="contact-subtext">
          We’d love to hear from you! Share your ideas or queries and we’ll get
          back shortly.
        </p>
        <form className="contact-form" onSubmit={handleHomeSubmit}>
          <input
            type="text"
            name="name"
            value={homeForm.name}
            onChange={handleHomeChange}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={homeForm.email}
            onChange={handleHomeChange}
            placeholder="Your Email Address"
            required
          />
          <input
            type="tel"
            name="phone"
            value={homeForm.phone}
            onChange={handleHomeChange}
            placeholder="Your Phone Number"
          />
          <textarea
            rows="4"
            name="message"
            value={homeForm.message}
            onChange={handleHomeChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
