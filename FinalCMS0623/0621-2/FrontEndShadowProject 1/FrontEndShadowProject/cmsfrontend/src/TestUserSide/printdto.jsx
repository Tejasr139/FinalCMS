import React from 'react';
import { useLocation } from 'react-router-dom';

const Printdto = () => {
  const location = useLocation();
  const { userDTO } = location.state; // Destructure userDTO from location.state

  return (
    <div>
      <h2>CMS Master Page</h2>
      <p>Update By: {userDTO.updateBy}</p>
      {/* You can render other content of the CMSMasterPage here */}
    </div>
  );
};

export default Printdto;
