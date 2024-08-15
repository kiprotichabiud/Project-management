import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/projects'); // Redirect to ProjectPage after successful login
  };

  return (
    <div className='form-box-login'> 
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='login-box'> 
          <input type="text" name="username" placeholder='Username' required onChange={handleChange}/>
        </div>
        <div className='login-box'> 
          <input type="password" name="password" placeholder='Password' required onChange={handleChange}/>
        </div>
        <div className='reminder'>
          <label><input type="checkbox" /> Remember me</label>
          <a href='#'> Forgot password</a>
        </div>   
        <button type='submit'>Login</button>
      </form>
      <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
    </div>
  );
}

export default Login;
