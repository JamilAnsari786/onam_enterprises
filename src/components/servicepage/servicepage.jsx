import React, { useEffect } from "react";
import './servicepage.css'
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Staffing & Recruitment Solutions",
    short: "Flexible staffing services for startups to enterprises",
    details: [
      "Contract hiring, full-time placement",
      "IT & non-IT recruitment",
    ],
    benefits: [
      "Reduce hiring time",
      "Access top talent",
      "Scalable teams",
    ],
    cta: "Get a Quote",
  },
  {
    title: "Business Consulting & Regulatory Compliance",
    short: "Guidance for setting up and managing Indian businesses",
    details: [
      "Business registration, GST, licensing",
      "Legal consulting",
    ],
    benefits: [
      "Simplified compliance",
      "Minimized legal risk",
    ],
    cta: "Get in Touch",
  },
  {
    title: "Semiconductor Imports & Supply Chain",
    short: "Efficient sourcing and delivery of electronic components",
    details: [
      "Import logistics, vendor sourcing",
      "Customs handling",
    ],
    benefits: [
      "Timely delivery",
      "Global sourcing efficiency",
    ],
    cta: "Contact Us",
  },
  {
    title: "IT & Digital Marketing Services",
    short: "Modern tech and digital branding for growth",
    details: [
      "Web/app development, SEO, Google Ads",
      "Social media marketing",
    ],
    benefits: [
      "Lead generation",
      "Online visibility",
    ],
    cta: "Request a Demo",
  },
  {
    title: "E-Commerce & B2B Supply",
    short: "Wholesale distribution of digital and physical goods",
    details: [
      "Listing, fulfillment, packaging",
      "Amazon/Flipkart/Meesho support",
    ],
    benefits: [
      "Expand reach",
      "Streamline logistics",
    ],
    cta: "Let’s Discuss",
  },
  {
    title: "Corporate Gifting & Merchandise",
    short: "Branded gifts for clients, employees, and partners",
    details: [
      "Gift hampers, mugs, pens, tech items",
    ],
    benefits: [
      "Brand recall",
      "Team appreciation",
    ],
    cta: "View Portfolio",
  },
  {
    title: "Apparel & Fabric Trading",
    short: "High-quality uniforms, apparel, and textiles",
    details: [
      "T-shirts, school uniforms, fabrics",
    ],
    benefits: [
      "Bulk orders",
      "Custom branding",
    ],
    cta: "Request Pricing",
  },
  {
    title: "Bag & Backpack Customization",
    short: "Branded bags for schools and corporate use",
    details: [
      "Logo printing and embroidery",
    ],
    benefits: [
      "Durable and affordable",
    ],
    cta: "Start Customizing",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      <h1 data-aos="fade-up">Our Services</h1>
      <p className="services-intro" data-aos="fade-up">
        Discover how Oman Enterprises delivers business excellence through a full suite of
        professional solutions.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-aos="fade-up">
            <h2>{service.title}</h2>
            <p className="service-short">{service.short}</p>
            <h4>What We Offer</h4>
            <ul>
              {service.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h4>Benefits</h4>
            <ul>
              {service.benefits.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
            <a href="/contact" className="cta-button">{service.cta}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
