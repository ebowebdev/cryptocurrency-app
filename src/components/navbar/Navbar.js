import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-box">outacrypto</div>
      <div className="menu-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="cryptocurrency">Cryptocurrencies</Link>
            </li>
          </ul>
      </div>
      <div className="menu">menu</div>
    </div>
  )
}

export default Navbar