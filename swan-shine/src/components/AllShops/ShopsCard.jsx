import React from 'react'
import './ShopCard.css'

const ShopsCard = ({ shops }) => {
  return (
    <div className="shops-card">
      {shops.map((shop) => (
        <div key={shop._id} className="shop">
          <img src={shop.poster} alt={shop.name} className="shop-image" />
          <h2>{shop.name}</h2>
          <p>Category: {shop.category}</p>
          <p>Location: {shop.location}</p>
        </div>
      ))}
    </div>
  )
}

export default ShopsCard
