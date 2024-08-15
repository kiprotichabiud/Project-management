import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState('');

  const addMember = () => {
    if (memberInput.trim() !== '') {
      setMembers([...members, memberInput]);
      setMemberInput(''); 
    }
  };

  const removeMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleSubmit = async () => {
    const projectData = {
      name,
      description,
      project_url: projectUrl,
      members,
    };

    try {
      const response = await fetch('http://localhost:3000/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        console.log('Project created successfully!');
        onSubmit(projectData);
      } else {
        console.error('Failed to create project.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Popup open={isOpen} onClose={onClose} modal className="rounded-xl">
      <div className="rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">New Project</h2>

        <div>
          <label htmlFor="name" className="block text-black mb-2">NAME:</label>
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-black mb-2">DESCRIPTION:</label>
          <input 
            type="text" 
            placeholder="Description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>

        <div>
          <label htmlFor="project_url" className="block text-black mb-2">PROJECT_URL:</label>
          <input 
            type="text" 
            placeholder="Project_url" 
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>

        <div>
          <label htmlFor="members" className="block text-black mb-2">MEMBERS:</label>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Add a member" 
              value={memberInput}
              onChange={(e) => setMemberInput(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none" 
            />
            <button 
              onClick={addMember} 
              className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
              Add
            </button>
          </div>
        </div>

        <div>
          <ul className="mt-4">
            {members.map((member, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg mb-2">
                {member}
                <button
                  onClick={() => removeMember(index)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 hover:bg-blue-600 min-w-40 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
            Create Project
          </button>
        </div>
      </div>
    </Popup>
  );
}

export default Createpopup;
