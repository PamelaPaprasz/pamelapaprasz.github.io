import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTopOnNavigation from './helper/ScrollToTopOnNavigation';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Fun from './pages/Fun';
import Work from './pages/Work';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/work/:projectId" element={<Project />} />
        {/* <Route path="/fun" element={<Fun />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
