import React from 'react';
import './SaleSection.css';

// Import product images (replace with your actual images)
import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';

const SaleSection = () => {
  // The three products (each will be repeated across 3 columns)
  const products = [
    { name: 'Classic White Tennis Sneakers', price: 25.00, image: img1 },
    { name: 'Waterproof Hiking Boots', price: 25.00, image: img2 },
    { name: 'Classic Leather Sneakers', price: 21.00, image: img3 },
  ];

  // Create 3 identical columns (each column contains all 3 products)
  const columns = [1, 2, 3];

  return (
    <div className="sale-section">
      <div className="container">
        <p className="sale-subheading">SEASON'S END SALE</p>
        <h2 className="sale-heading">Huge discounts on last season's styles</h2>
        <div className="sale-description">
          <p>Himenaeos nascetur tristique consequat mus ad.</p>
          <p>Accumsan fringilla in laoreet id bibendum et.</p>
        </div>

        {/* 3‑column grid */}
        <div className="three-columns">
          {columns.map((_, colIndex) => (
            <div className="product-column" key={colIndex}>
              {products.map((product, idx) => (
                <div className="product-item" key={idx}>
                  <img src={product.image} alt={product.name} className="product-img" />
                  <h3 className="product-name">{product.name} &nbsp;&nbsp;&nbsp; ${product.price.toFixed(2)}</h3>
                   {/* <p className="product-price">${product.price.toFixed(2)}</p> */}
                    {/* <hr/> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleSection;