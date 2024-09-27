import React from 'react';
import './Hero.css';
import grad_icon from '../../assets/grad_icon.png';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const Hero = () => {
  const navigate = useNavigate();  // Create a navigate function

  const handleExploreMore = () => {
    navigate('/prompt');  // Navigate to the prompt page
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Transforming ideas into impactful projects - simply GEMINI</h1>
        <p>Streamlines the research process, offering a user-friendly interface to guide students
           through each stage of their project, from ideation to final submission.</p>
        <button className='btn' onClick={handleExploreMore}>
          Explore More <img src={grad_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
