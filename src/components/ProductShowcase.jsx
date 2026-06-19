import React, { useState, useEffect } from 'react';
import './ProductShowcase.css';
import { useCart } from './context/CartContext'; // Adjust path if needed

import img1 from './images/img1.webp';
import img1_hover from './images/img1_hover.webp';
import img2 from './images/img2.webp';
import img2_hover from './images/img2_hover.webp';
import img3 from './images/img3.webp';
import img3_hover from './images/img3_hover.webp';
import img4 from './images/img4.webp';
import img4_hover from './images/img4_hover.webp';

const ProductShowcase = () => {
  const { addToCart, openCart } = useCart();
  const [activeTab, setActiveTab] = useState('FEATURED');
  const [countdownValues, setCountdownValues] = useState({
    days: 1582,
    hours: 6,
    minutes: 17,
    seconds: 54,
  });

  // Countdown timer effect for the second product
  useEffect(() => {
    // Calculate target date based on current time + duration
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1582);
    targetDate.setHours(targetDate.getHours() + 6);
    targetDate.setMinutes(targetDate.getMinutes() + 17);
    targetDate.setSeconds(targetDate.getSeconds() + 54);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setCountdownValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (86400000)) / (3600000));
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setCountdownValues({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const productData = {
    FEATURED: [
      { id: 1, name: 'Classic White Tennis Sneakers', brand: 'SportyFeet', price: 25.00, oldPrice: null, image: img1, hoverImage: img1_hover },
      { id: 2, name: 'Classic Leather Sneakers', brand: 'UrbanStep', price: 25.00, oldPrice: 21.00, image: img2, hoverImage: img2_hover },
      { id: 3, name: 'High-Top Canvas Sneakers', brand: 'TrendyFeet', price: 25.00, oldPrice: null, image: img3, hoverImage: img3_hover },
      { id: 4, name: 'Waterproof Hiking Boots', brand: 'TrailGear', price: 25.00, oldPrice: null, image: img4, hoverImage: img4_hover },
    ],
    NEW_ARRIVALS: [
      { id: 1, name: 'New Arrival Sneakers', brand: 'FreshKicks', price: 29.99, oldPrice: 39.99, image: img1, hoverImage: img1_hover },
      { id: 2, name: 'Retro Runner', brand: 'VintageStyle', price: 34.99, oldPrice: null, image: img2, hoverImage: img2_hover },
      { id: 3, name: 'Mesh Breathable', brand: 'AirFlow', price: 24.99, oldPrice: 29.99, image: img3, hoverImage: img3_hover },
      { id: 4, name: 'Trail Runner Pro', brand: 'MountainGrip', price: 45.00, oldPrice: 59.00, image: img4, hoverImage: img4_hover },
    ],
    BEST_SELLER: [
      { id: 1, name: 'Best Seller Running', brand: 'SpeedStep', price: 39.99, oldPrice: null, image: img1, hoverImage: img1_hover },
      { id: 2, name: 'All-Day Comfort', brand: 'CloudWalk', price: 49.99, oldPrice: 59.99, image: img2, hoverImage: img2_hover },
      { id: 3, name: 'Minimalist Trainer', brand: 'BareFit', price: 29.99, oldPrice: 34.99, image: img3, hoverImage: img3_hover },
      { id: 4, name: 'Stability Shoe', brand: 'ArchSupport', price: 44.99, oldPrice: 54.99, image: img4, hoverImage: img4_hover },
    ],
  };

  const currentProducts = productData[activeTab.replace(' ', '_').toUpperCase()] || productData.FEATURED;

  // Component for a single product with image swap
  const ProductItem = ({ product, index }) => {
    const [currentImage, setCurrentImage] = useState(product.image);

    return (
      <div className="product-card">
        <div className="product-image-wrapper">
          <img
            src={currentImage}
            alt={product.name}
            className="product-img"
            onMouseEnter={() => setCurrentImage(product.hoverImage)}
            onMouseLeave={() => setCurrentImage(product.image)}
          />
          {/* Countdown overlay only on the second product (index 1) */}
          {index === 1 && (
            <div className="countdown-overlay">
              <div className="countdown-item">
                <span>{countdownValues.days}</span> <span>Days</span>
              </div>
              <div className="countdown-item">
                <span>{countdownValues.hours}</span> <span>Hours</span>
              </div>
              <div className="countdown-item">
                <span>{countdownValues.minutes}</span> <span>Mins</span>
              </div>
              <div className="countdown-item">
                <span>{countdownValues.seconds}</span> <span>Secs</span>
              </div>
            </div>
          )}
        </div>
        <div className="product-details">
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <h5 className="product-name">{product.name}</h5>
          <p className="product-brand">{product.brand}</p>
          <div className="product-actions">
            <button className="add-to-cart" onClick={() => { 
              addToCart(product);
              openCart();
            }}>ADD TO CART</button>
            <div className="action-icons">
              <i className="fa-solid fa-bag-shopping"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-compass"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="product-showcase">
      <div className="container">
        <p className="showcase-sub-heading">THE LATEST TRENDS IN ATHLETIC FOOTWEAR</p>
        <h1 className="showcase-main-heading">Sneakers & Kicks</h1>

        <div className="product-tabs">
          {['FEATURED', 'NEW ARRIVALS', 'BEST SELLER'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {currentProducts.map((product, idx) => (
            <ProductItem key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;