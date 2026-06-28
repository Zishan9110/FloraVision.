import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="FloraVision" />
          <span>FloraVision.</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li className="has-dropdown">
            <a href="#">Plants Type <span className="caret">▾</span></a>
          </li>
          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
