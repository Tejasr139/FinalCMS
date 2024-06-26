import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CmsMasterPage() {
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [contentList, setContentList] = useState([]);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [editId, setEditId] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetchContent(userId);
  }, [userId]);

  const fetchContent = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5106/api/ContentMaster/${userId}`);
      setContentList(response.data);
    } catch (error) {
      console.error('Error fetching content:', error);
      setError('Failed to fetch content. Please try again later.');
    }
  };

  const handleAddContent = async () => {
    try {
      const response = await axios.post('http://localhost:5106/api/ContentMaster', {
        pageTitle,
        description,
        updatedBy,
        userId
      });
      setContentList([...contentList, response.data]);
      setPageTitle('');
      setDescription('');
      setUpdatedBy('');
    } catch (error) {
      console.error('Error adding content:', error);
      setError('Failed to add content. Please try again later.');
    }
  };

  const handleEditContent = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5106/api/ContentMaster/${id}`);
      const content = response.data;
      setPageTitle(content.pageTitle);
      setDescription(content.description);
      setUpdatedBy(content.updatedBy);
      setEditId(id);
    } catch (error) {
      console.error('Error fetching content:', error);
      setError('Failed to fetch content. Please try again later.');
    }
  };

  const handleUpdateContent = async () => {
    try {
      const response = await axios.put(`http://localhost:5106/api/ContentMaster/${editId}`, {
        pageTitle,
        description,
        updatedBy,
        userId
      });
      const updatedContentList = contentList.map((content) => {
        if (content.id === editId) {
          return response.data;
        }
        return content;
      });
      setContentList(updatedContentList);
      setPageTitle('');
      setDescription('');
      setUpdatedBy('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating content:', error);
      setError('Failed to update content. Please try again later.');
    }
  };

  const handleDeleteContent = async (id) => {
    try {
      await axios.delete(`http://localhost:5106/api/ContentMaster/${id}`);
      const updatedContentList = contentList.filter((content) => content.id!== id);
      setContentList(updatedContentList);
    } catch (error) {
      console.error('Error deleting content:', error);
      setError('Failed to delete content. Please try again later.');
    }
  };

  return (
    <div>
      <h2>CMS Master Page</h2>
      {error && <p style={{ color: 'ed' }}>{error}</p>}
      <form>
        <label>Page Title:</label>
        <input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
        <br />
        <label>Description:</label>
        <ReactQuill value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>Updated By:</label>
        <input type="text" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
        <br />
        <button type="submit" onClick={handleAddContent}>Add Content</button>
        {editId && (
          <button type="submit" onClick={handleUpdateContent}>Update Content</button>
        )}
      </form>
      <ul>
        {contentList.map((content) => (
          <li key={content.id}>
            <h3>{content.pageTitle}</h3>
            <p>{content.description}</p>
            <p>Updated By: {content.updatedBy}</p>
            <button onClick={() => handleEditContent(content.id)}>Edit</button>
            <button onClick={() => handleDeleteContent(content.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CmsMasterPage;