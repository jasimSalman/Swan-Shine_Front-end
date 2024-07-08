import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut }) => {
  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')

  const renderUserLinks = () => {
    if (userType === 'owner') {
      return (
        <div>
          <Link to="/all-orders" className="navButton">
            All orders
          </Link>
          <Link to="/myshop" className="navButton">
            My shop
          </Link>
        </div>
      )
    }

    if (userType === 'user') {
      return (
        <div>
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
          <div className="guest-user-links">
            <Link to="/category" className="navButton">
              Categories
            </Link>
            <Link to="/shops" className="navButton">
              All shops
            </Link>
            <Link to="/login" className="navButton">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav
