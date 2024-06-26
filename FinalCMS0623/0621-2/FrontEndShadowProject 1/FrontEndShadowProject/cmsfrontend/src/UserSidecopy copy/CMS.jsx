// components/CMSMasterPage.js
import React from 'react';
import { UserDTO } from '../dto/UserDTO';

const CMSMasterPage = () => {
  const userDTO = new UserDTO();
  userDTO.updateBy = 'John Doe';

  return (
    <div>
      <h1>CMS Master Page</h1>
      <p>Updated by: {userDTO.updateBy}</p>
    </div>
  );
};

export default CMSMasterPage;