import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ handleLogOut }) => {
  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')

  const renderUserLinks = () => {
    if (userType === 'owner') {
      return (
        <div className="nav-section">
          <Link to="/all-orders" className="navButton">
            All orders
          </Link>
          <Link to="/my-shop" className="navButton">
            My shop
          </Link>
        </div>
      )
    }

    if (userType === 'user') {
      return (
        <div className="nav-section">
          <Link to="/orders" className="navButton">
            My orders
          </Link>
          <Link to="/favorites" className="navButton">
            Wish list
          </Link>
          <Link to="/cart" className="navButton">
            My cart
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
          <img src="path/to/your/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="nav-links-container">
        {userId ? (
          <div className="nav-section">
            {userType !== 'owner' && userType !== 'admin' && (
              <Link to="/category" className="navButton">
                Categories
              </Link>
            )}
            {renderUserLinks()}
            <Link onClick={handleLogOut} to="/" className="navButton">
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="nav-section guest-user-links">
            <Link to="/category" className="navButton">
              Categories
            </Link>
            <Link to="/shops" className="navButton">
              All shops
            </Link>
            <Link to="/login" className="navButton">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
