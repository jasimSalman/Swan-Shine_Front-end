import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut }) => {
  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')
  if (userId) {
    console.log(userId)
  }
  if (userType) {
    console.log(userType)
  }

  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-container">
          <Link to="/">
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
            {userType !== 'owner' && (
              <Link to="/category" className="navButton">
                Categories
              </Link>
            )}

            {userType === 'owner' ? (
              <Link to={`/orders/`} className="navButton">
                All orders
              </Link>
            ) : (
              <Link to={`/orders`} className="navButton">
                My orders
              </Link>
            )}
            {userType !== 'owner' && (
              <Link to={`/favorites`} className="navButton">
                Wish list
              </Link>
            )}

            {userType === 'owner' && (
              <Link to="/Myshop" className="navButton">
                My shop
              </Link>
            )}

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
