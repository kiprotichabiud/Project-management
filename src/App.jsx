import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProjectPage from './components/ProjectPage';
import About from './components/About';
import Users from './components/users';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );

}

export default App;
