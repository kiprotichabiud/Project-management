 
import React, { useState } from 'react'
import Createpopup from './components/Createpopup'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProjectPage from './components/ProjectPage';
import About from './components/About';

 

function App() {
  return (
 
    <>
    <ProjectPage/>
    <LandingPage />
    <Createpopup isOpen={isOpen} onClose={closePopup} />
    <button onClick={openPopup} className='bg-red-400'>Click</button>
      
    </>
  )


    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  );

 
}

export default App;
