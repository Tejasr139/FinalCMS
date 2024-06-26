// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const loginDTO = {
//       Email: email,
//       Password: password,
//     };
  
//     try {
//       const response = await fetch('http://localhost:5106/api/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginDTO),
//       });
  
//       if (!response.ok) {
//         const errorResponse = await response.json();
//         setError(errorResponse.errors); // or errorResponse.message, depending on your API response format
//       } else {
//         // Login successful, redirect to dashboard
//         navigate('/cmsmasterpage');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('An error occurred while logging in. Please try again.');
//     }
//   };

//   return (

    
//     <div className="loginBox">
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="emailInput" />
//         <br />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="passwordInput" />
//         <br />
//         <button type="submit" className="submitButton">Login</button>
//       </form>
//       {error && <div className="notificationError">{error}</div>}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5106/api/Login', { email, password });
      if (response.status === 200) {
        onLogin(response.data); // Notify parent component of successful login
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
