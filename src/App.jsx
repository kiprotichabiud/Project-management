import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Createpopup from './components/Createpopup'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
    <LandingPage />
    <Createpopup isOpen={isOpen} onClose={closePopup} />
    <button onClick={openPopup} className='bg-red-400'>Click</button>

      
    </>
  )
}

export default App
