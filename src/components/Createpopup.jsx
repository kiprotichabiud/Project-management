import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState('');

  const handleAddMember = () => {
    if (memberInput.trim() !== '') {
      setMembers([...members, memberInput.trim()]);
      setMemberInput('');
    }
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && projectUrl) {
      onSubmit({
        name,
        description,
        project_url: projectUrl,
        members
      });
      onClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Popup open={isOpen} onClose={onClose}>
      <div>
        <h2 className='text-2xl text-center font-bold'>Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl">
          <div>
            <label htmlFor="name" className="block text-black mb-2 font-bold">Project Name</label>
            <input 
              type="text" 
              placeholder="Project Name" 
              value={name} 
              className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-black mb-2 font-bold">Description</label>
            <textarea 
              placeholder="Project Description" 
              value={description} 
              className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="Github Repo URL" className="block text-black mb-2 font-bold">Github Repo URL</label>
            <input 
              type="url" 
              placeholder="Project URL" 
              value={projectUrl} 
              className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setProjectUrl(e.target.value)} 
            />
          </div>
          
          <div className="">
            <label htmlFor="Team members" className="block text-black mb-2 font-bold">Team members</label>
            <div className='flex'>
              <input 
                type="text" 
                placeholder="Add Team Member" 
                value={memberInput} 
                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setMemberInput(e.target.value)} 
              />
              <button type="button" className='bg-blue-500 w-20 rounded-md justify-between font-bold' onClick={handleAddMember}>Add</button>
            </div>
          </div>
          <div className="members-list mt-2">
            {members.map((member, index) => (
              <div key={index} className="flex items-center mb-1 justify-around border-gray-300 border-2 rounded-lg">
                <span className="member-item mr-2">{member}</span>
                <button 
                  type="button" 
                  className="text-red-500  font-bold "
                  onClick={() => handleRemoveMember(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <br />
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 min-w-40 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
            >
              Create New Project
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
}

export default Createpopup;
