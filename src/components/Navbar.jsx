import React, { useState, useEffect, useRef } from "react";
import '../components/Navbar.css';
import { useCart } from './context/CartContext';
import CartSidebar from './CartSidebar';
import { Link } from 'react-router-dom';
import logo from './images/logo.webp';
import shopimg from './images/shop_img1.webp';
import shopimg2 from './images/shop_img2.webp';

function Navbar() {
  // ✅ ONLY ONE destructuring – inside the component
  const { getCartCount, wishlistItems, isCartOpen, closeCart, openCart } = useCart();
  const [openDropdown, setOpenDropdown] = useState(null);
  const offcanvasRef = useRef(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  useEffect(() => {
    const offcanvasElement = offcanvasRef.current;
    if (!offcanvasElement) return;

    const handleLinkClick = (event) => {
      const link = event.target.closest('a');
      if (link && link.getAttribute('href') !== '#') {
        const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) bsOffcanvas.hide();
      }
    };

    offcanvasElement.addEventListener('click', handleLinkClick);
    return () => offcanvasElement.removeEventListener('click', handleLinkClick);
  }, []);

  // Mega menu content (reusable – used both for desktop and mobile accordion)
  const shopMegaMenu = (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h6 className="dropdown-header">Layout</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Filter Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Filter Top</a></li>
            <li><a className="dropdown-item" href="#">Filter Drawer</a></li>
            <li><a className="dropdown-item" href="#">Without Filter</a></li>
            <li><a className="dropdown-item" href="#">Collection – 2 columns</a></li>
            <li><a className="dropdown-item" href="#">Collection – 3 columns</a></li>
            <li><a className="dropdown-item" href="#">Collection – 4 columns</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">Features</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Banner Image</a></li>
            <li><a className="dropdown-item" href="#">Banner No Image</a></li>
            <li><a className="dropdown-item" href="#">Banner Split</a></li>
            <li><a className="dropdown-item" href="#">Collection list</a></li>
            <li><a className="dropdown-item" href="#">Sub Collection</a></li>
            <li><a className="dropdown-item" href="#">Pagination</a></li>
            <li><a className="dropdown-item" href="#">Infinity</a></li>
            <li><a className="dropdown-item" href="#">Load More</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">Hover Style</h6>
          <ul className="list-unstyled">
            {[...Array(8)].map((_, i) => (
              <li key={i}><a className="dropdown-item" href="#">Hover Style {i+1}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">SHOP NOW</h6>
          <div className="product-row">
            <div className="product-card">
              <img src={shopimg} alt="Athletic Footwear" className="img-fluid rounded" />
              <div className="product-info mt-2">
                <a href="#" className="product-title">Athletic Footwear</a>
                <span className="badge bg-secondary">8 products</span>
              </div>
            </div>
            <div className="product-card">
              <img src={shopimg2} alt="Boots for Every Occasion" className="img-fluid rounded" />
              <div className="product-info mt-2">
                <a href="#" className="product-title">Boots for Every Occasion</a>
                <span className="badge bg-secondary">8 products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const productMegaMenu = (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h6 className="dropdown-header">Product Layouts</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Thumbnails – bottom</a></li>
            <li><a className="dropdown-item" href="#">Thumbnails – left</a></li>
            <li><a className="dropdown-item" href="#">Thumbnails – right</a></li>
            <li><a className="dropdown-item" href="#">Without Thumbnails</a></li>
            <li><a className="dropdown-item" href="#">List – stacked</a></li>
            <li><a className="dropdown-item" href="#">List – grid</a></li>
            <li><a className="dropdown-item" href="#">Collage – style 1</a></li>
            <li><a className="dropdown-item" href="#">Collage – style 2</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">Product Type</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Simple Product</a></li>
            <li><a className="dropdown-item" href="#">Variable Product</a></li>
            <li><a className="dropdown-item" href="#">With Video</a></li>
            <li><a className="dropdown-item" href="#">Sold Out – Coming</a></li>
            <li><a className="dropdown-item" href="#">List Featured 1</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">List Featured 1</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">List Featured 1</a></li>
            <li><a className="dropdown-item" href="#">Sticky ATC</a></li>
            <li><a className="dropdown-item" href="#">Frequently Bought Together</a></li>
            <li><a className="dropdown-item" href="#">Count Down</a></li>
            <li><a className="dropdown-item" href="#">Cross Selling</a></li>
            <li><a className="dropdown-item" href="#">Upsell Popup</a></li>
            <li><a className="dropdown-item" href="#">Low Stock Alert</a></li>
            <li><a className="dropdown-item" href="#">Pickup Store</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="dropdown-header">List Featured 2</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">List Featured 2</a></li>
            <li><a className="dropdown-item" href="#">Dropdown Variant</a></li>
            <li><a className="dropdown-item" href="#">Swatch Variant Color</a></li>
            <li><a className="dropdown-item" href="#">Swatch Variant Image</a></li>
            <li><a className="dropdown-item" href="#">Variant Image Square</a></li>
            <li><a className="dropdown-item" href="#">Size Guide</a></li>
            <li><a className="dropdown-item" href="#">Description Accordion</a></li>
            <li><a className="dropdown-item" href="#">Description Tab Center</a></li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="product-preview">
            <div className="row">
              <div className="col-4">
                <img src={shopimg} alt="Waterproof Hiking Boots" className="img-fluid" />
              </div>
              <div className="col-8">
                <h6>Waterproof Hiking Boots</h6>
                <p className="text-muted">TrailGear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const blogMegaMenu = (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h6 className="dropdown-header">List Layout</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">List Left Sidebar</a></li>
            <li><a className="dropdown-item" href="#">List Right Sidebar</a></li>
            <li><a className="dropdown-item" href="#">List Item Basic</a></li>
            <li><a className="dropdown-item" href="#">List Item Overlay</a></li>
            <li><a className="dropdown-item" href="#">List Item Box</a></li>
            <li><a className="dropdown-item" href="#">List Item Classic</a></li>
            <li><a className="dropdown-item" href="#">List Item Classic Box</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="dropdown-header">Grid Layout</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Grid Left Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Grid Right Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Grid Item Basic</a></li>
            <li><a className="dropdown-item" href="#">Grid Item Overlay</a></li>
            <li><a className="dropdown-item" href="#">Grid Item Box</a></li>
            <li><a className="dropdown-item" href="#">Grid Item Classic</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="dropdown-header">Article</h6>
          <ul className="list-unstyled">
            <li><a className="dropdown-item" href="#">Title in image</a></li>
            <li><a className="dropdown-item" href="#">Title after image</a></li>
            <li><a className="dropdown-item" href="#">Title before image</a></li>
            <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Title Center</a></li>
            <li><a className="dropdown-item" href="#">Article Video</a></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid col-11">
          {/* Logo */}
          <a className="navbar-brand m-2 p-2" href="#">
            <img src={logo} alt="logo" />
          </a>

          {/* ⏺️ DESKTOP TOGGLE – hidden on mobile */}
          <button
            className="navbar-toggler d-none d-lg-inline-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ⏺️ MOBILE OFFCANVAS TOGGLE – hidden on desktop */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* DESKTOP NAVBAR */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                <ul className="dropdown-menu shop-mega">{shopMegaMenu}</ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Product</a>
                <ul className="dropdown-menu product-mega">{productMegaMenu}</ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                <ul className="dropdown-menu blog-mega">{blogMegaMenu}</ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About Us 1</a></li>
                  <li><a className="dropdown-item" href="#">About Us 2</a></li>
                  <li><a className="dropdown-item" href="#">About Us 3</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li><a className="dropdown-item" href="#">Faqs</a></li>
                  <li><a className="dropdown-item" href="#">Lookbook</a></li>
                  <li><a className="dropdown-item" href="#">sizeguide</a></li>
                  <li><a className="dropdown-item" href="#">Wishlist</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Buy Now</a></li>
            </ul>
          </div>

          {/* MOBILE OFFCANVAS – accordion with same content */}
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" ref={offcanvasRef}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>

                {/* Shop accordion */}
                <li className="nav-item accordion-item">
                  <div className="accordion-header" onClick={() => toggleDropdown('shop')}>
                    <span className="nav-link">Shop</span>
                    <span className="accordion-icon">{openDropdown === 'shop' ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-body ${openDropdown === 'shop' ? 'show' : ''}`}>
                    {shopMegaMenu}
                  </div>
                </li>

                {/* Product accordion */}
                <li className="nav-item accordion-item">
                  <div className="accordion-header" onClick={() => toggleDropdown('product')}>
                    <span className="nav-link">Product</span>
                    <span className="accordion-icon">{openDropdown === 'product' ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-body ${openDropdown === 'product' ? 'show' : ''}`}>
                    {productMegaMenu}
                  </div>
                </li>

                {/* Blog accordion */}
                <li className="nav-item accordion-item">
                  <div className="accordion-header" onClick={() => toggleDropdown('blog')}>
                    <span className="nav-link">Blog</span>
                    <span className="accordion-icon">{openDropdown === 'blog' ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-body ${openDropdown === 'blog' ? 'show' : ''}`}>
                    {blogMegaMenu}
                  </div>
                </li>

                {/* Pages accordion */}
                <li className="nav-item accordion-item">
                  <div className="accordion-header" onClick={() => toggleDropdown('pages')}>
                    <span className="nav-link">Pages</span>
                    <span className="accordion-icon">{openDropdown === 'pages' ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-body ${openDropdown === 'pages' ? 'show' : ''}`}>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">About Us 1</a></li>
                      <li><a className="dropdown-item" href="#">About Us 2</a></li>
                      <li><a className="dropdown-item" href="#">About Us 3</a></li>
                      <li><a className="dropdown-item" href="#">Contact</a></li>
                      <li><a className="dropdown-item" href="#">Faqs</a></li>
                      <li><a className="dropdown-item" href="#">Lookbook</a></li>
                      <li><a className="dropdown-item" href="#">sizeguide</a></li>
                      <li><a className="dropdown-item" href="#">Wishlist</a></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item"><a className="nav-link" href="#">Buy Now</a></li>

                {/* Mobile-only extras */}
                <li className="nav-item mobile-only"><a className="nav-link" href="#">Sale</a></li>
                <li className="nav-item mobile-only">
                  <div className="nav-link mobile-login">
                    <a href="#">Login</a> / <a href="#">Register</a>
                  </div>
                </li>
                <li className="nav-item mobile-only"><a className="nav-link" href="#">AUD $ ▼</a></li>
                <li className="nav-item mobile-only"><a className="nav-link" href="#">English ▼</a></li>
                <li className="nav-item mobile-only">
                  <div className="nav-link mobile-icons">
                    <span>Z</span> <span>0</span> <span>0 (0)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Icons */}
          <div className="nav-icons desktop-only">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <Link to="/wishlist" className="wishlist-link">
              <i className="fa-regular fa-heart"></i>
              <span className="badge wishlist-badge">{wishlistItems.length}</span>
            </Link>
            <div className="cart-icon-wrapper" onClick={openCart}>
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="badge cart-badge">{getCartCount()}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Use closeCart from context */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}

export default Navbar;