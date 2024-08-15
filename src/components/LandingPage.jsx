
import React, {useState, useEffect} from 'react'
import './LandingPage.css';


const LandingPage = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/testimonials')
          .then(response => response.json())
          .then(data => { console.log(data)
            setTestimonials(data);
          })
          .catch(error => console.error('Error fetching selected bots:', error));
      }, []);
 

  return (

    <div className="landing-container">

      <header className="landing-header">

        <h1 className="heading">Welcome to Our Service</h1>
        <p className="subheading"> Sign up today!</p>

      </header>

      

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
