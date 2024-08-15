import React from 'react'


const ProjectPage = ({openPopup}) => {

  return (
    <div className=''>
        <nav className=' flex items-center justify-around'>
           <img className='w-16 h-16' src="https://i.pinimg.com/564x/87/3b/8e/873b8eec2f539668393e2c68cd0b2bc5.jpg" alt="" /> 
           
          <ul className='flex gap-8 items-center' >
          
            <li>Home</li>
            <li> About</li>
            <button className=' border-2 p-2 m-4 w-60 rounded-md shadow-md' >search</button>
            <li><div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
     
      
     
        <button
          
          
        >
          Logout
        </button>
   

     
      
    </div></li>
          </ul>
   
        </nav>
        <div className=' flex justify-evenly mt-14 p-16'>
        <div className="text-lg font-semibold ">User’s name</div>
        <button onClick={openPopup} className=" border-2 px-4 py-2 rounded ">
              Create Project
            </button>
            </div>

      <main className="text-center ">
        <h1 className="text-2xl font-bold mb-4">Welcome to Project Management </h1>
    
        
        
        <div className='bg-slate-300 h-64'>
        <p onClick={openPopup} className="text-gray-700 cursor-pointer text-2xl py-28">+ Click here to create a new project</p>
        </div>
      </main>

      <footer className=' justify-center flex flex-end' >
        <p>Contact us: <a href="projectmanagement@gmail.com" className="text-blue-500 hover:underline">projectmanagement@gmail.com</a></p>
      </footer>

    </div>
  )
}

export default ProjectPage