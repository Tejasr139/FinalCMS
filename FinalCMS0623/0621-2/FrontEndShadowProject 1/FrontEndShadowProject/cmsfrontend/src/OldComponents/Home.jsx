
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PublicHomePage = () => {
//     const [contentList, setContentList] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7296/api/ContentMaster');
//                 setContentList(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures this effect runs only once

//     return (
//         <div>
//             <h1>Public Home Page</h1>
//             <ul>
//                 {contentList.map(content => (
//                     <li key={content.id}>
//                         <h2>{content.pageTitle}</h2>
//                         <p>{content.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PublicHomePage;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicHomePage = () => {
  const [content, setContent] = useState({ pageTitle: '', description: '' });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('https://localhost:7296/api/ContentMaster/9'); // ID 9 for Home content
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

export default PublicHomePage;

