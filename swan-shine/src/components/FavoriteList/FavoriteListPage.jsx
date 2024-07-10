import React, { useState, useEffect } from 'react'
import Client, { BASE_URL } from '../../services/api'
import './FavoriteListPage.css'

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
    <div className="favorite-list-page">
      <h1>Favorite Items</h1>
      <div className="favorite-items">
        {favoriteItems.map((item) => (
          <div key={item._id} className="favorite-item">
            <img
              src={item.image}
              alt={item.title}
              className="favorite-item-image"
            />
            <div className="favorite-item-details">
              <h2>{item.name}</h2>
              <p>BD {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteListPage
