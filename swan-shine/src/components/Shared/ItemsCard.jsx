import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Shared/ItemsCard.css'
import Client, { BASE_URL } from '../../services/api'

const ItemsCard = ({ items }) => {
  const userType = localStorage.getItem('userType')
  const userId = localStorage.getItem('userId')

  const navigate = useNavigate()
  const [favoriteItems, setFavoriteItems] = useState([])

  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  const handleHeartClick = async (itemId) => {
    try {
      const response = await Client.post(
        `${BASE_URL}/wishlist/${userId}/${itemId}`
      )
      setFavoriteItems([...favoriteItems, response.data])
      navigate('/favorites')
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
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>BD{item.price}</p>
          </div>
          {userType === 'user' && (
            <span
              className="heart-icon"
              onClick={() => handleHeartClick(item._id)}
            >
              add
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
export default ItemsCard
