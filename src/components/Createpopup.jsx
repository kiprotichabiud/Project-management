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
      <div className="popup-content">
        <h2>Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Project Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <textarea 
            placeholder="Project Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="url" 
            placeholder="Project URL" 
            value={projectUrl} 
            onChange={(e) => setProjectUrl(e.target.value)} 
          />
          <div className="members-input">
            <input 
              type="text" 
              placeholder="Add Team Member" 
              value={memberInput} 
              onChange={(e) => setMemberInput(e.target.value)} 
            />
            <button type="button" onClick={handleAddMember}>Add</button>
          </div>
          <div className="members-list">
            {members.map((member, index) => (
              <span key={index} className="member-item">{member}</span>
            ))}
          </div>
          <button type="submit">Create Project</button>
        </form>
      </div>
    </Popup>
  );
}

export default Createpopup;
