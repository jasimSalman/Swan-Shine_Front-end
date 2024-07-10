import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Client, { BASE_URL } from '../../services/api'

const FavoriteListPage = ({ userId }) => {
  const [favoriteItems, setFavoriteItems] = useState([])

  useEffect(() => {
    const fetchFavoriteItems = async () => {
      try {
        const response = await Client.get(`${BASE_URL}/wishlist/${userId}`)
        setFavoriteItems(response.data)
      } catch (error) {
        console.error('Error fetching favorite items:', error)
      }
    }

    fetchFavoriteItems()
  }, [userId])

  return (
    <div>
      <h1>Favorite Items</h1>
      <div className="favorite-items">
        {favoriteItems.map((item) => (
          <div key={item._id} className="favorite-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.name}</h2>
            <p>BD{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteListPage
