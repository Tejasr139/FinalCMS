import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Add this import statement

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigate here

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = { email, password };
    console.log(requestBody);
    fetch('http://localhost:5106/api/UserMaster/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Email: email, Password: password }) // Pass the email and password as a JSON object
    })
  .then((response) => response.json())
  .then((data) => {
      if (data.success) {
        setNotification('Login successful!');
        setIsLoggedIn(true);
        navigate('/cms-master-page'); // Use navigate instead of history.push
      } else {
        setNotification('Invalid email or password');
      }
    })
  .catch((error) => {
      setNotification(`Error logging in: ${error.message}`);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{notification}</p>
      {isLoggedIn? (
        <p>You are logged in!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <br />
      <button style={{ fontSize: '18px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white' }}>
        <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
          Create an Account
        </Link>
      </button>
    </div>
  );
}

export default Login;





//---------------------------Working ------------------------------------------------


// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [notification, setNotification] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const requestBody = { email, password };
//     console.log(requestBody);
//     fetch('http://localhost:5106/api/UserMaster/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ Email: email, Password: password }) // Pass the email and password as a JSON object
//     })
//    .then((response) => response.json())
//    .then((data) => {
//       if (data.success) {
//         setNotification('Login successful!');
//         setIsLoggedIn(true);
//       } else {
//         setNotification('Invalid email or password');
//       }
//     })
//    .catch((error) => {
//       setNotification(`Error logging in: ${error.message}`);
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       <p>{notification}</p>
//       {isLoggedIn? <p>You are logged in!</p> : <p>You are not logged in.</p>}
//     </div>
//   );
// }

// export default Login;
