import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './adduser.css';
import { LoginContext } from './createContext'; 
 
 
 const AddUser = () => {
  const { setLoginData } = useContext(LoginContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
      userType: 'Admin', 
      updatedOn: new Date().toISOString(), 
      updatedBy: '', 
    },
  });

  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value });

    if (name === 'userName') {
      setUser({
      ...user,
        userName: value, 
        userTypeMaster: {
        ...user.userTypeMaster,
          updatedBy: value, 
        },
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!user.userName) {
      errors.userName = 'Username is required';
    }
    if (!user.password) {
      errors.password = 'Password is required';
    }
    if (!user.email) {
      errors.email = 'Email is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const userData = {...user };
    delete userData.userTypeMaster.id; // Remove the id property
    delete userData.userTypeMaster.updatedOn; // Remove the updatedOn property

    fetch('users.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
        setNotification('User added successfully!');
        setUser({
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
            userType: 'Admin', 
            updatedOn: new Date().toISOString(), 
            updatedBy: '', 
          },
        });
        setLoginData({...user }); // Store the user data in the context
        setLoggedIn(true);
        navigate('/login-success'); 
      })
    .catch((error) => {
        setNotification(`Error adding user: ${error.message}`);
      });
  };

  if (loggedIn) {
    return (
      <div className="form-container">
        <h1>Login Successful!</h1>
        <p>Updated By: {user.userTypeMaster.updatedBy}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Add User</h1>
      {notification && (
        <div style={{ color: notification.includes('Error')? 'ed' : 'green' }}>
          {notification}
        </div>
      )}
      {Object.keys(errors).length > 0 && (
        <div style={{ color: 'ed' }}>
          {Object.keys(errors).map((key) => (
            <div key={key}>{errors[key]}</div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={user.city} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" value={user.state} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={user.country} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Pincode:
          <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AddUser;




































// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './adduser.css';
// import { LoginContext } from './createContext';

// const AddUser = () => {
//   const { setLoginData } = useContext(LoginContext);
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     userName: '',
//     password: '',
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     state: '',
//     country: '',
//     pincode: '',
//     userTypeId: 0,
//     userTypeMaster: {
//       id: 0,
//       userType: 'Admin', 
//       updatedOn: new Date().toISOString(), 
//       updatedBy: '', 
//     },
//   });

//   const [notification, setNotification] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({...user, [name]: value });

//     if (name === 'userName') {
//       setUser({
//        ...user,
//         userName: value, 
//         userTypeMaster: {
//          ...user.userTypeMaster,
//           updatedBy: value, 
//         },
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const errors = {};
//     if (!user.userName) {
//       errors.userName = 'Username is required';
//     }
//     if (!user.password) {
//       errors.password = 'Password is required';
//     }
//     if (!user.email) {
//       errors.email = 'Email is required';
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     fetch('http://localhost:5106/api/UserMaster', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//        ...user,
//         userTypeMaster: {
//          ...user.userTypeMaster,
//           updatedBy: user.userName, 
//         },
//       }),
//     })
//      .then((response) => response.json())
//      .then((data) => {
//         setNotification('User added successfully!');
//         setUser({
//           userName: '',
//           password: '',
//           email: '',
//           firstName: '',
//           lastName: '',
//           address: '',
//           city: '',
//           state: '',
//           country: '',
//           pincode: '',
//           userTypeId: 0,
//           userTypeMaster: {
//             id: 0,
//             userType: 'Admin', 
//             updatedOn: new Date().toISOString(), 
//             updatedBy: '', 
//           },
//         });
//         setLoginData({...user, updatedBy: user.userName });
//         setLoggedIn(true);
//         navigate('/login-success'); 
//       })
//      .catch((error) => {
//         setNotification(`Error adding user: ${error.message}`);
//       });
//   };

//   if (loggedIn) {
//     return (
//       <div className="form-container">
//         <h1>Login Successful!</h1>
//         <p>Updated By: {user.userTypeMaster.updatedBy}</p>
//         <p>Email: {user.email}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="form-container">
//       <h1>Add User</h1>
//       {notification && (
//         <div style={{ color: notification.includes('Error')? 'ed' : 'green' }}>
//           {notification}
//         </div>
//       )}
//       {Object.keys(errors).length > 0 && (
//         <div style={{ color: 'ed' }}>
//           {Object.keys(errors).map((key) => (
//             <div key={key}>{errors[key]}</div>
//           ))}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={user.password} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={user.email} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" name="address" value={user.address} onChange={handleInputChange} />
//           </label>
//         <br />
//         <label>
//           City:
//           <input type="text" name="city" value={user.city} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           State:
//           <input type="text" name="state" value={user.state} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Country:
//           <input type="text" name="country" value={user.country} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Pincode:
//           <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default AddUser;











// //import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './adduser.css';



// import React, { useState, useContext } from 'react';
// import { LoginContext } from './createContext';



// const AddUser = () => {
//   const { setLoginData } = useContext(LoginContext);
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     userName: '',
//     password: '',
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     state: '',
//     country: '',
//     pincode: '',
//     userTypeId: 0,
//     userTypeMaster: {
//       id: 0,
//       userType: 'Admin', // default user type
//       updatedOn: new Date().toISOString(), // current date and time
//       updatedBy: '', // default updated by will be set to username
//     },
//   });

//   const [notification, setNotification] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({...user, [name]: value });

//     if (name === 'userName') {
//       setUser({
//        ...user,
//         userName: value, // Update userName property
//         userTypeMaster: {
//          ...user.userTypeMaster,
//           updatedBy: value, // Update updatedBy property
//         },
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate the form data
//     const errors = {};
//     if (!user.userName) {
//       errors.userName = 'Username is required';
//     }
//     if (!user.password) {
//       errors.password = 'Password is required';
//     }
//     if (!user.email) {
//       errors.email = 'Email is required';
//     }
//     // Add more validation rules as needed

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     // Send a POST request to the API endpoint
//     fetch('http://localhost:5106/api/UserMaster', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//        ...user,
//         userTypeMaster: {
//          ...user.userTypeMaster,
//           updatedBy: user.userName, // Set updatedBy to username when registering
//         },
//       }),
//     })
//      .then((response) => response.json())
//      .then((data) => {
//         setNotification('User added successfully!');
//         setUser({
//           userName: '',
//           password: '',
//           email: '',
//           firstName: '',
//           lastName: '',
//           address: '',
//           city: '',
//           state: '',
//           country: '',
//           pincode: '',
//           userTypeId: 0,
//           userTypeMaster: {
//             id: 0,
//             userType: 'Admin', // default user type
//             updatedOn: new Date().toISOString(), // current date and time
//             updatedBy: '', // default updated by will be set to username
//           },
//         });
//         setLoginData({ ...user, updatedBy: user.userName });
//         setLoggedIn(true);
//         navigate('/login-success'); // Navigate to another page

//         // //setLoginData({ email: user.email, updatedBy: user.userName }); // Store the register data in the context
//         // setLoginData({...user, updatedBy: user.userName });
//         // setLoggedIn(true);
//       })
//      .catch((error) => {
//         setNotification(`Error adding user: ${error.message}`);
//       });
//   };

//   if (loggedIn) {
//     return (
//       <div>
//         <h1>Login Successful!</h1>
//         <p>Updated By: {user.userTypeMaster.updatedBy}</p>
//         <p>Email: {user.email}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Add User</h1>
//       {notification && (
//         <div style={{ color: notification.includes('Error')? 'ed' : 'green' }}>
//           {notification}
//         </div>
//       )}
//       {Object.keys(errors).length > 0 && (
//         <div style={{ color: 'ed' }}>
//           {Object.keys(errors).map((key) => (
//             <div key={key}>{errors[key]}</div>
//           ))}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={user.password} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={user.email} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" name="address" value={user.address} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           City:
//           <input type="text" name="city" value={user.city} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           State:
//           <input type="text" name="state" value={user.state} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Country:
//           <input type="text" name="country" value={user.country} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Pincode:
//           <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} />
//         </label>
//         <br />
//         <button type="submit">Add User</button>
//       </form>
//     </div>
//   );
// }

// export default AddUser;