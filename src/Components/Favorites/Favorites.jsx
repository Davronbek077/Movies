import React from 'react'
import './Favorites.css'


import favorite1 from '../../assets/favorite1.jpg'
import favorite2 from '../../assets/favorite2.jpg'
import favorite3 from '../../assets/favorite3.jpg'
import favorite4 from '../../assets/favorite4.jpg'

const Favorites = () => {
  return (
    <div className='Favorites'>
      <div className="film-text">
        <h2>Favorite Movies</h2>
        <p>Here are my favorite movies</p>
      </div>

      <div className="film-wrap">
        <div className="film">
          <img src={favorite1}lt="" />
          <h3>Bumblebee</h3>
        </div>

        <div className="film">
          <img src={favorite2} alt="" />
          <h3>Venom 3</h3>
        </div>

        <div className="film">
          <img src={favorite3} lt="" />
          <h3>King Kong</h3>
        </div>

        <div className="film">
        <img id='img' src={favorite4} alt="" />
        <h3>The Wolfman</h3>
        </div>
      </div>
    </div>
  )
}

export default Favorites
