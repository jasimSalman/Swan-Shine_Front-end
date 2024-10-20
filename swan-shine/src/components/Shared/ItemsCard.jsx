import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ItemsCard.css'
import Client, { BASE_URL } from '../../services/api'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const ItemsCard = ({ items, removeItemFromWishList }) => {
  const userType = localStorage.getItem('userType')
  const userId = localStorage.getItem('userId')

  const navigate = useNavigate()
  const location = useLocation()
  const [favoriteItems, setFavoriteItems] = useState([])

  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  const handleAddToWishList = async (itemId) => {
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
    <div className="items-shared-card">
      {items.map((item) => (
        <div key={item._id} className="item-shared-card">
          <div onClick={() => handleCardClick(item._id)}>
            <img src={item.image} alt={item.name} />
            <div className="item-shared-details">
              <h2>{item.name}</h2>
              <p>BD{item.price}</p>
            </div>
          </div>
          {location.pathname === '/favorites' && (
            <FaHeart
              onClick={() => removeItemFromWishList(item._id)}
              className="delete-fav-item"
            />
          )}

          {userType === 'user' && location.pathname !== '/favorites' && (
            <span
              className="heart-icon"
              onClick={() => handleAddToWishList(item._id)}
            >
              <FaRegHeart className="heart" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
export default ItemsCard
