import React from 'react'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  return (
    <div className="items-grid">
      {items.map((item) => (
        <div key={item.id} className="items-card">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <div className="item-header">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsCard
