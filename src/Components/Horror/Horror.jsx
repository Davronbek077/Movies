import React from 'react'
import './Horror.css'

import horror1 from '../../assets/horror1.jpg'
import horror2 from '../../assets/horror2.jpg'
import horror3 from '../../assets/horror3.jpg'
import horror4 from '../../assets/horror4.jpg'

const Horror = () => {
  return (
    <div className='horror'>
      <div className="films-text">
        <h2>Horror Movies</h2>
        <p>Here are some scary movies</p>
      </div>

      <div className="films-wrap">
        <div className="films">
          <img src={horror1} alt="" />
          <h3>Tarot</h3>
        </div>

        <div className="films">
          <img src={horror2} alt="" />
          <h3>Rings</h3>
        </div>
        
        <div className="films">
          <img src={horror3} alt="" />
          <h3>Sting</h3>
        </div>

        <div className="films">
          <img src={horror4} alt="" />
          <h3>Bagman</h3>
        </div>
      </div>
    </div>
  )
}

export default Horror
