import React from 'react'

function SignUp() {
  return (
    <div>
      <div className='form-box-signup'> 
       <form action="">
         <h1>SignUp</h1>
          <div className='signup-box'> 
           <input type="text" placeholder='Name' required/>
           </div>
           <div  className='signup-box'> 
          <input type="text" placeholder='Username' required/>
          </div>
          <div className='signup-box'> 
           <input type="email"  placeholder='Email'  required/>
           </div>
           <div className='signup-box'> 
           <input type="password"  placeholder='Password' required/>
           </div>
           <div className='signup-box'> 
           <input type="password"  placeholder='confirm password'/>
           </div>  

            <button type='submit'> create</button>  
       </form>
      <p>
        Already have an account?
        <button>  Login</button>
      </p>
      
       </div>

    </div>
  )
}

export default SignUp