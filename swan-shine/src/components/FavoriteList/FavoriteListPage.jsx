import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Client, { BASE_URL } from '../../services/api'

const FavoriteListPage = ({ userId }) => {
  const [favoriteItems, setFavoriteItems] = useState([])

  useEffect(() => {
    const fetchFavoriteItems = async () => {
      try {
        const response = await Client.get(`/wishlist/${userId}`)
        setFavoriteItems(response.data)
      } catch (error) {
        console.error('Error fetching favorite items:', error)
      }
    }

    fetchFavoriteItems()
  }, [userId])

  const removeFromFavorites = async (itemId) => {
    try {
      await Client.delete(`${BASE_URL}/wishlist/${userId}/${itemId}`)
      setFavoriteItems(favoriteItems.filter((item) => item._id !== itemId))
    } catch (error) {
      console.error('Error removing item from favorites:', error)
    }
  }

  return (
    <div>
      <h1>Favorite Items</h1>
      <div className="favorite-items">
        {favoriteItems.map((item) => (
          <div key={item._id} className="favorite-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.name}</h2>
            <p>BD{item.price}</p>
            <button onClick={removeFromFavorites(item._id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteListPage
