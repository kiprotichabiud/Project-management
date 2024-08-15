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
    navigate('/signup')
  };

  return (
    <div>
      <div className='flex justify-evenly mt-14 p-16'>
        <div className="text-lg font-semibold">User’s name</div>
        <button onClick={openPopup} className="border-2 px-4 py-2 rounded">Create Project</button>
        <button onClick={handleLogout} className="border-2 px-4 py-2 rounded ">Logout</button> {/* Logout Button */}
      </div>

      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Project Management</h1>

        <div className='bg-slate-300 h-64 flex items-center justify-center'>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={index} className="relative p-4 bg-white border border-gray-300 rounded-lg shadow-md w-72 m-4">
                <button 
                  className="absolute top-2 right-2 text-slate-500"
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
            
            <p onClick={openPopup} className="text-gray-700  cursor-pointer text-xl py-28">
              + Click here to create a new project
            </p>
          )}
        </div>
      </main>

      <footer className='justify-center flex flex-end'>
        <p>Contact us: <a href="mailto:projectmanagement@gmail.com" className="text-blue-500 hover:underline">projectmanagement@gmail.com</a></p>
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
