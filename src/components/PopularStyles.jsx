import React from 'react';
import './PopularStyles.css';
import popular_1 from './images/popular_1.webp';

const PopularStyles = () => {
  return (
    <div className="popular-styles">
      {/* Top section: text left, image right */}
      <div className="po_container">
        <div className="po_text">
          <h2 className="po_heading">OUR MOST POPULAR STYLES</h2>
          <p className="po_subheading">Save big on shoes from last season</p>
          <div className="po_description">
            <p>
              Morbi natoque id finibus natoque sapien turpis elementum maximus. 
              Sociosqu auctor a urna consequat laoreet nisi accumsan magna. 
              Adipiscing vulputate nec euismod, a aliquam enim. 
              Mi facilisi ex est habitant lacus sagittis vitae.
            </p>
            <p>
              Molestie dolor mus vitae penatibus sed lectus convallis ut neque. 
              Leo elementum euismod penatibus cras sociosqu aliquet tellus.
            </p>
          <button className="btn shop-now">SHOP NOW →</button>
          </div>
        </div>
        <div className="po_image">
          <img src={popular_1} alt="Popular Style" />
        </div>
      </div>

      {/* Bottom store section (centered) */}
      <div className="store-section">
        <p className="store-text">Discover Our Stores: Your Local Shoe Haven</p>
        <button className="btn find-store">FIND STORE</button>
      </div>
    </div>
  );
};

export default PopularStyles;