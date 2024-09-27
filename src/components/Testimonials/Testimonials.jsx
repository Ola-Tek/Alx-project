import React from 'react'
import './Testimonials.css'
import bowl from '../../assets/bowl.jpg'
import user_icon from '../../assets/user_icon.png'
import exit2_icon from '../../assets/exit2_icon.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={exit2_icon} alt="" className='back-btn'/>
      <div className='slider'></div>
        <ul>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <div className='image-container'>
                <img src={bowl} alt="" className='bowl-image' />
                <img src={user_icon} alt="" className='user-icon'/>
                </div>
                <div>
                  <h3>About Obisesan Olabode - (B.O.W.L)</h3>
                  <span>Software Engineer, #Backend</span>
                </div>
              </div>
              <p>Obisesan Olabode Isaac is a certified backend software engineer from ALX Africa, 
                with a strong foundation in Python, MySQL, Django, Git, and Linux. His tech stack also includes HTML, CSS, and some JavaScript. 
                A Mechanical and Metallurgical Engineering graduate from Delta State University, 
                Isaac combines his technical expertise with a passion for sustainability and community development. 
                He’s worked on projects ranging from biogas research to creating platforms like "Project Gemini," 
                aimed at simplifying final-year project writing for engineering students. Based in Abuja, 
                Isaac is dedicated to leveraging technology to create lasting impact.</p>
            </div>
          </li>
        </ul>
    </div>
  )
}
import './Testimonials.css'

export default Testimonials
