import React from 'react'
import './MyItemsPage.css'

const ItemsCard = ({ title, description, imageUrl }) => {
  return (
    <div className="items-card">
      <div className="item-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="item-details">
        <h2 className="item-title">{title}</h2>
        <p className="item-description">{description}</p>
      </div>
    </div>
  )
}

export default ItemsCard
