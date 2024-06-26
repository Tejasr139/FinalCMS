import React, { useContext } from 'react';
import { LoginContext } from './createContext';

const LoginSuccess = () => {
  const { loginData } = useContext(LoginContext);

  if (!loginData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Updated By: {loginData.userTypeMaster?.updatedBy}</p>
      <p>Email: {loginData.email}</p>
      <p>Username: {loginData.userName}</p>
      <p>First Name: {loginData.firstName}</p>
      <p>Last Name: {loginData.lastName}</p>
      <p>Address: {loginData.address}</p>
      <p>City: {loginData.city}</p>
      <p>State: {loginData.state}</p>
      <p>Country: {loginData.country}</p>
      <p>Pincode: {loginData.pincode}</p>
    </div>
  );
};

export default LoginSuccess;









// import React, { useContext } from 'react';
// import { LoginContext } from './createContext';

// const LoginSuccess = () => {
//   const { loginData } = useContext(LoginContext);

//   return (
//     <div>
//       <h1>Login Successful!</h1>
//       <p>Updated By: {loginData.userTypeMaster.updatedBy}</p>
//       <p>Email: {loginData.email}</p>
//       <p>Username: {loginData.userName}</p>
//       <p>First Name: {loginData.firstName}</p>
//       <p>Last Name: {loginData.lastName}</p>
//       <p>Address: {loginData.address}</p>
//       <p>City: {loginData.city}</p>
//       <p>State: {loginData.state}</p>
//       <p>Country: {loginData.country}</p>
//       <p>Pincode: {loginData.pincode}</p>
//     </div>
//   );
// };

// export default LoginSuccess;