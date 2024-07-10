import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Shared/ItemsCard.css'

const ItemsCard = ({ items, userId }) => {
  const navigate = useNavigate()
  const [favoriteItems, setFavoriteItems] = useState([])

  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  const handleHeartClick = async (e, itemId) => {
    e.stopPropagation()

    try {
      const token = localStorage.getItem('accessToken')
      const BASE_URL = 'http://localhost:3001'
      const response = await axios.post(
        `${BASE_URL}/wishlist/${userId}/${itemId}`,
        null,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      console.log('Item added to wishlist:', response.data)

      // Update favorite items state with the new item added
      setFavoriteItems([...favoriteItems, response.data])
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
