// // createContext.js
// import { createContext, useState } from 'react';

// const LoginContext = createContext();

// const LoginProvider = ({ children }) => {
//   const [loginData, setLoginData] = useState(null);
//   const [updatedBy, setUpdatedBy] = useState('');

//   setUpdatedBy(user.userName);
//   return (
//     <LoginContext.Provider value={{ loginData, setLoginData }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export { LoginProvider, LoginContext };


// createContext.js
import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children, user }) => {
  const [loginData, setLoginData] = useState(null);
  const [updatedBy, setUpdatedBy] = useState('');

  if (user) {
    setUpdatedBy(user.userName);
  }

  return (
    <LoginContext.Provider value={{ loginData, setLoginData, updatedBy }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };