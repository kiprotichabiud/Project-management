 
import React from 'react'


const ProjectPage = () => {

  return (
    <div className=''>
        <nav className=' flex items-center justify-around'>
           <img className='w-16 h-16' src="https://i.pinimg.com/564x/87/3b/8e/873b8eec2f539668393e2c68cd0b2bc5.jpg" alt="" /> 
           
          <ul className='flex gap-8 items-center' >
          
            <li>Home</li>
            <li> About</li>
            <button className=' border-2 p-2 m-4 w-60 rounded-md shadow-md' >search</button>
            <li><div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
     
      
     
        <button
          
          
        >
          Logout
        </button>
   

     
      
    </div></li>
          </ul>
   
        </nav>
        <div className=' flex justify-evenly mt-14 p-16'>
        <div className="text-lg font-semibold ">User’s name</div>
        <button className=" border-2 px-4 py-2 rounded ">
              Create Project
            </button>
            </div>

      <main className="text-center ">
        <h1 className="text-2xl font-bold mb-4">Welcome to Project Management </h1>
    
        
        <div className="mb-4">
          
            
          
        </div>
        
        <p className="text-gray-700">+ Click here to create a new project</p>
      </main>

      <footer className=' justify-center flex flex-end' >
        <p>Contact us: <a href="projectmanagement@gmail.com" className="text-blue-500 hover:underline">projectmanagement@gmail.com</a></p>
      </footer>

    </div>
  )
}

export default ProjectPage

import React, { useState } from 'react';
import Createpopup from './Createpopup';
import { useNavigate } from 'react-router-dom'; 

const ProjectPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projects, setProjects] = useState([]); 
  const navigate = useNavigate(); 

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleProjectSubmit = (projectData) => {
    setProjects((prevProjects) => [...prevProjects, projectData]); 
    closePopup();
  };

  const deleteProject = async (indexToRemove) => {
    setProjects((prevProjects) => prevProjects.filter((_, index) => index !== indexToRemove));

    const projectToDelete = projects[indexToRemove];
    await fetch('/projects/' + projectToDelete.id, {
      method: 'DELETE',
    });
  };

  const handleLogout = () => {
    navigate('/')
  };

  return (
    <div className="bg-cover " style={{ backgroundImage: "url('https://media.istockphoto.com/id/2078267529/photo/illuminated-yellow-light-bulb-on-a-textured-dark-grey-wall-innovation-and-inspiration-concept.jpg?s=612x612&w=0&k=20&c=Lq_2kAIUghFUM6CejgTQRxnw-ak9s95PSk_tqWwTtWE=')" }}>
      
      <div className='flex justify-evenly mt-14 p-16'>
        <div className="text-lg font-semibold text-white">User’s name</div>
        <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg">Create Project</button>
        <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg ">Logout</button> 
      </div>

      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Welcome to Project Management</h1>

        <div className='bg-slate-300 h-64 flex items-center justify-center'>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={index} className="relative p-4 bg-white border border-gray-300 rounded-lg shadow-md w-72 m-4">
                <button 
                  className="absolute top-2 right-2 text-slate-500 "
                  onClick={() => deleteProject(index)}
                >
                  X
                </button>
                <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                <p className="text-sm text-gray-700 mb-2"><strong>Description:</strong> {project.description}</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Project URL:</strong> <a href={project.project_url} className="text-blue-500 hover:underline">{project.project_url}</a></p>
                <p className="text-sm text-gray-700"><strong>Members:</strong> {project.members.join(', ')}</p>
              </div>
            ))
          ) : (
            
            <p onClick={openPopup} className=" cursor-pointer text-xl py-28 ">
              + Click here to create a new project
            </p>
          )}
        </div>
      </main>

      <footer className='justify-center flex flex-end mt-[140px] bg-black p-4'>
        <p className=' text-white'>Contact us: <a href="mailto:projectmanagement@gmail.com" className="text-blue-500 hover:underline">projectmanagement@gmail.com</a></p>
      </footer>

      <Createpopup 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        onSubmit={handleProjectSubmit} 
      />
    </div>
  );
}

export default ProjectPage;
 
