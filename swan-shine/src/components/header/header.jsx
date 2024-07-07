import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.jpeg'
import '../../src/App.css'

const Header = ({ user, handleLogOut }) => {
  return (
    <header>
      <nav>
        <div className="head">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/My_items">My Items</Link>
          <Link to="/fav_basket">Favorites basket</Link>
          <Link to="/basket">basket</Link>

          {user ? (
            <Link onClick={handleLogOut} to="/">
              Sign Out
            </Link>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/signin">Sign In</Link>
            </>
          )}
        </div>
        {user && (
          <div>
            <h3 className="greeting">Welcome {user.email}!</h3>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
