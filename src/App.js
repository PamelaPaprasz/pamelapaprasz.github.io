import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Fun from './pages/Fun';
import Work from './pages/Work';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/work/:projectId" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
