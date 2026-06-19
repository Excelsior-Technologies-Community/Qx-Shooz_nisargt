import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  return (
    <>
      {/* <Navbar /> */}
      <div className="wishlist-page">
        <div className="container">
          <h1>My Wishlist</h1>
          {wishlistItems.length === 0 ? (
            <div className="empty-wishlist">
              <p>Your wishlist is empty.</p>
              <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistItems.map(item => (
                <div className="wishlist-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>
                  <div className="wishlist-actions">
                    <button className="add-to-cart" onClick={() => {
                      addToCart(item);
                      alert('Added to cart!');
                    }}>
                      Add to Cart
                    </button>
                    <button className="remove" onClick={() => removeFromWishlist(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default WishlistPage;