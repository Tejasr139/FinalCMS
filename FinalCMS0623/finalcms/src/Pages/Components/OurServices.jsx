import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './ourservices.css';

const OurServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5106/api/ContentMaster'); // Fetch all content
        const ourServicesContent = response.data.filter(item => 
          item.pageTitle.toLowerCase().replace(/\s+/g, '') === 'ourservices'
        );
        setServices(ourServicesContent);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-container mt-4">
      {services.map(item => (
        <Card key={item.id} className="services-card mb-3">
          <Card.Body>
            <Card.Title className="card-title">{item.title}</Card.Title>
            {/* <Card.Text>
              {item.description.replace(/<[^>]+>/g, '').split('\n').map((line, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: line.replace(/\n/g, '<br/>') }} />
              ))}
            </Card.Text> */}

              <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default OurServicesPage;
