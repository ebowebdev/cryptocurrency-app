import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="logo-box">
        <div>ou<span className="letter-solo">t</span>aa</div>
        <div className="first">crypto</div>
      </div>
      <div className="menu-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="cryptocurrency">Cryptos</Link>
            </li>
            <li>
              <Link to="news">news</Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default memo(Navbar)