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

    if (userType === 'admin') {
      return (
        <div className="nav-section">
          <Link to="/accept-owners" className="navButton">
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
          <img
            src="https://media.discordapp.net/attachments/698597975387013153/1260797042435817542/Project_20240711061708.png?ex=6690a03f&is=668f4ebf&hm=2580f5f966bb673866cd0b8fafbde32c382d128ded3c0580da770c1631734541&=&format=webp&quality=lossless&width=288&height=253"
            alt="Logo"
            className="logo"
          />
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
