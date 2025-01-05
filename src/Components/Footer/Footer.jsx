import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="text">
      <h2>Movies</h2>
      <p>The movies you love are on our site. Of course you will like it.</p>
      </div>

      <div className="services">
        <div className="site-list">
            <p>Home</p>
            <p>Favorites</p>
            <p>Horror</p>
        </div>

        <div className="movie-list">
            <p>Action</p>
            <p>Drama</p>
            <p>Horror</p>
            <p>Thriller</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
