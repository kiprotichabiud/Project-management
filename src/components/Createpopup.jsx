import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Createpopup({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddMember = () => {
    if (memberInput.trim() !== '') {
      setMembers([...members, memberInput.trim()]);
      setMemberInput('');
    }
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && description && projectUrl) {
      setLoading(true);
      try {
        // Step 1: Store the project
        const projectData = {
          name,
          description,
          project_url: projectUrl,
        };

        const projectResponse = await fetch('http://127.0.0.1:5000/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        });

        if (!projectResponse.ok) {
          console.error('Error saving the project:', projectResponse.statusText);
          alert('Failed to save the project');
          setLoading(false);
          return;
        }

        const savedProject = await projectResponse.json();
        // Assuming savedProject returns a project ID or similar

        // Step 2: Store the team members
        const teamMembersData = members.map((member) => ({
          project_id: savedProject.id, // Assuming the project ID is in the response
          member_name: member,
        }));

        const teamResponse = await fetch('http://127.0.0.1:5000/teams', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(teamMembersData),
        });

        if (!teamResponse.ok) {
          console.error('Error saving the team members:', teamResponse.statusText);
          alert('Failed to save the team members');
        }

        const savedTeam = await teamResponse.json();

        // Step 3: Call the parent onSubmit to pass the new project data
        onSubmit({ project: savedProject, team: savedTeam });

        // Close the popup after successful submission
        onClose();

      } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while saving the project and team members');
      } finally {
        setLoading(false);
      }
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
              disabled={loading} onClick={handleSubmit}
            >
              {loading ? 'Saving...' : 'Create New Project'}
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
}

export default Createpopup;
