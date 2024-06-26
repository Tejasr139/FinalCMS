// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './newregister.css';

// function Register() {
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
//       body: JSON.stringify(user),
//     })
//      .then((response) => response.json())
//      .then((data) => {
//         setNotification('User registered successfully!');
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
//         //navigate(`/login`); // Redirect to Login page
//       })
//      .catch((error) => {
//         setNotification(`Error registering user: ${error.message}`);
//       });
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       {notification && <div style={{ color: notification.includes('Error')? 'ed' : 'green' }}>{notification}</div>}
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;



//----------------------------------Working------------------------------------



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './newregister.css';

// function Register() {
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

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({...user, [name]: value });

//     if (name === 'userName') {
//       setUser({
//       ...user,
//         userName: value, // Update userName property
//         userTypeMaster: {
//         ...user.userTypeMaster,
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
//       body: JSON.stringify(user),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         setNotification('User registered successfully!');
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
//         //navigate(`/login`); // Redirect to Login page
//       })
//     .catch((error) => {
//         setNotification(`Error registering user: ${error.message}`);
//       });
//   };

//   return (
//     <div className="register-box">
//       <h1>Register</h1>
//       {notification && <div className={notification.includes('Error')? 'notification error' : 'notification success'}>{notification}</div>}
//       {Object.keys(errors).length > 0 && (
//         <div className="notification error">
//           {Object.keys(errors).map((key) => (
//             <div key={key}>{errors[key]}</div>
//           ))}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="userName" value={user.userName} onChange={handleInputChange} className="username-input" />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={user.password} onChange={handleInputChange} className="password-input" />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={user.email} onChange={handleInputChange} className="email-input" />
//         </label>
//         <br />
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} className="first-name-input" />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} className="last-name-input" />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" name="address" value={user.address} onChange={handleInputChange} className="address-input" />
//         </label>
//         <br />
//         <label>
//           City:
//           <input type="text" name="city" value={user.city} onChange={handleInputChange} className="city-input" />
//         </label>
//         <br />
//         <label>
//           State:
//           <input type="text" name="state" value={user.state} onChange={handleInputChange} className="state-input" />
//         </label>
//         <br />
//         <label>
//           Country:
//           <input type="text" name="country" value={user.country} onChange={handleInputChange} className="country-input" />
//         </label>
//         <br />
//         <label>
//           Pincode:
//           <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} className="pincode-input" />
//         </label>
//         <br />
//         <button type="submit" className="submit-button">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newregister.css';

function Register() {
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
      userType: 'Admin', // default user type
      updatedOn: new Date().toISOString(), // current date and time
      updatedBy: '', // default updated by will be set to username
    },
  });

  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  
    if (name === 'userName') {
      setUser({
        ...user,
        userName: value, // Update userName property
        userTypeMaster: {
          ...user.userTypeMaster,
          updatedBy: value, // Update updatedBy property
        },
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate the form data
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
    // Add more validation rules as needed
  
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  
    // Send a POST request to the API endpoint
    fetch('http://localhost:5106/api/UserMaster', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((data) => {
        setNotification('User registered successfully!');
        props.onUpdateBy(user.userName); // Call the onUpdateBy prop
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
            userType: 'Admin', // default user type
            updatedOn: new Date().toISOString(), // current date and time
            updatedBy: '', // default updated by will be set to username
          },
        });
        //navigate(`/login`); // Redirect to Login page
      })
    .catch((error) => {
        setNotification(`Error registering user: ${error.message}`);
      });
  };

  return (
    <div className="register-box">
      <h1>Register</h1>
      {notification && <div className={notification.includes('Error')? 'notification error' : 'notification success'}>{notification}</div>}
      {Object.keys(errors).length > 0 && (
        <div className="notification error">
          {Object.keys(errors).map((key) => (
            <div key={key}>{errors[key]}</div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="userName" value={user.userName} onChange={handleInputChange} className="username-input" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleInputChange} className="password-input" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} className="email-input" />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} className="first-name-input" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} className="last-name-input" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleInputChange} className="address-input" />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={user.city} onChange={handleInputChange} className="city-input" />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" value={user.state} onChange={handleInputChange} className="state-input" />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={user.country} onChange={handleInputChange} className="country-input" />
        </label>
        <br />
        <label>
          Pincode:
          <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} className="pincode-input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;