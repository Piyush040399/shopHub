import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="nav-bar">
        <div className="title">SHOP-HUB</div>
        <nav className='head' >
            <Link to="/" >Home</Link>
            <Link to="/products">products</Link>
        </nav>
    </header>
  )
}

export default Header