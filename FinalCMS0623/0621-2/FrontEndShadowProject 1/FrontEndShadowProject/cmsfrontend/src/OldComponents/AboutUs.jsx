
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicAboutUsPage = () => {
  const [content, setContent] = useState({ pageTitle: '', description: '' });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('https://localhost:7296/api/ContentMaster/10'); // ID 10 for About Us content
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>{content.pageTitle}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default PublicAboutUsPage;
