import { Link } from 'react-router-dom'
import './ShopCard.css'

const ShopsCard = ({ shops }) => {
  return (
    <div className="shops-card">
      {shops.map((shop) => (
        <Link key={shop._id} to={`/${shop._id}/items`}>
          <div className="shop">
            <img src={shop.poster} alt={shop.name} className="shop-image" />
            <h2>{shop.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ShopsCard
