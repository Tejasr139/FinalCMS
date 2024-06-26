// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Add this import statement

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [notification, setNotification] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate here

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
//   .then((response) => response.json())
//   .then((data) => {
//       if (data.success) {
//         setNotification('Login successful!');
//         setIsLoggedIn(true);
//         navigate('/cms-master-page'); // Use navigate instead of history.push
//       } else {
//         setNotification('Invalid email or password');
//       }
//     })
//   .catch((error) => {
//       setNotification(`Error logging in: ${error.message}`);
//     });
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
//         <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
//           Create an Account
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default Login;







  

//-----------------*********Working perfectly*************_____________________________

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
//         navigate(`/dashboard`);
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
//         <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
//           Create an Account
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default Login;























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [notification, setNotification] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:5106/api/UserMaster/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ Email: email, Password: password }) // Pass the email and password as a JSON object
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setNotification('Login successful!');
//           navigate(`/dashboard?updatedBy=${email}`);
//         } else {
//           setNotification('Invalid email or password');
//         }
//       })
//       .catch((error) => {
//         setNotification(`Error logging in: ${error.message}`);
//       });
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const loginData = { Email: email, Password: password };
    
//   //   console.log('Sending login request with data:', loginData);
  
//   //   fetch('http://localhost:5106/api/UserMaster/Login', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(loginData)
//   //   })
//   //   .then((response) => {
//   //     if (!response.ok) {
//   //       throw new Error(`Server responded with status ${response.status}`);
//   //     }
//   //     return response.json();
//   //   })
//   //   .then((data) => {
//   //     console.log('Received response data:', data);
//   //     if (data.success) {
//   //       setNotification('Login successful!');
//   //       navigate(`/dashboard?updatedBy=${email}`);
//   //     } else {
//   //       setNotification('Invalid email or password');
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     setNotification(`Error logging in: ${error.message}`);
//   //   });
//   // };

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
//     </div>
//   );
// }

// export default Login;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [notification, setNotification] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const loginData = { Email: email, Password: password };
    
//     console.log('Sending login request with data:', loginData);

//     fetch('http://localhost:5106/api/UserMaster/Login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ Email: email, Password: password }) // Pass the email and password as a JSON object
//           })
//     .then((response) => {
//       console.log('Server response status:', response.status);
//       if (!response.ok) {
//         return response.json().then((errorData) => {
//           console.error('Error response data:', errorData);
//           throw new Error(`Server responded with status ${response.status}`);
//         });
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('Received response data:', data);
//       if (data.success) {
//         setNotification('Login successful!');
//         navigate(`/dashboard?updatedBy=${email}`);
//       } else {
//         setNotification('Invalid email or password');
//       }
//     })
//     .catch((error) => {
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
//     </div>
//   );
// }

// export default Login;





















// //---------------------------Working ------------------------------------------------


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




