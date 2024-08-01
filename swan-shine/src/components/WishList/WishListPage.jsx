import React, { useState, useEffect } from 'react'
import Client from '../../services/api'
import './WishListPage.css'
import ItemsCard from '../Shared/ItemsCard'

const WishListPage = ({ userId }) => {
  const [favoriteItems, setFavoriteItems] = useState([])

  useEffect(() => {
    fetchFavoriteItems()
  }, [userId])

  const fetchFavoriteItems = async () => {
    try {
      const response = await Client.get(`/wishlist/${userId}`)
      setFavoriteItems(response.data)
    } catch (error) {
      console.error('Error fetching favorite items:', error)
    }
  }

  const removeFromFavorites = async (itemId) => {
    try {
      await Client.delete(`/wishlist/${userId}/${itemId}`)
      setFavoriteItems(favoriteItems.filter((item) => item._id !== itemId))
    } catch (error) {
      console.error('Error removing item from favorites:', error)
    }
  }

  return (
    <div className="favorite-list-page">
      <h1>Favorite Items</h1>
      <div className="favorite-items">
        <ItemsCard
          items={favoriteItems}
          removeItemFromWishList={removeFromFavorites}
        />
      </div>
    </div>
  )
}

export default WishListPage
