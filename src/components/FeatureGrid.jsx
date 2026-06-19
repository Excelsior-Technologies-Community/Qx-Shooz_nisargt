import React from 'react';
import './FeatureGrid.css';

import fg1 from "./images/fg1.webp";
import fg2 from "./images/fg2.webp";
import fg3 from "./images/fg3.webp";
import fg4 from "./images/fg4.webp";
import fg5 from "./images/fg5.webp";


const FeatureGrid = () => {
  // First row (3 cards)
  const firstRowCards = [
    {
      title: 'COMFORT MEETS FASHION',
      description: 'Discover shoes that look great',
      buttonText: 'SHOP NOW',
       image:fg1,
    },

    {
      title: 'ELEVATE YOUR LOOK',
      description: 'Find the perfect pair of shoes',
      buttonText: 'SHOP NOW',
       image: fg2,
    },
    {
      title: 'STEP INTO STYLE',
      description: 'The latest trends in footwear',
      buttonText: 'SHOP NOW',
       image: fg3,
    },
  ];

  // Second row (2 cards)
  const secondRowCards = [
    {
      title: 'SHOP BY BRAND',
      description: 'Find your favorite brands and styles',
      buttonText: 'SHOP NOW',
       image: fg4,
    },
    {
      title: 'SALE AND CLEARANCE',
      description: 'Shop our latest deals and discounts',
      buttonText: 'SHOP NOW',
       image: fg5,
    },
  ];

  return (
    <div className="feature-grid-section">
      <div className="container">
        {/* Taglines */}
        <div className="taglines">
          <p className='des_tag'>FASHION SNEAKERS</p>
          <p className="main-title">Timeless styles for everyday wear</p>
          <p className="sub-title">High‑performance footwear for sports and workouts</p>
        </div>

        {/* First row: 3 cards */}
        <div className="row2">
          {firstRowCards.map((imgs, idx) => (
            <div className="feature" key={idx}>
            <img src={imgs.image} alt={imgs.alt} className="card-img" />
              <h3 className="feature-title">{imgs.title}</h3>
              <p className="feature-description">{imgs.description}</p>
              <button className="feature-button">{imgs.buttonText}</button>
            </div>
          ))}
        </div>

        {/* Second row: 2 cards (centered) */}
        <div className="row2">
          {secondRowCards.map((imgs, idx) => (
            <div className="feature" key={idx}>
            <img src={imgs.image} alt={imgs.alt} className="card2-img" />
              <h3 className="feature-title">{imgs.title}</h3>
              <p className="feature-description">{imgs.description}</p>
              <button className="feature-button">{imgs.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;