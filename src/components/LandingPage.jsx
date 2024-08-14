import React from 'react'

const LandingPage = () => {

  return (

    <div className="landing-container">

      <header className="landing-header">

        <h1 className="heading">Welcome to Our Service</h1>
        <p className="subheading"> Sign up today!</p>

      </header>

      <section className="landing-content">

        <h2>Features</h2>

        <ul>

          <li>Team Collaboration</li>
          <li>Task Management</li>
          <li>Project Tracking</li>

        </ul>

        </section>

        <section className="landing-footer">

        <p></p>

      </section>

      <section className="footer-copy">

          <p>&copy; 2024 ProjectMaster. All rights reserved.</p>
          
       </section>

    </div>
  );
};

export default LandingPage;

