import React from 'react';
import './CategoryShowcase.css';

import category1 from './images/category1.webp';
import category2 from './images/category2.webp';
import category3 from './images/category3.webp';

const CategoryShowcase = () => {
  const categories = [
    {
      des: 'TRANDING',
      name: 'Men Collection',
      image: category1,
      alt: 'Men Collection',
    },
    {
      des: 'LATEST',
      name: 'Women Collection',
      image: category2,
      alt: 'Women Collection',
    },
    {
      des: 'COMFORT',
      name: 'Kid Collection',
      image: category3,
      alt: 'Kid Collection',
    },
  ];

  return (
    <div className="category-section">
      <div className="category-cards">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <h3 className="category-des">{cat.des}</h3>
            <h3 className="category-name">{cat.name}</h3>
            {/* <h4 className="category-title">Collections</h4> */}
            <img src={cat.image} alt={cat.alt} className="category-img" />
            <button className="cate_shop-now">SHOP NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;