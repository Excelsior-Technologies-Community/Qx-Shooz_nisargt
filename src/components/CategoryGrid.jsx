import React from 'react';
import './CategoryGrid.css';

// Import your category images (replace with your actual images)
import shop_img1 from './images/shop_img1.webp';
import boots2 from './images/boots2.webp';
import boots3 from './images/boots3.webp';
import boots4 from './images/boots4.webp';

const CategoryGrid = () => {
  const categories = [
    { name: 'Athletic Footwear',image: shop_img1 },
    { name: 'Luxury Leather Shoes',image: boots2 },
    { name: 'Sustainable Footwear',image: boots3 },
    { name: 'Sandals & Slides',image: boots4 },
  ];

  return (
    <div className="category-grid-section">
      <div className="container">
        <p className="sub-heading">STYLISH AND COMFORTABLE FOR EVERY SEASON</p>
        <h2 className="main-heading">Boots & Booties</h2>
        <p className="description">
          Checkout our collection of the top New Products that encourage conversion.
        </p>

        <div className="category-grid">
          {categories.map((cat, idx) => (
            <div className="category-grid-card" key={idx}>
              <img src={cat.image} alt={cat.name} className="category-grid-img" />
              <h3 className="category-grid-name">{cat.name}</h3>
              {/* <span className="category-grid-count">{cat.count} products</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;