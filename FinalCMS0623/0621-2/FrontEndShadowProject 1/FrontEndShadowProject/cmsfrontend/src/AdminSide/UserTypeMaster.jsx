
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTypeMaster.css';

const UserTypeMasterPage = () => {
  const [userTypes, setUserTypes] = useState([]);
  const [userType, setUserType] = useState({ id: 0, userType: '', updatedOn: '', updatedBy: '' });

  useEffect(() => {
    fetchUserTypes();
  }, []);

  const fetchUserTypes = async () => {
    const response = await axios.get('http://localhost:5106/api/UserTypeMaster');
    setUserTypes(response.data);
  };

  const handleEditUserType = (id) => {
    const selectedUserType = userTypes.find((userType) => userType.id === id);
    setUserType(selectedUserType);
  };

  const handleSaveUserType = async (event) => {
    event.preventDefault();
    if (userType.id === 0) {
      await axios.post('http://localhost:5106/api/UserTypeMaster', userType);
    } else {
      await axios.put(`http://localhost:5106/api/UserTypeMaster/${userType.id}`, userType);
    }
    fetchUserTypes();
    setUserType({ id: 0, userType: '', updatedOn: '', updatedBy: '' });
  };

  const handleDeleteUserType = async (id) => {
    await axios.delete(`http://localhost:5106/api/UserTypeMaster/${id}`);
    fetchUserTypes();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserType({...userType, [name]: value });
  };

  return (
    <div className="utmcontainer">
      <h1>User Type Master</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Type</th>
            <th>Updated On</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userTypes.map((userType) => (
            <tr key={userType.id}>
              <td>{userType.id}</td>
              <td>{userType.userType}</td>
              <td>{userType.updatedOn}</td>
              <td>{userType.updatedBy}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEditUserType(userType.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteUserType(userType.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add/Edit User Type</h2>
      <form onSubmit={handleSaveUserType}>
        {/* <div className="form-group">
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={userType.id}
            onChange={handleInputChange}
            className="form-control"
          />
        </div> */}
        <div className="form-group">
          <label>User Type:</label>
          <input
            type="text"
            name="userType"
            placeholder="User Type"
            value={userType.userType}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Updated On:</label>
          <input
            type="datetime-local"
            name="updatedOn"
            placeholder="Updated On"
            value={userType.updatedOn}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Updated By:</label>
          <input
            type="text"
            name="updatedBy"
            placeholder="Updated By"
            value={userType.updatedBy}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default UserTypeMasterPage;