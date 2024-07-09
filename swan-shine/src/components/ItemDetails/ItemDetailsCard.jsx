import React from 'react'
import './ItemDetailsPage.css'

const ItemDetailsCard = ({ item, onAddToCart }) => {
  return (
    <div className="item-details-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemDetailsCard
