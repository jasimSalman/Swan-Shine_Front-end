import React from 'react'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  console.log('ItemsCard received items:', items)
  return (
    <div className="items-grid">
      {items.map((item) => (
        <div key={item._id} className="item-card">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsCard
