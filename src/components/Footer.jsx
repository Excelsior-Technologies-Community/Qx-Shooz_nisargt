import React, { useState } from 'react';
import './Footer.css';
import logo from './images/logo.webp';

const Footer = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const sections = [
    {
      id: 'information',
      title: 'INFORMATION',
      type: 'links',
      items: [
        { text: 'About Us', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Returns Policy', href: '#' },
        { text: 'Shipping Policy', href: '#' },
        { text: 'Terms & Conditions', href: '#' },
      ],
    },
    {
      id: 'quicklinks',
      title: 'QUICK LINKS',
      type: 'links',
      items: [
        { text: 'My Account', href: '#' },
        { text: 'My Cart', href: '#' },
        { text: 'Size Chart', href: '#' },
        { text: 'Wishlist', href: '#' },
        { text: 'Gift Card', href: '#' },
      ],
    },
    {
      id: 'shoz',
      title: 'SHOZ',
      type: 'contact',
      items: [
        'T: + (08) 9055 0269',
        'E: example@example.com',
        '50 Porana Place, West Casuarinas, Western Australia, Australia.',
      ],
    },
    {
      id: 'categories',
      title: 'CATEGORIES',
      type: 'links',
      items: [
        { text: 'Athletic Footwear', href: '#' },
        { text: 'Boots for Every Occasion', href: '#' },
        { text: 'Luxury Leather Shoes', href: '#' },
        { text: 'Sandals & Slides', href: '#' },
        { text: "Sneakerhead's Haven", href: '#' },
      ],
    },
    {
      id: 'support',
      title: 'SUPPORT',
      type: 'links',
      items: [
        { text: 'Contact Us', href: '#' },
        { text: 'Newsletter', href: '#' },
        { text: 'Gift Cards', href: '#' },
        { text: 'Sign In', href: '#' },
        { text: 'My Account', href: '#' },
      ],
    },
  ];

  const isOpen = (id) => openSections.includes(id);

  return (
    <footer className="footer">
      <div className="footer-container">
        {sections.map((section) => (
          <div
            className={`footer-column ${isOpen(section.id) ? 'open' : ''}`}
            key={section.id}
          >
            <h3
              className="footer-heading accordion-toggle"
              onClick={() => toggleSection(section.id)}
            >
              {section.id === 'shoz' ? (
                <img src={logo} alt="logo" className="logo-img" />
              ) : (
                section.title
              )}
              <span className="toggle-icon">
                {isOpen(section.id) ? '−' : '+'}
              </span>
            </h3>

            {section.type === 'links' ? (
              <ul className="footer-links accordion-content">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="footer-links contact-info accordion-content">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 <a href="#">ShooZ.</a> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;