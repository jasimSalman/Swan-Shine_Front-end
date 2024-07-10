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

 