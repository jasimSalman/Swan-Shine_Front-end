import React from 'react'

const ItemDetailsCard = ({ item }) => {
  return (
    <div className="item-details-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.reviews.length} Reviews</p>
      <p>Price: ${item.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ItemDetailsCard
