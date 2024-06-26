// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Pages/Navbar/Navbar';
import PublicHomePage from './Pages/Components/Home';
import AboutUsPage from './Pages/Components/AboutUs';
import OurServicesPage from './Pages/Components/OurServices';
import ContactUs from './Pages/Components/ContactUs';
import PortfolioPage from './Pages/Components/PortFolio';
import GalleryPage from './Pages/Components/Gallery';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<PublicHomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
