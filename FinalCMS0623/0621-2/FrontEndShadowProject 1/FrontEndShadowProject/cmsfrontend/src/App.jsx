

// //------------------FOR SUPERADMIN CREDENTIALS-----------------------------------

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './AdminSide/Navbar';
// import UserMaster from './AdminSide/UserMaster';
// import UserTypeMaster from './AdminSide/UserTypeMaster';
// import CmsMasterPage from './AdminSide/CmsMasterPage';
// import AdminLogin from './AdminSide/AdminLogin';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (username, password) => {
//     if (username === 'superadmin' && password === 'password123') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <Router>
//       {isLoggedIn? (
//         <div>
//           <Navbar />
//           <Routes>
//             <Route path="/user-master" element={<UserMaster />} />
//             <Route path="/user-type-master" element={<UserTypeMaster />} />
//             <Route path="/cms-master-page" element={<CmsMasterPage />} />
//             <Route path="/" element={<CmsMasterPage />} />
//           </Routes>
//         </div>
//       ) : (
//         <AdminLogin onLogin={handleLogin} />
//       )}
//     </Router>
//   );
// }

// export default App;



// //--------------------FOR TESTUSERSIDE __________-------PROPER WORKING-----------------


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './TestUserSide/Register'
// import Login from './TestUserSide/Login';
// import CMSMasterPage from './TestUserSide/CMSMasterPage';
// // import Printdto from './TestUserSide/printdto';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/CMSMasterPage" element={<CMSMasterPage />} />
//         {/* Other routes */}
//         {/* <Route path="/printDTO" element={<Printdto />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//------------------------FOR BOTH SUperAdmin and UserAdmin------------------------------------------------

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './TestUserSide/Register';
import Login from './TestUserSide/Login';
import CMSMasterPage from './TestUserSide/CMSMasterPage';
import Navbar from './AdminSide/Navbar';
import UserMaster from './AdminSide/UserMaster';
import UserTypeMaster from './AdminSide/UserTypeMaster';
import CmsMasterPage from './AdminSide/CmsMasterPage'

const App = () => {
  const [isSuperAdminLoggedIn, setIsSuperAdminLoggedIn] = useState(false);

  const handleSuperAdminLogin = (email, password) => {
    if (email === 'superadmin@gmail.com' && password === 'password123') {
      setIsSuperAdminLoggedIn(true);
    } else {
      alert('Invalid super admin email or password');
    }
  };

  return (
    <Router>
      {isSuperAdminLoggedIn ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/user-master" element={<UserMaster />} />
            <Route path="/user-type-master" element={<UserTypeMaster />} />
            <Route path="/cms-master-page" element={<CmsMasterPage />} />
            <Route path="/" element={<CMSMasterPage />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login onSuperAdminLogin={handleSuperAdminLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/CMSMasterPage" element={<CMSMasterPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;

















// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// //import Login from './Componentscopy/Login'
// import AddUser from './Componentscopy/Register';
// import CmsMasterPage from './Components/CmsMasterPage';

// const App=() => {
//   return (
//     <BrowserRouter>
//       <Routes>
     
//   {/* <Route path="/" element={<Login />} /> */}
//   <Route path="/register" element={<AddUser />} />
//   <Route path="/cms-master-page" element={<CmsMasterPage />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









//--------------------For Login and register--------------------------

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Componentscopy/Login'
// import AddUser from './Componentscopy/Register';
// //import CmsMasterPage from './Componentscopy/CmsMasterPage';

// const App=() => {
//   return (
//     <BrowserRouter>
//       <Routes>
     
//   <Route path="/" element={<Login />} />
//   <Route path="/register" element={<AddUser />} />
//   {/* <Route path="/cms-master-page" element={<CmsMasterPage />} /> */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Componentscopy/Login'
// import AddUser from './Componentscopy/Register';
// import Dashboard from './Componentscopy/CmsMasterPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<AddUser />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AddUser from './Test/AddUser';
// import LoginSuccess from './Test/LoginSuccess';
// import { LoginProvider } from './Test/createContext';

// const App = () => {
//   return (
//     <LoginProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<AddUser />} />
//           <Route path="/login-success" element={<LoginSuccess />} />
//         </Routes>
//       </BrowserRouter>
//     </LoginProvider>
//   );
// };

// export default App;




//------------------For ---- TEST---------------------------------


// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Test/Login';
// import AddUser from './Test/AddUser';
// import LoginSuccess from './Test/LoginSuccess';
// import { LoginProvider } from './Test/createContext';

// const App = () => {
//   return (
//     <LoginProvider>
//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Login />} />
//             <Route path="/login-success" element={<LoginSuccess />} />
//             <Route path="/adduser" element={<AddUser />} />
//         </Routes>
//       </BrowserRouter>
//     </LoginProvider>
//   );
// };

// export default App;

//-----------------------------------------------------



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Test2/Login'
// import AddUser from './Test2/Register';


// const App=() => {
//   return (
//     <BrowserRouter>
//       <Routes>
     
//   <Route path="/" element={<Login />} />
//   <Route path="/register" element={<AddUser />} />
 

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;























// //----------------------WORKING----------------------------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
// import OurServices from './Components/OurServices';
// import Portfolio from './Components/Portfolio';
// import Gallery from './Components/Gallery';
// import Sidebar from './Components/Sidebar';
// import ContactUs from './Components/ContactUs'; 
// import './App.css'; // Import main CSS file here

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/our-services" element={<OurServices />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated import with correct names

// import PublicHomePage from './Components/Home'; // Adjust path if necessary
// import PublicAboutUsPage from './Components/AboutUs'; // Adjust path if necessary

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             {/* Add other public pages here using Link */}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<PublicHomePage />} />
//           <Route path="/about" element={<PublicAboutUsPage />} />
//           {/* Add other routes for public pages */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
