
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import React, { useState } from 'react'
import Createpopup from './components/Createpopup'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>

      
        <div>
          <NavBar/>
          <Login/>
          <SignUp/>
        </div>
        


    
    <ProjectPage/>
    <LandingPage />
    <Createpopup isOpen={isOpen} onClose={closePopup} />
    <button onClick={openPopup} className='bg-red-400'>Click</button>
   

    <ProjectPage openPopup={openPopup}/>
    <LandingPage />
    <Createpopup isOpen={isOpen} onClose={closePopup} />
    <button onClick={openPopup} className='bg-red-400'>Click</button>

      

    </>
  )
}

export default App
