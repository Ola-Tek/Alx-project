import React from 'react'
import './Campus.css'
import bowl from '../../assets/bowl.jpg'
import learning4 from '../../assets/learning4.jpg'
import learning8 from '../../assets/learning8.jpg'
import learning6 from '../../assets/learning6.jpg'
import plane from '../../assets/plane.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={bowl} alt="" />
            <img src={learning4} alt="" />
            <img src={learning8} alt="" />
            <img src={learning6} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={plane} alt="" /></button>
      
    </div>
  )
}

export default Campus
