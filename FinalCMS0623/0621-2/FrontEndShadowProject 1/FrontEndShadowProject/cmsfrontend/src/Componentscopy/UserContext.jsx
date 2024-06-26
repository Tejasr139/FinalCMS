import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
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

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };