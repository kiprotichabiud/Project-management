import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; 

const LandingPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavBar /> 

      <header className="bg-white shadow-md py-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Service</h1>
        <p className="text-xl text-gray-600">Sign up today!</p>
      </header>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="text-md text-gray-900 font-semibold">~ {testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2024 ProjectMaster. All rights reserved.</p>
      </section>
    </div>
  );
};

export default LandingPage;
