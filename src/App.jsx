import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext'; // adjust path if needed
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CategoryShowcase from './components/CategoryShowcase.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import Singlepage from './components/Singlepage.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import SaleSection from './components/SaleSection.jsx';
import PopularStyles from './components/PopularStyles.jsx';
import CustomerFeedback from './components/CustomerFeedback.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';
import WishlistPage from './components/pages/WishlistPage.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Top bar and navbar will be inside the router */}
        <div className="top-bar">
          <div className="container-fluid col-11">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start aero">
                <p className="mb-0">One Day Delivery Available</p>
              </div>
              <div className="col-md-6 text-center text-md-end signup">
                <a href="#">Login</a> <span className="mx-1">/</span> <a href="#">Register</a>
                <div className="social-icons d-inline-block ms-3">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-0 mb-0" />

        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CategoryShowcase />
              <ProductShowcase />
              <Singlepage />
              <CategoryGrid />
              <FeatureGrid />
              <SaleSection />
              <PopularStyles />
              <CustomerFeedback />
              <BlogSection />
            </>
          } />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;