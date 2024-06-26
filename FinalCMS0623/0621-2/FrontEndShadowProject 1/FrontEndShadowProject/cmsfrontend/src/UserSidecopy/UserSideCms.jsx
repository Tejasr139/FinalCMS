import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './usersidecms.css';
import { useLocation } from 'react-router-dom';

const CmsMasterPage = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [contentList, setContentList] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const editorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fetchContentList = async () => {
      try {
        const { userDTO } = location.state || {};
        const { updateBy } = userDTO || {};
        setUpdatedBy(updateBy || '');

        const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${updateBy}`);
        setContentList(response.data);
      } catch (error) {
        console.error('Error fetching content list:', error);
      }
    };
    fetchContentList();
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contentData = {
      id: editId || 0,
      pageTitle: pageTitle || '',
      description: description || '',
      updatedOn: new Date().toISOString(),
      updatedBy: updatedBy || '',
    };

    try {
      if (editId) {
        // Update existing content
        await axios.put(`http://localhost:5106/api/ContentMaster/${editId}`, contentData);
      } else {
        // Create new content
        await axios.post('http://localhost:5106/api/ContentMaster', contentData);
      }

      // Fetch updated content list
      const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${updatedBy}`);
      setContentList(response.data);

      // Clear form fields
      setPageTitle('');
      setDescription('');
      setEditId(null);
      setError('');
    } catch (error) {
      console.error('Error saving content:', error);
      if (error.response && error.response.status === 404) {
        setError('Endpoint not found. Please check the server URL.');
      } else {
        setError('An error occurred while saving the content. Please try again.');
      }
    }
  };

  const handleEdit = (content) => {
    setPageTitle(content.pageTitle || '');
    setDescription(content.description || '');
    setEditId(content.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5106/api/ContentMaster/${id}`);
      setContentList(contentList.filter((content) => content.id !== id));
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };

  return (
    <div className="cmpcontainer">
      <h2>CMS Master Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Page Title:</label>
          <input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <ReactQuill value={description} onChange={setDescription} ref={editorRef} />
        </div>
        <div>
          <label>Updated By:</label>
          <input type="text" value={updatedBy} readOnly />
        </div>
        <button type="submit">Save</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label>Search:</label>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Page Title</th>
            <th>Description</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contentList
            .filter((content) => content.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((content) => (
              <tr key={content.id}>
                <td>{content.pageTitle}</td>
                <td dangerouslySetInnerHTML={{ __html: content.description }}></td>
                <td>{content.updatedBy}</td>
                <td>
                  <button onClick={() => handleEdit(content)}>Edit</button>
                  <button onClick={() => handleDelete(content.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CmsMasterPage;




//------------------------ WORKING GOOD----------------------------



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import './usersidecms.css';
// import { useLocation } from 'react-router-dom';

// const CmsMasterPage = () => {
//   const [pageTitle, setPageTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [updatedBy, setUpdatedBy] = useState('');
//   const [contentList, setContentList] = useState([]);
//   const [error, setError] = useState('');
//   const [editId, setEditId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const editorRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchContentList = async () => {
//       try {
//         const { updatedBy } = location.state || {};
//         setUpdatedBy(updatedBy);
//         const response = await axios.get('http://localhost:5106/api/ContentMaster');
//         setContentList(response.data);
//       } catch (error) {
//         console.error('Error fetching content list:', error);
//       }
//     };
//     fetchContentList();
//   }, [location.state]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const contentData = {
//       id: editId || 0,
//       pageTitle,
//       description,
//       updatedOn: new Date().toISOString(),
//       updatedBy,
//     };
  
//     try {
//       if (editId) {
//         // Update existing content
//         await axios.put(`http://localhost:5106/api/ContentMaster/${editId}`, contentData);
//       } else {
//         // Create new content
//         await axios.post('http://localhost:5106/api/ContentMaster', contentData);
//       }
  
//       // Fetch updated content list
//       const response = await axios.get('http://localhost:5106/api/ContentMaster');
//       setContentList(response.data);
  
//       // Clear form fields
//       setPageTitle('');
//       setDescription('');
//       setEditId(null);
//       setError('');
//     } catch (error) {
//       console.error('Error saving content:', error);
//       if (error.response && error.response.status === 404) {
//         setError('Endpoint not found. Please check the server URL.');
//       } else {
//         setError('An error occurred while saving the content. Please try again.');
//       }
//     }
//   };

//   const handleEdit = (content) => {
//     setPageTitle(content.pageTitle);
//     setDescription(content.description);
//     setEditId(content.id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5106/api/ContentMaster/${id}`);
//       setContentList(contentList.filter((content) => content.id !== id));
//     } catch (error) {
//       console.error('Error deleting content:', error);
//     }
//   };

//   return (
//     <div className="cmpcontainer">
//       <h2>CMS Master Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Page Title:</label>
//           <input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} />
//         </div>
//         <div>
//           <label>Description:</label>
//           <ReactQuill value={description} onChange={setDescription} ref={editorRef} />
//         </div>
//         <div>
//           <label>Updated By:</label>
//           <input type="text" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} readOnly />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//       {error && <div className="error-message">{error}</div>}
//       <div>
//         <label>Search:</label>
//         <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Page Title</th>
//             <th>Description</th>
//             <th>Updated By</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contentList
//             .filter((content) => content.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()))
//             .map((content) => (
//               <tr key={content.id}>
//                 <td>{content.pageTitle}</td>
//                 <td dangerouslySetInnerHTML={{ __html: content.description }}></td>
//                 <td>{content.updatedBy}</td>
//                 <td>
//                   <button onClick={() => handleEdit(content)}>Edit</button>
//                   <button onClick={() => handleDelete(content.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CmsMasterPage;
