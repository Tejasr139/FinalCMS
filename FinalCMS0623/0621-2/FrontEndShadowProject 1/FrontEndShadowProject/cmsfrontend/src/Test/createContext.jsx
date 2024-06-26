import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({});

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };