import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        // Post formData to Flask API
        await axios.post('http://127.0.0.1:5000/users', {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password
        });
        navigate('/projects'); // Navigate to projects page after successful signup
      } catch (error) {
        alert('Error signing up: ' + error.message);
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1715331999602-fc92b7eb975e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdnklMjBjb2xvdXJpbmd8ZW58MHx8MHx8fDA%3D')" }}>
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" name="name" placeholder="Name" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <input type="text" name="username" placeholder="Username" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <input type="password" name="password" placeholder="Password" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-300">
            Create
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          Already have an account? <button onClick={() => navigate('/login')} className="text-cyan-400 ">Login</button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
