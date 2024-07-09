import React from 'react'
import './ItemDetailsPage.css'

const ItemDetailsCard = ({ item, onAddToCart }) => {
  return (
    <div className="item-details-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>Price: BD {item.price}</p>
      {localStorage.getItem('userId') && (
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      )}
    </div>
  )
}

export default ItemDetailsCard
