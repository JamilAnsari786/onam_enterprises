import React, { useEffect } from "react";
import "./indusriespage.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="industries-page">
      <div className="industries-container">
        <h1 className="page-title" data-aos="fade-down">Industries We Serve</h1>
        <p className="page-subtitle" data-aos="fade-up">
          Oman Enterprises delivers impactful solutions across industries. Here's where we shine:
        </p>

        <div className="industry-grid">
          {industryData.map((industry, i) => (
            <div className="industry-card" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
