import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({isOpen, onClose}) {
  return (
    <div className=''>
      <img className='' src='https://i.pinimg.com/564x/87/3b/8e/873b8eec2f539668393e2c68cd0b2bc5.jpg' />
      
      
      <Popup open={isOpen} onClose={onClose} modal className='rounded-xl'>
            <div className="bg-gray-200 rounded-lg shadow-xl p-6" style={{ width: '600px' }}>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">New Project</h2>
                <div>
                  <label htmlFor="name">NAME:</label>
                  <input type="text" placeholder='Name' />
                </div>
                <div>
                  <label htmlFor="description">DESCRIPTION:</label>
                  <input type="text" placeholder='Description' />
                </div>
                <div>
                  <label htmlFor="project_url">PROJECT_URL</label>
                  <input type="text" placeholder='Project_url' />
                </div>
                <div>
                  <label htmlFor="members">MEMBERS:</label>
                  <input type="text" placeholder='Members' />
                </div>
                <div>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <button>Create Project</button>
                </div>
            </div>
        </Popup>
    
    </div>
  )
}

export default Createpopup