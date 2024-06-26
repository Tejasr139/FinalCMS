import React, { useState } from 'react';
import './adminlogin.css';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="admin-card">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        /><br></br>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        /><br></br>
        <button type="submit">Login</button>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </form>
    </div>
  );
}

export default AdminLogin;