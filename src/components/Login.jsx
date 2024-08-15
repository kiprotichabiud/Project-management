import React from 'react'
import { useState } from 'react'
import Createpopup from './Createpopup'
import ProjectPage from './ProjectPage';


function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return (
    <div>
<div  className='form-b0x-login'> 
   <form action="">
    <h1>Login form </h1>
    <div className='login-box'> 
     <input type="text" placeholder='Name'  required/>    
    </div>
    <div className='login-box'>
        <input type="text" placeholder='Username' required/>
    </div>
    <div className='login-box'> 
           <input type="password"  placeholder='Password' required/>
           </div>
    <div className='reminder'>
              <label><input type="checkbox"  /> Remember me</label>
              <a  href='#'> Forgot password</a>
            </div>   
  
<button type='submit'>login </button>
   </form>
</div>
<p>
        Don't have an account?Sign up
        <button>  Signup</button>
      </p> 
      <ProjectPage openPopup={openPopup}/>
    
    <Createpopup isOpen={isOpen} onClose={closePopup} />
    </div>
  )
}

export default Login