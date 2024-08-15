
import React from 'react'
import './LandingPage.css';


const LandingPage = () => {

const testimonials = [
    {
      name: 'Abiud',
      text: 'This project management tool has transformed the way our team collaborates. Highly recommend!'
    },
    {
      name: 'Candy',
      text: 'A fantastic tool with great features. It has helped us streamline our workflow and improve productivity.'
    },
    {
      name: 'Nelly',
      text: 'The customizable dashboards are a game-changer. We love how easy it is to track progress and manage tasks.'
    },
    {
      name: 'Kevin',
      text: 'An essential tool for any team looking to stay organized and efficient. The user interface is intuitive and easy to use.'
    }
  ];

  
 

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

        <p>Your ultimate tool for managing projects efficientl</p>

      </section>

      <section className="testimonials">

        <h2>What Our Users Say</h2>
        <div className="testimonials-container"> {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.text}"</p>
              <p><b>- {testimonial.name}</b></p>
            </div>
          ))}
        </div>

      </section>

      <section className="footer-copy">

          <p>&copy; 2024 ProjectMaster. All rights reserved.</p>
          
       </section>

    </div>
  );
};

export default LandingPage;
