import React from 'react';
import './BlogSection.css';

import Recent1 from './images/Recent1.webp';
import fg4 from './images/fg4.webp';
import Recent3 from './images/Recent3.webp';
import Recent4 from './images/Recent4.webp';
import Recent5 from './images/Recent5.png';

const BlogSection = () => {
  const featuredPost = {
    title: "The Future Of Footwear: A Look Ahead",
    date: "Oct 28 2024",
    comments: "0 comments",
    image: Recent1,
  };

  const smallPosts = [
    {
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "Oct 17 2024",
      comments: "0 comments",
      image: fg4,
    },
    {
      title: "The Ultimate Guide to Sneaker Care ",
      date: "Oct 17 2024",
      comments: "0 comments",
      image: Recent3,
    },
    {
      title: "How to Style Your Favorite Sneakers",
      date: "Oct 28 2024",
      comments: "0 comments",
      image: Recent4,
    },
  ];

  return (
    <div className="blog-section">
      <div className="container">
        {/* Top text */}
        <p className="blog-preheading">FROM THE BLOG</p>
        <h2 className="blog-heading">Recently Our Posts</h2>
        <p className="blog-description">
          Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Blog posts row */}
        <div className="blog-main-row">
          <div className="featured-post">
            <img src={featuredPost.image} alt={featuredPost.title} className="featured-img" />
            <div className="featured-overlay">
              <div className="featured-meta">
                <span>{featuredPost.date}</span> | <span>{featuredPost.comments}</span>
              </div>
              <h3 className="featured-title">{featuredPost.title}</h3>
            </div>
          </div>
          <div className="small-posts-list">
            {smallPosts.map((post, idx) => (
              <div className="small-post-item" key={idx}>
                <img src={post.image} alt={post.title} className="small-post-img" />
                <div className="small-post-content">
                  <div className="small-post-meta">
                    <span>{post.date}</span> | <span>{post.comments}</span>
                  </div>
                  <h4 className="small-post-title">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEWSLETTER SECTION – two columns: text left, image right */}
        <div className="newsletter-two-columns">
          <div className="newsletter-left">
            <h3 className="newsletter-heading">SUBSCRIBE TO OUR NEWS ARTICLES</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button className="newsletter-btn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="newsletter-right">
            <img src={Recent5} alt="Newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;