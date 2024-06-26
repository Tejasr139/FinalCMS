import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserDTO } from '../dto/UserDTO'; 
import './login.css'; // Import the CSS file

const Login = ({ onSuperAdminLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (onSuperAdminLogin && email === 'superadmin@gmail.com' && password === 'password123') {
      onSuperAdminLogin(email, password);
      return;
    }

    const loginData = {
      Email: email,
      Password: password
    };

    try {
      const response = await axios.post('http://localhost:5106/api/Login', loginData);

      if (response.status === 200 && response.data) {
        // Handle successful login
        console.log('Login successful');
        setError('');

        // Store the email input in a variable
        const userEmail = email;

        // URL-encode the email for the GET request
        const encodedEmail = encodeURIComponent(userEmail);

        // Fetch updateBy value using the stored email
        const updateByResponse = await axios.get(`http://localhost:5106/api/UserMaster/GetUpdatedBy?email=${encodedEmail}`);

        if (updateByResponse.status === 200) {
          const updateBy = updateByResponse.data;

          // Create UserDTO and set the updateBy value
          const userDTO = new UserDTO();
          userDTO.updateBy = updateBy;

          // Navigate to Printdto with userDTO as state
          navigate('/CMSMasterPage', { state: { userDTO } });
        } else {
          setError('Failed to fetch updateBy value');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
      <h5><center>Don't Have Account</center></h5>
      <button onClick={handleRegister} className="register-button">Register</button>
    </div>
  );
};

export default Login;
