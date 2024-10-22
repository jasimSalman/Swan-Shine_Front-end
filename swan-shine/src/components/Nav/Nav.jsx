import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ handleLogOut }) => {
  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const renderUserLinks = () => {
    if (userType === 'owner') {
      return (
        <div className="nav-section">
          <Link to="/all-orders" className="navButton" onClick={closeMenu}>
            All orders
          </Link>
          <Link to="/my-shop" className="navButton" onClick={closeMenu}>
            My shop
          </Link>
        </div>
      )
    }

    if (userType === 'user') {
      return (
        <div className="nav-section">
          <Link to="/orders" className="navButton" onClick={closeMenu}>
            My orders
          </Link>
          <Link to="/favorites" className="navButton" onClick={closeMenu}>
            Wish list
          </Link>
          <Link to="/cart" className="navButton" onClick={closeMenu}>
            My cart
          </Link>
        </div>
      )
    }

    if (userType === 'admin') {
      return (
        <div className="nav-section">
          <Link to="/accept-owners" className="navButton" onClick={closeMenu}>
            Shops owner's
          </Link>
        </div>
      )
    }

    return null
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" aria-label="Home">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
        {userId ? (
          <div className="nav-section">
            {userType !== 'owner' && userType !== 'admin' && (
              <>
                <Link to="/category" className="navButton" onClick={closeMenu}>
                  Categories
                </Link>
                <Link to="/shops" className="navButton" onClick={closeMenu}>
                  All shops
                </Link>
              </>
            )}
            {renderUserLinks()}
            <Link
              onClick={() => {
                handleLogOut()
                closeMenu()
              }}
              to="/"
              className="navButton"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="nav-section guest-user-links">
            <Link to="/category" className="navButton" onClick={closeMenu}>
              Categories
            </Link>
            <Link to="/shops" className="navButton" onClick={closeMenu}>
              All shops
            </Link>
            <Link to="/login" className="navButton" onClick={closeMenu}>
              Login
            </Link>
          </div>
        )}
      </div>

      <div
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
    </nav>
  )
}

export default Nav
