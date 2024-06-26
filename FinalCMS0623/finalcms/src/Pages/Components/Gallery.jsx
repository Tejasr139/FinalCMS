import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './gallery.css';

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get('http://localhost:5106/api/ContentMaster'); // Fetch all content
        const galleryContent = response.data.filter(item => 
          item.pageTitle.toLowerCase().replace(/\s+/g, '') === 'gallery'
        );
        setGallery(galleryContent);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="gallery-container mt-4">
      {gallery.map(item => (
        <Card key={item.id} className="gallery-card mb-3">
          <Card.Body>
            {/* <Card.Text>
              {item.description.replace(/<[^>]+>/g, '').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Card.Text> */}
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GalleryPage;
