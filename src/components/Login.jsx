import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/users');
      const users = await response.json();
      const user = users.find(u => u.username === credentials.username && u.password === credentials.password);

      if (user) {
        navigate('/projects');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1715331999602-fc92b7eb975e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdnklMjBjb2xvdXJpbmd8ZW58MHx8MHx8fDA%3D')" }}>
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              required 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-cyan-400">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
