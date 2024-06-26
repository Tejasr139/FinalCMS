import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './aboutus.css';

const AboutUsPage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get('http://localhost:5106/api/ContentMaster'); // Fetch all content
        const aboutUsContent = response.data.filter(item => 
          item.pageTitle.toLowerCase().replace(/\s+/g, '') === 'aboutus'
        );
        setContent(aboutUsContent);
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="container mt-4">
      {content.map(item => (
        <Card key={item.id} className="custom-card mb-3">
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

export default AboutUsPage;