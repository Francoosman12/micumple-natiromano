import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import YendoPage from './components/YendoPage';
import NoPuedoPage from './components/NoPuedoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/yendo" element={<YendoPage />} />
        <Route path="/nopuedo" element={<NoPuedoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
