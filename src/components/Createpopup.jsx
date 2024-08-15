import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({isOpen, onClose}) {
  return (
    <div className=''>
      <img className='' src='https://i.pinimg.com/564x/87/3b/8e/873b8eec2f539668393e2c68cd0b2bc5.jpg' />
      
      
      <Popup open={isOpen} onClose={onClose} modal className='rounded-xl'>
            <div className=" rounded-lg shadow-xl p-6" >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">New Project</h2>
                <div>
                  <label htmlFor="name" className="block text-black mb-2">NAME:</label>
                  <input type="text" placeholder='Name' className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"/>
                </div>
                <div>
                  <label htmlFor="description" className="block text-black mb-2">DESCRIPTION:</label>
                  <input type="text" placeholder='Description' className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"/>
                </div>
                <div>
                  <label htmlFor="project_url" className="block text-black mb-2">PROJECT_URL</label>
                  <input type="text" placeholder='Project_url' className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"/>
                </div>
                <div>
                  <label htmlFor="members" className="block text-black mb-2">MEMBERS:</label>
                  <input type="text" placeholder='Members' className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"/>
                </div>
                <div>
                  <ul>
                    <li></li>
                  </ul>
                </div><br />
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 min-w-40 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">Create Project</button>
                </div>
            </div>
        </Popup>
    
    </div>
  )
}

export default Createpopup