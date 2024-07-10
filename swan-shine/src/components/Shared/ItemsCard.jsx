import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client, { BASE_URL } from '../../services/api'
import '../Shared/ItemsCard.css'

const ItemsCard = ({ items }) => {
  const navigate = useNavigate('userId')
  const userId = localStorage.getItem('userId')
  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  const handleHeartClick = async (e, itemId) => {
    e.stopPropagation()

    try {
      const response = await Client.post(
        `${BASE_URL}/wishlist/${userId}/${itemId}`
      )
      if (response.data) {
        navigate('/favorites')
      }
      console.log('Item added to wishlist:', response.data)
    } catch (error) {
      console.error('Error adding item to wishlist:', error)
    }
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
          <span
            className="heart-icon"
            onClick={(e) => handleHeartClick(e, item._id)}
          >
            ❤️
          </span>
        </div>
      ))}
    </div>
  )
}

export default ItemsCard
