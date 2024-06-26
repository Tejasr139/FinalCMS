import React from 'react';

const Gallery = () => {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>This is the gallery page.</p>
      <div className="gallery-items">
        <div className="gallery-item">
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div className="gallery-item">
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div className="gallery-item">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;