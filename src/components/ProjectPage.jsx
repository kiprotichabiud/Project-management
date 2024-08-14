import React from 'react'

const ProjectPage = () => {
  return (
    <div>
        <nav>
          <ul >
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/logout" >Logout</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default ProjectPage