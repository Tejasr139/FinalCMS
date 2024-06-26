import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header>
      <h1>ContentManagementSystem</h1>
      <nav>
        <Link to="/user-master">User Master</Link>
        <Link to="/user-type-master">User Type Master</Link>
        <Link to="/cms-master-page">CMS Master Page</Link>
      </nav>
    </header>
  );
};

export default Navbar;
