import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Shared/ItemsCard.css'

const ItemsCard = ({ items }) => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  return (
    <div className="items-card">
      {items.map((item) => (
        <div
          key={item._id}
          className="item-card"
          onClick={() => handleCardClick(item._id)}
        >
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>BD{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsCard
