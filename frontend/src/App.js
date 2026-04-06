import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
