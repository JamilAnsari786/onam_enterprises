import React, { useEffect } from "react";
import './aboutpage.css';
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Armaan Jain",
    role: "Founder & CEO",
    background: "12+ years in strategic consulting & staffing leadership",
    photo: "👨‍💼",
  },
  {
    name: "Priya Malhotra",
    role: "Head of Operations",
    background: "Veteran in logistics, vendor strategy, and client success",
    photo: "👩‍💼",
  },
  {
    name: "Rohan Singh",
    role: "Marketing Director",
    background: "Expert in B2B growth, digital funnels, and campaign scaling",
    photo: "📣",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-up">
        <h1>Get to Know Us</h1>
        <p>
          At Oman Enterprises, we empower innovation through strategy, skill, and scalable technology—enabling growth from local startups to global enterprises.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section" data-aos="fade-up">
        <div className="split-section">
          <div className="about-box glass">
            <h2>Our Vision</h2>
            <p>To lead as India’s most dependable business solutions provider with a strong global presence.</p>
          </div>
          <div className="about-box glass">
            <h2>Our Mission</h2>
            <ul>
              <li>Empower clients with agile & scalable services</li>
              <li>Build world-class partnerships</li>
              <li>Train India’s next-gen workforce</li>
              <li>Integrate AI into growth strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="about-section" data-aos="fade-left">
        <h2>Why Choose Oman Enterprises?</h2>
        <div className="pillars-grid">
          <div className="pillar-card">✅ Trusted Leadership Across Sectors</div>
          <div className="pillar-card">🌍 Global Alliances (USA, UAE, China)</div>
          <div className="pillar-card">🛠 Custom Solutions for Every Scale</div>
          <div className="pillar-card">📋 Expert Compliance & Tax Handling</div>
          <div className="pillar-card">👨‍💻 Extensive Talent & Staffing Network</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section" data-aos="zoom-in">
        <h2>Meet Our Leadership</h2>
        <div className="team-grid advanced">
          {team.map((member, i) => (
            <div className="team-card elevated" key={i}>
              <div className="team-photo">{member.photo}</div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="desc">{member.background}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
