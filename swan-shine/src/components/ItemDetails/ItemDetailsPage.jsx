import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Review from './Review'
import Rating from './Rating'
import ItemDetailsCard from './ItemDetailsCard'
import './ItemDetailsPage.css'

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const itemId = '1'

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/items/show/${itemId}`
        )
        setItem(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching the item details:', error)
        setLoading(false)
      }
    }

    fetchItemDetails()
  }, [itemId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!item) {
    return <div>Error loading item details</div>
  }

  return (
    <div className="item-details-page">
      <h1>Item Details</h1>
      <ItemDetailsCard item={item} />
      <Review />
      <Rating />
    </div>
  )
}

export default ItemDetailsPage
