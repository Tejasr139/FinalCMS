import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './home.css';

const PublicHomePage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get('http://localhost:5106/api/ContentMaster');

        const homecontent = response.data.filter(item => 
          item.pageTitle.toLowerCase().replace(/\s+/g, '') === 'home'
        );
        setContents(homecontent);

        //setContents(response.data);
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="hmcontainer mt-4">
      {contents.map(content => (
        <div key={content.id}>
          {content.pageTitle === 'Home' && (
            <Card className="hmcustom-card mb-3">
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: content.description }} />
              </Card.Body>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default PublicHomePage;

