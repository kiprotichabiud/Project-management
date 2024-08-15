import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Handle signup logic here
      navigate('/projects'); // Redirect to ProjectPage after successful signup
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className='form-box-signup'> 
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='signup-box'> 
          <input type="text" name="name" placeholder='Name' required onChange={handleChange}/>
        </div>
        <div className='signup-box'> 
          <input type="text" name="username" placeholder='Username' required onChange={handleChange}/>
        </div>
        <div className='signup-box'> 
          <input type="email" name="email" placeholder='Email' required onChange={handleChange}/>
        </div>
        <div className='signup-box'> 
          <input type="password" name="password" placeholder='Password' required onChange={handleChange}/>
        </div>
        <div className='signup-box'> 
          <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handleChange}/>
        </div>  
        <button type='submit'>Create</button>  
      </form>
      <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
    </div>
  );
}

export default SignUp;
