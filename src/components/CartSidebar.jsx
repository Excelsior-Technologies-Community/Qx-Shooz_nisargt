import React from 'react';
import { useCart } from './context/CartContext';
import './CartSidebar.css';

// Import FontAwesome icons (if not already globally imported)
// Make sure FontAwesome is imported in your main file

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (!isOpen) return null;

  const subtotal = getCartTotal();
  const freeShippingThreshold = 975.00;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  // Sample "You may also like" products (you can replace with actual data)
  const alsoLikeProducts = [
    { id: 101, name: 'Classic Leather Sneakers', price: 25.00, image: 'https://placehold.co/60x60?text=Shoe' },
    { id: 102, name: 'High-Top Canvas', price: 25.00, image: 'https://placehold.co/60x60?text=Shoe' },
    { id: 103, name: 'Waterproof Boots', price: 25.00, image: 'https://placehold.co/60x60?text=Shoe' },
    { id: 104, name: 'Running Shoes', price: 25.00, image: 'https://placehold.co/60x60?text=Shoe' },
  ];

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-sidebar">
        {/* Header */}
        <div className="cart-header">
          <h2>Cart ({getCartCount()})</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Free Shipping Message */}
        <div className="free-shipping">
          {subtotal >= freeShippingThreshold ? (
            "🎉 Congratulations! You've got free shipping!"
          ) : (
            `Spend $${remainingForFreeShipping.toFixed(2)} for Free Shipping`
          )}
        </div>

        {/* Cart Items */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>No products in the cart.</p>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}

              {/* You may also like */}
              <div className="also-like">
                <p>You may also like</p>
                {/* <div className="also-like-products">
                  {alsoLikeProducts.map(product => (
                    <div className="also-like-item" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <div className="also-like-info">
                        <span className="also-like-name">{product.name}</span>
                        <span className="also-like-price">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Order Note, Coupon, Shipping with Icons */}
              <div className="cart-options">
                <span className="option-link">
                  <i className="fa-regular fa-pen-to-square"></i> Order Note
                </span>
                <span className="option-link">
                  <i className="fa-regular fa-ticket"></i> Coupon
                </span>
                <span className="option-link">
                  <i className="fa-regular fa-truck"></i> Shipping
                </span>
              </div>

              {/* Total */}
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="tax-note">Taxes and shipping calculated at checkout</p>
                <button className="checkout-btn">CHECK OUT</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;