import { useContext } from 'react';
import { UserContext } from './UserContext';

const PrintUser = () => {
  const { user, loggedIn } = useContext(UserContext);

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Username: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          {/* Add more user data as needed */}
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default PrintUser;