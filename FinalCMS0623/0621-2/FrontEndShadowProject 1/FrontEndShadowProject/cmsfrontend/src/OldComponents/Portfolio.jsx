import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <p>This is the portfolio page.</p>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="image1.jpg" alt="Image 1" />
          <h2>Project 1</h2>
          <p>Description of project 1.</p>
        </div>
        <div className="portfolio-item">
          <img src="image2.jpg" alt="Image 2" />
          <h2>Project 2</h2>
          <p>Description of project 2.</p>
        </div>
        <div className="portfolio-item">
          <img src="image3.jpg" alt="Image 3" />
          <h2>Project 3</h2>
          <p>Description of project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;