import React from 'react'
import projecticon from '../../assets/projecticon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'></div>
        <img src={projecticon} alt="" className='project-image'/>
      <div className='about-right'></div>
      <h3>ABOUT PROJECT GEMINI</h3>
      <h2>Turning your ideas into solutions</h2>
      <p>In the fast-evolving world of education and technology, final-year projects remain one of the most significant academic 
        hurdles for engineering students. Crafting a solid, well-researched project can often feel like an insurmountable task—especially 
        for newbies unfamiliar with the process.</p>
      <p>Enter Project Gemini, a game-changing platform set to simplify the project writing journey and help engineering students
         sail through their final-year challenges with confidence and ease.</p>
      <p>
      Project Gemini is tailored to generate customized project ideas, outlines, and structured content based on user inputs. 
      Whether you're unsure of where to begin or need help fine-tuning your project, Project Gemini is your go-to platform.
      </p>
    </div>
  )
}

export default About
