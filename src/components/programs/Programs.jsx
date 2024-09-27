import React from 'react'
import './programs.css'
import lightbulb from '../../assets/lightbulb.jpg'
import anotherphoto from '../../assets/anotherphoto.jpg'
import developer from '../../assets/developer.jpg'
import plane from '../../assets/plane.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={lightbulb} alt="" />
        <div className='caption'>
          <img src={plane} alt="" />
          <p>Mechanical Engineering</p>
        </div>
      </div>
      <div className="program">
        <img src={anotherphoto} alt="" />
        <div className='caption'>
          <img src={plane} alt="" />
          <p>Electrical Engineering</p>
        </div>
      </div>
      <div className="program">
        <img src={developer} alt="" />
        <div className='caption'>
          <img src={plane} alt="" />
          <p>chemical Engineering</p>
        </div>
      </div>   
    </div>
  )
}
import './programs.css'
export default Programs
