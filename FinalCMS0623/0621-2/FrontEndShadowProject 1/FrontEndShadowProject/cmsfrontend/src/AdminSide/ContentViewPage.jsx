import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentViewPage = () => {
  const [latestContent, setLatestContent] = useState(null);

  useEffect(() => {
    fetchLatestContent();
  }, []);

  const fetchLatestContent = async () => {
    try {
      const response = await axios.get('https://localhost:7296/api/ContentMaster');
      if (response.data.length > 1) {
        // Assuming the backend returns data in chronological order (oldest to newest by id)
        const secondInsertedItem = response.data[1];
        setLatestContent(secondInsertedItem);
      } else if (response.data.length === 1) {
        // If there is only one item, display the first item
        const firstInsertedItem = response.data[0];
        setLatestContent(firstInsertedItem);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  return (
    <div>
      <h2>Second Inserted Content</h2>
      {latestContent ? (
        <div>
          <h3>{latestContent.pageTitle}</h3>
          <p>{latestContent.description}</p>
          <p>Updated on: {latestContent.updatedOn}</p>
          <p>Updated by: {latestContent.updatedBy}</p>
        </div>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default ContentViewPage;