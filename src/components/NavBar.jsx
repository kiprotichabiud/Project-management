import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=" flex justify-between p-4 m-2 shadow-md  ">
      <img src="https://i.pinimg.com/564x/87/3b/8e/873b8eec2f539668393e2c68cd0b2bc5.jpg" alt="project logo" className='w-16 h-16' />
      <ul className="flex gap-8 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign-up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
