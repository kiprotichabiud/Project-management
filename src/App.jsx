import React from 'react'
import Createpopup from './components/Createpopup'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage'
import Logout from './components/Logout'

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
