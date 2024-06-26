import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import './usersidecms.css';

// import React, { useRef } from 'react';

const CmsMasterPage = ({ updateBy }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [contentList, setContentList] = useState([]);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [editId, setEditId] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); // Add a state for search term

  const editorRef = useRef(null);

  useEffect(() => {
    const fetchContentList = async () => {
      try {
        const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${updateBy}`);
        setContentList(response.data);
      } catch (error) {
        console.error('Error fetching content list:', error);
      }
    };
    fetchContentList();
  }, [updateBy]);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const content = editorRef.current.getEditor().root.innerHTML;
    console.log(content);
    try {
      const newContent = {
        id: editId || 0, 
        pageTitle,
        description,
        updatedBy,
        updatedOn: new Date().toISOString() 
      };

      console.log('Payload being sent:', newContent);

      if (editId) {
        const response = await axios.put(`http://localhost:5106/api/ContentMaster/${editId}`, newContent, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response after PUT:', response.data);
        setEditId(null); 
      } else {
        const response = await axios.post('http://localhost:5106/api/ContentMaster', newContent, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response after POST:', response.data);
      }

      setPageTitle('');
      setDescription('');
      setUpdatedBy('');
      setError('');
    } catch (error) {
      console.error('Error adding/updating content:', error);
      if (error.response && error.response.data) {
        console.error('Error response:', error.response.data);
        const { errors } = error.response.data;
        if (errors) {
          const errorMessage = Object.values(errors).join('\n');
          setError(errorMessage);
        } else {
          setError('Failed to add/update content. Please try again later.');
        }
      } else {
        setError('Failed to add/update content. Please try again later.');
      }
    }
  };

  const handleEditContent = (content) => {
    setEditId(content.id);
    setPageTitle(content.pageTitle);
    setDescription(content.description);
    setUpdatedBy(content.updatedBy);
  };

  const handleDeleteContent = async () => {
    try {
      const response = await axios.delete(`http://localhost:5106/api/ContentMaster/${deleteId}`);
      console.log('Response after DELETE:', response.data);
      setDeleteId(''); 
      setError('');
    } catch (error) {
      console.error('Error deleting content:', error);
      setError('Failed to delete content. Please try again later.');
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5106/api/ContentMaster/GetContentByUpdatedBy/${searchTerm}`);
      setContentList(response.data);
    } catch (error) {
      console.error('Error searching content:', error);
    }
  };

  return (
    <div className="cmpcontainer">
      <h2>{editId ? 'Edit Content' : 'Add New Content'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="pageTitle">Page Title:</label>
          <input type="text" id="pageTitle" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
        </div>
        <br></br>
        <div>
          <label htmlFor="description">Description:</label>
          <ReactQuill
            id="description"
            value={description}
            onChange={setDescription}
            modules={CmsMasterPage.modules} 
            formats={CmsMasterPage.formats} 
            placeholder="Enter description here..."
            required
          />
        </div>
        <div>
          <label htmlFor="updatedBy">Updated By:</label>
          <input type="text" id="updatedBy" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
        </div>
        <button type="submit">{editId? 'Update Content' : 'Add Content'}</button>
        </form>
          
                {error && <p className="error-message">{error}</p>}
          
                <h2>Delete Content by ID</h2>
                <div>
                  <label htmlFor="deleteId">Enter ID to Delete:</label>
                  <input type="text" id="deleteId" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
                  <button type="button" onClick={handleDeleteContent}>Delete</button>
                </div>
          
                <h2>Search Content by Updated By</h2>
                <form onSubmit={handleSearch}>
                  <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter updated by" />
                  <button type="submit">Search</button>
                </form>
          
                <h2>Content List</h2>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Page Title</th>
                      <th>Description</th>
                      <th>Updated By</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentList.map((content) => (
                      <tr key={content.id}>
                        <td>{content.id}</td>
                        <td>{content.pageTitle}</td>
                        <td>
                          {content.description.includes('<img') ? (
                            <div dangerouslySetInnerHTML={{ __html: content.description }} />
                          ) : (
                            content.description
                          )}
                        </td>
                        <td>{content.updatedBy}</td>
                        <td>
                          <button onClick={() => handleEditContent(content)}>Edit</button>
                          <button onClick={() => setDeleteId(content.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          };
          
          // Define modules and formats for ReactQuill
          CmsMasterPage.modules = {
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['italic', 'underline', 'strike'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['link', 'image', 'video'],
              ['clean']
            ]
          };
          
          CmsMasterPage.formats = [
            'header',
            'font',
            'size',
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'align',
            'link',
            'image',
            'video',
            'color',
            'background'
          ];
          
          export default CmsMasterPage;
                