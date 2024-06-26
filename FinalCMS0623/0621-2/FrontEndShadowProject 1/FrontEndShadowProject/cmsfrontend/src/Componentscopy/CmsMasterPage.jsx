// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './cmsmasterpage.css'

// function App() {
//   const [contentMasters, setContentMasters] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [contentMaster, setContentMaster] = useState({
//     Id: 0,
//     Title: '',
//     Description: '',
//     UpdatedBy: ''
//   });

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:5106/api/ContentMaster');
//       setContentMasters(response.data);
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (contentMaster.Id === 0) {
//       await axios.post('http://localhost:5106/api/ContentMaster', contentMaster);
//     } else {
//       await axios.put(`http://localhost:5106/api/ContentMaster/${contentMaster.Id}`, contentMaster);
//     }
//     setShowForm(false);
//     setContentMaster({
//       Id: 0,
//       Title: '',
//       Description: '',
//       UpdatedBy: ''
//     });
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5106/api/ContentMaster/${id}`);
//   };

//   const handleEdit = async (id) => {
//     const response = await axios.get(`http://localhost:5106/api/ContentMaster/${id}`);
//     setContentMaster(response.data);
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setContentMaster({
//       Id: 0,
//       Title: '',
//       Description: '',
//       UpdatedBy: ''
//     });
//   };

//   return (
//     <div>
//       <h1>Content Master</h1>
//       <button onClick={() => setShowForm(true)}>Add Content</button>
//       <ul>
//         {contentMasters.map((contentMaster) => (
//           <li key={contentMaster.Id}>
//             <h2>{contentMaster.Title}</h2>
//             <p>{contentMaster.Description}</p>
//             <p>Updated by: {contentMaster.UpdatedBy}</p>
//             <button onClick={() => handleEdit(contentMaster.Id)}>Edit</button>
//             <button onClick={() => handleDelete(contentMaster.Id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="hidden"
//             value={contentMaster.Id}
//             onChange={(event) =>
//               setContentMaster({...contentMaster, Id: event.target.value })
//             }
//           />
//           <label>
//             Title:
//             <input
//               type="text"
//               value={contentMaster.Title}
//               onChange={(event) =>
//                 setContentMaster({...contentMaster, Title: event.target.value })
//               }
//             />
//           </label>
//           <br />
//           <label>
//             Description:
//             <textarea
//               value={contentMaster.Description}
//               onChange={(event) =>
//                 setContentMaster({...contentMaster, Description: event.target.value })
//               }
//             />
//           </label>
//           <br />
//           <label>
//             Updated By:
//             <input
//               type="text"
//               value={contentMaster.UpdatedBy}
//               onChange={(event) =>
//                 setContentMaster({...contentMaster, UpdatedBy: event.target.value })
//               }
//             />
//           </label>
//           <br />
//           <button type="submit">Save</button>
//           <button type="button" onClick={handleCancel}>
//             Cancel
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default App;































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function CmsMasterPage() {
//   const [pageTitle, setPageTitle] = useState('');
//   const [description, setDescription] = useState('');
//   //const [updatedBy, setUpdatedBy] = useState('');
//   const [contentList, setContentList] = useState([]);
//   //const [error, setError] = useState('');
//   const [deleteId, setDeleteId] = useState('');
//   const [editId, setEditId] = useState(null);
//   const { username } = useParams(); // Get username from URL parameter

//   const [loginDTO, setLoginDTO] = useState({}); // Initialize loginDTO state
//   const [contents, setContents] = useState([]); // Initialize contents state
//   const [error, setError] = useState(''); // Initialize error state



//   const [updatedBy, setUpdatedBy] = useState(''); // Initialize updatedBy state
//   const [userTypes, setUserTypes] = useState([]); // Initialize userTypes state
//   //const [error, setError] = useState(''); // Initialize error state


//   const { emailId } = useParams(); 

//   useEffect(() => {
//     async function fetchLoginDTO() {
//       try {
//         const response = await axios.get('http://localhost:5106/api/Login/GetLogin'); // Assuming this API returns the login DTO
//         const loginData = response.data;
//         setLoginDTO(loginData);
//       } catch (error) {
//         console.error('Error fetching login DTO:', error);
//         setError('Failed to fetch login DTO. Please try again later.');
//       }
//     }
//     fetchLoginDTO();
//   }, []);

//   useEffect(() => {
//     async function fetchContents() {
//       if (!loginDTO.UpdatedBy) {
//         setError('Updated By field is required');
//         return;
//       }
//       try {
//         const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${loginDTO.UpdatedBy}`);
//         setContents(response.data);
//       } catch (error) {
//         console.error('Error fetching contents:', error);
//         setError('Failed to fetch contents. Please try again later.');
//       }
//     }
//     fetchContents();
//   }, [loginDTO]);
  
  
//   const fetchUserTypesByUsername = async (updatedBy) => {
//     if (!updatedBy) {
//       setError('Updated By field is required');
//       return;
//     }
//     try {
//       const response = await axios.get(`http://localhost:5106/api/UserTypeMaster/GetUserTypesByUpdatedBy?updatedBy=${updatedBy}`);
//       setUserTypes(response.data);
//     } catch (error) {
//       console.error('Error fetching user types:', error);
//       setError('Failed to fetch user types. Please try again later.');
//     }
//   };


//   useEffect(() => {
//     fetchUserTypesByUsername(updatedBy); // Call fetchUserTypesByUsername when updatedBy changes
//   }, [updatedBy]);



//   const handleAddContent = async () => {
//     try {
//       const response = await axios.post('http://localhost:5106/api/ContentMaster', {
//         pageTitle,
//         description,
//         updatedBy,
//         userId
//       });
//       setContentList([...contentList, response.data]);
//       setPageTitle('');
//       setDescription('');
//       setUpdatedBy('');
//     } catch (error) {
//       console.error('Error adding content:', error);
//       setError('Failed to add content. Please try again later.');
//     }
//   };

//   const handleEditContent = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5106/api/ContentMaster/${id}`);
//       const content = response.data;
//       setPageTitle(content.pageTitle);
//       setDescription(content.description);
//       setUpdatedBy(content.updatedBy);
//       setEditId(id);
//     } catch (error) {
//       console.error('Error fetching content:', error);
//       setError('Failed to fetch content. Please try again later.');
//     }
//   };

//   const handleUpdateContent = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5106/api/ContentMaster/${editId}`, {
//         pageTitle,
//         description,
//         updatedBy,
//         userId
//       });
//       const updatedContentList = contentList.map((content) => {
//         if (content.id === editId) {
//           return response.data;
//         }
//         return content;
//       });
//       setContentList(updatedContentList);
//       setPageTitle('');
//       setDescription('');
//       setUpdatedBy('');
//       setEditId(null);
//     } catch (error) {
//       console.error('Error updating content:', error);
//       setError('Failed to update content. Please try again later.');
//     }
//   };

//   const handleDeleteContent = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5106/api/ContentMaster/${id}`);
//       const updatedContentList = contentList.filter((content) => content.id!== id);
//       setContentList(updatedContentList);
//     } catch (error) {
//       console.error('Error deleting content:', error);
//       setError('Failed to delete content. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>CMS Master Page</h2>
//       {error && <p style={{ color: 'ed' }}>{error}</p>}
//       <form>
//         <label>Page Title:</label>
//         <input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
//         <br />
//         <label>Description:</label>
//         <ReactQuill value={description} onChange={(e) => setDescription(e.target.value)} />
//         <br />
//         <label>Updated By:</label>
//         <input type="text" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
//         <br />
//         <button type="submit" onClick={handleAddContent}>Add Content</button>
//         {editId && (
//           <button type="submit" onClick={handleUpdateContent}>Update Content</button>
//         )}
//       </form>
//       <ul>
//         {contentList.map((content) => (
//           <li key={content.id}>
//             <h3>{content.pageTitle}</h3>
//             <p>{content.description}</p>
//             <p>Updated By: {content.updatedBy}</p>
//             <button onClick={() => handleEditContent(content.id)}>Edit</button>
//             <button onClick={() => handleDeleteContent(content.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CmsMasterPage;




//-------------------Some What_-------------------------------------


import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [content, setContent] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const updatedBy = params.get('updatedBy');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${updatedBy}`);
      setContentList(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setError('Failed to fetch content. Please try again later.');
      setLoading(false);
    }
  };

  const handleEditContent = (content) => {
    // Add your edit content logic here
    console.log('Edit content:', content);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Content List</h2>
      {loading? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Page Title</th>
              <th>Description</th>
              <th>Updated On</th>
              <th>Updated By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contentList.map((content) => (
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>{content.pageTitle}</td>
                <td dangerouslySetInnerHTML={{ __html: content.description }}></td>
                <td>{new Date(content.updatedOn).toLocaleString()}</td>
                <td>{content.updatedBy}</td>
                <td>
                  <button onClick={() => handleEditContent(content)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p style={{ color: 'ed' }}>{error}</p>}
    </div>
  );
}

export default Dashboard;



// import React, { useEffect, useState, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// //import React, { useContext } from 'react';
// import { LoginContext } from './createContext';

// function Dashboard() {

//   const { loginData } = useContext(LoginContext);
//   const { email, updatedBy } = useContext(LoginContext);
  


//   const [content, setContent] = useState([]);
//   const [contentList, setContentList] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   //const updatedBy = params.get('updatedBy');
//   //const email = params.get('email');

//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const fetchContent = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${updatedBy}`);
//       setContentList(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching content:', error);
//       setError('Failed to fetch content. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${search}`);
//       setContent(response.data);
//     } catch (error) {
//       console.error('Error searching content:', error);
//       setError('Failed to search content. Please try again later.');
//     }
//   };



//   if (!loginData) {
//     return <div>You are not logged in.</div>;
//   }




//   return (
//     <div>
//       <h1>Welcome, {updatedBy} ({loginData.email})</h1>
//       <h1>Dashboard</h1>
//       {updatedBy && email ? (
//         <h2>Welcome, {updatedBy} ({email})</h2>
//       ) : (
//         <h2>Welcome, Guest</h2>
//       )}
//       <h2>Content List</h2>
//       <input type="text" placeholder="Search by updatedBy" value={search} onChange={e => setSearch(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Page Title</th>
//             <th>Description</th>
//             <th>Updated On</th>
//             <th>Updated By</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {content.map((content) => (
//             <tr key={content.id}>
//               <td>{content.id}</td>
//               <td>{content.pageTitle}</td>
//               <td dangerouslySetInnerHTML={{ __html: content.description }}></td>
//               <td>{new Date(content.updatedOn).toLocaleString()}</td>
//               <td>{content.updatedBy}</td>
//               <td>
//                 <button onClick={() => handleEditContent(content)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Dashboard;