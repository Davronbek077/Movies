import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
      <i class='bx bxs-camera-movie'></i>
        <h2>Movies</h2>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/favorites"}>Favorites</Link>
          </li>
          <li>
            <Link to={"/horror"}>Horror</Link>
          </li>
        </ul>
      </nav>
        
    </div>
  )
}

export default Navbar
