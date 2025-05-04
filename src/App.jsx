// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';

// Composant wrapper pour gérer AnimatePresence avec useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {

  const location = useLocation();

  return (
    <div className='dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen'>
      <Navbar location={location.pathname}/>
      <AnimatedRoutes />
    </div>
  );
};

export default App;
