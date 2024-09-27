import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo2 from '../../assets/logo2.jpg'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  }, [])
  
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo2} alt="PROJECT GEMMINI" className='logo' />
      <span>Project Gemini</span>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Project Hub</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-150} duration={500}>About #B.O.W.L</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={-260}>Do you know?</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={-260} className='btn'>Contact us</Link></li>
        
      </ul>
    </nav>
  )
}
export default Navbar
