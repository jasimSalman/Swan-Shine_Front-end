import React from 'react'
import './ItemDetailsPage.css'

const ItemDetailsCard = ({ item, onAddToCart }) => {
  return (
    <div className="item-details-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>Category: {item.category.name}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>

      <button>Add Reviews</button>
    </div>
  )
}

export default ItemDetailsCard
