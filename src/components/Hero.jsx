import React, { useState, useEffect } from 'react';
import './Hero.css';

import Hero1 from './images/Hero_img_1.webp';
import Hero2 from './images/Hero_img_2.webp';
import Hero3 from './images/Hero_img_3.webp';

const Hero = () => {
  const slides = [
    {
      image: Hero1,
      styleText: "STEP INTO STYLE",
      title: "Discover The Latest Trends In Footwear",
      description: "From classic sneakers to trendy boots, our collection has something for everyone.",
      buttonText: "SHOP NOW"
    },
    {
      image: Hero2,
      styleText: "LIMITED EDITION",
      title: "Discover Shoes That Look Great And Feel Even Better.",
      description: "Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.",
      buttonText: "SHOP NOW"
    },
    {
      image: Hero3,
      styleText: "FLASH SALE",
      title: "Find The Perfect Pair Of Shoes To Complete.",
      description: "Explore our wide range of styles, colors, and materials to find the perfect shoes for any occasion.",
      buttonText: "SHOP NOW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  // Determine alignment class based on slide index (0 = right, 1 = left, 2 = right)
  const alignmentClass = currentIndex === 1 ? 'align-left' : 'align-right';

  return (
    <div className="hero-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Dynamic overlay with alignment class */}
      <div className={`hero-overlay ${alignmentClass}`}>
        <div className="hero-content">
          <p className="hero-style">{currentSlide.styleText}</p>
          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-description">{currentSlide.description}</p>
          <button className="hero-button">{currentSlide.buttonText}</button>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;