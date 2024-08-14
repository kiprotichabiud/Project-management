import React from 'react'
import Createpopup from './components/Createpopup'
import ProjectPage from './components/ProjectPage'
import Logout from './components/Logout'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <Createpopup />
      <ProjectPage/>
      <Logout/>
    </div>
  )
}

export default App
