import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

import film1 from '../../assets/film1.jpg'
import film2 from '../../assets/film2.jpg'
import film3 from '../../assets/film3.webp'
import film4 from '../../assets/film4.jpg'
import horror from '../../assets/horror.avif'
import drama from '../../assets/drama.webp'
import action from '../../assets/action.jpg'
import thriller from '../../assets/thriller.webp'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="card-text">
      <h2>The best movies</h2>
      <p>Below are some of my favorite movies</p>
      </div>

      <div className="card-wrap">
        <div id='one' className="card">
          <img id='img1' src={film1} alt="" />
          <h3>Real Steel</h3>
        </div>

        <div className="card">
          <img src={film2} alt="" />
          <h3>Terminator 2</h3>
        </div>

        <div className="card">
          <img src={film3} alt="" />
          <h3>John Wick 4</h3>
        </div>

        <div className="card">
          <img src={film4} alt="" />
          <h3>Godzilla x Kong</h3>
        </div>
      </div>

      <div className="banner-info">
        <h2>Information about this website</h2>
        <p>On this site I have collected information about some of my favorite movies. This site is my first freelance work.</p>
      </div>

      <div className="Movies">
        <div className="movie-text">
        <h2>Movie genres i like</h2>
        <p>Below are some movie genres</p>
        </div>
        <div className="movie-wrap">
          <div className="movie">
            <img src={horror} alt="" />
            <h2>Horror movies</h2>
          </div>
          <div className="movie">
            <img src={drama} alt="" />
            <h2>Drama movies</h2>
          </div>
          <div className="movie">
            <img src={action} alt="" />
            <h2>Action movies</h2>
          </div>
          <div className="movie">
            <img src={thriller} alt="" />
            <h2>Thriller movies</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner