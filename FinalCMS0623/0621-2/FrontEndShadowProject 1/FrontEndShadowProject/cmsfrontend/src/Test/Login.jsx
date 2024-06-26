 //import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Add this import statement


import React, { useState, useContext } from 'react';
import { LoginContext } from './createContext';





const Login = () => {
    const { setLoginData } = useContext(LoginContext);
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const requestBody = { email, password };
      console.log(requestBody);
      try {
        const response = await fetch('http://localhost:5106/api/UserMaster/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            Email: email, 
            Password: password, 
            UpdatedBy: '' // or some default value 
          })
        });
        const data = await response.json();
        if (data.success) {
          setNotification('Login successful!');
          setIsLoggedIn(true);
          setLoginData({...data.user }); // Store the user data in the context
          navigate(`/login-success`);
        } else {
          setNotification('Invalid email or password');
        }
      } catch (error) {
        setNotification(`Error logging in: ${error.message}`);
      }
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
          <Link to="/adduser" style={{ textDecoration: 'none', color: 'white' }}>
            Create an Account
          </Link>
        </button>
      </div>
    );
  }


  export default Login;













// //import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Add this import statement


// import React, { useState, useContext } from 'react';
// import { LoginContext } from './createContext';



// const Login = () => {
  
//   const { setLoginData } = useContext(LoginContext);
//   const navigate = useNavigate(); 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [notification, setNotification] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const requestBody = { email, password };
//     console.log(requestBody);
//     try {
//       const response = await fetch('http://localhost:5106/api/UserMaster/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ 
//           Email: email, 
//           Password: password, 
//           UpdatedBy: '' // or some default value 
//         })
//       });
//       const data = await response.json();
//       if (data.success) {
//         setNotification('Login successful!');
//         setIsLoggedIn(true);
//         setLoginData({ email, updatedBy: data.updatedBy }); // Store the updatedBy value in the context
//         navigate(`/login-success`);
//       } else {
//         setNotification('Invalid email or password');
//       }
//     } catch (error) {
//       setNotification(`Error logging in: ${error.message}`);
//     }
//   };


//   return (
//     <div style={{ textAlign: 'center', marginTop: '20vh' }}>
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
//       {isLoggedIn? (
//         <p>You are logged in!</p>
//       ) : (
//         <p>You are not logged in.</p>
//       )}
//       <br />
//       <button style={{ fontSize: '18px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white' }}>
//         <Link to="/adduser" style={{ textDecoration: 'none', color: 'white' }}>
//           Create an Account
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default Login;