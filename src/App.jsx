import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import Createpopup from './components/Createpopup'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
    <LandingPage />
    <Createpopup onClick={isOpen} onClose={closePopup} />
    <button onClick={openPopup}>Cli</button>

      
    </>
  )
}

export default App
