import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut }) => {
  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')

  const renderUserLinks = () => {
    if (userType === 'owner') {
      return (
        <div>
          <Link to="/all-orders" className="navButton" aria-label="All orders">
            All orders
          </Link>
          <Link to="/myshop" className="navButton" aria-label="My shop">
            My shop
          </Link>
        </div>
      )
    }

    if (userType === 'user') {
      return (
        <div>
          <Link to="/orders" className="navButton" aria-label="My orders">
            My orders
          </Link>
          <Link to="/favorites" className="navButton" aria-label="Wish list">
            Wish list
          </Link>
        </div>
      )
    }

    return null
  }

  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-container">
          <Link to="/" aria-label="Home">
            <img
              // src={logo}
              alt="Logo"
              style={{ height: '55px', width: '55px' }}
            />
          </Link>
        </div>
      </div>

      <div className="nav-links-container">
        {userId ? (
          <div>
            {userType !== 'owner' && userType !== 'admin' && (
              <Link
                to="/category"
                className="navButton"
                aria-label="Categories"
              >
                Categories
              </Link>
            )}
            {renderUserLinks()}
            <Link
              onClick={handleLogOut}
              to="/"
              className="navButton"
              aria-label="Sign Out"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="guest-user-links">
            <Link to="/category" className="navButton" aria-label="Categories">
              Categories
            </Link>
            <Link to="/shops" className="navButton" aria-label="All shops">
              All shops
            </Link>
            <Link to="/login" className="navButton" aria-label="Sign In">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav
