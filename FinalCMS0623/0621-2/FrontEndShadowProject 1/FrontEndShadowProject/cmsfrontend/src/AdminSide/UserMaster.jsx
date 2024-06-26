import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserMaster.css';

const UserMaster = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    id: 0,
    userName: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    userTypeId: 0,
    userTypeMaster: {
      id: 0,
      userType: '',
      updatedOn: '',
      updatedBy: ''
    }
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5106/api/UserMaster');
    setUsers(response.data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [parent, child] = name.split('.');

    if (parent && child) {
      setUser((prevUser) => ({
       ...prevUser,
        [parent]: {
         ...prevUser[parent],
          [child]: value,
        },
      }));
    } else {
      setUser({...user, [name]: value });
    }
  };

  const handleSaveUser = async (event) => {
    event.preventDefault();
    const userData = {
      id: user.id,
      userName: user.userName,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      city: user.city,
      state: user.state,
      country: user.country,
      pincode: user.pincode,
      userTypeId: user.userTypeId,
      userTypeMaster: {
        id: user.userTypeId,
        userType: user.userTypeMaster.userType,
        updatedOn: user.userTypeMaster.updatedOn,
        updatedBy: user.userTypeMaster.updatedBy
      }
    };

    try {
      if (user.id === 0) {
        const response = await axios.post('http://localhost:5106/api/UserMaster', userData);
        console.log(response);
      } else {
        const response = await axios.put(`http://localhost:5106/api/UserMaster/${user.id}`, userData);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }

    fetchUsers();
    setUser({
      id: 0,
      userName: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      userTypeId: 0,
      userTypeMaster: {
        id: 0,
        userType: '',
        updatedOn: '',
        updatedBy: ''
      }
    });
  };

  const handleEditUser = (id) => {
    const selectedUser = users.find((u) => u.id === id);
    setUser(selectedUser);
  };

  const handleDeleteUser = async (id) => {
    await axios.delete(`http://localhost:5106/api/UserMaster/${id}`);
    fetchUsers();
  };

  return (
    <div className="container">
      <h2>User Master</h2>
      <form onSubmit={handleSaveUser}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input type="text" name="userName" value={user.userName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={user.address} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={user.city} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" value={user.state} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" name="country" value={user.country} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="userTypeMaster.userType">User Type:</label>
          <input type="text" name="userTypeMaster.userType" value={user.userTypeMaster.userType} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="userTypeMaster.updatedOn">Updated On:</label>
          <input type="datetime-local" name="userTypeMaster.updatedOn" value={user.userTypeMaster.updatedOn} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="userTypeMaster.updatedBy">Updated By:</label>
          <input type="text" name="userTypeMaster.updatedBy" value={user.userTypeMaster.updatedBy} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>User Type ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.userName}</td>
              <td>{u.email}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.address}</td>
              <td>{u.city}</td>
              <td>{u.state}</td>
              <td>{u.country}</td>
              <td>{u.pincode}</td>
              <td>{u.userTypeId}</td>
              <td className="actions">
                <button onClick={() => handleEditUser(u.id)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMaster;

