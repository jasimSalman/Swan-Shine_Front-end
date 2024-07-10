import React from 'react'
import './ShopCard.css'
import { Link } from 'react-router-dom'

const ShopsCard = ({ shops }) => {
  return (
    <div className="shops-card">
      {shops.map((shop) => (
        <Link key={shop._id} to={`/${shop._id}/items`}>
          <div className="shop">
            <img src={shop.poster} alt={shop.name} className="shop-image" />
            <h2>{shop.name}</h2>
            {/* <p>Category: {shop.category}</p> */}
            <p>Location: {shop.location}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ShopsCard
