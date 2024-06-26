import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
//import './portfolio.css';

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('http://localhost:5106/api/ContentMaster');

        const portfolioContent = response.data.filter(item => 
          item.pageTitle.toLowerCase().replace(/\s+/g, '') === 'portfolio'
        );
        setPortfolio(portfolioContent);
        
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="container mt-4">
      {portfolio.map(item => (
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

export default PortfolioPage;