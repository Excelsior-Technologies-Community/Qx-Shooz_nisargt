import React from "react";
import './Singlepage.css';
import si1 from './images/si1.webp';

function Singlepage() {
  // Offers to scroll
  const offers = [
    "Buy one pair of shoes, get the second pair 50% off. Use code BOGO50",
    "Enjoy 20% off your entire order with the code SHOEFRESH20",
    "Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15"
  ];
  const scrollContent = [...offers, ...offers]; // duplicate for seamless loop

  return (
    <div>

         <div className="page">
        <img src={si1} alt="" />
        <div className="text-overlay">
          <p className="product_tag">COMFORT MEETS FASHION</p>
          <h1>Discover shoes that look great and feel even better</h1>
          <p className="product_dis">Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</p>
          <button className="pro-btn">SHOP NOW →</button>
        </div>
      </div>
      
      {/* ===== SCROLLING BANNER (added) ===== */}
      <div className="scrolling-banner">
        <div className="scrolling-track">
          {scrollContent.map((offer, idx) => (
            <div className="scrolling-item" key={idx}>
              {offer}
            </div>
          ))}
        </div>
      </div>

      {/* Original hero section */}
     
    </div>
  );
}

export default Singlepage;