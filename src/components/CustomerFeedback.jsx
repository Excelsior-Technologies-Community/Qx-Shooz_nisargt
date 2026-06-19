import React from 'react';
import './CustomerFeedback.css';

// Import your brand logos (adjust paths as needed)
import cf1 from './images/cf1.avif';
import cf2 from './images/cf2.avif';
import cf3 from './images/cf3.avif';
import cf4 from './images/cf4.avif';
import cf5 from './images/cf5.avif';
import cf6 from './images/cf6.avif';
import cf7 from './images/cf7.avif';
import cf8 from './images/cf8.avif';
import cf9 from './images/cf9.avif';
import cf10 from './images/cf10.avif';

const CustomerFeedback = () => {
  const brands = [
    { name: 'rehomé', image: cf1 },
    { name: 'POWER', image:  cf2},
    { name: 'CONNECT', image:cf3 },
    { name: 'vagoda', image: cf4 },
    { name: 'intrum', image: cf5 },
    { name: 'Renové', image: cf6 },
    { name: 'ELEVATE', image:cf7 },
    { name: 'ZAVANA', image: cf8 },
    { name: 'RIVAL', image:  cf9},
    { name: 'volume', image: cf10 },
  ];

  return (
    <div className="feedback-section">
      <div className="container">
        <h2 className="feedback-heading">Customer Feedback Highlights</h2>
        <p className="feedback-subheading">
          Laoreet ridiculus congue magna malesuada phasellus condimentum taciti mus primis.
        </p>
        <div className="brands-grid">
          {brands.map((brand, idx) => (
            <div className="brand-item" key={idx}>
              <img src={brand.image} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;